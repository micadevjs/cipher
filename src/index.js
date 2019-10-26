// const valueOffset = document.getElementById('inputNumber');
// const valueMessage = document.getElementById('inputMessage');
const valueResult = document.getElementById('txtResult');
const btnCipher = document.getElementById('btnCipher');
const btnDeCipher = document.getElementById('btnDeCipher');

btnCipher.addEventListener('click', () => {
  const valueOffset = document.getElementById('inputNumber').value;
  const valueMessage = document.getElementById('inputMessage').value;
  valueResult.innerHTML = cipher.encode(valueOffset, valueMessage); 
});

btnDeCipher.addEventListener('click', () => {
  const valueOffset = document.getElementById('inputNumber').value;
  const valueMessage = document.getElementById('inputMessage').value;
  valueResult.innerHTML = cipher.decode(valueOffset, valueMessage);
});