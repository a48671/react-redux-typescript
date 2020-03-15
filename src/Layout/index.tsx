import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

interface ILayoutProps {
    title: string
}

const Layout: React.FC<ILayoutProps> = ({title, children}): React.ReactElement => {
    return (
        <div>
            <Header title={title }/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;