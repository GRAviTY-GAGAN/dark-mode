import React, { useContext } from "react";
import ThemeContext from "../Context/Context";
import AppTheme from "../Color";

const Herosection = () => {
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];
    const [themeMode, setThemeMode] = useContext(ThemeContext);
    console.log(ThemeContext);

    return (
        <div style={{
            padding: '1rem',
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
            textAlign: "center"
        }}>
            <h1>Context API theme toggler</h1>
            <p>This is a nice paragraph</p>
            <button style={{
                backgroundColor:"#26ae60",
                padding:"10px 150px",
                fontSize:'20px',
                color:'#FFF',
                border:`${currentTheme.border}` 
            }} 
        onClick={() => { setThemeMode(themeMode === 'light' ? 'dark' : 'light');
        }}
        >
            {themeMode === 'light' ? 'Turn OFF' : 'Lights ON'}
            </button>
        </div>
    );
};

export default Herosection;