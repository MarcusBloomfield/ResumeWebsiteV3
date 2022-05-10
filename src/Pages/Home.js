import Header from '../Components/Header.js';
import Footer from '../Components/Footer.js';
import NavBar from '../Components/NavBar.js';
import BackToTop from '../Components/BackToTop.js';
import AllCards from '../Components/AllCards.js';
import AllProjectStuff from '../Components/AllProjectStuff.js';


export default function Home() {
    return (
        <div className="home animate__animated animate__fadeIn">
            <Header />
            <NavBar />
            <BackToTop />
            <AllCards />
            <AllProjectStuff />
            <Footer />
        </div>
    );
}