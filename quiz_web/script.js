const questions = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
const container = document.getElementsByClassName("container")[0];
const question_data = document.getElementById('question')
const options = document.querySelectorAll(".answer")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const btn = document.getElementById('btn')

let score = 0
let current_question = 0

load_question()

function load_question() {
    deselect()
    let displayed_question = questions[current_question]
    question_data.innerText = displayed_question.question
    a_text.innerText = displayed_question.a
    b_text.innerText = displayed_question.b
    c_text.innerText = displayed_question.c
    d_text.innerText = displayed_question.d
}

function deselect() {
    options.forEach(option => {
        option.checked = false;
    });
}

function selected_ans() {
    let answer
    options.forEach(option => {
        if (option.checked) {
            answer = option.id
        }
    })

    return answer
}

console.log(selected_ans())

btn.addEventListener("click", () => {
    let answer = selected_ans()

    if (answer) {
        if (answer === questions[current_question].correct) {
            score++
        }
        current_question++

        if (current_question < questions.length) {
            load_question()
        }
        else {
            container.innerHTML=""
            container.innerHTML = `<h2>You answered ${score}/${questions.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>`
        }

    }
})