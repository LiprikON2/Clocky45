import React from 'react';

import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import Content from './Main - content'
import Footer from '../../components/Footer'

const Main = () => (
    <div className="page-container">
        <Sidebar />
        <Header />
        <Content />
        <Footer />
    </div>
)


export default Main