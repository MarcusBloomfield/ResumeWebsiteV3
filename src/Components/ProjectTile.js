import React from 'react'
import { useState } from "react";

export default function ProjectTile({ ...props }) {
    return (
        <div className="tile" onClick={() => props.setTrigger(true)} >
            <h2> {props.title}</h2>
            <p className="tileAbout " >
                {props.info}
            </p>
        </div>
    );
}
