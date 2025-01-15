import { Helmet } from "react-helmet-async";
import "../Pages.css"
import JasaAtestasiCard from "../RootComponent/JasaAtestasiCard";
import NeedMoreInfoComponent from "../RootComponent/NeedMoreInfoComponent";

const JasaAtestasiPage = () => {
    let title = "Jasa Atestasi"
    return (
      <>
                  <Helmet>
                      <title> Jasa Atestasi | Kantor Akuntan Publik Wisnu & Katili Cabang Bekasi (Cikarang)</title>
                      <meta name="description" content="KAP WIKA Cikarang: Jasa atestasi profesional, audit umum, investigasi khusus, audit pengelolaan, dan review." />
                      <link rel="canonical" href="/services/jasa-atestasi" />
                  </Helmet>
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
        Berikut adalah jasa atestasi yang kami tawarkan:
        </p>
        <br></br>

        <JasaAtestasiCard/>
        
        <br></br>
        <br></br>
        <br></br>

        <NeedMoreInfoComponent/>
        </section>         
        </>   
        );
  };
  
export default JasaAtestasiPage;