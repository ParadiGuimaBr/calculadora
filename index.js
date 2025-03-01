function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacao = document.getElementById('operacao').value;
    const resultadoDiv = document.getElementById('resultado');
    const erroDiv = document.getElementById('erro');

    resultadoDiv.textContent = '';
    erroDiv.style.display = 'none';

    if (isNaN(num1) || isNaN(num2)) {
        showError('Digite números válidos em ambos os campos!');
        return;
    }

    let resultado, simbolo;
    
    switch(operacao) {
        case '1':
            resultado = num1 + num2;
            simbolo = '+';
            break;
        case '2':
            resultado = num1 - num2;
            simbolo = '-';
            break;
        case '3':
            resultado = num1 * num2;
            simbolo = '×';
            break;
        case '4':
            if(num2 === 0) {
                showError('Divisão por zero não é permitida!');
                return;
            }
            resultado = num1 / num2;
            simbolo = '÷';
            break;
        case '5':
            resultado = Math.pow(num1, num2);
            simbolo = '^';
            break;
        default:
            showError('Operação inválida!');
            return;
    }

    resultadoDiv.textContent = `${num1} ${simbolo} ${num2} = ${resultado.toFixed(2)}`;
}

function resetar() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('resultado').textContent = '';
    document.getElementById('erro').style.display = 'none';
}

function showError(message) {
    const erroDiv = document.getElementById('erro');
    erroDiv.textContent = message;
    erroDiv.style.display = 'block';
}