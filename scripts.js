function showAlert () {
  const num1 = 10
  const num2 = 100
  const sum = num1 + num2
  const subtract = num1 - num2
  const divide = num1 / num2
  const multiply = num1 * num2
  alert(
    `Soma: ${sum}\n` 
    +`Subtração: ${subtract}\n` 
    +`Divisão: ${divide}\n` 
    +`Multiplicação: ${multiply}\n`
  )
}

function showLoop () {
  for (let i = 10; i <= 100; i++) {
    console.log(i)
  }
}

function showNumberTimeTable (num) {
  for (let i = 0; i <= 10; i ++) {
    const result = num * i
    console.log(`${num} * ${i} = ${result}`)
  }
}

function showNumberTimeTableByInput () {
  const num = document.getElementById('numberTimeTable').value;
  for (let i = 0; i <= 10; i ++) {
    const result = num * i
    console.log(`${num} * ${i} = ${result}`)
  }
}

function sum () {
  const num1 = document.getElementById('num1').value
  const num2 = document.getElementById('num2').value
  const result = Number(num1) + Number(num2)
  alert(`O resultado é: ${result}`)  
}

function subtract () {
  const num1 = document.getElementById('num1').value
  const num2 = document.getElementById('num2').value
  const result = Number(num1) - Number(num2)
  alert(`O resultado é: ${result}`)
}

function divide () {
  const num1 = document.getElementById('num1').value
  const num2 = document.getElementById('num2').value
  const result = Number(num1) / Number(num2)
  alert(`O resultado é: ${result}`)
}

function multiply () {
  const num1 = document.getElementById('num1').value
  const num2 = document.getElementById('num2').value
  const result = Number(num1) * Number(num2)
  alert(`O resultado é: ${result}`)
}

function showPairs () {
  const numbers = [1,2,3,4,5,6,7,8,9,10]
  const pairs = numbers.filter(num => num % 2 === 0)
  console.log(pairs)
}

function getFinalCost ({factoryCost, distributorPercentage, taxPercentage}) {
  return Number(factoryCost) + (Number(factoryCost) * Number(distributorPercentage)) + (Number(factoryCost) * Number(taxPercentage))
}

function calcFinalValue () {
  const factoryCost = document.getElementById('factoryCost').value
  const distributorPercentage = document.getElementById('distributorPercentage').value
  const taxPercentage = document.getElementById('taxPercentage').value
  const finalValue = getFinalCost({factoryCost, distributorPercentage, taxPercentage})
  document.getElementById('finalValue').innerHTML = finalValue
}


