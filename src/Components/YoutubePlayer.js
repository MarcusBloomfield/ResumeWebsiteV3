import YouTube from "react-youtube";

export default function YoutubePlayer({ ...props }) {
    const options = {
        height: '240',
        width: '426',
        playerVars: {
            autoplay: 1,
            mute: props.streetSound ? 0 : 1,
            modestbranding: 1,
            autohide: 1,
            playbackSpeed: props.playbackSpeed
        },
    };
    return <YouTube videoId={props.videoId} opts={options} />;
}