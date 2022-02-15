import { CSSProperties } from 'react';
import { FaSun } from 'react-icons/fa';

import './DayNight.css';

export const DayNight = () => {
    const style = { '--thumb-position': '50%' } as CSSProperties;
    return (
        <div className="day-night">
            <div className="day-night__icon">
                <FaSun className="day-night__icon-icon" />
            </div>
            <div className="day-night__slider">
                <div className="day-night__slider-track" />
                <div className="day-night__slider-thumb" style={style} />
            </div>
        </div>
    );
};
