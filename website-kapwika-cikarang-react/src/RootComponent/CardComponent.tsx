import './CardComponent.css';

const CardComponent = () => {
    return (
    <div className="cards-container">
        <div className="service-card-s1">
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
        <div className="service-card-s2">
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

