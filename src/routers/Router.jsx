import { createTheme, ThemeProvider } from '@material-ui/core';
import React from 'react'
import { 
    BrowserRouter, 
    Routes, 
    Route  
} from "react-router-dom";
import Layout from '../components/Layout';
import Eduwisata from '../views/Eduwisata';
import About from '../views/About';
import EduwisataDetail from '../views/Eduwisata/EduwisataDetail';
import Gallery from '../views/Gallery';
import Home from '../views/Home';
import TravelGuide from '../views/TravelGuide';
import Booking from '../views/Booking';

const theme = createTheme({
    palette: {
        primary: {
           main: '#388e3c'
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
        },
    });

export default function Router() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter basename="/tirtomulyo">
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/gallery" element={<Gallery />}/>
                        <Route path="/eduwisata" element={<Eduwisata />}/>
                        <Route path="/eduwisata/:slug" element={<EduwisataDetail />}/>
                        <Route path="/about" element={<About />}/>
                        <Route path="/travel-guide" element={<TravelGuide />}/>
                        <Route path="/booking" element={<Booking />}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </ThemeProvider>
    )
}
