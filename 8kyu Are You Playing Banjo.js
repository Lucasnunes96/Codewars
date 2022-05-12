/*Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.*/

const areYouPlayingBanjo = (name) => 
name[0] // => gets 'R'
.toLowerCase() // 'R' => 'r'
 === 'r' ? 
 `${name} plays banjo` // if equal 'r'
 : `${name} does not play banjo` // if not equal 'r'