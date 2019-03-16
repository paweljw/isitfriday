const getNextDayOfWeek = (date, dayOfWeek) => {
  var resultDate = new Date(date.getTime());
  resultDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7);
  resultDate.setHours(0, 0, 0, 0)
  return resultDate;
};

export default getNextDayOfWeek;
