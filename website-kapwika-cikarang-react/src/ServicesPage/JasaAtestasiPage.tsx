import "../Pages.css"

const JasaAtestasiPage = () => {
    let title = "Jasa Atestasi"
    return (
        <section className="page-container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/services/">Our Services</a></li>
            <li className="breadcrumb-item active" aria-current="page">Jasa Atestasi</li>
          </ol>
        </nav>
        <br></br>        
        <h1 className="page-title">{title}</h1>
        <p>
        Atestasi (<i>Attestation</i>) adalah suatu pernyataan pendapat atau pertimbangan orang yang independen dan kompeten apakah asersi suatu entitas sesuai, dalam semua hal yang signifikan, dengan kinerja yang telah ditetapkan. Asersi adalah pernyataan yang dibuat oleh satu pihak yang secara implisit dimaksudkan untuk digunakan oleh pihak lain (pihak ketiga).
        </p>
        

        </section>            
        );
  };
  
export default JasaAtestasiPage;