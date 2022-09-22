import ProjectPopUp from "./ProjectPopUp"
import ProjectGrid from './ProjectGrid.js';
import Aos from "aos";
import { useEffect, useState } from "react";
export default function AllProjectStuff() {

    const [ZomBoy, setZomBoy] = useState(false);
    const [Hardship, setHardship] = useState(false);
    const [Island, setIsland] = useState(false);
    const [ArtificalLife, setArtificalLife] = useState(false);
    const [AimBooster, setAimBooster] = useState(false);
    const [TPG, setTPG] = useState(false);
    const [ThreeDResumeWebsite, setThreeDResumeWebsite] = useState(false);

    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
        });
    }, [])

    return (
        <>
            <ProjectGrid name="projectGrid" setThreeDResumeWebsite={setThreeDResumeWebsite} setAimBooster={setAimBooster} setArtificalLife={setArtificalLife} setZomBoy={setZomBoy} setHardship={setHardship} setIsland={setIsland} setTPG={setTPG} array={[setThreeDResumeWebsite, setZomBoy, setHardship, setIsland, setTPG, setArtificalLife, setAimBooster]} />
            <ProjectPopUp trigger={ZomBoy} title="ZomBoy" videoId="hLCd2h2e3no" github="ZombBoi"
                info="
                    ZombBoi is a 2d Top down endless zombie killer.
                    The user has an inventory and health, pick up weapons, potions and armor, kill zombies with weapons, health with potions.
                    The highscore is saved locally.
                    The user must survive and kill as many zombies as he can inside of the dungeon to beat their previous high score.
                    "
            />
            <ProjectPopUp trigger={Hardship} title="Hardship" videoId="0dfHecVSzHc"
                info="
                    Hardship is my passion project. 
                    It is a city-building strategy game that has an in-game intelligence system, which is intended to allow for a greater level of realism. 
                    "
            />
            <ProjectPopUp trigger={Island} title="Island" videoId="2h_hzFjcd3k"
                info="Random map generation using Perlin noise to create terrain features that uses a fall off map to create the island structure.
            The generated model also paints itself based on the height of the terrain. Lowest being sand and the highest being mountains.
            In another version, I added dynamically spawning trees and rocks to the 3d island.
            "

            />
            <ProjectPopUp trigger={TPG} title="The Plane Game" videoId="g_BBcKTlg6E" github="ThePlaneGame"
                info="
                    My first publicly released application. 
                    It is an arcade game where you fly around as a jet fighter trying to shoot as many targets as you can whilst dodging incoming missiles and enemy laser turrets. 
                    There are a number of boss battles ranging from a mother ship that spawns other enemies that chase after you to a tank that shoots giant lasers.
                    "
            />
            <ProjectPopUp trigger={ArtificalLife} title="Artifical Life" videoId="wBaVOBm0wFc" github="Artificial-Life"
                info="
                     This is a simple simulation of primitive attraction relationships between spheres I made in unity using c# for fun.
                     The project demonstrates the ability of simple rules to create complex and unpredicted behaviors. 
                     The size, relationships, and colors of the particles are completely randomized upon creation.
                    "
            /><ProjectPopUp trigger={AimBooster} title="Aim Boooster" videoId="lo0EpShrofI" github="aimBoooster"
                info="
                     A simple aim trainer that utilizes mathematic equations like sin, cos, and tan in order to generate varied movement.
                    "
            /><ProjectPopUp trigger={ThreeDResumeWebsite} title="3D Resume Website" videoId="lRJd6V3GKDo" github="ResumeWebsite"
                info="
                     An experimental 3D website that I created in order to display my resume in a unquie way.
                     It uses models I have created in blender and math functions like sin, cos and tan to make things bob and fly around.
                     It is built with react-three-fiber and it currently is still a work in progress.
                    "
            />
        </>)
}