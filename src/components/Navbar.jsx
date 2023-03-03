import React, { useContext, useState } from 'react';
import { ThemeContext } from '../Theme';
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { toggleFont } = useContext(ThemeContext);
    
    const options = ["sans-serif", "serif", "monospace"]

    const [selected, setSelected] = useState(() => {
        const saved = localStorage.getItem("data-font");
        const stringifiedValue = JSON.stringify(saved);
        const currentValue = JSON.parse(stringifiedValue)
        return currentValue || "";
    })
    
   

    const handleChange = (e) => {
        setSelected(e.target.value)
        toggleFont(e.target.value)
    }
  

    return (
    <nav>
        <div className="nav-content wrapper">
            {/* <img className='logo' src={logo} alt="logo" /> */}
            
            <div className="logo-wrap logo">
                <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="var(--clr-secondary)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.3801 15.27V7.57999C18.3801 6.80999 17.7601 6.25 17.0001 6.31H16.9601C15.6201 6.42 13.5901 7.11001 12.4501 7.82001L12.3401 7.89002C12.1601 8.00002 11.8501 8.00002 11.6601 7.89002L11.5001 7.79001C10.3701 7.08001 8.34012 6.40999 7.00012 6.29999C6.24012 6.23999 5.62012 6.81001 5.62012 7.57001V15.27C5.62012 15.88 6.1201 16.46 6.7301 16.53L6.9101 16.56C8.2901 16.74 10.4301 17.45 11.6501 18.12L11.6801 18.13C11.8501 18.23 12.1301 18.23 12.2901 18.13C13.5101 17.45 15.6601 16.75 17.0501 16.56L17.2601 16.53C17.8801 16.46 18.3801 15.89 18.3801 15.27Z" stroke="var(--clr-secondary)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8.1001V17.6601" stroke="var(--clr-secondary)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

            <div className="nav-right">
                {/* change font */}

                <div className="select-wrap">
                    <select 
                    className='select-font' 
                    name="font" 
                    id="font" 
                    onChange={handleChange}
                    value={selected}
                    >
                        {options.map((value) => (
                            <option value={value} key={value}>
                                {value}
                            </option>
                        ))}
                    </select>
                </div>


                {/* toggle theme */}
                <span className='toggle-theme' onClick={() => toggleTheme()}>
                    {theme === "light" ? 
                    <FiMoon size={30} stroke='var(--clr-secondary)' strokeWidth={1.5} title='toggle dark mode'/> 
                    : <FiSun size={30} stroke='var(--clr-secondary)' strokeWidth={1.5} title='toggle light mode'/>}
                </span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar