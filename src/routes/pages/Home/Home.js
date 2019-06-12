import React from 'react';

import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import Content from './Home - content'
import Footer from '../../components/Footer'

const Home = () => (
    <div className="page-container">
        <Sidebar />
        <Header />
        <Content />
        <Footer />
    </div>
)


export default Home