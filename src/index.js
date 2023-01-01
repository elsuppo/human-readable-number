const arrTo19 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

const arrDecade = ['eleven', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

// module.exports = 

module.exports = function toReadable (number) {
  let result = '';
  if (number === 0) {
    result = arrTo19[number];
  } else if (number.toString().length === 1 || number <= 19) {
    result = arrTo19[number]
  } else if (number.toString().length === 2) {
    let firstDigit = +number.toString()[0];
    let secondDigit = +number.toString()[1];
    result = `${arrDecade[firstDigit - 1]} ${secondDigit ?arrTo19[secondDigit] : ''}`;
  } else {
    let firstDigit = +number.toString()[0];
    if (+number.toString().slice(1) <= 19) {
      let secondDigit = +number.toString().slice(1);
      result = `${arrTo19[firstDigit]} hundred ${secondDigit ? arrTo19[secondDigit] : ''}`;
    } else {
      let secondDigit = +number.toString()[1];
      let thirdDigit = +number.toString()[2];
      result = `${arrTo19[firstDigit]} hundred ${secondDigit ? arrDecade[secondDigit - 1] : ''} ${thirdDigit ? arrTo19[thirdDigit] : ''}`;
    }

  }
  return result.trim();
}

