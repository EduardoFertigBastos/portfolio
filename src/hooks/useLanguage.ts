export function useLanguage() {
  const userLang = navigator.language;

  if (userLang.includes('pt')) {
    return 'pt'
  }

  return 'en';
}