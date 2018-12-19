export default function validateNationalCode(nationalCode, required = false) {
  const blackList = [
    "0000000000",
    "1111111111",
    "2222222222",
    "3333333333",
    "4444444444",
    "5555555555",
    "6666666666",
    "7777777777",
    "8888888888",
    "9999999999"
  ];

  if (required && !nationalCode) {
    return false;
  }

  if (!required && !nationalCode) {
    return true;
  }

  if (
    !/^\d{10}$/.test(nationalCode) ||
    blackList.indexOf(nationalCode) !== -1
  ) {
    return false;
  }
  let check = parseInt(nationalCode[9]);
  let sum = 0;
  let i;
  for (i = 0; i < 9; ++i) {
    sum += parseInt(nationalCode[i]) * (10 - i);
  }
  sum %= 11;
  return (sum < 2 && check === sum) || (sum >= 2 && check + sum === 11);
}
