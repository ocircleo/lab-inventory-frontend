"use client";
import { useEffect } from "react";

const ThemeCompo = () => {
    const changeTheme = (e) => {
        e.stopPropagation();
        let theme_icon = document.getElementById("theme-controller");
        let is_checked = theme_icon.checked;

        if (is_checked) localStorage.setItem("theme", "dark");
        else localStorage.setItem("theme", "light");
    };
    const stopPropagation = (e) => e.stopPropagation()

    useEffect(() => {
        let theme_ref = document.getElementById("theme-controller");
        theme_ref.addEventListener("change", changeTheme);
        theme_ref.addEventListener("click", stopPropagation)
        //is_checked == true == dark theme on
        let is_checked = theme_ref.checked;
        let stored_theme = localStorage.getItem("theme");
        if (!stored_theme) return;

        if (stored_theme == "dark" && !is_checked) theme_ref.click();
        return () => {
            theme_ref.removeEventListener("click", stopPropagation)
            theme_ref.removeEventListener("change", changeTheme)
        };
    }, []);
    return (
        <input
            type="checkbox"
            className="theme-controller"
            hidden
            id="theme-controller"
            value="dark"
        />
    );
}

export default ThemeCompo;
