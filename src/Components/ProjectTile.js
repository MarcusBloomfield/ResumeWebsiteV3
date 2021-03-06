import React from 'react'
export default function ProjectTile({ ...props }) {

    function active() {
        props.array.forEach(element => {
            element(false);
        });
        props.setTrigger(true);
    }
    return (
        <div data-aos="fade-right" className=" tile " onClick={() => active()} >
            < h2 > {props.title}</h2 >
            <p className="tileAbout " >
                {props.info}
            </p>
        </div >
    );
}
