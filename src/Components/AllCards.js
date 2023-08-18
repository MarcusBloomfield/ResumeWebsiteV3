import Card from '../Components/Card.js';

export default function AllCards() {
    return (<>
        <Card className="card aboutMe " title=" About Me" details="
            I am Marcus, programming is my passion and the creative problem-solving mindset that it requires is why I love it." />
        <Card className="card philosophy" title="Philosophy" details="To program is to learn and adapt. To cease in these pursuits is to fail." />
        <Card className="card howILearned" title="How I learned to program" details="
I had a vision, to make the most complex advanced city-building game the world had ever seen.
But alas, without any knowledge at all in programming or game design this was no easy journey. 
I went from knowing nothing about programming, or art or unity or 3D modeling to proficient in all these areas. I spent countless hours researching, programming, learning and after hundreds of road blocks or failed projects I had finally made a half decent game. Although the work is never ending on my project and the complexity of it grows endlessly, I am always excited to continue work on my game." />
        <Card className="card passion" title="Passion" details="Programming is my passion. I love it. I have spent countless hours creating complex systems and expanding my knowledge base. Without a doubt it would be a dream come true to have programming be my job." />
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