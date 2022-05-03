import Header from '../Components/Header.js'
import Footer from '../Components/Footer.js'
import NavBar from '../Components/NavBar.js';


export default function Home() {
    return (
        <div className="home animate__animated animate__fadeIn">
            <Header />
            <NavBar />
            <Footer />
        </div>
    );
}