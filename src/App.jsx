import { useEffect, useState } from "react";
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

function App() {
  const [compval, setCompval] = useState(true);

  useEffect(() => {
    if (screen.width < 900) {
      setCompval(false);
    } else {
      setCompval(true);
    }
  }, []);

  return (
    <>
      <div className="app-container">
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
