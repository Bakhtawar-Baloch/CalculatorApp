function getNum(num) {
    var getCalculation = document.getElementById("calculation");
    getCalculation.value += num;
}

function clearBtn() {
    var getCalculation = document.getElementById("calculation");
    getCalculation.value = "";
}

function getResult() {
    var getCalculation = document.getElementById("calculation");
    getCalculation.value = eval(getCalculation.value);
}