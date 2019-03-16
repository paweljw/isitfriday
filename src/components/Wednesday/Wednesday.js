import React from 'react'
import * as c from './Wednesday.module.scss'
import * as d from '../../styles/Day.module.scss'
import getNextDayOfWeek from "../../helpers/getNextDayOfWeek";
import {withTranslation} from "react-i18next";

const fileasFoggsTillNextFriday = date => {
  const eightyDays = 80 * 86400;
  const nextFriday = getNextDayOfWeek(date, 5);
  return ((((nextFriday - date) / 1000) / eightyDays) * 100).toFixed(7);
};

const Wednesday = ({ date, t }) => (
  <div className={[d.Day, c.Wednesday].join(' ')}>
    <img alt='sneaky' src='https://media.giphy.com/media/AcLC4R2AE6Oe4/giphy.gif' />
    <h1>{t('wednesday.header')}</h1>
    <p>
      {t('wednesday.textBefore')}
      <a href="https://en.wikipedia.org/wiki/Phileas_Fogg">{t('wednesday.textInLink')}</a>
      {t('wednesday.textAfter')}
      <code>{fileasFoggsTillNextFriday(date)}</code>
      {t('wednesday.textFinal')}
    </p>
  </div>
);

export default withTranslation()(Wednesday);
