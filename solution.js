// complete the given function

function palindrome(str){
    str = str.toLowerCase(); 
    str = str.replace(/[^a-z0-9]/gi, ''); 
    return str === str.split('').reverse().join('');

}
module.exports = palindrome
