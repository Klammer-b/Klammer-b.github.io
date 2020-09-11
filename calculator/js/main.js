let weightInput = document.querySelector('.weight');
let priceInput = document.querySelector('.price');
let buttonSubmit = document.querySelector('.submit');
let resultField = document.querySelector('.result');

let weight = 0;
let price = 0;
buttonSubmit.addEventListener('click',() => {
    if (weightInput.value === ''){
        alert('Введите вес!');
    }
    else if (priceInput.value === '') {
        alert('Введите цену!');
    }
    else{
        let weightString = '';
        //если запятая
    if(weightInput.value.indexOf(',') !== -1){
        let weightString = weightInput.value;
        arr = weightString.split('');
        for (let i = 0; i < arr.length; i++){
            if(arr[i] == ','){
                arr[i]='.';
            }
        }
        weightString = arr.join('');
        weight = weightString;
        price = +priceInput.value;
        resetAndAlert(weight, price);
    } 
    //если точка
    else
    {
        weight = +weightInput.value;
        price = +priceInput.value;
        resetAndAlert(weight, price);
        }
} 
})

function calculator(weight, price){
    let a = 0;
    let b = 0;
    weight <= 0.5 ? a = 40 :
    weight <= 1 ? a = 45 :
    weight <= 2 ? a = 50 :
    weight <= 5 ? a = 55 :
    weight <= 10 ? a = 65 : 
    weight <= 20 ? a = 85 : a = 105;
    if (weight <= 1){
        b = 20;
    } else {
        b = 25;
    }
    return (a + b + 0.02 * price);
} 
function resetAndAlert(){
    resultField.textContent ='';
    priceInput.value = '';
    weightInput.value = '';
    let result = calculator(weight, price);
    resultField.textContent = `Доставка будет стоить ${result} грн`;
}

console.log(calculator(0.4, 200));
console.log(calculator(0.5, 200));
console.log(calculator(0.9, 200));
console.log(calculator(1, 200));
console.log(calculator(1.9, 200));
console.log(calculator(2, 200));
console.log(calculator(5.5, 200));