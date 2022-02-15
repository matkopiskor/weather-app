import { useAppContext } from '../context/context';
import './List.css';

export const List = () => {
    const { weather } = useAppContext();
    const d = weather.ob_time.replace(' ', 'T');
    const date = new Date(`${d}:00.000+00:00`);
    const parsedDate = date.toLocaleString('en-US', { timeZone: weather.timezone });
    return (
        <div className="list">
            {weather && (
                <>
                    <div className="list__item">{parsedDate}</div>
                    <div className="list__item">{weather.city_name}</div>
                    <div className="list__item">
                        <img
                            className="list__item-icon"
                            src={require(`../icons/${weather.weather.icon}.png`)}
                            alt={weather.weather.description}
                        />
                        <span>{weather.weather.description}</span>
                    </div>
                    <div className="list__item">
                        {weather.app_temp}
                        {'\u00b0'}C
                    </div>
                </>
            )}
        </div>
    );
};
