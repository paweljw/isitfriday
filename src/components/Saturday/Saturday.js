import React from 'react'
import * as c from './Saturday.module.scss'
import * as d from '../../styles/Day.module.scss'
import {withTranslation} from "react-i18next";

const Saturday = ({ t }) => (
  <div className={[d.Day, c.Saturday].join(' ')}>
    <img alt='fiesta' src='https://media.giphy.com/media/5w29Gbi6y8iu0aYpcd/giphy.gif' />
    <h1>{t('saturday.header')}</h1>
    <p>{t('saturday.text')}</p>
  </div>
);

export default withTranslation()(Saturday);
