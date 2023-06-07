/*function realizarSorteio() {
    var apartamentos = []; 

    for (var i = 1; i <= 30; i++) {
        apartamentos.push(i); 
    }

    var sorteio = []; 

    for (var j = 0; j < 3; j++) {
        var randomIndex = Math.floor(Math.random() * apartamentos.length);
        sorteio.push(apartamentos[randomIndex]);
        apartamentos.splice(randomIndex, 1); 
    }

    var resultado = "1º Lugar: " + sorteio[0] + "<br>2º Lugar: " + sorteio[1] + "<br>3º Lugar: " + sorteio[2];

    document.getElementById("resultados").innerHTML = resultado; 

    document.getElementById("parabens").innerHTML = "Parabéns!"; 
}*/

var apartamentos = [
    101, 102, 103, 104, 105, 106,
    201, 202, 203, 204, 205, 206,
    301, 302, 303, 304, 305, 306,
    401, 402, 403, 404, 405, 406,
    501, 502, 503, 504, 505, 506
];

var numerosEspecificos = [
    [103, 301, 403],
    [301, 302, 506],
    [101, 405, 502],
    [301, 205, 104]
];

var sorteioRealizado = 0;
var numerosDisponiveis = apartamentos.slice(); // Cria uma cópia dos números disponíveis

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function realizarSorteio() {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; // Limpa o conteúdo anterior

    var numerosSorteados = [];
    if (sorteioRealizado < numerosEspecificos.length) {
        numerosSorteados = numerosEspecificos[sorteioRealizado];
    }

    var numerosAleatorios = [];

    for (var i = 0; i < 30; i++) {
        var resultado = "";
        if (i < numerosSorteados.length) {
            resultado = numerosSorteados[i];
            numerosDisponiveis.splice(numerosDisponiveis.indexOf(resultado), 1); // Remove o número especificado dos disponíveis
        } else {
            if (numerosDisponiveis.length === 0) {
                numerosDisponiveis = apartamentos.slice(); // Reabastece a lista de números disponíveis
                shuffle(numerosDisponiveis); // Embaralha a ordem dos números disponíveis
            }
            resultado = numerosDisponiveis.pop();
        }
        resultadoDiv.innerHTML += (i + 1) + "º - Apartamento: " + resultado + "<br>";
    }

    sorteioRealizado++;
}
