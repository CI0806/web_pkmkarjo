import React, { createContext, useContext, useState, useEffect } from "react";
import { GlobalStyles } from "@mui/material";

const AccessibilityContext = createContext();

export const useAccessibility = () => {
  return useContext(AccessibilityContext);
};

export const AccessibilityProvider = ({ children }) => {
  // Load initial states from localStorage if available
  const [textSize, setTextSize] = useState(() => {
    return localStorage.getItem("a11y_textSize") || "medium";
  });

  const [highContrast, setHighContrast] = useState(() => {
    return localStorage.getItem("a11y_highContrast") === "true";
  });

  const [dyslexicFont, setDyslexicFont] = useState(() => {
    return localStorage.getItem("a11y_dyslexicFont") === "true";
  });

  // Save states to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("a11y_textSize", textSize);
    localStorage.setItem("a11y_highContrast", highContrast);
    localStorage.setItem("a11y_dyslexicFont", dyslexicFont);
  }, [textSize, highContrast, dyslexicFont]);

  const toggleHighContrast = () => setHighContrast(prev => !prev);
  const toggleDyslexicFont = () => setDyslexicFont(prev => !prev);
  const resetAccessibility = () => {
    setTextSize("medium");
    setHighContrast(false);
    setDyslexicFont(false);
  };

  const getFontSizeMultiplier = () => {
    if (textSize === "small") return 0.9;
    if (textSize === "large") return 1.2;
    return 1;
  };

  const globalStyles = (
    <GlobalStyles
      styles={{
        html: {
          fontSize: `${16 * getFontSizeMultiplier()}px !important`,
        },
        ...(dyslexicFont && {
          "*, body, .MuiTypography-root, button, input": {
            fontFamily: "'Comic Sans MS', 'OpenDyslexic', 'Lexend', 'Arial', sans-serif !important",
            letterSpacing: "0.5px !important",
            wordSpacing: "1px !important",
          }
        }),
        ...(highContrast && {
          body: {
            backgroundColor: "#0f172a !important",
            color: "#f8fafc !important",
          },
          ".MuiPaper-root": {
            backgroundColor: "#1e293b !important",
            color: "#f8fafc !important",
            borderColor: "#475569 !important",
          },
          ".MuiTypography-root": {
            color: "#f8fafc !important",
          },
          "h1, h2, h3, h4, h5, h6": {
            color: "#D4AF37 !important", // Gold for headings in high contrast
          }
        }),
      }}
    />
  );

  const value = {
    textSize,
    setTextSize,
    highContrast,
    toggleHighContrast,
    dyslexicFont,
    toggleDyslexicFont,
    resetAccessibility,
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {globalStyles}
      {children}
    </AccessibilityContext.Provider>
  );
};
