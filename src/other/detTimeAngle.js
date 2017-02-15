export default(hours, minutes) => {
  const positionHoursHand = ((360 / 12) * (hours % 12)) + ((360 / 12) * (minutes / 60));
  const positionMinutesHand = (360 / 60) * minutes;
  return positionHoursHand > positionMinutesHand ?
  Math.abs(positionHoursHand - positionMinutesHand) :
  Math.abs(positionMinutesHand - positionHoursHand);
};
