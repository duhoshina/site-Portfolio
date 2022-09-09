import React, { useState } from 'react'

import styles from './Style.module.css'

import * as S from './style'

const SectionGame = () => {

  const [checkBoxValue1, SetCheckBoxValue1] = useState<boolean>(false);
  const [checkBoxValue2, SetCheckBoxValue2] = useState<boolean>(false);
  const [checkBoxValue3, SetCheckBoxValue3] = useState<boolean>(false);
  const [resetChecked1, SetResetChecked1] = useState<boolean>(false)
  const [resetChecked2, SetResetChecked2] = useState<boolean>(false)
  const [resetChecked3, SetResetChecked3] = useState<boolean>(false)

  const verifyChecked1 = (event: any) => {
    SetResetChecked1(true)

    if(event.target.checked) {
      SetCheckBoxValue1(true);
    }
  }

  const verifyChecked2 = (event: any) => {
    SetResetChecked2(true)

    if(event.target.checked) {
      SetCheckBoxValue2(true);
    }
  }
  
  const verifyChecked3 = (event: any) => {
    SetResetChecked3(true)

    if(event.target.checked) {
      SetCheckBoxValue3(true);
    }
  }

  const resetButton = (event: any) => {
    SetCheckBoxValue1(false);
    SetCheckBoxValue2(false);
    SetCheckBoxValue3(false);
    SetResetChecked1(false);
    SetResetChecked2(false);
    SetResetChecked3(false);

  }

  return (
    <S.Section>
        <h2 className={styles.title}>My skills are out of control </h2>
        <h3 className={styles.subtitle}>I love manipulating technology through my programming skills. Currently, I have been so bewildered that the technologies will be all jumbled up inside my mind.</h3>
        <div className={styles.box}>
          <label>
            <input type="checkbox" className={styles.checkbox} id='chk1' onClick={verifyChecked1} checked={resetChecked1} disabled={checkBoxValue1}/>
            <i></i>
          </label>
          <label>
            <input type="checkbox" className={styles.checkbox} id='chk2' onClick={verifyChecked2} checked={resetChecked2} disabled={checkBoxValue2}/>
            <i></i>
          </label>
          <label>
            <input type="checkbox" className={styles.checkbox} id='chk3' onClick={verifyChecked3} checked={resetChecked3} disabled={checkBoxValue3}/>
            <i></i>
          </label>
        </div>
        <button className={styles.reset} onClick={resetButton} >Reset Game</button>
    </S.Section>
  )
}

export default SectionGame