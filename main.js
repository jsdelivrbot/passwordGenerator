document.body.removeChild(module.rootScript)
module.import('passwordGenerator.js').then(passwordGenerator=>{
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
            document.getElementById('span_characterSet'),
        optionsP=
            document.getElementById('optionsP'),
        characterSetP=
            document.getElementById('characterSetP'),
        resultP=
            document.getElementById('resultP')
    let charset=passwordGenerator.charset
    span_characterSet.textContent=charset
    button_generate.onclick=e=>{
        e.preventDefault()
        e.stopPropagation()
        let length=parseInt(input_length.value,10)
        textarea_result.value=passwordGenerator.randomPassword(length)
        span_strength.textContent=
            Math.pow(charset.length,length).toExponential()
    }
    let mainDiv=document.createElement('div')
    mainDiv.className='main'
    mainDiv.appendChild(optionsP)
    mainDiv.appendChild(characterSetP)
    mainDiv.appendChild(resultP)
    module.styleByPath('main.css').then(()=>
        document.body.appendChild(mainDiv)
    )
})
