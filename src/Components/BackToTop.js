import { animateScroll as scroll } from 'react-scroll'

export default function BackToTop() {
    return (
        <div className='backToTopContainer'>
            <button className='backToTopButton' onClick={() => scroll.scrollToTop()}> Up </button>
        </div >
    );
}