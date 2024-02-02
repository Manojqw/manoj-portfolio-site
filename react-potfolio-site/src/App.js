import Navbar from "./components/navbar/navbar";
import Home from "./components/Home/home";
import Client from "./components/Client/client";
import Work from "./components/Work/work";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Client/>
     <Work />
    </div>
  );
}

export default App;



