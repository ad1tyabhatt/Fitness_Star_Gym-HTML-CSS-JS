const popup = document.querySelector('.popup')
const button = document.querySelector('.join-btn')
const clsBtn = document.querySelector('.close-btn')

button.addEventListener('click',()=>{
    popup.classList.add('open')
    console.log('opened')
})


clsBtn.addEventListener('click',()=>{
    popup.classList.replace('')
    console.log('closed')
})