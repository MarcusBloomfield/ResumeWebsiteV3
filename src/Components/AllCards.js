import Card from '../Components/Card.js';

export default function AllCards() {
    return (<>
        <Card className="card aboutMe " title=" About Me" details="
I am Marcus, programming is my passion, I am self-taught and the creative and problem-solving mindset that is required by coding is why I love programming. Every problem has a solution and I hope I am always as excited as I am today to solve them. " />
        <Card className="card philosophy" title="Philosophy" details="Programming requires constant learning and adaptation. To cease in these pursuits is to fail." />
        <Card className="card howILearned" title="How I learned to program" details="I found unity and decided to make my dream game right away. Of course, with no programming experience, this was an extremely hard challenge. However being who I am I never gave up, failure after failure after failure, moving goalposts, on a roller coaster of challenges I kept going. Now my game is still not finished, I am still working on it, but now I am deeply familiar with c# and unity and have developed a deep love for programming." />
        <Card className="card passion" title="Passion" details="Programming is my passion. For a long time, I had no idea what I wanted to do but finally, I have found something I thoroughly enjoy doing day in and day out. When I am programming time flies by, I lose days and have to pull myself away from the computer to go do other things." />
        <Card className="card education" title="Education"
            detailsTitle="2020 - 2021 Certificate IV in Programming, UpSkilled"
            details="I have completed a certificate four in programming. In this course, I gained knowledge in agile development processes, application documentation standards, .Net, C#, SQL, and Xamarin."
            details2Title={"2018 - Current Self-Taught"}
            details2="I have been on a rigorous self-education journey ever since I began to mess with programming back in 2018. I love programming and will always love learning new languages as well as building on what I already know." />
        <Card className="card experience" title="Experience"
            detailsTitle="2019 - 2021 Unity, C# Developer Self Employed"
            details="In 2019 my first app launched on the Google Play Store. I have also been working on smaller side projects which include smaller games and react-based websites as well as my passion project. My passion project is a city-building strategy game that has an in-game intelligence system, which is intended to allow for a greater level of realism. Making games is a huge challenge but I welcome it." />
        <Card className="card summary" title="Summary" details=" I am always learning, and constantly developing my skills, I love programming, developing systems, and creating applications. I am always working on another project in my spare time to both expand my knowledge base and for my own enjoyment." />
    </>)
}