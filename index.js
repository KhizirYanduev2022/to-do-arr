

const body = document.body

const affairs = [
    {
        text: 'Пойти в садик',
        done: true
    },

    {
        text: 'поесть кашу',
        done: false
    },

    {
        text: 'выучить стих',
        done: true
    },

    {
        text: 'ложиться спать',
        done: false
    },

    {
        text: 'пойти домой',
        done: true
    }
]

// Cоздал   массив 


const btn = document.querySelector('.btn')
const inp = document.querySelector('#inp')
const wrap = document.querySelector('.wrapper')

// вызвал элементы







function render (){
    const list = document.querySelector('#list')
    list.innerHTML = ''

   
     


   for(let i = 0; i < affairs.length;i++){

    const sect = document.createElement('div')
    sect.className = 'sect'
    const inp2 = document.createElement('input')
    inp2.type = 'checkbox'
      inp2.className = 'inp2'
      inp2.addEventListener('click', (e)=>{
        checkTodo (i)
     })
       sect.append(inp2)
    const p = document.createElement('p')
  
    p.id = 'paragraph' 
    p.textContent = affairs[i].text
    sect.append(p)
  

    const but = document.createElement('button')
but.className = 'but'
    sect.append(but)
    but.textContent = 'X'
    list.prepend(sect)
   
    
but.addEventListener('mouseenter', (e)=>{
    e.target.parentElement.style.backgroundColor = 'green'

})

but.addEventListener('mouseleave', (e)=>{
    e.target.parentElement.style.backgroundColor = ' blueviolet'
    
})



 

    but.addEventListener('click', (e)=>{
    
        // sect.remove(i)
        remove(i)
    
    
       })

    }


   }
  
   render()


// создал цикл



function remove (i) {

    affairs.splice(i,1)
    render()
   
   }
   
   remove(2)
   
//    удалил элементы
   function addTodo (text) {
   
   affairs.push( {
       text:text,
       done:true
   })
      render()
   }
   
// добавляю текст



function checkTodo (i) {
    if(affairs[i].done === false){
     affairs[i].done = true
    } else{
     affairs[i].done = false
    } 
    console.log(affairs) 
}

// работа с done


const form = document.querySelector('.form')


form.addEventListener('submit', (e)=>{
    e.preventDefault()
const inp  = document.querySelector('#inp')
    addTodo(inp.value)
 

})

