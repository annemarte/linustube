import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    //argument is the same as writing const video = props.video;

    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={()=>onVideoSelect(video)} className="list-group-item">
            <div className ="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading w3-tinyfont ">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;