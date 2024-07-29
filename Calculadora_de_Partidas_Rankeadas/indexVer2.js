let qtdVitorias = prompt("Informe a quantidade de vitórias: ");
let qtdDerrotas = prompt("Informe  a quantidade de derrotas: ");
let saldoRankeadas = calculaSaldo(qtdVitorias, qtdDerrotas);
let nivel = calculaNivel(saldoRankeadas);

function calculaSaldo(qtdVitorias, qtdDerrotas, saldo){
    saldo = qtdVitorias - qtdDerrotas;
    return saldo;
}

function calculaNivel(saldoRankeadas, resultado){
    if (saldoRankeadas < 10){
        resultado = "Ferro";
    } else if ((saldoRankeadas >= 11) && (saldoRankeadas <=20)){
        resultado = "Bronze";
    } else if ((saldoRankeadas >= 21) && saldoRankeadas <= 50){
        resultado = "Prata";
    } else if ((saldoRankeadas >= 51) && (saldoRankeadas <= 80)){
        resultado = "Ouro";
    } else if ((saldoRankeadas >= 81) && (saldoRankeadas <= 90)){
        resultado = "Diamante";
    }  else if ((saldoRankeadas >= 91) && (saldoRankeadas <= 100)){
        resultado = "Lendário";
    } else {
        resultado = "Imortal";
    }
    return resultado;
}

console.log(`O Herói tem de saldo de ${saldoRankeadas} está no nível ${nivel} `);