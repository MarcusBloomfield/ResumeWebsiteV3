import React from 'react';
import YouTube from 'react-youtube';

export default function YoutubePlayer({ ...props }) {
    const options = {
        height: '500',
        width: '900',
        playerVars: {
            autoplay: 0,
            mute: 1,
            modestbranding: 1,
            autohide: 0,
        },
    };
    return <YouTube videoId={props.videoId} opts={options} />;
}