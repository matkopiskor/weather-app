import { useEffect, useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { useAppContext } from '../context/context';

import './Menu.css';

export const Menu = () => {
    const { toggleMenuOpen, menuOpen } = useAppContext();
    const [shouldRender, setRender] = useState<boolean>(false);

    useEffect(() => {
        if (menuOpen) {
            setRender(menuOpen);
        }
    }, [menuOpen]);

    const onAnimationEnd = () => {
        if (!menuOpen) {
            setRender(false);
        }
    };

    return (
        <>
            {shouldRender && (
                <div
                    className="menu"
                    style={{ animation: `${menuOpen ? 'slideInFromLeft' : 'slideOutToLeft'} 300ms` }}
                    onAnimationEnd={onAnimationEnd}
                >
                    <div className="menu__icon">
                        {menuOpen && <MdOutlineClose className="menu__icon-icon" onClick={toggleMenuOpen} />}
                    </div>
                    <div className="menu__about">
                        <p>Made my Matko. Provided by Njanja</p>
                    </div>
                </div>
            )}
        </>
    );
};
