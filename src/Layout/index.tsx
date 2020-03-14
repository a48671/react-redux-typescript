import React from 'react';
import Header from "../components/Header";

interface ILayoutProps {
    title: string
}

const Layout: React.FC<ILayoutProps> = ({title, children}): React.ReactElement => {
    return (
        <div>
            <Header title={title }/>
            {children}
        </div>
    );
};

export default Layout;