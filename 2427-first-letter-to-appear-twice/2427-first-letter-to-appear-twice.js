/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let unique = new Set()
    for(let i=0;i<s.length;i++){
        let char = s[i]
        if(unique.has(char)){
          return char;
        }
        unique.add(char)
    }
};