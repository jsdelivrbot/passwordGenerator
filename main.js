module.rootScript.parentNode.removeChild(module.rootScript)
let mainDiv=document.createElement('div')
module.import('passwordGenerator.js').then(passwordGenerator=>{
    mainDiv.className='main'
    mainDiv.appendChild(passwordGenerator.view)
})
module.styleByPath('main.css').then(()=>
    document.body.appendChild(mainDiv)
)
