import { CSSProperties } from 'react';
import { DayNight } from './components/DayNight';
import { List } from './components/List';
import { Menu } from './components/Menu';
import { Topbar } from './components/Topbar';
import { useAppContext } from './context/context';

const calcDay = (dateTS: number, sunriseTS: number, sunsetTS: number): number => {
    const adjustedSunsetTS = sunsetTS - sunriseTS;
    const adjustedDateTS = dateTS - sunriseTS;

    console.log(adjustedDateTS, adjustedSunsetTS);

    return (adjustedDateTS / adjustedSunsetTS) * 100;
};

const calcNight = (dateTS: number, sunriseTS: number, sunsetTS: number): number => {
    const sunriseTSPlusOne = sunriseTS + 86400000;
    const adjustedSunsetTS = sunriseTSPlusOne - sunsetTS;
    const adjustedDateTS = dateTS - sunsetTS;

    console.log(adjustedDateTS, adjustedSunsetTS);

    return (adjustedDateTS / adjustedSunsetTS) * 100;
};

export const App = () => {
    const { weather } = useAppContext();
    if (!weather) {
        return null;
    }
    const d = weather.datetime.substring(0, 10);
    const sunriseDate = new Date(`${d}T${weather.sunrise}:00.000+00:00`);
    const sunsetDate = new Date(`${d}T${weather.sunset}:00.000+00:00`);

    const sunriseTS = sunriseDate.valueOf();
    const sunsetTS = sunsetDate.valueOf();

    const currD = weather.ob_time.replace(' ', 'T');
    const date = new Date(`${currD}:00.000+00:00`);
    const dateTS = date.valueOf();

    const isDay = dateTS >= sunriseTS && dateTS <= sunsetTS;

    const position = isDay ? calcDay(dateTS, sunriseTS, sunsetTS) : calcNight(dateTS, sunriseTS, sunsetTS);

    const style = {
        '--bg': isDay ? 'var(--bg-day)' : 'var(--bg-night)',
        '--blur': isDay ? 'var(--bg-night)' : 'var(--blur-night)',
    } as CSSProperties;

    return (
        <div className="wrapper" style={style}>
            <div className="app">
                <Topbar />
                <div className="container">
                    <DayNight
                        isDay={isDay}
                        sunrise={isDay ? weather.sunrise : weather.sunset}
                        sunset={isDay ? weather.sunset : weather.sunrise}
                        position={position}
                    />
                    <List />
                </div>
            </div>
            <Menu />
        </div>
    );
};
