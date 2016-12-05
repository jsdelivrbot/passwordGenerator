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
        div=document.createElement('div'),
        textarea_result=
            document.createElement('textarea'),
        button_generate=
            document.createElement('button'),
        input_length=
            document.createElement('input'),
        span_strength=
            document.createElement('span'),
        span_characterSet=
            document.createElement('span')
    button_generate.textContent='Generate'
    input_length.value=6
    textarea_result.className='result'
    span_characterSet.className='characterSet'
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
        let p=document.createElement('p')
        p.appendChild(document.createTextNode('Length: '))
        p.appendChild(input_length)
        p.appendChild(document.createElement('br'))
        p.appendChild(button_generate)
        return p
    }
    function characterSetP(){
        let p=document.createElement('p')
        p.appendChild(document.createTextNode('Character Set: '))
        p.appendChild(span_characterSet)
        return p
    }
    function resultP(){
        let p=document.createElement('p')
        p.appendChild(document.createTextNode('Result:'))
        p.appendChild(document.createElement('br'))
        p.appendChild(document.createTextNode('Strength: '))
        p.appendChild(span_strength)
        p.appendChild(textarea_result)
        return p
    }
}})
new PasswordGenerator
