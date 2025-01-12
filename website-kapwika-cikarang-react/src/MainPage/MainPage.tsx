import HeroImage from '../assets/HeroImage.jpg'
import AboutUsImage from '../assets/about-us.jpg'
import KegiatanImage from "../assets/kegiatan/Kegiatan-1.jpg"
import KegiatanImage2 from "../assets/kegiatan/Kegiatan-2.jpg"
import KegiatanImage3 from "../assets/kegiatan/Kegiatan-3.jpg"
import KegiatanImage4 from "../assets/kegiatan/Kegiatan-4.jpg"
import KegiatanImage5 from "../assets/kegiatan/Kegiatan-5.jpg"
import KegiatanImage6 from "../assets/kegiatan/Kegiatan-6.jpg"
import KegiatanImage7 from "../assets/kegiatan/Kegiatan-7.jpg"
import KegiatanImage8 from "../assets/kegiatan/Kegiatan-8.jpg"
import AffiliationLogoBI from "../assets/Logo/bi.png"
import AffiliationLogoBPK from "../assets/Logo/bpk.png"
import AffiliationLogoPajak from "../assets/Logo/pajak.png"
import AffiliationLogoIAPI from "../assets/Logo/iapi.png"
import AffiliationLogoOJK from "../assets/Logo/ojk.png"
import PartnerImage from "../assets/partner.png"



import CardComponent from '../RootComponent/CardComponent';
import './MainPage.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import NeedMoreInfoComponent from '../RootComponent/NeedMoreInfoComponent'


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
        <h1>About Us</h1>
        </div>
        <br></br>
        
        <img src={AboutUsImage} alt="" className="img-fluid rounded center" width="50%" loading='lazy'/>
        <br></br>
        <br></br>



        <p className='justified-text'>
        KAP WISNU dan KATILI yang didirikan di Bekasi pada tanggal 22 Januari 2018 dengan Akte Notaris LIVIA MIEL, S.H., M.kn. Nomor 02. Memiliki izin usaha Kep Menkeu  No. 144/KM.1/2018  serta Surat Tanda Terdaftar Kantor Akuntan Publik OJK KAP WISNU dan KATILI  No. STTD.KAP-011/PM.223/2019 adalah merupakan wujud kerjasama antara dua orang akuntan pubilk yang sudah berpengalaman sejak tahun 2005....
        </p>

        <div className="mb-8 mb-lg-0" id='learn-more'>
                <a href="/about" className="btn btn-primary me-3 mb-2 mb-lg-0" id='simple-button'>
                Read More
                </a>
            </div>
    </section>

    <section className="section-part" id="services-short">
        <div className="h1-title">
        <hr className="h1-decorations-1"></hr>
        <h1>Our Services</h1>
        </div>

        <br></br>
        <CardComponent/>
        <br></br>
        <br></br>

        <div className="mb-8 mb-lg-0" id='services-more'>
                <a href="/services" className="center btn btn-primary me-3 mb-2 mb-lg-0" id='simple-button'>
                Learn more about our services
                </a>
            </div>
    </section>

    <section className="section-part" id="kegiatan">
        <div className="h1-title">
        <hr className="h1-decorations-1"></hr>
        <h1>Activities</h1>
        </div>
        
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>

    </div>
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img src={KegiatanImage} className="d-block w-100 rounded" alt="First Slide"/>
            <div className="carousel-caption d-none d-md-block">
                <h5>Client Consultation</h5>
                <p className='text-center'>Engaging in strategic discussions to understand client needs and goals.</p>
            </div>
        </div>
        <div className="carousel-item">
            <img src={KegiatanImage2} className="d-block w-100 rounded" alt="Second Slide"/>
            <div className="carousel-caption d-none d-md-block">
                <h5>Team Collaboration with Clients</h5>
                <p className='text-center'>Building strong partnerships through teamwork and trust.</p>
            </div>
        </div>
        <div className="carousel-item">
            <img src={KegiatanImage3} className="d-block w-100 rounded" alt="Third Slide"/>
            <div className="carousel-caption d-none d-md-block">
                <h5>Client Engagement Session</h5>
                <p className='text-center'>Discussing tailored solutions to meet client expectations.</p>
            </div>
        </div>
        <div className="carousel-item">
            <img src={KegiatanImage4} className="d-block w-100 rounded" alt="Fourth Slide"/>
            <div className="carousel-caption d-none d-md-block">
                <h5>Professional Collaboration</h5>
                <p className='text-center'>Strengthening client relationships through effective communication.</p>
            </div>
        </div>
        <div className="carousel-item">
            <img src={KegiatanImage5} className="d-block w-100 rounded" alt="Fifth Slide"/>
            <div className="carousel-caption d-none d-md-block">
                <h5>Inventory Assessment with Client</h5>
                <p className='text-center'>Conducting thorough stock evaluations to ensure accuracy.</p>
            </div>
        </div>
        <div className="carousel-item">
            <img src={KegiatanImage6} className="d-block w-100 rounded" alt="Sixth Slide"/>
            <div className="carousel-caption d-none d-md-block">
                <h5>Stock Verification Process</h5>
                <p className='text-center'>Ensuring precise inventory management with client collaboration.</p>
            </div>
        </div>
        <div className="carousel-item">
            <img src={KegiatanImage7} className="d-block w-100 rounded" alt="Seventh Slide"/>
            <div className="carousel-caption d-none d-md-block">
                <h5>Inventory Audit Session</h5>
                <p className='text-center'>Partnering with clients to maintain financial transparency.</p>
            </div>
        </div>
        <div className="carousel-item">
            <img src={KegiatanImage8} className="d-block w-100 rounded" alt="Eight Slide"/>
            <div className="carousel-caption d-none d-md-block">
                <h5>Pilkada Audit for 2024 Regional Elections</h5>
                <p className='text-center'>Ensuring compliance and accountability in electoral financial management.</p>
            </div>
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
</div>

        </section>

            <section className="section-part" id="afiliasi">
                <div className="h1-title">
                <hr className="h1-decorations-1"></hr>
                <h1>Affiliation</h1>
                </div>

                <div className="affiliation-logos">
                    <div className="logo-row">
                        <img src={AffiliationLogoIAPI} alt="IAPI Logo" className="logo" loading='lazy'/>
                        <img src={AffiliationLogoPajak} alt="Kemenkeu Logo" className="logo" loading='lazy'/>
                        <img src={AffiliationLogoBI} alt="Bank Indonesia Logo" className="logo" loading='lazy'/>
                        <img src={AffiliationLogoOJK} alt="OJK Logo" className="logo" loading='lazy'/>
                        <img src={AffiliationLogoBPK} alt="BPK Logo" className="logo" loading='lazy'/>
                    </div>
                </div>
                <br></br>
                <br></br>

                <img src={PartnerImage} alt="IAPI Logo" className="center rounded" width="100%" loading='lazy'/>



    </section>
    
    <NeedMoreInfoComponent/>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </>

    );
  };
  
export default MainPage;

//Wisnu Ardianto, SE, AK, CA, CPA, CLI
//Merry Katili SS, SE, AK, CA, CPA
//Deri Riduifana, SE, AK, CPE, BKP
//Alister Aritonang, SE, MM, AK, CPA, CTA, CSRS, CSP, CSRA, CACP, ASEAN CPA