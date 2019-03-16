import React from 'react'
import * as c from './Sunday.module.scss'
import * as d from '../../styles/Day.module.scss'
import { withTranslation } from 'react-i18next';

const Sunday = ({ t }) => (
  <div className={[d.Day, c.Sunday].join(' ')}>
    <img alt='sneaky' src='https://media.giphy.com/media/11bV8o4fJ3vpOE/giphy.gif' />
    <h1>{t('sunday.header')}</h1>
    <p>{t('sunday.text')}</p>
  </div>
);

export default withTranslation()(Sunday);
