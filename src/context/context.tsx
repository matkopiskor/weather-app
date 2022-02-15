import { createContext, FC, useContext, useEffect, useMemo, useState } from 'react';
import { fetchWeather } from '../api/weather';

interface IAppContext {
    toggleMenuOpen: () => void;
    menuOpen: boolean;
    weather: any;
}

const AppContext = createContext<IAppContext>({} as IAppContext);

const AppContextProvider: FC = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [coords, setCoords] = useState<[number, number]>();
    const [weather, setWeather] = useState<any>();

    const toggleMenuOpen = () => {
        setMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        if ('geolocation' in navigator) {
            console.log('Available');
            navigator.geolocation.getCurrentPosition((position) => {
                setCoords([position.coords.latitude, position.coords.longitude]);
            });
        } else {
            alert('Cant use location');
        }
    }, []);

    useEffect(() => {
        const apiCall = async (pos: [number, number]) => {
            const data = await fetchWeather(pos);
            setWeather(data);
        };

        coords && apiCall(coords);
    }, [coords]);

    const value = useMemo(
        () => ({
            toggleMenuOpen,
            menuOpen,
            weather,
        }),
        [menuOpen, weather]
    );
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
    const { toggleMenuOpen, menuOpen, weather } = useContext(AppContext);
    return {
        toggleMenuOpen,
        menuOpen,
        weather,
    };
};

export { AppContextProvider, useAppContext };
