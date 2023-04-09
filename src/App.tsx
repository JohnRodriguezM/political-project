import "./css/App.css";

import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "./components/Banner";
import { CarouselComponent } from "./components/Carousel/Carousel";
import { Contact } from "./components/Form/Form";

import { Routes, Route } from "react-router-dom";
import UserAdmin from "./Admin/UserAdmin";
import SignIn from "./Admin/SignIn/SignIn";
import Footer from "./components/Footer/Footer";
import { supabase } from "./backend/supabase/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      /*console.log(session);
      console.log(event);*/
      if (session) {
        return navigate("/admin", {
          replace: true,
        });
      }
      return navigate("/", {
        replace: true,
      });
    });
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
