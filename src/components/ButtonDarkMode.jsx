import React, { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from './Icon';

const ButtonDarkMode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : "dark"
    );
    const element = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-schema: dark)")
    const option = [
        {
            icon: "sunny-outline",
            text: "light"
        },
        {
            icon: "moon-outline",
            text: "dark"
        },
        // {
        //     icon: "settings-outline",
        //     text: "system"
        // }
    ]
    function onWindowMath() {
        if (localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)) {
            element.classList.add('dark')
        } else {
            element.classList.remove('dark')
        }
    }
    onWindowMath();

    useEffect(() => {
        switch (theme) {
            case "dark":
                element.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                break;
            case "light":
                element.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                break;
            default:
                localStorage.removeItem('theme');
                onWindowMath();
                break
        }
    }, [theme]);

    darkQuery.addEventListener('change', e => {
        if (!(theme in localStorage)) {
            if (e.matches) {
                element.classList.add('dark')
            } else {
                element.classList.remove('dark')
            }
        }
    })
    return (
        <div className="fixed bottom-2 left-2">
            {theme === 'dark' ?
                <button
                    onClick={() => {
                        setTheme('light')
                    }}
                    className=' bg-gray-200   duration-200 p-2.5 rounded-full text-black hover:text-white hover:bg-gray-500 border border-white'
                >
                      <MoonIcon />
                </button>
                :
                <button
                    onClick={() => {
                        setTheme('dark')
                    }}
                    className='hover:bg-gray-600 duration-200 p-2.5 rounded-full bg-white text-black border border-black hover:text-white'
                >
                   <SunIcon />
                </button>
            }
        </div>
    );
};

export default ButtonDarkMode;