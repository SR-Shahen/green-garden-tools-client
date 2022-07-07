import React from 'react';
import Banner from './Banner';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <h1 className='text-3xl text-center font-medium text-teal-400'>Welcome to Green Garden Tools</h1>
            <Banner></Banner>
            <Tools></Tools>
        </div>
    );
};

export default Home;