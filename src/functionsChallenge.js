/*
    Criar uma função que recebe como argumento um array de inteiros e um numero inteiro alvo. 
    A função deve retornar os indices que somandos é igual o valor alvo. Por exemplo:
    
    array = [1 ,3 ,5, 7, 6, 10]
    alvo = 11

    saida: [0, 5], [2, 4]
*/
let array = [1 ,3 ,5, 7, 6, 10]

function arrayPairs(arr, target){
    let pairs = []
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
            pairs.push([arr[i], arr[j]])
            }
        }
    }
    return [arr[i], arr[j]]
}
<<<<<<< HEAD

let result = arrayPairs(array, 11)
console.log(result)


=======
let array = [1, 3, 5, 7, 6, 10]
calcArray(array)
>>>>>>> 6426fb39f734d3cc2d5624ad7d47965a3c3aaa65
