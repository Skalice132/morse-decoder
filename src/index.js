const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
// каждый символ это десять нулей. если символ равен точке, то это 10, если тире, то 11
function decode(expr) {
  // console.log(expr.length)
  // str.repeat()
  let str = "0";
  let result = ''; 


  for (var i = expr.length - 1; i >= 0; i--) {
    for (key in MORSE_TABLE) {
      if (expr[i] == MORSE_TABLE[key]){
        result += key;
      }
      // console.log(key); // символы
      // console.log(MORSE_TABLE[key]); //  буквы
    }
  // console.log(expr[i]);
  // console.log(MORSE_TABLE.expr[i]);
  // result += expr[i];
  }
  console.log(result)
  if (result.length < 10) {
    result = str.repeat(10 - result.length) + result;
    return result;
  } else {
    return result;
  }
}

module.exports = {
    decode
}

console.log(decode('me'));
// decode('me');
// console.log(decode('hello world'));
// decode('hello world');

decode('829b4b8c');
