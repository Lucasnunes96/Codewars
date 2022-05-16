/* Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20 */

function century (n){
ano = n.toString().split('').map((a,b)=>+a)
let seculo = 0
    if (ano.length<3){
        seculo = 1
    }else if (ano[ano.length-1]===0 && ano[ano.length-2]===0){
        seculo = ano.slice(0,ano.length-2).join('')
    }else if(ano[ano.length-1]!==0 || ano[ano.length-2]!==0){
        seculo = ano.slice(0,ano.length-2).join('')
        seculo ++
    }
    return Number(seculo)
}
