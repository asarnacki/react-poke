import "./App.css";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="p-14">
      <Link to='/' className="flex justify-center text-4xl text-yellow-700">Pokemon picker</Link>
      <HomeView name="" url=""></HomeView>
      <Routes>
        {/* <Route path="/" element={<HomeView name="" url="" />} /> */}
        <Route path="/about/:idx" element={<AboutView />}/>
      </Routes>
      
  
    </div>
  );
}

export default App;
