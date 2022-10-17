import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
//
import { publicRoutes } from "./config/Routes";
import DefaultLayout from "./components/Layout/DefaultLayout/DefaultLayout";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
