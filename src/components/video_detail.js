import React from 'react';

const VideoDetail = ({video}) => {
    if(!video){
        return <div>Patience...</div>;
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="video-detail col-md-8">
            <div className ="embed-responsive embed-responsive-16by9">
                <iframe
                    frameBorder="0"
                    allowFullScreen
                    className="embed-responsive-item" src={url} >
        </iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div className="w3-tinyfont">{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;