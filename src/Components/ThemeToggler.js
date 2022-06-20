import React, { useState } from "react";
import ThemeContext from "../Context/Context";

const ThemeToggler = () => {
    const [themeMode] = useState(ThemeContext);

    return(
        <div>
            <span>{themeMode === "light" ? "Turn Off" : "Lights On"}</span>
        </div>
    );
};

export default ThemeToggler;