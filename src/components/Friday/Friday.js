import React from 'react'
import * as c from './Friday.module.scss'
import * as d from '../../styles/Day.module.scss'
import {withTranslation} from "react-i18next";

const Friday = ({ t }) => (
  <div className={[d.Day, c.Friday].join(' ')}>
    <img alt='friday' src='https://media.giphy.com/media/2A2I4d2vodmQE2yJZ4/giphy.gif' />
    <h1>{t('friday.header')}</h1>
    <p>{t('friday.textBeforeBeer')}<span role='img' aria-label='beers'>🍻</span></p>
  </div>
);

export default withTranslation()(Friday);
