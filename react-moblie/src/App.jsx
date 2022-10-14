import { Component, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "./config/routes";
import Loading from "./pages/loading";
import "./App.less";
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Suspense fallback={<Loading />}>
          <Routes>
            {routes.map((routeObj) => (
              <Route key={routeObj.path} {...routeObj} />
            ))}
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </Suspense>
      </div>
    );
  }
}
