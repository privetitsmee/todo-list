let inputMessage = document.querySelector('.input')
let buttonMessage = document.querySelector('.button')
let startMessage = document.querySelector('.start-message')
let taskList = document.querySelector('.task')

buttonMessage.addEventListener('click', addTaskHandler)


function createTask(text){
  let div = document.createElement('div')
  div.classList.add('task')

  let input = document.createElement('input')
  input.addEventListener('click', changeTaskState)
  input.type = 'checkbox'

  let p = document.createElement('p')
  p.innerHTML = text

  div.append(input)
  div.append(p)

  return div
}

function changeTaskState(){
  if(this.checked){
    this.parentElement.classList.add('complete')
  }else{
    this.parentElement.classList.remove('complete')
  }
}

function addTaskHandler(){
  if(inputMessage.value){
    if(!startMessage.hidden){
      startMessage.hidden = true
    }

    let newTask = createTask(inputMessage.value)
    taskList.append(newTask)
    inputMessage.value = ''
  }else{
    alert('Введите задачу')
  }
}



