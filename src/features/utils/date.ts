const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function formatDate(date: string) {
  const dateParts = date.split('/');

  const month = parseInt(dateParts[1], 10) - 1;
  const day = dateParts[0];

  const dateFormat = `${months[month]}, ${day}`;

  return dateFormat;
}
