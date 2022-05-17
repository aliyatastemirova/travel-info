import "./App.css";
import About from "./components/About";
import Country from "./components/Country";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [countries, setCountries] = useState(null);
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const getCountries = async () => {
      const countriesFromApi = await axios.get(
        "https://travelbriefing.org/countries.json"
      );
      setCountries(countriesFromApi?.data);
    };

    const getCountryData = async (country) => {
      const countryDataFromApi = await axios.get(
        `https://travelbriefing.org/${country}?format=json`,
        {
          headers: {
            "Content-Type": "application/html",
          },
        }
      );
      setCountryData(countryDataFromApi?.data);
    };
    getCountries();
    getCountryData("Belgium");
  }, []);

  return (
    <BrowserRouter>
      <div className="flex flex-col items-center justify-center h-full py-10">
        <div id="header" className="py-3 h-10">
          <Header />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="mb-auto w-full items-center justify-center text-center md:w-1/3">
                <div id="search" className="py-5">
                  <Search countries={countries} />
                </div>
                <Country countryData={countryData} />
              </div>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer className="h-10" />
      </div>
    </BrowserRouter>
  );
}

export default App;
