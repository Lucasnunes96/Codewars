/*Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 9² is 81 and 1² is 1.
Note: The function accepts an integer and returns an integer*/


  const squareDigits = (num) => parseInt(num.toString().split('').map(x => x*x).join(''))
    

/*   const squareDigits = (num) => 
parseInt
(num.toString() 9119 => '9119'
.split('') '9119' => ['9','1','1','9']
.map(x => x*x) => multiplica cada elemento (x) por si mesmo ['9','1','1','9'] vira ['81','1','1','81']
.join('')) => concatena tudo ['81','1','1','81'] vira '811181' ; o parseInt no começo vem e o converte em número*/
  