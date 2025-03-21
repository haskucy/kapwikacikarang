import "./WhatsAppComponent.css"
import WhatsappLogo from "../assets/whatsapp-logo-chat.png"

const WhatsAppButton = () => {
    return (
        <div className="whatsapp-container">
        <div className="whatsapp-popup">Chat with us</div>
        <a href="https://wa.me/6282124719496" target="_blank" className="whatsapp-button">
          <img src={WhatsappLogo} alt="Chat KAP WIKA via WhatsApp" className="whatsapp-icon"></img>
        </a>
        </div>
    );
  };
  
export default WhatsAppButton;

