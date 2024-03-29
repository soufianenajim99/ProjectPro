import "./App.css";
import { motion } from "framer-motion";
import Navbaar from "./components/Navbaar";

import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbaar className="dark text-foreground bg-background" />
      <Hero />
    </>
  );
}

export default App;
