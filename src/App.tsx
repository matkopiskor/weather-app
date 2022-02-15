import { DayNight } from './components/DayNight';
import { List } from './components/List';
import { Menu } from './components/Menu';
import { Topbar } from './components/Topbar';
import { useAppContext } from './context/context';
import Animated from 'react-mount-animation';

export const App = () => {
    const { menuOpen } = useAppContext();
    return (
        <div className="wrapper">
            <div className="app">
                <Topbar />
                <div className="container">
                    <DayNight />
                    <List />
                </div>
            </div>
            <Menu />
        </div>
    );
};
