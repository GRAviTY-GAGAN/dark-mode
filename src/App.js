import React, { useState } from "react";
import Header from "./Components/Header";
import Herosection from "./Components/HeroSection";
import ThemeContext from "./Context/Context";

const App = () => {
  const themeHook = useState('light');
  return(
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />
        <Herosection />
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
