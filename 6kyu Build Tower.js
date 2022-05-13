/* 
Build Tower
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

const towerBuilder = (n) => 
[...Array(n)]   //create an array with n number of elements
.map((a,b) =>  // maps it, so for every element a, you get the following value; b IS THE INDEX, which starts at 0
' '.repeat(n-1-b)+ // if n = 5, the top floor, which is the index 0 element, is 5-1-0 = 4 spaces
'*'.repeat(b*2+1)+ // the top floor goes 0*2+1 = 1; the 2nd one goes 1*2+1 = 3 and so on
' '.repeat(n-1-b)) // if n = 5, the top floor, which is the index 0 element, is 5-1-0 = 4 spaces