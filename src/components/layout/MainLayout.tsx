import React from "react";
import MainNavigation from "./MainNavigation";

function MainLayout (props: any) {
    return (
        <section>
            <MainNavigation />
             <div className="layout-content">
                {props.children}
             </div>
        </section>
    )
}

export default MainLayout;