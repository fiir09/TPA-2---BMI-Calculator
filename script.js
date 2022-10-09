const output = document.getElementById('output');
output.style.visibility = "hidden";

const calculate = document.getElementById('calculate');
calculate.addEventListener("click", function() {
    const weightString = document.getElementById('weight').value;
    const heightString = document.getElementById('height').value;

    const weight = Number(weightString);
    const height = Number(heightString);

    const result = (weight/(height/100)**2).toFixed(1);

    const resultEl = document.getElementById('result');
    const indikatorEl = document.getElementById('indikator');

    output.style.visibility = "visible";
    resultEl.innerText = result;

     if (result < 18.5){
        indikator.innerText = 'Underweight';
    }
    else if (result <= 24.9){
        indikator.innerText = 'Normal'
    }
    else if (result <= 29.9){
        indikator.innerText = 'Overweight'
    }
    else{
        indikator.innerText = 'Obesity'
    }

})