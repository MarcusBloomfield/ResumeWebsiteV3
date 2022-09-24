import React from 'react'
export default function ProjectTile({ ...props }) {

    function active() {
        props.array.forEach(element => {
            element(false);
        });
        props.setTrigger(true);
    }
    return (
        <div data-aos="fade-right" className=" tile " >
            < button className=" tileButton " type='button' onClick={() => active()}>
                <h2> {props.title}</h2>
            </button >
        </div >
    );
}
