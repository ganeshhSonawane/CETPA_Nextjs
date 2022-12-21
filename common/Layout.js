import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
    const {children, footerstatus} = props;
    return(
        <>
        {true ? (<>
                    <Header/>
                    <div className="container">
                        {children}
                    </div>
                    {!footerstatus && (<Footer/>)}
            </>) : (
                <div className="container">
                    <Header/>
                    {children}
                    {!footerstatus && (<Footer/>)}
                </div>
            )
        }
            
       </>
    )
}

export default Layout;