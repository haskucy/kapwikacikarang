import './CardComponent.css';
//<img src={HeroImage} alt="Jasa Atestasi" className="card-image"></img>

const CardComponent = () => {
    return (
    <div className="cards-container">
        <div className="service-card">
            <a className= "card-link" href="/services/jasa-atestasi">
            <div className="card-content">
            <h3 className="card-title"><b>JASA ATESTASI</b></h3>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
            </a>
        </div>
        <div className="service-card">
            <a className= "card-link" href="/services/jasa-non-atestasi">
            <div className="card-content">
            <h3 className="card-title"><b>JASA NON ATESTASI</b></h3>
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
  
export default CardComponent;

