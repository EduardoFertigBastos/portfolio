import React, { PropsWithChildren, createContext, useContext, useState } from 'react';


interface LangContextData {
  language: string;
  getLanguage(): 'en'|'pt';
  setLanguage(lang: string): void;
}

const LangContext = createContext<LangContextData>({} as LangContextData);

export const LangProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [language, setLanguage] = useState<string>(() => {
    return navigator.language;
  });

  const getLanguage = () => {
    if (language.includes('pt')) {
      return 'pt'
    }
  
    return 'en';
  }
  return (
    <LangContext.Provider
      value={{ language, getLanguage, setLanguage }}
    >
      {children}
    </LangContext.Provider>
  );
};

export function useLanguage(): LangContextData {
  const context = useContext(LangContext);

  if (!context) throw new Error('useLanguage must be used within an LangProvider');

  return context;
}
