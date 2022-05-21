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
      <div className="flex flex-col items-center justify-center h-full p-5 w-3/4 space-y-6 md:py-10 md:space-y-0 md:w-full">
        <div id="header" className="py-3 h-10 text-center">
          <Header />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-col h-full pt-5 items-center justify-center md:max-w-[1440px] md:w-full md:flex-row">
                <div className="h-full space-y-6 md:grid md:grid-cols-[350px,1090px] md:h-full md:space-y-0">
                  <div className="md:grid md:grid-rows-[350px,3fr,350px]">
                    <div className="mb-auto items-center justify-center text-center md:w-full">
                      <div id="search" className="pt-5">
                        <Search
                          countries={countries}
                          onSubmit={getCountryData}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    {countryData ? (
                      <Country countryData={countryData} />
                    ) : (
                      <div className="font-bold text-orange-500 text-xl text-center py-10 md:py-0 md:pl-36 md:text-left">
                        Waiting for you to choose a country...
                      </div>
                    )}
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
