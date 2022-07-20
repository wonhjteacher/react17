import React from 'react';
import VideoView from './../components/VideoView';
import { useSearchParams } from "react-router-dom";
const Watch = () => {
    const [query,setQuery]  = useSearchParams();
    const id=query.get('id')
    return (
        <section className='list content'>
            <VideoView id={id} />
        </section>
    );
};

export default Watch;