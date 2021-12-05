import { createTheme, ThemeProvider } from '@material-ui/core';
import React from 'react'
import { 
    BrowserRouter, 
    Routes, 
    Route  
} from "react-router-dom";
import Layout from '../components/Layout';
import Gallery from '../views/Gallery';
import Home from '../views/Home';

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
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/gallery" element={<Gallery />}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </ThemeProvider>
    )
}
