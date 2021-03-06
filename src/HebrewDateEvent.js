import {Event, flags} from './event';
import gematriya from 'gematriya';
import {Locale} from './locale';

/** Daily Hebrew date ("11th of Sivan, 5780") */
export class HebrewDateEvent extends Event {
  /**
   * @param {HDate} date
   */
  constructor(date) {
    super(date, date.toString(), flags.HEBREW_DATE);
  }
  /**
   * @param {string} [locale] Optional locale name (defaults to active locale).
   * @example
   * import {HDate, HebrewDateEvent, months} from '@hebcal/core';
   *
   * const hd = new HDate(15, months.CHESHVAN, 5769);
   * const ev = new HebrewDateEvent(hd);
   * console.log(ev.render()); // '15th of Cheshvan, 5769'
   * console.log(ev.render('he')); // 'ט״ו חֶשְׁוָן תשס״ט'
   * @return {string}
   */
  render(locale) {
    const locale0 = locale || Locale.getLocaleName();
    const hd = this.getDate();
    return locale0 == 'he' ? hd.renderGematriya() : hd.render(locale0);
  }
  /**
   * Helper function to render a Hebrew date
   * @param {number} day
   * @param {string} monthName
   * @param {number} fullYear
   * @return {string}
   */
  static renderHebrew(day, monthName, fullYear) {
    return gematriya(day) + ' ' + monthName + ' ' + gematriya(fullYear, {limit: 3});
  }
}
