import YouTube from "react-youtube-player";

export default function YoutubePlayer({ ...props }) {
    const options = {
        playerVars: {
            autoplay: 1,
            mute: 0,
            modestbranding: 1,
            autohide: 0,
            playbackSpeed: props.playbackSpeed
        },
    };
    return <YouTube videoId={props.videoId} opts={options} />;
}