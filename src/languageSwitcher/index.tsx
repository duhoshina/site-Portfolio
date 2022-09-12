import brFlag from '../assets/flags/brasil.png'
import euaFlag from '../assets/flags/estados-unidos.png'

import { useTranslation } from 'react-i18next'

const languageOptions = [
  {
    name: "English",
    value: "en",
    flag: euaFlag
  },
  {
    name: "Português",
    value: "pt",
    flag: brFlag
  }
]

export const LanguageSwitcher = () => {

  const { t, i18n } = useTranslation();

  return (
      <div className='language-switcher'>
        <span>{t("selectYourLanguage")}</span>
  
        {languageOptions.map((languageOptions) => (
          <button
            key={languageOptions.value}
            onClick={() => {
              i18n.changeLanguage(languageOptions.value)
            }}
          >
            <img src={languageOptions.flag} alt={languageOptions.name} />
            <span>{languageOptions.name}</span>
          </button>
        ))}
  
      </div>
  );
}