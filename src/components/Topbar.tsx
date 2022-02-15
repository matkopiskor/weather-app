import { MdMenu } from 'react-icons/md';
import { BiSearchAlt2 } from 'react-icons/bi';

import './Topbar.css';

export const Topbar = () => {
    return (
        <div className="topbar">
            <MdMenu className="topbar__icon" />
            <BiSearchAlt2 className="topbar__icon" />
        </div>
    );
};
