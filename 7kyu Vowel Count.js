/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */


function getCount(str){
    let count = 0
    let vowels = ['a','e','i','o','u']
    for (let i = 0; i<str.length;i++){
        for( let j = 0; j<vowels.length;j++){
            if(str[i]===vowels[j]){
                count++
            }
        }
    }return count
}


/* function getCount (str){
    let count = 0
    for (let i = 0; i<str.length;i++){
    if (str[i].toLowerCase()==='a'||str[i].toLowerCase()==='e'||str[i].toLowerCase()==='i'||str[i].toLowerCase()==='o'||str[i].toLowerCase()==='u') {
        count++
    } 
}
return count
}  */


/* function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;   => if str.match(/[aeiou]/ig) returns a value, then that value is used (and ||[] is essentially ignored). 
                                                    But, if str.match(/[aeiou]/ig) returns null, then instead [] (empty array) is returned. 
                                                    It's basically a null-check shorthand.
} */