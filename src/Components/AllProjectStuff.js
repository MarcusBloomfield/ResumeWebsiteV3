import ProjectPopUp from "./ProjectPopUp"
import ProjectGrid from './ProjectGrid.js';
import Aos from "aos";
import { useEffect, useState } from "react";
export default function AllProjectStuff() {

    const [ZomBoy, setZomBoy] = useState(false);
    const [HardshipPlanet, setHardshipPlanet] = useState(false);
    const [HardshipIsland, setHardshipIsland] = useState(false);
    const [Hardship, setHardship] = useState(false);
    const [Hardship2, setHardship2] = useState(false);
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
            <ProjectGrid name="projectGrid" setThreeDResumeWebsite={setThreeDResumeWebsite} setAimBooster={setAimBooster} setArtificalLife={setArtificalLife} setZomBoy={setZomBoy} setHardship={setHardship} setIsland={setIsland} setTPG={setTPG} setHardshipIsland={setHardshipIsland} setHardshipPlanet={setHardshipPlanet} setHardship2={setHardship2} array={[setThreeDResumeWebsite, setZomBoy, setHardship, setIsland, setTPG, setArtificalLife, setAimBooster, setHardshipPlanet, setHardshipIsland, setHardship2]} />
            <ProjectPopUp trigger={HardshipPlanet} title="Planet Generation" videoId="QymEQtD1aHQ"
                InfoDescription="Planet Generation version 3"
                InfoObjectives="This is a fully custom planet generation system."
                InfoTechnologies="This project was made using unity 3d, utilize complex c# math based algorithms to generate the planet and a custom high level shader language shader to make the terrain the color that it is. "
                InfoKnowledge="This project has helped me advance my mathematical knowledge."
            />
            <ProjectPopUp trigger={HardshipIsland} title="Hardship Island" videoId="GPnkyWmAAEk"
                InfoDescription="Hardship is a city-building survival game but an update island mode."
                InfoObjectives="I wanted to create a city-building game with a greater level of detail focusing on the individual citizens and the items they need for survival like food, clothes, and tools. Additionally, each citizen has hunger, thirst, happiness, sleep, and health stats."
                InfoTechnologies="This project was made using unity 3d, blender, mixamo, and some purchased model/shader assets. I have created an in-game AI system that allows for performant, effective, and easily expanded/modifiable AI behavior.  "
                InfoKnowledge="I acquired a great deal of knowledge about large project structure, C#, code readability, Inheritance, Interfaces, abstraction, polymorphism, UI, data structures, 3d modeling, texturing, mathematics, animation, programming for performance, Unity, and in-game AI."
            />
            <ProjectPopUp trigger={Hardship2} title="Hardship v2" videoId="5NurcSGg1IY"
                InfoDescription="Hardship is a city-building survival game."
                InfoObjectives="I wanted to create a city-building game with a greater level of detail focusing on the individual citizens and the items they need for survival like food, clothes, and tools. Additionally, each citizen has hunger, thirst, happiness, sleep, and health stats."
                InfoTechnologies="This project was made using unity 3d, blender, mixamo, and some purchased model/shader assets. I have created an in-game AI system that allows for performant, effective, and easily expanded/modifiable AI behavior.  "
                InfoKnowledge="I acquired a great deal of knowledge about large project structure, C#, code readability, Inheritance, Interfaces, abstraction, polymorphism, UI, data structures, 3d modeling, texturing, mathematics, animation, programming for performance, Unity, and in-game AI."
            />
            <ProjectPopUp trigger={Hardship} title="Hardship v1" videoId="0dfHecVSzHc"
                InfoDescription="Hardship is a city-building survival game."
                InfoObjectives="I wanted to create a city-building game with a greater level of detail focusing on the individual citizens and the items they need for survival like food, clothes, and tools. Additionally, each citizen has hunger, thirst, happiness, sleep, and health stats."
                InfoTechnologies="This project was made using unity 3d, blender, mixamo, and some purchased model/shader assets. I have created an in-game AI system that allows for performant, effective, and easily expanded/modifiable AI behavior.  "
                InfoKnowledge="I acquired a great deal of knowledge about large project structure, C#, code readability, Inheritance, Interfaces, abstraction, polymorphism, UI, data structures, 3d modeling, texturing, mathematics, animation, programming for performance, Unity, and in-game AI."
            />
            <ProjectPopUp trigger={TPG} title="The Plane Game" videoId="g_BBcKTlg6E" github="ThePlaneGame"
                InfoDescription="The Plane is an arcade game with boss battles."
                InfoObjectives="I wanted to make a fast and fun rogue-like experience. Originally it was a prototype game I made just for fun but I then decided to make it into a mobile game and released it on android."
                InfoTechnologies="There was a free version that implemented Unity Ads Monetisation and a paid version for one dollar both were made using C# inside of Unity."
                InfoKnowledge="I gained knowledge about releasing products to the public, creating builds, updating builds, and how the mobile game market operates."
            />
            <ProjectPopUp trigger={Island} title="Island" videoId="2h_hzFjcd3k"
                InfoDescription="Random 3D map generation utilizing Perlin noise and a fall-off function in order to create island-like terrain features."
                InfoObjectives="I wanted the ability to generate random terrain at runtime. "
                InfoTechnologies="This was made in Unity using C#. It utilizes several mathematical functions and equations to generate and paint an island at runtime."
                InfoKnowledge="I gain knowledge of vector math, normals, UV, texturing, and runtime mesh generation."
            />
            <ProjectPopUp trigger={ThreeDResumeWebsite} title="3D Resume Website" videoId="lRJd6V3GKDo" github="ResumeWebsite"
                InfoDescription="An experimental 3D resume website."
                InfoObjectives="I wanted to make a unique and interesting resume website. Utilizing my knowledge of 3D mathematics and 3d modeling."
                InfoTechnologies="This website was made using react-three-fiber, React JS, some React libraries and blender."
                InfoKnowledge="I gain knowledge of website hosting, React JS, React-Three-Fiber, and 3D mathematics."
            />
            <ProjectPopUp trigger={ArtificalLife} title="Artifical Life" videoId="wBaVOBm0wFc" github="Artificial-Life"
                InfoDescription="This is a simple simulation of primitive attraction relationships between spheres I made in unity using c# for fun. "
                InfoObjectives="I wanted to see if particle-life simulations could possibly function in a three-dimensional environment. "
                InfoTechnologies="This was made in Unity."
                InfoKnowledge="This project demonstrates the ability of simple rules to create complex and unpredicted behaviors."
            />
            <ProjectPopUp trigger={AimBooster} title="Aim Boooster" videoId="lo0EpShrofI" github="aimBoooster"
                InfoDescription="A simple aim trainer."
                InfoObjectives="I wanted to make a simple aim trainer for fun."
                InfoTechnologies="This was made in Unity using C#. It also utilizes mathematical functions in order to create varied and looping movements."
                InfoKnowledge="I gain knowledge of mathematical functions and difficulty curves."
            />
            <ProjectPopUp trigger={ZomBoy} title="ZomBoy" videoId="hLCd2h2e3no" github="ZombBoi"
                InfoDescription="A rogue-like prototype I made with a friend."
                InfoObjectives="I and my friend wanted to try out making a game together. He did the art and I did the programming."
                InfoTechnologies="This game was made in Unity using c#, and a 2-dimensional workflow."
                InfoKnowledge="I gain knowledge about how 2d systems interact with each other inside of unity."
            />
        </>)
}