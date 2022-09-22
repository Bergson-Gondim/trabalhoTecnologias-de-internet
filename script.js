//aritimética
function calcular() {
    // debugger;
    var valor1 = document.getElementById('valor1');
    var valor2 = document.getElementById('valor2')

    var operacao = document.getElementById('operacao');
    var resultado = document.getElementById('resultado');


    if (operacao.value == 'adicionar') {
        var v = parseFloat(valor1.value) + parseFloat(valor2.value);
    }
    if (operacao.value == 'subtrair') {
        var v = parseFloat(valor1.value) + parseFloat(valor2.value);
    }
    if (operacao.value == 'multiplicar') {
        var v = parseFloat(valor1.value) + parseFloat(valor2.value);
    }
    if (operacao.value == 'dividir') {
        var v = parseFloat(valor1.value) + parseFloat(valor2.value);
    }
    console.log(v);

    alert("O resultado é: " + v);
}

//cadastro de aluno
function cadastro() {
    // debugger;
    var nome = document.getElementById('nome').value;
    var curso = document.getElementById('curso').value;
    const diaSemana = [];
    var turno = document.getElementsByName('turno');
    var comorbidades = [document.getElementById('cardiaco'), document.getElementById('diabete'), document.getElementById('obesidade')];


    //verificando o nome
    console.log(nome);
    //verificando o curso
    console.log(curso);
    //verificando os dias da semana
    for (var option of document.getElementById('dia')) {
        if (option.selected) {
            console.log(option.value);
        }
    }
    //verificando o turno
    for (var i = 0; i < turno.length; i++) {
        if (turno[i].checked) {
            console.log(turno[i].value);
            diaSemana.push(turno.value);
        }
    }
    //coletando comorbidades
    for (var i = 0; i < comorbidades.length; i++) {
        if (comorbidades[i].checked) {
            console.log(comorbidades[i].value);
        }
    }
    var selectedDias=diaSemana.join();
    // alert(selectedDias);
    alert("Nome: "+nome+"\nCurso: "+curso+"\nTurno: "+turno+"\nDias da semana: "+diaSemana+"\nComorbidades: "+comorbidades);

}

function caracteres() {
    conheceu = document.getElementById('conheceu').value;
    const sizeString = conheceu.split(" ");
    console.log(sizeString.length);
    document.getElementById('quantidadePalavras').innerHTML = sizeString.length;
}



