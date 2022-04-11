/*
1. Crie uma função chamada positions, esta função deverá receber como argumento 3 parâmetros; firstPlace, secondPlace, lastPlace
2. Você deverá criar uma array composto pelos três parâmetros recebidos pela função. A posição em que o parâmetro é inserido no array, é considerado a posição do atleta na corrida.
3. O competidor Daniel realizou o desafio extra, e ganhou um bônus. Ele sempre vai subir uma posição. Sendo assim, o Daniel trocará de lugar com quem estiver na posição a frente dele, caso haja.
4. Após realizar esta rotina a função deverá imprimir no console o resultado. Deverá seguir o seguinte modelo: 1ª - Colocado "nomeDoCompetidor". Queremos saber a posição de todos os 3 primeiros colocados
*/

/*
RUBRICA: 
1. Criou a função corretamente
2. Gerou o array de forma correta utilizando as valores recebidos como parametro
3. Verificou os dados recebidos com estrutura condicional
4. Imprimiu no console o resultado final
*/

const nomeDoCompetidor = ['Pedro', 'Jose', 'Daniel']

function positions (firstPlace, secondPlace, lastPlace){
    let podium = []

    if(firstPlace==='Daniel'){
        podium[0] = firstPlace
        podium[1] = secondPlace
        podium[2] = lastPlace
    }
    if(secondPlace==='Daniel'){
        podium[0] = secondPlace
        podium[1] = firstPlace
        podium[2] = lastPlace
    }
    if(lastPlace==='Daniel'){
        podium[0] = firstPlace
        podium[1] = lastPlace
        podium[2] = secondPlace
    }
    return `1º Colocado: ${podium[0]}; 2º Colocado: ${podium[1]}; 3º Colocado: ${podium[2]}.`
}
console.log(positions(...nomeDoCompetidor))

