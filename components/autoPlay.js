import React, { useEffect, useRef } from 'react';

const AutoPlayVideo = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        // Play the video once the component is mounted
        videoRef.current.play();
    }, []); // Empty dependency array ensures that the effect runs only once

    return (
        <video ref={videoRef} loop autoPlay muted playsInline >
            <source src={`/video/dalysmedia.mp4`} type="video/mp4" />
            <source src={`/video/dalysmedia.webm`} type="video/webm" />
            Your browser does not support the video tag.
        </video>
    );
};

export default AutoPlayVideo;