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
  const [countries, setCountries] = useState([]);
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const getCountries = async () => {
      const countriesFromApi = await axios.get("/countries.json");
      setCountries(countriesFromApi?.data);
    };
    getCountries();
  }, []);

  const getCountryData = async ({ country }) => {
    try {
      const countryDataFromApi = await axios.get(`/${country}?format=json`, {
        headers: {
          "Content-Type": "application/html",
        },
      });
      if (countryDataFromApi?.status === 200)
        setCountryData(countryDataFromApi?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col items-center justify-center min-h-screen h-full p-5 space-y-6 md:py-10 md:space-y-0 w-full">
        <div id="header" className="py-3 h-10 text-center">
          <Header />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-col h-full pt-5 items-center justify-center md:max-w-[1440px] w-full md:flex-row">
                <div
                  className={`h-full w-full space-y-6 grid grid-cols-1 ${
                    countryData
                      ? "grid-rows-[220px,1fr] md:grid-cols-[1fr,3fr] md:grid-rows-1"
                      : "md:grid-cols-1"
                  } md:h-full md:space-y-0`}
                >
                  <div className="md:grid md:grid-rows-[350px,3fr,350px]">
                    <div className="items-center justify-center text-center w-full">
                      <div id="search" className="pt-5">
                        <Search
                          countries={countries}
                          onSubmit={getCountryData}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    {countryData && <Country countryData={countryData} />}
                  </div>
                </div>
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
