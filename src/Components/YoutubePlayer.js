import React from 'react';
import YouTube from 'react-youtube';

export default function YoutubePlayer({ ...props }) {
    const options = {
        playerVars: {
            autoplay: 1,
            mute: 0,
            modestbranding: 1,
            autohide: 0,
        },
    };
    return <YouTube videoId={props.videoId} opts={options} />;
}