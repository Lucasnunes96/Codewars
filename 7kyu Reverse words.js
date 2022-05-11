/*Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" */

const reverseWords = (str) => 
str.split(' ') // 'double spaces' => ['double', 'spaces']
.map(word => word 
    .split('') // ['double', 'spaces'] => [['d','o','u','b','l','e'],['s','p','a','c','e','s']]
    .reverse() // [['d','o','u','b','l','e'],['s','p','a','c','e','s']] => [['e','l','b','u','o','d'],['s','e','c','a','p','s']]
    .join('')) // [['e','l','b','u','o','d'],['s','e','c','a','p','s']] => ['elbuod','secaps']
    .join(' ') // ['elbuod'],['secaps'] => 'elbuod secaps'

    
    
    