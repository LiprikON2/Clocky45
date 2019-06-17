import React from 'react';

import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import Content from './About - content'
import Footer from '../../components/Footer'

const About = () => (
    <div className="page-container">
        <Sidebar />
        <Header />
        <Content />
        <Footer />
    </div>
)


export default About