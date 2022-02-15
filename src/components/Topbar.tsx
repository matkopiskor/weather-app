import { MdMenu } from 'react-icons/md';
import { BiSearchAlt2 } from 'react-icons/bi';

import './Topbar.css';
import { useAppContext } from '../context/context';

export const Topbar = () => {
    const { toggleMenuOpen, menuOpen } = useAppContext();
    return (
        <div className="topbar">
            {!menuOpen ? <MdMenu className="topbar__icon" onClick={toggleMenuOpen} /> : <div></div>}
            <BiSearchAlt2 className="topbar__icon" />
        </div>
    );
};
