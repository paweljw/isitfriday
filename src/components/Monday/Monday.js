import React from 'react'
import { withTranslation } from "react-i18next";
import * as c from './Monday.module.scss'
import * as d from '../../styles/Day.module.scss'
import getNextDayOfWeek from "../../helpers/getNextDayOfWeek";

const secondsTillNextFriday = date => {
  const nextFriday = getNextDayOfWeek(date, 5);
  return ((nextFriday - date) / 1000).toFixed(3)
};

const Monday = ({ date, t }) => (
  <div className={['Monday', d.Day, c.Monday].join(' ')}>
    <img alt='monday' src='https://media.giphy.com/media/pBB3ZsXQPCRsA/giphy.gif' />
    <h1>{t('monday.header')}</h1>
    <p>{t('monday.textBefore')}<code>{secondsTillNextFriday(date)}</code>{t('monday.textAfter')}</p>
  </div>
);

export default withTranslation()(Monday);
