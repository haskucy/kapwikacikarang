import "../../Pages.css"
import 'bootstrap/dist/css/bootstrap.css'
import NeedMoreInfoComponent from "../../RootComponent/NeedMoreInfoComponent";

const ReviewPage = () => {
    return (
        <section className="page-container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/services/">Our Services</a></li>
            <li className="breadcrumb-item"><a href="/services/jasa-atestasi/">Jasa Atestasi</a></li>
            <li className="breadcrumb-item active" aria-current="page">Jasa <i>Review</i></li>
          </ol>
        </nav>
        <br></br>
        <h1 className="page-title">Jasa <i>Review</i></h1>
        <p>
        Jasa review terutama berupa permintaan keterangan dan prosedur analitis terhadap informasi keuangan suatu entitas dengan tujuan untuk memberikan keyakinan negatif atas asersi yang terkandung dalam informasi keuangan tersebut
        </p>

        <br></br>
        <br></br>
        <br></br>

        <NeedMoreInfoComponent/>

        </section>   
        );
  };
  
export default ReviewPage;