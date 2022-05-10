import { scroller as scrollToElements } from 'react-scroll'
import { animateScroll } from 'react-scroll/modules';


export default function NavBar() {
    return (
        <div className="navBar">
            <button className="navButton" onClick={() => scrollToElements.scrollTo('projects', options())}> Projects </button>
            <button className="navButton" onClick={() => animateScroll.scrollToBottom(options())} > Contact </button>
        </div>
    );
}
function options() {
    return {
        duration: 1500,
        delay: 100,
        offset: -200,
        smooth: true,
    }
}