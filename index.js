var inp = document.getElementById('new-task')
var list = document.getElementById('add-item')
var btnAdd = document.getElementById('btn')
var added =''
inp.addEventListener('input',function(e){
     added = e.target.value
})
btnAdd.addEventListener('click',function(){
    var item = document.createElement('li')
    item.className='yadi'
    var but = document.createElement('button')
    but.className='delete-button'
    but.appendChild(document.createTextNode(''))
    var text = document.createTextNode(added)
    if(added===''){
        alert('Add first')
    }
    else{
        item.appendChild(text)
        list.appendChild(item)
        inp.value=''
        added=''
        list.appendChild(but)
        but.addEventListener('click',function(){
            list.removeChild(item)
            but.style.display = 'none'
        })
    }
})