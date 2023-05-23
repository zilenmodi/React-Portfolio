import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { webLabels } from "../common/webLabels";

export const Context = createContext();
export const AppThemeContext = createContext();

const initialState = {
  globals: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_WEB_LABELS":
      return { ...state, globals: action.payload };
    default:
      return state;
  }
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [lightTheme, setLightTheme] = useState(true);
  useEffect(() => {
    dispatch({ type: "SET_WEB_LABELS", payload: webLabels });
  }, []);
  return (
    <>
      <AppThemeContext.Provider value={{ lightTheme, setLightTheme }}>
        <Context.Provider value={{ state, dispatch }}>
          {children}
        </Context.Provider>
      </AppThemeContext.Provider>
    </>
  );
};

export default Store;
