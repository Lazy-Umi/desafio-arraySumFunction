/*
    Criar uma função que recebe como argumento um array de inteiros e um numero inteiro alvo. 
    A função deve retornar o primeiro par de indices que somados são iguais ao valor alvo.
    Por exemplo:
    
    array = [1 ,3 ,5, 7, 6, 10]
    alvo = 11

    saida: [0, 5]
*/
let array = [1 ,3 ,5, 7, 6, 10]

function arrayPairs(arr, target){
    let pairs = []
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                pairs.push([arr[i], arr[j]])
                return pairs
            }
        }
    }
    return console.error("Nenhuma soma possivel")
}


let result = arrayPairs(array, 11)
console.log(result)
