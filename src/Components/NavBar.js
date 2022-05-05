import { animateScroll as scroll } from 'react-scroll'


export default function NavBar() {
    return (
        <div className="navBar">
            <button className="navButton" onClick={() => scroll.scrollTo(3444)}> Projects </button>
            <button className="navButton" onClick={() => scroll.scrollToBottom()} > Contact </button>
            <button className="navButton" > Github </button>
        </div>
    );
}