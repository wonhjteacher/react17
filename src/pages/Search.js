import React from 'react';
import VideoList from './../components/VideoList';
import SideMenu from '../components/SideMenu';

const search = () => {
    return (
        <>
          <SideMenu  /> 
          <section className='main-content'>
            <VideoList />
          </section>
        </>
    );
};

export default search;