import React from 'react';

const NavBarLinkWrapper = ({ children }) => {
    return (
        <ul className="nav navbar-nav">
            {children}
        </ul>
    )
};

export default NavBarLinkWrapper;