import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react"; // Icons for dark/light mode

function DarkMode() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 mr-2 rounded-full bg-gray-200 dark:bg-gray-800 transition"
        >
            {darkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-300" />}
        </button>
    );
}

export default DarkMode;
