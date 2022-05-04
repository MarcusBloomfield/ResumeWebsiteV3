import Header from '../Components/Header.js'
import Footer from '../Components/Footer.js'
import NavBar from '../Components/NavBar.js';
import AboutMe from '../Components/AboutMe.js';
import ProjectGrid from '../Components/ProjectGrid.js';
import Philosophy from '../Components/Philosophy.js';
import Summary from '../Components/Summary.js'
import ProjectPopUp from '../Components/ProjectPopUp.js';
import { useState } from "react";


export default function Home() {
    const [projectPopUp, setProjectPopUp] = useState(false);
    return (
        <div className="home animate__animated animate__fadeIn">
            <Header />
            <NavBar />
            <ProjectGrid trigger={projectPopUp} setTrigger={setProjectPopUp} />
            <ProjectPopUp trigger={projectPopUp} setTrigger={setProjectPopUp} title="ass" info="fsepihfa;wopiefhaw;oeifhwao;eifhwa;oeifhw;oeifhw;oeighw;oeihg;oiawheroigh;awheroighiawhehgoi;awheihjgahweoilgh;li" />
            <AboutMe />
            <Philosophy />
            <Summary />
            <Footer />
        </div>
    );
}