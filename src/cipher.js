const encode = function(offset, text) {
  let arrayText = [];
  for (let i = 0; i < text.length; i++) {
    let codAscii = text[i].charCodeAt();
    let codAsciiCipher = (codAscii - 65) + parseInt(offset) % 26 + 65;
    if (codAsciiCipher <= 90) {
      let cipherWord = String.fromCharCode(codAsciiCipher);
      arrayText.push(cipherWord);
    } else {
      codAsciiCipher = (codAsciiCipher - 90) + 64;
      let cipherWord = String.fromCharCode(codAsciiCipher);
      arrayText.push(cipherWord);
    }
  }
  return arrayText.join('');
};

const decode = function(offset, text) {
  let arrayText = [];
  for (let i = 0; i < text.length; i++) {
    let codAscii = text[i].charCodeAt();
    let codAsciiCipher = (codAscii - 65) - parseInt(offset) % 26 + 91;
    if (codAsciiCipher <= 90) {
      let cipherWord = String.fromCharCode(codAsciiCipher);
      arrayText.push(cipherWord);
    } else {
      codAsciiCipher = (codAsciiCipher - 90) + 64;
      let cipherWord = String.fromCharCode(codAsciiCipher);
      arrayText.push(cipherWord);
    }
  }
  return arrayText.join('');
};
window.cipher = {
  encode: encode,
  decode: decode
};
