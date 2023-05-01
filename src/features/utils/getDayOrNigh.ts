export function getDayOrNight() {
  const dateCurrent = new Date();
  const hours = dateCurrent.getHours();

  if (hours >= 6 && hours < 18) {
    return 'day';
  } else {
    return 'night';
  }
}
