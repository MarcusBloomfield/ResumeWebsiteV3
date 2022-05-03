import Header from '../Components/Header.js'
import Footer from '../Components/Footer.js'
import NavBar from '../Components/NavBar.js';
import AboutMe from '../Components/AboutMe.js';
import ProjectGrid from '../Components/ProjectGrid.js';
import Philosophy from '../Components/Philosophy.js';
import Summary from '../Components/Summary.js'


export default function Home() {
    return (
        <div className="home animate__animated animate__fadeIn">
            <Header />
            <NavBar />
            <ProjectGrid />
            <AboutMe />
            <Philosophy />
            <Summary />
            <Footer />
        </div>
    );
}