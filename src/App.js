import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div id="header" className="flex flex-row py-3">
        <Header />
      </div>
      <div
        id="search"
        className="flex flex-col py-5 w-full items-center justify-center text-center md:w-1/3"
      >
        <Search />
      </div>
    </div>
  );
}

export default App;
