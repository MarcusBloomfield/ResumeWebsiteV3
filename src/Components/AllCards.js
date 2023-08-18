import Card from '../Components/Card.js';import '../Css/Animate.css'
import '../Css/Common.css'
import '../Css/Home.css'
import '../Css/ProjectGrid.css'
import '../Css/ProjectTile.css'
import '../Css/Footer.css'
import '../Css/Header.css'
import '../Css/NavBar.css'
import '../Css/AboutMe.css'
import '../Css/Philosophy.css'
import '../Css/Summary.css'
import '../Css/ProjectPopUp.css'
import '../Css/BackToTop.css'
import '../Css/Link.css'
import '../Css/Passion.css'
import '../Css/HowILearned.css'
import '../Css/Education.css'
import '../Css/Experience.css'
import '../Css/Proficiency.css'

export default function AllCards() {
    return (<>
        <Card className="card aboutMe " title="About Me" />
        <Card className="card howILearned" title="HowILearned"  />
        <Card className="card passion" title="Passion" />
        <Card className="card education" title="Education" />
        <Card className="card experience" title="Experience" />
        <Card className="card proficiency" title="Proficiency" />
        <Card className="card summary" title="Summary" />
    </>)
}