import React, { useState, useEffect, useContext } from "react";
import { SettingsContext } from "./settingsContext";

const defaultSettings = {
  theme: 'light',
  language: 'en',
};

export const SettingsProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultSettings.theme);
  const [language, setLanguage] = useState(defaultSettings.language);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('app-settings');
    if (savedData) {
      const parsedData = JSON.parse(savedData); 
      setTheme(parsedData.theme);
      setLanguage(parsedData.language);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const settingsToSave = { theme, language };
      localStorage.setItem('app-settings', JSON.stringify(settingsToSave)); 
    }
  }, [theme, language, isLoaded]);

  const resetSettings = () => {
    setTheme(defaultSettings.theme);
    setLanguage(defaultSettings.language);
  };

  return (
    <SettingsContext.Provider 
      value={{ theme, setTheme, language, setLanguage, resetSettings }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  return useContext(SettingsContext);
};