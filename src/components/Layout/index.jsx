import React, { useState } from "react";

import AppBarMenu from "./AppBarMenu";
import FloatButton from "./FloatButton";
import Footer from "./Footer";

function Layout({children}) {
    const [appBarBackground, setAppBarBackground] = useState(true)

    const hideFab = () => {
        if(window.scrollY >= 80) {
            setAppBarBackground(true)
        } else {
            setAppBarBackground(false)
        }
    }
    window.addEventListener('scroll', hideFab)

    return (
        <div>
            <AppBarMenu />
            <div>
                {children}
            </div>
            {
                appBarBackground ?
                <FloatButton /> : null
            }
            <Footer />
        </div> 
    )
}

export default Layout
