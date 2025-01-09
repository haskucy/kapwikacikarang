import "./Pages.css"
import is404Image from "./assets/404.png"

const NoExistPage = () => {
    return (<>
        <section className="page-container">
        <img src={is404Image} className="center"></img>
        <p className="text-center">Maaf, Halaman yang anda cari tidak ditemukan, anda bisa kembali ke <b> <a href="/">Halaman Utama</a></b>
        </p>
        </section>

    </>

    );
  };
  
export default NoExistPage;