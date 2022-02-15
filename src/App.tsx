import { DayNight } from './components/DayNight';
import { Topbar } from './components/Topbar';

export const App = () => {
    return (
        <div className="wrapper">
            <div className="app">
                <Topbar />
                <div className="container">
                    <DayNight />
                </div>
            </div>
        </div>
    );
};
