let u = 0
let c = 0
let uc = document.querySelectorAll('.choice')
let userscr = document.querySelector('#user-scr')
let compscr = document.querySelector('#comp-scr')
let msg = document.querySelector('#msg')
uc.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        let userchoice=choice.getAttribute('id')
        console.log(userchoice)
        playgame(userchoice)
    })
})
let comp = () => {
    const arr = ['rock', 'paper', 'scissor']   
    let n = Math.floor(Math.random() * 3)
    return arr[n]
}
const draw=()=>{
    msg.innerText='Draw'
    msg.style.backgroundColor='green'
}
const playgame=(userchoice)=>{
    let compchoice=comp()
    console.log(compchoice)
    if(userchoice===compchoice){
        draw()
    }
    else if(userchoice==='rock'){
        if (compchoice==='paper'){
            c++
            compscr.innerText=c
            msg.innerText=`Computer's ${compchoice} beats your ${userchoice}`
            msg.style.backgroundColor='red'
        }else{
            u++
            userscr.innerText=u
            msg.innerText=`Your ${userchoice} beats computer's ${compchoice}`
            msg.style.backgroundColor='green'
        }
    }
    else if(userchoice==='paper'){
        if (compchoice==='scissor'){
            c++
            compscr.innerText=c
            msg.innerText=`Computer's ${compchoice} beats your ${userchoice}`
            msg.style.backgroundColor='red'
        }else{
            u++
            userscr.innerText=u
            msg.innerText=`Your ${userchoice} beats computer's ${compchoice}`
            msg.style.backgroundColor='green'
        }
    }
    else{//Scissor
        if (compchoice==='rock'){
            c++
            compscr.innerText=c
            msg.innerText=`Computer's ${compchoice} beats your ${userchoice}`
            msg.style.backgroundColor='red'
        }else{
            u++
            userscr.innerText=u
            msg.innerText=`Your ${userchoice} beats computer's ${compchoice}`
            msg.style.backgroundColor='green'
        }
    }
}
