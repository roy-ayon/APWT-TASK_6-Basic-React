import { Box } from '@mui/system';
import React from 'react';



import Navigation from '../Shared/Navigation/Navigation';

import Product from '../Product/Product';
import ContactUs from '../ContactUs/ContactUs';



const Home = () => {
    return (
        <Box sx={{ mt: 0 }} >
            <Navigation></Navigation>
            <Product></Product>
            <ContactUs></ContactUs>
        </Box >
    );
};

export default Home;