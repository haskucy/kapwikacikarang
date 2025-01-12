import './JasaAtestasiCard.css';
//<img src={HeroImage} alt="Jasa Atestasi" className="card-image"></img>

const JasaAtestasiCard = () => {
    return (
    <div className="cards-container">
        <div className="service-card-1">
            <a className= "card-link" href="/services/jasa-atestasi/pemeriksaan-umum">
            <div className="card-content">
            <h3 className="card-title"><b>Pemeriksaan Umum (<i>General Audit</i>)</b></h3>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
            </a>
        </div>
        <div className="service-card-2">
            <a className= "card-link" href="/services/jasa-atestasi/pemeriksaan-khusus">
            <div className="card-content">
            <h3 className="card-title"><b>Pemeriksaan Khusus (<i>Special Investigation</i>)</b></h3>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
            </a>
        </div>
        <div className="service-card-3">
            <a className= "card-link" href="/services/jasa-atestasi/pemeriksaan-pengelolaan">
            <div className="card-content">
            <h3 className="card-title"><b>Pemeriksaan Pengelolaan (<i>Management Audit</i>)</b></h3>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
            </a>
        </div>
        <div className="service-card-4">
            <a className= "card-link" href="/services/jasa-atestasi/jasa-review">
            <div className="card-content">
            <h3 className="card-title"><b>Jasa Review</b></h3>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
            </a>
        </div>
        </div>
    );
  };
  
export default JasaAtestasiCard;

