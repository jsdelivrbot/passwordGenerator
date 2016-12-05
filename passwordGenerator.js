// chrome 55 bug: cannot be *let* here.
var
    charset_numbers='0123456789',
    charset_lowercases='abcdefghijklmnopqrstuvwxyz',
    charset_uppercases='ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    charset_symbols='!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'
function charsetOf(){
    let charset=''
    charset+=charset_numbers
    charset+=charset_lowercases
    charset+=charset_uppercases
    charset+=charset_symbols
    return charset
}
function PasswordGenerator(){
    this.charset=charsetOf()
}
PasswordGenerator.prototype.randomPassword=function(length){
    let result=''
    while(result.length<length)
        result+=this.charset[
            Math.floor(Math.random()*this.charset.length)
        ]
    return result
}
new PasswordGenerator
