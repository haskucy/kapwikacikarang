import './FooterComponent.css';
import InstagramLogo from '../assets/social-media/instagram.png'
import FacebookLogo from '../assets/social-media/facebook.png'


/*
              <div className="google-map-code">
                <iframe
                    src="https://maps.google.com/maps?width=500&amp;height=200&amp;hl=en&amp;q=Jl. Kancil VII No. 148 RT.005/007 Kel. Sertajaya,  Kec. Cikarang Timur, Kab. Bekasi 17550&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    width="500"
                    height="200"
                    style={{ border: 0 }}
                    aria-hidden="false"
                />
                  </div>
*/

const FooterComponent = () => {
  const currentYear: string = new Date().getFullYear().toString();
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h1><hr className="h1-decoration"></hr>Contact</h1>
            <br></br>
            <div className="footer-section">
            <div className="google-map-code">
                <iframe
                    src="https://maps.google.com/maps?hl=en&amp;q=Jl. Kancil VII No. 148 RT.005/007 Kel. Sertajaya,  Kec. Cikarang Timur, Kab. Bekasi 17550&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    width="95%"
                    height="100%"
                    style={{ border: 0 }}
                    aria-hidden="false"
                />
                  </div>
              <h4 id='main-office'><b>Office Pusat (Bekasi)</b></h4>
              <p>Jl. Kancil VII No. 148 RT.005/007 Kel. Sertajaya,</p>
              <p>Kec. Cikarang Timur, Kab. Bekasi 17550</p>
              <div className='small-indent'></div>
              <p><b>Phone:</b> 021-89096738</p>
              <div className='small-indent'></div>
              <p><b>Mobile:</b> 0821-2471-9496 | 0812-907-2425</p>
              <div className='small-indent'></div>
              <p><b>Email:</b> <a className='no-colored-link' href="mailto:info@kapalisterhamonangan.com">info@kapalisterhamonangan.com</a> | <a className='no-colored-link' href="mailto:kapalisterhamonangan@gmail.com">kapalisterhamonangan@gmail.com</a></p>


            </div>

            <div className="footer-section">
              <h4><b>Bogor</b></h4>
              <p>Ruko Food Plaza 6 No. 23 Cibubur Country (Cikeas)</p>
              <p>Jl. Letda Natsir (Cikeas Raya), Bogor. Jawa Barat 16966</p>
              <div className='small-indent'></div>
              <p><b>Email:</b> <a className='no-colored-link' href="mailto:hms_a16@yahoo.co.id">hms_a16@yahoo.co.id</a></p>
              <div className='small-indent'></div>
              <p><b>Phone:</b> 021-22967939</p>
              <div className='small-indent'></div>
              <p><b>Mobile (WA):</b> 0813-1638-2024</p>
            </div>
            
            <div className="footer-section">
              <h4><b>Workshop</b></h4>
              <p>Rukan Grand Galaxy City Blok RRG 2 No. 31,</p>
              <p>Bekasi Selatan, Kota Bekasi 17147</p>
              <div className='small-indent'></div>
              <p><b>Phone:</b> 021-82783828</p>
              <div className='small-indent'></div>
              <p><b>Mobile:</b> 0878-8660-3004</p>
            </div>
            
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=61568422740574" className="social-icon"><img src={FacebookLogo} width='20px' height="20px" loading='lazy' alt='KAPWIKA Cikarang facebook page link'/></a>
              <a href="https://www.instagram.com/kapwikacabcikarang" className="social-icon"><img src={InstagramLogo} width='20px' height="20px" loading='lazy' alt='KAPWIKA Cikarang instagram page link'/></a>

            </div>
          </div>

          <div className="footer-right">

            <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="7ee174f4-fc0f-4842-8151-69fa608955fb"/>
              <br></br>
              <label>Name</label>
              <input type="text" name="Name" placeholder="Name" required autoComplete='on'/>
              <label>Email</label>
              <input type="email" name="email" placeholder="Email" required autoComplete='on'/>
              <label>Subject</label>
              <input type="text" name="subject" placeholder="Subject" required/>
              <label>Message</label>
              <textarea name="message" placeholder="Message" required></textarea>
              
              <button type="submit" className="send-button">Send Messages</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p id='footer-bottom-p'>Copyright &copy; {currentYear} KAP Alister & Hamonangan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;