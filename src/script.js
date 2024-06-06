function resultado(){
    let nome = document.getElementById('nome').value;
    let xp = Number(document.getElementById('xp').value);
    let classe = "Invalido";
    let btn = document.querySelector('#btn');
    let result = document.querySelector('.result');

    if(result.style.display === 'flex'){
        result.style.display = 'none';
    } else {
        result.style.display = 'flex';
    }

    if(xp <= 1000){
        classe = "Ferro";
    } else if((xp > 1000) && (xp <= 2000)){
        classe = "Bronze";
    } else if((xp >= 2001) && (xp <= 5000)){
        classe = "Prata";
    } else if((xp >= 5001) && (xp <= 7000)){
        classe = "Ouro";
    } else if((xp >= 7001) && (xp <=8000)){
        classe = "Platina";
    } else if((xp >= 8001) && (xp <= 9000)){
        classe = "Ascendente";
    } else if((xp >= 9001) && (xp <= 10000)){
        classe = "Imortal";
    } else {
        classe = "Radiante";
    }
    document.getElementById('resultclass').innerHTML = `<p id="resultclass">Parabéns, ${nome}, seu herói é classe ${classe}!</p>`;
}
