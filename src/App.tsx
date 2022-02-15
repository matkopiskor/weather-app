import { DayNight } from './components/DayNight';
import { List } from './components/List';
import { Topbar } from './components/Topbar';

export const App = () => {
    return (
        <div className="wrapper">
            <div className="app">
                <Topbar />
                <div className="container">
                    <DayNight />
                    <List />
                </div>
            </div>
        </div>
    );
};
