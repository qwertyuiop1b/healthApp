export function getCurrentTime() {
  const date = new Date();
  const year = date.getFullYear();
  const month = paddingZero(date.getMonth() + 1);
  const day = paddingZero(date.getDate());
  const hour = paddingZero(date.getHours());
  const min = paddingZero(date.getMinutes());
  const sec = paddingZero(date.getSeconds());
  return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
}

export function paddingZero(num) {
  const number = Number(num);
  if (isNaN(number)) {
    return num;
  }
  return number < 10 ? '0' + number : number;
}
