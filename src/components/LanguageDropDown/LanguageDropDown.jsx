import React from 'react'
import './LanguageDropDown.scss'
import DropDownVector from '../../../src/images/DropDownVector.svg?url'

const LanguageDropDown = () => {
  return (
    <div className="dropDownList">
        <button className="dropDownButton">EN<img className="dropDownVector" src={DropDownVector} alt=""/></button>
        <ul className="dropDownList-content">
            <li href="#">EN</li>
            <li href="#">RU</li>
        </ul>
    </div>
  )
}

export default LanguageDropDown
