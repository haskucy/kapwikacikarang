import './FooterComponent.css';

const FooterComponent = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h1><hr className="h1-decoration"></hr>Contact</h1>
            
            <div className="footer-section">
              <h4><b>Office Cabang Cikarang</b></h4>
              <p>Jl. Kancil VII No. 148 RT.005/007 Kel. Sertajaya,</p>
              <p>Kec. Cikarang Timur, Kab. Bekasi 17550</p>
              <p>Telp: 021-89096738</p>
              <p>HP: 0812-907-2425</p>
              <p>Email: kapwikacabangkikarang@gmail.com</p>
            </div>
            
            <div className="footer-section">
              <h4><b>Workshop</b></h4>
              <p>Rukan Grand Galaxy City Blok RRG 2 No. 31 Jakarta,</p>
              <p>Bekasi Selatan, Kota Bekasi 17147</p>
              <p>Telp: 021-82783828</p>
              <p>HP: 0878-8660-3004</p>
            </div>
            
            <div className="social-icons">
              <a href="#" className="social-icon">Facebook</a>
              <a href="#" className="social-icon">Twitter</a>
              <a href="#" className="social-icon">Instagram</a>
              <a href="#" className="social-icon">Google+</a>
            </div>
          </div>

          <div className="footer-right">
            <form className="contact-form">
              <label>Name</label>
              <input type="text" placeholder="Name" />
              <label>Email*</label>
              <input type="email" placeholder="Email" />
              <label>Subject</label>
              <input type="text" placeholder="Subject" />
              <label>Message</label>
              <textarea placeholder="Message"></textarea>
              <button type="submit" className="send-button">Send</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p id='footer-bottom-p'>Copyright &copy; 2025 KAPWIKA Bekasi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;