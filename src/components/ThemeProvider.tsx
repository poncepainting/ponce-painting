import React from 'react';
import { createCssColorVariables } from '@/utils/themeUtils';

interface ThemeProviderProps {
  children: React.ReactNode;
}

/**
 * ThemeProvider component that injects theme CSS variables into the document
 * This helps modularize the theme initialization logic
 */
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const themeCssVariables = createCssColorVariables();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: themeCssVariables }} />
      {children}
    </>
  );
};

export default ThemeProvider;
