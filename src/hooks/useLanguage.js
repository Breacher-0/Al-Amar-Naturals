import { useState, useEffect } from 'react';
import { translations } from '../translations';

export function useLanguage() {
  const [lang, setLang] = useState('en'); // Default to English before mounting

  useEffect(() => {
    // Detect preferred language from user's device setting (browser)
    const browserLang = navigator.language.toLowerCase();
    
    let activeLang = 'en'; // Force default English
    if (browserLang.startsWith('tr')) activeLang = 'tr';
    if (browserLang.startsWith('ar')) activeLang = 'ar';

    setLang(activeLang);
  }, []);

  useEffect(() => {
    // Automatically apply native right-to-left UI mechanics in the DOM
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key) => {
    return translations[lang]?.[key] || translations['en'][key];
  };

  return { lang, t };
}
