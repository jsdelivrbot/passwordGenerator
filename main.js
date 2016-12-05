module.rootScript.parentNode.removeChild(module.rootScript)
module.import('passwordGenerator.js').then(passwordGenerator=>{
    let mainDiv=document.createElement('div')
    mainDiv.className='main'
    mainDiv.appendChild(passwordGenerator.view)
    module.styleByPath('main.css').then(()=>
        document.body.appendChild(mainDiv)
    )
})
