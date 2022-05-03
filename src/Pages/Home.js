import Header from '../Components/Header.js'
import Footer from '../Components/Footer.js'
import ProjectGrid from '../Components/ProjectGrid.js'


export default function Home() {
    return (
        <div className="home animate__animated animate__fadeIn">
            <Header className="header" />
            <ProjectGrid />
            <Footer className="footer" />
        </div>
    );
}