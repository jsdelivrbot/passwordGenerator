let
    charset_numbers='0123456789',
    charset_lowercases='abcdefghijklmnopqrstuvwxyz',
    charset_uppercases='ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    charset_symbols='!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'
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
let charset=charsetOf()
span_characterSet.textContent=charset
button_generate.onclick=e=>{
    e.preventDefault()
    e.stopPropagation()
    let length=parseInt(input_length.value,10)
    textarea_result.value=randomPassword(length)
    span_strength.textContent=
        Math.pow(charset.length,length).toExponential()
}
function charsetOf(){
    let charset=''
    charset+=charset_numbers
    charset+=charset_lowercases
    charset+=charset_uppercases
    charset+=charset_symbols
    return charset
}
function randomPassword(length){
    let result=''
    while(result.length<length)
        result+=charset[
            Math.floor(Math.random()*charset.length)
        ]
    return result
}
