import Header from '../Components/Header.js';
import Footer from '../Components/Footer.js';
import NavBar from '../Components/NavBar.js';
import BackToTop from '../Components/BackToTop.js';
import AllCards from '../Components/AllCards.js';
import AllProjectStuff from '../Components/AllProjectStuff.js';
import BackGroundImg from '../Components/BackGroundImg.js';


export default function Home() {
    return (
        <div className="home animate__animated animate__fadeIn">
            <BackGroundImg />
            <Header />
            <NavBar />
            <BackToTop />
            <AllCards />
            <AllProjectStuff />
            <Footer />
        </div>
    );
}