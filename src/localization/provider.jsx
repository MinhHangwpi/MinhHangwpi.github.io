import { initialState, reducer } from './reducer';
import React from "react";

export const LocalizationContext = React.createContext();

export function LocalizationProvider({ children }) {
    const localizationStore = React.useReducer(reducer, initialState);
    
    return (
        <LocalizationContext.Provider value={{ localizationStore }}>
            {children}
        </LocalizationContext.Provider>
    );
}