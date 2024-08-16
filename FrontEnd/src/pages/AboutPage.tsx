import React from 'react';
import { ErrorBoundary } from '@components/ErrorBoundary';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';
import Banner from '@components/Banner/Banner';

const AboutPage = () => {
    return (
        <ErrorBoundary>
            <Navbar></Navbar>
            <Banner title="About Us" />
            <Footer></Footer>
        </ErrorBoundary>
    );
};

export default AboutPage;
