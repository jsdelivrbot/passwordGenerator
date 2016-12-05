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
Object.defineProperty(PasswordGenerator.prototype,'view',{get(){
    let
        div=document.createElement('div')
    let
        textarea_result=
            document.getElementById('textarea_result'),
        button_generate=
            document.getElementById('button_generate'),
        input_length=
            document.getElementById('input_length'),
        span_strength=
            document.getElementById('span_strength'),
        span_characterSet=
            document.getElementById('span_characterSet')
    let charset=this.charset
    span_characterSet.textContent=charset
    button_generate.onclick=e=>{
        e.preventDefault()
        e.stopPropagation()
        let length=parseInt(input_length.value,10)
        textarea_result.value=this.randomPassword(length)
        span_strength.textContent=
            Math.pow(charset.length,length).toExponential()
    }
    div.className='passwordGenerator'
    div.appendChild(optionsP())
    div.appendChild(characterSetP())
    div.appendChild(resultP())
    return div
    function optionsP(){
        let p=document.getElementById('optionsP')
        return p
    }
    function characterSetP(){
        let p=document.getElementById('characterSetP')
        return p
    }
    function resultP(){
        let p=document.getElementById('resultP')
        return p
    }
}})
new PasswordGenerator
