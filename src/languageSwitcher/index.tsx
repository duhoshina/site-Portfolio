import * as S from './style'

import { useTranslation } from 'react-i18next'
import { useState } from 'react'

/* <S.ContainerLanguage>
      <S.StyledSpan>{t("selectYourLanguage")}</S.StyledSpan>

      {languageOptions.map((languageOptions) => (
        <S.StyledButton
          key={languageOptions.value}
          onClick={() => {
            i18n.changeLanguage(languageOptions.value)
          }}
        >
          <img src={languageOptions.flag} alt={languageOptions.name} />
          <span>{languageOptions.name}</span>
        </S.StyledButton>
      ))}
    </S.ContainerLanguage> */

export const LanguageSwitcher = () => {

  const { t, i18n } = useTranslation();

  const [InputValue, setInputValue] = useState<string>(t('selectYourLanguage'))
  const [showSwitcher, setShowSwitcher] = useState<boolean>(false)

  const SwitcherLanguage = (object: any) => {
    setInputValue(object.target.outerText)
    i18n.changeLanguage(object.target.outerText)
  }

  const showDropdown = (value: boolean) => {
    value === true ? setShowSwitcher(false) : setShowSwitcher(true)
  }

  return (
    <S.ContainerDropdown onClick={() => showDropdown(showSwitcher)}>
      <S.StyledInputTextBox type='text' value={InputValue} />
      {showSwitcher &&
        <S.ContainerOption>
          <S.StyledOption onClick={SwitcherLanguage}>English</S.StyledOption>
          <S.StyledOption onClick={SwitcherLanguage}>Português</S.StyledOption>
        </S.ContainerOption>
      }
    </S.ContainerDropdown>
  );
}