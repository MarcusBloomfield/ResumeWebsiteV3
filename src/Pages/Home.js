import Header from '../Components/Header.js';
import Footer from '../Components/Footer.js';
import NavBar from '../Components/NavBar.js';
import AboutMe from '../Components/AboutMe.js';
import ProjectGrid from '../Components/ProjectGrid.js';
import Philosophy from '../Components/Philosophy.js';
import Summary from '../Components/Summary.js';
import ProjectPopUp from '../Components/ProjectPopUp.js';
import BackToTop from '../Components/BackToTop.js';
import Aos from "aos";
import { useEffect, useState } from "react";


export default function Home() {
    const [ZomBoy, setZomBoy] = useState(false);
    const [Hardship, setHardship] = useState(false);
    const [Island, setIsland] = useState(false);
    const [TPG, setTPG] = useState(false);

    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
        });
    }, [])

    return (
        <div className="home animate__animated animate__fadeIn">
            <Header />
            <NavBar />
            <BackToTop />
            <ProjectGrid name="projectGrid" setZomBoy={setZomBoy} setHardship={setHardship} setIsland={setIsland} setTPG={setTPG} array={[setZomBoy, setHardship, setIsland, setTPG]} />
            <ProjectPopUp trigger={ZomBoy} title="ZomBoy" videoId="hLCd2h2e3no" github="ZombBoi"
                info="
                    ZombBoi is a 2d Top down endless zombie killer.
                    The user has an inventory and health, pick up weapons, potions and armor, kill zombies with weapons, health with potions.
                    The highscore is saved locally.
                    The user must survive and kill as many zombies as he can inside of the dungeon to beat their previous high score.
                    "
            />
            <ProjectPopUp trigger={Hardship} title="Hardship" videoId="nh2eDz9iuws"
                info="
                    Hardship is my passion project. 
                    It is a city-building strategy game that has an in-game intelligence system, which is intended to allow for a greater level of realism. 
                    "
            />
            <ProjectPopUp trigger={Island} title="Island" videoId="2h_hzFjcd3k"
                info="
                    Random map generation using perlin noise to create terrain feautrest that uses a fall off map to create the island structure.
                    The generated model also paints it's self based on the hieght of the terrain. Lowest being sand and highest being mountains.
                    In another version I added dynamicly spawning trees and rocks to the 3d island.
                    "
            />
            <ProjectPopUp trigger={TPG} title="The Plane Game" videoId="g_BBcKTlg6E" github="ThePlaneGame"
                info="
                    My first publicly released application. 
                    It is an arcade game where you fly around as a jet fighter trying to shoot as many targets as you can whilst dodging incoming missiles and enemy laser turrets. 
                    There are a number of boss battles ranging from a mother ship that spawns other enemies that chase after you to a tank that shoots giant lasers.
                    "
            />
            <AboutMe />
            <Philosophy />
            <Summary />
            <Footer />
        </div>
    );
}