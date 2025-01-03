import HeroImage from '../assets/HeroImage.jpg'
import CompanyImage from '../assets/LogoNavbarComponent.jpg'
import './MainPage.css'


const MainPage = () => {
    return (<>
    <section id='Hero'>
        <div className="py-lg-14 py-10 position-relative bg-cover">

        <div className="container">
        <div className="row align-items-center mb-5">

            <div className="col-12 col-lg-6 order-md-1 pt-5">
            <h1 className="display-2 mb-5 fw-bold fs-1">
                Kantor Akuntan Publik <br/>Wisnu & Katili <br/>Cabang Bekasi (Cikarang)
            </h1>

            <div className="mb-8 mb-lg-0">
                <a href="#contact" className="btn btn-primary me-3 mb-2 mb-lg-0" id='hero-button'>
                Contact Us
                </a>
            </div>

            </div>
            <div className="col-12 col-lg-6 order-md-2">
            <div className="mb-2 mb-md-0 mt-5 pe-n5">
                <img src={HeroImage} alt=""
                className="img-fluid mw-md-130 rounded"/>
            </div>
            </div>
        </div>

        </div>
        </div>
    </section>
    <section className="section-part" id="about-short">
        <div className="h1-title">
        <hr className="h1-decorations-1"></hr>
        <h1>Tentang Kami</h1>
        </div>

        <img src={HeroImage} alt="" className="img-fluid rounded center" width="80%"/>
        <br></br>


        <p className='justified-text'>
        KAP WISNU dan KATILI yang didirikan di Bekasi pada tanggal 22 Januari 2018 dengan Akte Notaris LIVIA MIEL, S.H., M.kn. Nomor 02. Memiliki izin usaha Kep Menkeu  No. 144/KM.1/2018  serta Surat Tanda Terdaftar Kantor Akuntan Publik OJK KAP WISNU dan KATILI  No. STTD.KAP-011/PM.223/2019 adalah merupakan wujud kerjasama antara dua orang akuntan pubilk yang sudah berpengalaman sejak tahun 2005....
        </p>

        <div className="mb-8 mb-lg-0" id='learn-more'>
                <a href="/about" className="btn btn-primary me-3 mb-2 mb-lg-0" id='simple-button'>
                Learn More
                </a>
            </div>
    </section>

    <section className="section-part" id="services-short">
        <div className="h1-title">
        <hr className="h1-decorations-1"></hr>
        <h1>Services</h1>
        </div>

        <img src={HeroImage} alt="" className="img-fluid rounded center" width="80%"/>
        <br></br>

        <p className='justified-text'>
        KAP WISNU dan KATILI yang didirikan di Bekasi pada tanggal 22 Januari 2018 dengan Akte Notaris LIVIA MIEL, S.H., M.kn. Nomor 02. Memiliki izin usaha Kep Menkeu  No. 144/KM.1/2018  serta Surat Tanda Terdaftar Kantor Akuntan Publik OJK KAP WISNU dan KATILI  No. STTD.KAP-011/PM.223/2019 adalah merupakan wujud kerjasama antara dua orang akuntan pubilk yang sudah berpengalaman sejak tahun 2005....
        </p>

        <div className="mb-8 mb-lg-0" id='learn-more'>
                <a href="/about" className="btn btn-primary me-3 mb-2 mb-lg-0" id='simple-button'>
                Learn More
                </a>
            </div>
    </section>

    <section className="section-part" id="kegiatan">
        <div className="h1-title">
        <hr className="h1-decorations-1"></hr>
        <h1>Kegiatan</h1>
        </div>

        <img src={HeroImage} alt="" className="img-fluid rounded center" width="80%"/>
        <br></br>

        <p className='justified-text'>
        KAP WISNU dan KATILI yang didirikan di Bekasi pada tanggal 22 Januari 2018 dengan Akte Notaris LIVIA MIEL, S.H., M.kn. Nomor 02. Memiliki izin usaha Kep Menkeu  No. 144/KM.1/2018  serta Surat Tanda Terdaftar Kantor Akuntan Publik OJK KAP WISNU dan KATILI  No. STTD.KAP-011/PM.223/2019 adalah merupakan wujud kerjasama antara dua orang akuntan pubilk yang sudah berpengalaman sejak tahun 2005....
        </p>

        <div className="mb-8 mb-lg-0" id='learn-more'>
                <a href="/about" className="btn btn-primary me-3 mb-2 mb-lg-0" id='simple-button'>
                Learn More
                </a>
            </div>
    </section>

    <section className="section-part" id="afiliasi">
        <div className="h1-title">
        <hr className="h1-decorations-1"></hr>
        <h1>Affiliation</h1>
        </div>

        <img src={HeroImage} alt="" className="img-fluid rounded" width="80%"/>

        <p className='justified-text'>
        KAP WISNU dan KATILI yang didirikan di Bekasi pada tanggal 22 Januari 2018 dengan Akte Notaris LIVIA MIEL, S.H., M.kn. Nomor 02. Memiliki izin usaha Kep Menkeu  No. 144/KM.1/2018  serta Surat Tanda Terdaftar Kantor Akuntan Publik OJK KAP WISNU dan KATILI  No. STTD.KAP-011/PM.223/2019 adalah merupakan wujud kerjasama antara dua orang akuntan pubilk yang sudah berpengalaman sejak tahun 2005....
        </p>

        <div className="mb-8 mb-lg-0" id='learn-more'>
                <a href="/about" className="btn btn-primary me-3 mb-2 mb-lg-0" id='simple-button'>
                Learn More
                </a>
            </div>
    </section>
    </>

    );
  };
  
export default MainPage;