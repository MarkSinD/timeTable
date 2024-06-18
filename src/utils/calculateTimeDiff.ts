import { timeAgo } from ".";
import { isMeetingGoing } from "./isMeetingGoing.ts";
import { timeAgoMeeting } from "./timeAgo.ts";

/**
 * Calculates the difference between a given endDate and the current endDate.
 * @param {Date} startDate - The target startDate to calculate the difference from.
 * @param {Date} endDate - The target endDate to calculate the difference from.
 * @param {string} [lang=navigator.language || "en-US"] - The language code used for formatting.
 * @returns {string} A string representing the calculated difference in `Intl` format.
 */
export const calculateDateDifference = (
  startDate: Date,
  endDate: Date,
  lang: string = navigator.language || "en-US"
): string => {
  const currentDate = new Date();
  const difference = startDate.getTime() - currentDate.getTime();
  const differenceDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  const differenceHours = Math.floor(difference / (1000 * 60 * 60));
  const differenceMinutes = Math.floor(difference / (1000 * 60));

  const differenceRemain =  endDate.getTime() - currentDate.getTime();
  const differenceRemainDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  const differenceRemainHours = Math.floor(difference / (1000 * 60 * 60));
  const differenceRemainMinutes = Math.floor(difference / (1000 * 60));
  const userLocale = lang;

  console.group()
  console.log('differenceRemain: ', differenceRemain)
  console.log('differenceRemainDays: ', differenceRemainDays)
  console.log('endDate: ', endDate)
  console.log('currentDate: ', currentDate)
  console.groupEnd()

  if (endDate < currentDate) {
    return `Встреча завершилась (${timeAgo(endDate, userLocale)})`;
  } else if (isMeetingGoing(startDate, endDate)) {
    return `Встреча закончится через ${timeAgoMeeting(endDate, userLocale)}`;
  } else if (endDate.toDateString() === currentDate.toDateString()) {
    return `Начнется ${new Intl.RelativeTimeFormat(userLocale, { numeric: "auto" }).format(
      differenceHours > 0 ? differenceHours : differenceMinutes,
      differenceHours > 0 ? "hour" : "minute"
    )}`;
  } else if (endDate.getDate() === currentDate.getDate() + 1) {
    return `Начнется ${new Intl.RelativeTimeFormat(userLocale, { numeric: "auto" }).format(1, "day")}`;
  } else if (differenceDays <= 7) {
    const dayOfWeek = new Intl.DateTimeFormat(userLocale, { weekday: "long" }).format(endDate);
    return `Начнется ${dayOfWeek} (${new Intl.RelativeTimeFormat(userLocale, { numeric: "auto" }).format(
      differenceDays,
      "day"
    )})`;
  } else {
    return `Начнется ${new Intl.RelativeTimeFormat(userLocale, { numeric: "auto" }).format(
      differenceDays,
      "day"
    )}`;
  }
};
