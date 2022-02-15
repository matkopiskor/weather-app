import { CSSProperties, FC } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useAppContext } from '../context/context';

import './DayNight.css';

interface IProps {
    isDay: boolean;
    sunrise: string;
    sunset: string;
    position: number;
}

export const DayNight: FC<IProps> = ({ isDay, sunrise, sunset, position }) => {
    const style = { '--thumb-position': (Math.round(position * 100) / 100).toFixed(2) + '%' } as CSSProperties;

    return (
        <div className="day-night">
            <div className="day-night__icon">
                {isDay ? <FaSun className="day-night__icon-icon" /> : <FaMoon className="day-night__icon-icon" />}
            </div>
            <div className="day-night__slider">
                <div className="day-night__slider-track" />
                <div className="day-night__slider-thumb" style={style} />
                <div className="day-night__slider-values">
                    <span>{sunrise}</span>
                    <span>{sunset}</span>
                </div>
            </div>
        </div>
    );
};
