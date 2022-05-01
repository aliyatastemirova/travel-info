import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col items-center py-10 space-x-6">
      <div className="flex flex-row">
        <div id="header">
          <Header />
        </div>
      </div>
    </div>
  );
}

export default App;
