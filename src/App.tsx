import { useEffect, Suspense } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { supabase } from "./backend/supabase/client";
import { lazy } from "react";

const UserAdmin = lazy(() =>
  import("./Admin/UserAdmin/UserAdmin").then((module) => ({
    default: module.UserAdmin,
  }))
);
const NavBar = lazy(() =>
  import("./components/NavBar/NavBar").then((module) => ({
    default: module.NavBar,
  }))
);
const SignIn = lazy(() =>
  import("./Admin/SignIn/SignIn").then((module) => ({ default: module.SignIn }))
);
const Apoyo = lazy(() =>
  import("./components/Apoyo/Apoyo").then((module) => ({
    default: module.Apoyo,
  }))
);
const Footer = lazy(() =>
  import("./components/Footer/Footer").then((module) => ({
    default: module.Footer,
  }))
);
const Proyectos = lazy(() =>
  import("./components/Proyectos/Proyectos").then((module) => ({
    default: module.Proyectos,
  }))
);
const Banner = lazy(() =>
  import("./components/Banner").then((module) => ({ default: module.Banner }))
);
const Contact = lazy(() =>
  import("./components/Form/Form").then((module) => ({ default: module.Contact }))
);
const CarouselComponent = lazy(() =>
  import("./components/Carousel/Carousel").then((module) => ({
    default: module.CarouselComponent,
  }))
);

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const navigate = useNavigate();

  const guardFunction = () => {
    supabase.auth.onAuthStateChange((event, session) => {
      session
        ? navigate("/admin", { replace: true })
        : navigate("/", { replace: true });
    });
  };

  useEffect(() => {
    guardFunction();
  }, []);

  return (
    <section className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Banner />
              <CarouselComponent />
              <Contact />
              <Apoyo />
              <Proyectos />
              <Footer />
            </>
          }
        />
        <Route path="/signin-admin" element={<SignIn />} />
        <Route path="/admin" element={<UserAdmin />} />
      </Routes>
    </section>
  );
}

export default App;
