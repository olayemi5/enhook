import React from "react";
import FooterLayout from "./FooterLayout";
import MainNavigation from "./MainNavigation";

function MainLayout (props: any) {
    return (
        <section>
            <MainNavigation />
             <div className="layout-content">
                {props.children}
             </div>
             <FooterLayout />
        </section>
    )
}

export default MainLayout;