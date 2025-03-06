let boxes = document.querySelectorAll('.box')
let resetbtn = document.querySelector('.reset')
let n = document.querySelector('.newgame')
let msg = document.querySelector('.msg')
let turn0 = true
let c = 0
let winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turn0) {
            box.innerText = 'O'
            turn0 = false
            box.classList.remove('color')
        } else {
            box.innerText = 'X'
            turn0 = true
            box.classList.add('color')
        }
        box.disabled = true
        c++
        let isWinner = checkWinner()
        if (c === 9 && !isWinner) {
            draw()
        }
    })
})
let draw=()=>{
    msg.innerText=`Game was a draw`
    msg.classList.remove('hide')
    disabledBoxes()
}
let checkWinner = () => {
    for (let pattern of winpatterns) {
        let p1 = boxes[pattern[0]].innerText
        let p2 = boxes[pattern[1]].innerText
        let p3 = boxes[pattern[2]].innerText
        if (p1 != '' && p2 != '' && p3 != '') {
            if (p1 == p2 && p2 == p3) {
                showWinner(p1)
            }
        }
    }
}
let showWinner = (x) => {
    msg.innerText = `Congratulations Winner is ${x}`
    msg.classList.remove('hide')
    disabledBoxes()
}
let disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true
    }
}
let enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false
        box.innerText = ''
        // turn0 = true
    }
}
let r = () => {
    enableBoxes()
    msg.classList.add('hide')
    turn0 = true
    c=0
}
resetbtn.addEventListener('click', r)
n.addEventListener('click', r)