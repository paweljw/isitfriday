import getNextDayOfWeek from "../helpers/getNextDayOfWeek";

export function handler(event, context, callback) {
  const date = new Date();
  const dayOfWeek = date.getDay();
  const nextFriday = getNextDayOfWeek(date, 5);
  const distance = Math.floor((nextFriday - date) / 1000);
  callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ isFriday: dayOfWeek === 5, secsUntilNextFridayMidnight: distance })
  })
}
