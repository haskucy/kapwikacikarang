import { Helmet } from "react-helmet-async";
import "./Pages.css"
import is404Image from "./assets/404.png"

const NoExistPage = () => {
    return (<>
        <Helmet>
            <title> 404 Halaman Tidak Ditemukan | Kantor Akuntan Publik Wisnu & Katili Cabang Bekasi (Cikarang)</title>
            <meta name="description" content="Oops, Halaman yang anda cari tidak ditemukan" />
            <link rel="canonical" href="/404" />
        </Helmet>
        <section className="page-container">
        <img src={is404Image} className="center"></img>
        <p className="text-center">Maaf, Halaman yang anda cari tidak ditemukan, anda bisa kembali ke <b> <a href="/">Halaman Utama</a></b>
        </p>
        </section>

    </>

    );
  };
  
export default NoExistPage;