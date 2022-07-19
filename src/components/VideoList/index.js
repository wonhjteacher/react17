import React from 'react';
import './index.css';
import VideoItem from '../VideoItem';

const VideoList = () => {
   
    
    return (
        <ul className='videoList VideoGrid'>
           <VideoItem />
        </ul>
    );
};

export default VideoList;