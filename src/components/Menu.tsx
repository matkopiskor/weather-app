import { MdOutlineClose } from 'react-icons/md';

import './Menu.css';

export const Menu = () => {
    return (
        <div className="menu">
            <div className="menu__icon">
                <MdOutlineClose className="menu__icon-icon" />
            </div>
            <div className="menu__about">
                <p>Made my Matko. Provided by Njanja</p>
            </div>
        </div>
    );
};
