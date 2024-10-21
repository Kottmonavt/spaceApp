import React from 'react';

interface LayoutProps {
    children: React.ReactNode; 
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div style={{width: '100%' }}>
            {children}
        </div>
    );
};
export default Layout;