import React from 'react'
import * as c from './Thursday.module.scss'
import * as d from '../../styles/Day.module.scss'
import getNextDayOfWeek from "../../helpers/getNextDayOfWeek";
import {withTranslation} from "react-i18next";

const lightKilometresTillNextFriday = date => {
  const kps = 299792;
  const nextFriday = getNextDayOfWeek(date, 5);
  return Math.floor(((nextFriday - date) / 1000) * kps);
};

const Thursday = ({ date, t }) => (
  <div className={[d.Day, c.Thursday].join(' ')}>
    <img alt='sneaky' src='https://media.giphy.com/media/3oFzm4qdAdgWjTBidG/giphy.gif' />
    <h1>{t('thursday.header')}</h1>
    <p>
      {t('thursday.textBefore')}
      <code>{lightKilometresTillNextFriday(date)}</code>
      {t('thursday.textAfter')}
    </p>
  </div>
);

export default withTranslation()(Thursday);
