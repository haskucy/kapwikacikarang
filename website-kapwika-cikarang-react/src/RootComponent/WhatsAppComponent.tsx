import "./WhatsAppComponent.css"
import WhatsappLogo from "../assets/whatsapp-logo-chat.png"

const WhatsAppButton = () => {
    return (
        <div className="whatsapp-container">
        <div className="whatsapp-popup">Chat with us</div>
        <a href="https://wa.me/628129072425" target="_blank" className="whatsapp-button">
          <img src={WhatsappLogo} alt="WhatsApp Icon" className="whatsapp-icon"></img>
        </a>
        </div>
    );
  };
  
export default WhatsAppButton;

