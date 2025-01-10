/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length <=  1) return false
        
    
    let empty=[]
    let brackets={
        '(':')',
        '[':']',
        '{':'}'
    }
    for ( let i=0;i<s.length;i++){
       if(brackets[s[i]]){
        empty.push(brackets[s[i]])
       }else if(s[i]!=empty.pop()){
        return false
       }
      
    }
     return !empty.length
};