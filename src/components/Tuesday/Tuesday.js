import React from 'react'
import * as c from './Tuesday.module.scss'
import * as d from '../../styles/Day.module.scss'
import getNextDayOfWeek from "../../helpers/getNextDayOfWeek";
import {withTranslation} from "react-i18next";

const caesium133TillNextFriday = date => {
  const nextFriday = getNextDayOfWeek(date, 5);
  return Math.floor(((nextFriday - date) / 1000) * 9192631770)
};

const Tuesday = ({ date, t }) => (
  <div className={[d.Day, c.Tuesday].join(' ')}>
    <img alt='oscillation' src='https://media.giphy.com/media/qYW82HZYn7fOM/giphy.gif' />
    <h1>{t('tuesday.header')}</h1>
    <p>
      {t('tuesday.textBefore')}
      <code>{caesium133TillNextFriday(date)}</code>
      {t('tuesday.textAfter')}
      <a href="https://en.wikipedia.org/wiki/Caesium_standard">
        {t('tuesday.textInLink')}
      </a>.
    </p>
  </div>
);

export default withTranslation()(Tuesday);
