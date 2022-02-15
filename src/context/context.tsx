import { createContext, FC, useContext, useMemo, useState } from 'react';

interface IAppContext {
    toggleMenuOpen: () => void;
    menuOpen: boolean;
}

const AppContext = createContext<IAppContext>({} as IAppContext);

const AppContextProvider: FC = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const toggleMenuOpen = () => {
        setMenuOpen((prev) => !prev);
    };

    const value = useMemo(
        () => ({
            toggleMenuOpen,
            menuOpen,
        }),
        [menuOpen]
    );
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
    const { toggleMenuOpen, menuOpen } = useContext(AppContext);
    return {
        toggleMenuOpen,
        menuOpen,
    };
};

export { AppContextProvider, useAppContext };
