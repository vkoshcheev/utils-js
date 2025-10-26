/**
 * @example "11:52:11 17.04.24 Europe/Moscow"
 */
export function formatUnixTimeToDateMoscowTime (unixTime: string | number) {
  const date = new Date(typeof unixTime === 'number' ? unixTime : parseInt(unixTime));

  const timeZone = 'Europe/Moscow';
  const timeOptions: Intl.DateTimeFormatOptions = {
    timeZone,
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  const dateOptions: Intl.DateTimeFormatOptions = {
    timeZone,
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  };

  const timeString = date.toLocaleString('ru-RU', timeOptions);
  const dateString = date.toLocaleString('ru-RU', dateOptions);

  return `${timeString} ${dateString} ${timeZone}`;
}