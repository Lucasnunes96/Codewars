/* Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0. */



function expandedForm (num){
    let splitted = num.toString().split('')
    let answer = ''
    let zeroes = '0'
    for (let i = 0; i<splitted.length;i++){
      if(splitted[i]>0&&splitted[i]!==0){
      answer += splitted[i] + zeroes.repeat(splitted.length-1-i) + ' + '
    }}
        return answer.slice(0,answer.length-3)
    }