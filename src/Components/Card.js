import '../Css/Card.css'

export default function Card({ ...props }) {
    return (
        <div data-aos="fade-in" className={props.className}>
            <div>
                <div className="cardLayout">
                    <div className='cardText'>

                       { Switch(props.title)}

                    </div>
                </div>
            </div>
        </div >
    );
}

function Switch(name){

    switch (name) {
        case "About Me":
           return AboutMe()
    
        case "HowILearned":
            return HowILearned()
        
        case "Passion":
            return Passion()

        case "Education":
            return Education()
                
        case "Experience":
            return Experience()
            
        case "Proficiency":
            return Proficiency()
        
        case "Summary":
            return Summary()

        default:
            return <h1> ITS BROKEN </h1>
    }
}

function AboutMe()
{
    return(
        <div>
            <h2> About Me </h2 >
            <div>  I am Marcus, programming is my passion and the creative problem-solving mindset that it requires is why I love it. </div>
        </div>
    )
}
function HowILearned()
{
    return(
        <div>
            <h2> How I Learnt Programming </h2 >
            <div> I had a vision, to make the most complex advanced city-building game the world had ever seen. </div>
            <div> I went from knowing nothing about programming, or art or unity or 3D modeling to proficient in all these areas. </div>
            <div> I have spent countless hours researching, programming and learning.</div>
            <div>Although the work is never ending on my project and the complexity of it grows endlessly. </div>
            <div>I am always excited to continue work on my game.</div>
        </div>
    )
}
function Passion()
{
    return(
        <div>
            <h2> Passion </h2 >
            <div>Programming is my passion.</div>
            <div>I have spent countless hours creating complex systems and expanding my knowledge base. </div>
            <div>Without a doubt it would be a dream come true to have programming be my job.</div>
        </div>
    )
}
function Education()
{
    return(
        <div>
            <h2> Education </h2 >
            <div>
                <h4>2020 - 2021 Certificate IV in Programming, UpSkilled</h4>
                <div> I have completed a certificate four in programming.  </div>
                <div>I gained knowledge in agile development processes, application documentation standards, .Net, C#, SQL, and Xamarin.</div>
             </div>
            <div>
                <h4>2018 - Current Self-Taught</h4>
                <div> I have been on a rigorous self-education journey ever since I began to mess with programming back in 2018. </div>
                <div>I love programming and will always love learning new languages as well as building on what I already know. </div>
            </div>
        </div>
    )
}
function Experience()
{
    return(
        <div>
            <h2> Experience </h2 >
            <div>
                <h4>2019 - 2021 Unity, C# Developer Self Employed</h4>
                <div> In 2019 my first app launched on the Google Play Store. </div>
                <div>I am always working on side projects, React website, Unity games and other projects in my spare time.</div>
             </div>
        </div>
    )
}
function Proficiency()
{
    return(
        <div>
            <h2> Proficiency </h2 >
            <div> C# is my main programming language, I prefer it over all the others and am well versed in it. </div>
            <div>HLSL is probably one of the most interesting languages I know as it is used to create shaders. </div>
            <div>I am also capable in SQL, HTML, Javascript and python. </div>
        </div>
    )
}
function Summary()
{
    return(
        <div>
            <h2> Summary </h2 >
            <div> I am always learning, and constantly developing my skills. </div>
            <div>I love programming, developing systems, and creating applications. </div>
            <div>I am always working on another project in my spare time to both expand my knowledge base and for my own enjoyment.</div>
        </div>
    )
}