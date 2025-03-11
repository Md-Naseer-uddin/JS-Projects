const input=document.getElementById("input")
const list=document.getElementById("list")


function addtask(){
    let inputText=input.value
    if(inputText==""){
        alert("Please enter task")
    }

    let li=document.createElement("li")
    li.innerText=inputText
    input.value=""
    list.appendChild(li)
    li.addEventListener("click",()=>{
        li.classList.toggle("done")
    })

    let btn=document.createElement("button")
    btn.innerText="X"
    btn.style.backgroundColor="red"
    btn.style.border="none"
    btn.style.width="20px"
    btn.style.height="20px"
    btn.style.cursor="pointer"
    li.appendChild(btn)
    
    btn.addEventListener("click",()=>{
        list.removeChild(li)
    })
}