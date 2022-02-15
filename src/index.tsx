import { render } from 'react-dom';
import { App } from './App';
import { AppContextProvider } from './context/context';

import './styles/reset.css';
import './styles/style.css';

render(
    <AppContextProvider>
        <App />
    </AppContextProvider>,
    document.getElementById('root')
);
