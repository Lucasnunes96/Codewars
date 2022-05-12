/*Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order 
while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]     */

function sortArray(arr){
    let tempArr = []
    let count = 0
    for(let i = 0; i<arr.length; i++){
        if(arr[i]%2!==0){
            tempArr.push(arr[i])
        }
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i]%2!==0){
        arr[i] = tempArr.sort((a,b)=>a-b)[count]
        count++
        }else{
            arr = arr
        }
    }
    return arr  
}
       
/*
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
  }
*/
