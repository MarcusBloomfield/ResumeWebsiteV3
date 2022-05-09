
import Card from '../Components/Card.js';

export default function AllCards() {
    return (<>
        <Card className="aboutMe" photoAddress="./ProfilePic.jpg" title=" About Me" details="I am always learning, and constantly developing my skills, I love programming, developing systems, and creating applications. I am always working on another project in my spare time to both expand my knowledge base and for my own enjoyment." />
        <Card className="philosophy" title="Philosophy" details=" I strongly believe in coding the right way and rigorously follow Robert C. Martin's clean coding philosophy." />
        <Card className="summary" title="Summary" details="
                    I am also familiar with the development of A.I, virtual reality, and many more gameplay systems.
                    I am currently working on a real-time strategy simulation game that heavily relies on an in-game artificial intelligence system additionally a virtual reality god game with a few teammates.
                    All these are being developed for a commercial environment using C# and visual studio 2019 inside of the dot Net framework."
        />
    </>)
}