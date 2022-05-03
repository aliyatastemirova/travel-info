import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Country from "./components/Country";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch("https://travelbriefing.org/countries.json");
      const data = await res.json();
      if (data) return data;
      alert("The API is down. Please try again later.");
    };

    const getCountries = async () => {
      const countriesFromApi = await fetchCountries();
      setCountries(countriesFromApi);
    };
    getCountries();
  }, []);

  return (
    <Router>
      <div className="flex flex-col items-center justify-center h-screen py-10">
        <div id="header" className="py-3 h-10">
          <Header />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="mb-auto w-full items-center justify-center text-center md:w-1/3">
                <div id="search" className="py-5">
                  {countries ? (
                    <Search countries={countries} />
                  ) : (
                    alert("The API is down. Please try again later.")
                  )}
                </div>
                <Country country={"Belgium"} />
              </div>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer className="h-10" />
      </div>
    </Router>
  );
}

export default App;
