import { useContext, useEffect, useState } from "react";
import "./App.css";
import { routersConfig } from "./routes/routes";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SidebarContainer from "./shared/containers/SidebarContainer/SidebarContainer";
import ErrorPageContainer from "./shared/containers/ErrorPageContainer/ErrorPageContainer";
import { AppThemeContext } from "./store/Store";
import ThemeToggleButtons from "./components/ThemeToggleButtons/ThemeToggleButtons";

function App() {
  const { lightTheme, setLightTheme } = useContext(AppThemeContext);
  const [compval, setCompval] = useState(true);

  useEffect(() => {
    if (screen.width < 900) {
      setCompval(false);
    } else {
      setCompval(true);
    }
  }, []);

  useEffect(() => {
    if (lightTheme) {
      document.body.classList.remove("dark-theme");
    } else {
      document.body.classList.add("dark-theme");
    }

    return function cleanup() {
      document.body.classList.remove("dark-theme");
    };
  }, [lightTheme]);
  console.log(lightTheme);

  return (
    <>
      <div className="app-container">
        <ThemeToggleButtons
          lightTheme={lightTheme}
          setLightTheme={setLightTheme}
        />
        <Router>
          {compval && <SidebarContainer />}
          <Routes>
            <>
              <Route path="/" element={<Navigate to="/home" />} />
              {routersConfig.routes.map((route) => {
                return (
                  <Route
                    key={route.name}
                    path={route.url}
                    element={route.component}
                    errorElement={<ErrorPageContainer />}
                  />
                );
              })}
            </>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
