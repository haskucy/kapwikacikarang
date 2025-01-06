import './CardComponent.css';
import HeroImage from "../assets/HeroImage.jpg"

const CardComponent = () => {
    return (
    <div className="cards-container">
        <div className="service-card">
            <img src={HeroImage} alt="Jasa Atestasi" className="card-image" />
            <div className="card-content">
            <h3 className="card-title"><b>JASA ATESTASI</b></h3>
            <br></br>
            <a href="/services/jasa-atestasi" className="card-button">Read More</a>
            </div>
        </div>
        <div className="service-card">
            <img src={HeroImage} alt="Jasa Non Atestasi" className="card-image" />
            <div className="card-content">
            <h3 className="card-title"><b>JASA NON ATESTASI</b></h3>
            <br></br>
            <a href="/services/jasa-non-atestasi" className="card-button">Read More</a>
            </div>
        </div>
        </div>
    );
  };
  
export default CardComponent;

