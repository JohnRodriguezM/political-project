import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { supabase } from "./backend/supabase/client";

import UserAdmin from "./Admin/UserAdmin/UserAdmin";
import SignIn from "./Admin/SignIn/SignIn";
import Apoyo from "./components/Apoyo/Apoyo";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Proyectos from "./components/Proyectos/Proyectos";

import { Banner } from "./components/Banner";
import { Contact } from "./components/Form/Form";
import { CarouselComponent } from "./components/Carousel/Carousel";

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
