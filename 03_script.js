const calculateTemp = () => {

  const numberTemp = document.getElementById('temp').value
    console.log(numberTemp);



const tempSelected = document.getElementById('tempdiff');
const valueTemp = tempdiff.options[tempSelected.selectedIndex].value;
console.log(valueTemp);

const celToFah = (cel) => {
  let fahrenheit = Math.round((cel* 9/5) + 32);
  return fahrenheit;
}

const fahToCel = (fehr) => {
  let celsius = Math.round((fehr - 32) * 5/9);
  return celsius;
}

let result ;

if(valueTemp == 'cel') {
  result = celToFah(numberTemp);
  document.getElementById('resultContainer').innerHTML = ` = ${result}  Fahrenheit`;

}else{
  result = fahToCel(numberTemp);
  document.getElementById('resultContainer').innerHTML = ` = ${result}  Celsius`;
}
}