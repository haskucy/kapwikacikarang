# Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
# This file is licensed under the Apache License, Version 2.0 (the "License").
# You may not use this file except in compliance with the License. A copy of the
# License is located at
#
# http://aws.amazon.com/apache2.0/
#
# This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS
# OF ANY KIND, either express or implied. See the License for the specific
# language governing permissions and limitations under the License.

import os
import boto3
import email
import re
from botocore.exceptions import ClientError
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.application import MIMEApplication

region = os.environ['Region']

def get_message_from_s3(message_id):

    incoming_email_bucket = os.environ['MailS3Bucket']
    incoming_email_prefix = os.environ['MailS3Prefix']

    if incoming_email_prefix:
        object_path = (incoming_email_prefix + "/" + message_id)
    else:
        object_path = message_id

    object_http_path = (f"http://s3.console.aws.amazon.com/s3/object/{incoming_email_bucket}/{object_path}?region={region}")

    # Create a new S3 client.
    client_s3 = boto3.client("s3")

    # Get the email object from the S3 bucket.
    object_s3 = client_s3.get_object(Bucket=incoming_email_bucket,
        Key=object_path)
    # Read the content of the message.
    file = object_s3['Body'].read()

    file_dict = {
        "file": file,
        "path": object_http_path
    }

    print("success1")

    return file_dict

"""
def create_message(file_dict):

    sender = os.environ['MailSender']
    recipient = os.environ['MailRecipient']

    separator = ";"

    # Parse the email body.
    mailobject = email.message_from_string(file_dict['file'].decode('utf-8'))

    # Create a new subject line.
    subject_original = mailobject['Subject']
    subject = "FW: " + subject_original

    # The body text of the email.
    body_text = ("The attached message was received from "
              + separator.join(mailobject.get_all('From'))
              + ". This message is archived at " + file_dict['path'])

    # The file name to use for the attached message. Uses regex to remove all
    # non-alphanumeric characters, and appends a file extension.
    filename = re.sub('[^0-9a-zA-Z]+', '_', subject_original) + ".eml"

    # Create a MIME container.
    msg = MIMEMultipart()
    # Create a MIME text part.
    text_part = MIMEText(body_text, _subtype="html")
    # Attach the text part to the MIME message.
    msg.attach(text_part)

    # Add subject, from and to lines.
    msg['Subject'] = subject
    msg['From'] = sender
    msg['To'] = recipient

    # Create a new MIME object.
    att = MIMEApplication(file_dict["file"], filename)
    att.add_header("Content-Disposition", 'attachment', filename=filename)

    # Attach the file object to the message.
    msg.attach(att)

    message = {
        "Source": sender,
        "Destinations": recipient,
        "Data": msg.as_string()
    }

    return message
"""

def create_message(file_dict):
    sender = os.environ['MailSender']
    recipient = os.environ['MailRecipient']

    # Parse the original email.
    mailobject = email.message_from_string(file_dict['file'].decode('utf-8'))

    # Extract the original email's subject, sender, and body.
    subject_original = mailobject['Subject']
    original_sender = mailobject['From']
    original_recipients = mailobject.get('To', '')
    original_body = ""

    # Create a new subject line.
    subject = "FW: " + subject_original

    # Create a MIME container for the new email.
    msg = MIMEMultipart()
    msg['Subject'] = subject
    msg['From'] = sender
    msg['To'] = recipient

    # Add the forwarded message header.
    forwarded_header = f"""
    Forwarded message:
    -------------------------
    From: {original_sender}
    To: {original_recipients}
    Subject: {subject_original}
    """

    # Extract the original email body and attachments.
    if mailobject.is_multipart():
        for part in mailobject.walk():
            content_type = part.get_content_type()
            content_disposition = str(part.get("Content-Disposition"))

            if content_type == "text/plain" and "attachment" not in content_disposition:
                # Extract plain text body.
                original_body = part.get_payload(decode=True).decode(part.get_content_charset())
                text_part = MIMEText(forwarded_header + "\n\n", _subtype="plain")
                msg.attach(text_part)

            elif content_type == "text/html" and "attachment" not in content_disposition:
                # Extract HTML body (if any).
                original_body = part.get_payload(decode=True).decode(part.get_content_charset())
                html_part = MIMEText(original_body, _subtype="html")
                msg.attach(html_part)

            elif "attachment" in content_disposition:
                # Handle attachments.
                attachment = MIMEApplication(part.get_payload(decode=True))
                attachment.add_header(
                    "Content-Disposition",
                    part.get("Content-Disposition"),
                )
                msg.attach(attachment)
    else:
        # If not multipart, assume it's a plain text email.
        original_body = mailobject.get_payload(decode=True).decode(mailobject.get_content_charset())
        text_part = MIMEText(forwarded_header + "\n\n" + original_body, _subtype="plain")
        msg.attach(text_part)

    # Construct the final message.
    message = {
        "Source": sender,
        "Destinations": recipient,
        "Data": msg.as_string()
    }

    return message



def send_email(message):
    aws_region = os.environ['Region']

# Create a new SES client.
    client_ses = boto3.client('ses', region)

    # Send the email.
    try:
        #Provide the contents of the email.
        response = client_ses.send_raw_email(
            Source=message['Source'],
            Destinations=[
                message['Destinations']
            ],
            RawMessage={
                'Data':message['Data']
            }
        )

    # Display an error if something goes wrong.
    except ClientError as e:
        output = e.response['Error']['Message']
        print("failed 1")
        print(output)
    else:
        output = "Email sent! Message ID: " + response['MessageId']

    return output

def lambda_handler(event, context):
    # Get the unique ID of the message. This corresponds to the name of the file
    # in S3.
    message_id = event['Records'][0]['ses']['mail']['messageId']
    print(f"Received message ID {message_id}")

    # Retrieve the file from the S3 bucket.
    print("Starting S3 retrieval...")
    file_dict = get_message_from_s3(message_id)
    print("S3 retrieval completed.")

    # Create the message.
    message = create_message(file_dict)

    # Send the email and print the result.
    print("Sending email...")
    result = send_email(message)
    print("Email sending completed.")