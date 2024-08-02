// export const formatDate = (dateString) => {
//   const date = new Date(dateString);
//   const formattedDateString = `${formatNumber(
//     date.getMonth() + 1,
//     2
//   )}/${formatNumber(date.getDate(), 2)}/${date.getFullYear()}`;
//   const hours12Format = date.getHours() % 12 || 12;
//   const amPm = date.getHours() < 12 ? 'AM' : 'PM';

//   return `${formattedDateString}, ${hours12Format}:${formatNumber(
//     date.getMinutes(),
//     2
//   )} ${amPm}`;
// };
export const formatDay = (dateString) => {
  const date = new Date(dateString);
  const formattedDateString = `${formatNumber(
    date.getMonth() + 1,
    2
  )}/${formatNumber(date.getDate(), 2)}/${date.getFullYear()}`;
  return `${formattedDateString}`;
};
export const formatNumber = (number, length) => {
  return String(number).padStart(length, '0');
};
