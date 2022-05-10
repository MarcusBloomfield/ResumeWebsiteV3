import { animateScroll as scroll } from 'react-scroll'


export default function NavBar() {
    return (
        <div className="navBar">
            <button className="navButton" onClick={() => scroll.scrollTo(8444)}> Projects </button>
            <button className="navButton" onClick={() => scroll.scrollTo('projects')} > Contact </button>
        </div>
    );
}