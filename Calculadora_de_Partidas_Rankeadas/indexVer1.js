let saldoRankeadas = simulaResultado();
let nivel = calculaNivel(saldoRankeadas);


function simulaResultado(qtdVitorias, qtdDerrotas, result, saldo, i){
    //sorteia 200 vezes
    i=0;
    qtdDerrotas = 0;
    qtdVitorias = 0;
    for(i; i < 200; i++){
        result = parseInt(Math.random() * 30);
        console.log(result);
        if (result <= 18){
            qtdVitorias++;
        } else  {
            qtdDerrotas++;
        }
        
    }
    saldo = qtdVitorias - qtdDerrotas;
    return saldo;
}

function calculaNivel(saldoRankeadas, resultado){
    //ifs
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

console.log(`O Herói tem de saldo de ${saldoRankeadas} está no nível ${nivel} `)