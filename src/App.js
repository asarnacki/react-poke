import "./App.css";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="p-14">
      <Link to='/' className="flex justify-center text-4xl text-yellow-700">Pokemon picker</Link>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about/:idx" element={<AboutView />}/>
      </Routes>
      {/* <HomeView></HomeView> */}
    </div>
  );
}

export default App;
