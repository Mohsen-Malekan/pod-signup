function iso7064Mod97_10(iban) {
  let remainder = iban;
  let block;

  while (remainder.length > 2) {
    block = remainder.slice(0, 9);
    remainder = (parseInt(block, 10) % 97) + remainder.slice(block.length);
  }

  return parseInt(remainder, 10) % 97;
}

export default function validateIranianSheba(sheba, required = false) {
  var pattern = /IR[0-9]{24}/;

  if (required && !sheba) {
    return false;
  }

  if (!required && !sheba) {
    return true;
  }

  if (sheba.length !== 26) {
    return false;
  }

  if (!pattern.test(sheba)) {
    return false;
  }

  var newStr = sheba.substr(4);
  var d1 = sheba.charCodeAt(0) - 65 + 10;
  var d2 = sheba.charCodeAt(1) - 65 + 10;
  newStr += d1.toString() + d2.toString() + sheba.substr(2, 2);

  var remainder = iso7064Mod97_10(newStr);
  if (remainder !== 1) {
    return false;
  }

  return true;
}
