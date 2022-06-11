import {createContext, useContext} from 'react';
export const filterContext = createContext(null);

export function useFilterContext() {
    return useContext(filterContext);
}

export function FilterProvider({defaultFilter = '', children}) {
    const [filter, setFilter] = useState(defaultFilter);

    function specialLogicForFilter() {
        //setFilter
    }

    const contextValue = {myValue: 123, filter, specialLogicForFilter};

    return (
        <filterContext.Provider value={contextValue}>
            {children}
        </filterContext.Provider>
    );
}
