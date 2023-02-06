import { data } from "./data";
import "./sass/main.scss";
import LoadingSpinner from "./UI/LoadingSpinner";
import { Fragment, lazy, Suspense } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";

// const Home = lazy(() => import("./pages/Home"));
const Resume = lazy(() => import("./pages/Resume"));
const Letter = lazy(() => import("./pages/CoverLetter"));
// const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route
            element={
              <Layout>
                <Outlet />
              </Layout>
            }
          >
            <Route path="/" element={<Navigate to="/my-resume" replace />} />
            <Route path="/my-resume" element={<Home />} />
            <Route path="/resume" element={<Resume data={data} />} />
            <Route path="/letter" element={<Letter />} />

            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
