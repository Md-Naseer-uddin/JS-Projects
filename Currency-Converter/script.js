const BASE_URL =
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
let dropdowns = document.querySelectorAll('.dropdown select')
btn = document.querySelector('button')
fromcurr = document.querySelector('.from select')
tocurr = document.querySelector('.to select')
let m = document.querySelector('.msg')


window.addEventListener('load',()=>{
    updateExchangeRate()
})
for (let select of dropdowns) {
    for (code in countryList) {
        let newOption = document.createElement('option')
        newOption.innerText = code
        newOption.value = code
        if (select.name === 'from' && code === 'USD') {
            newOption.selected = 'selected'
        } else if (select.name === 'to' && code === 'INR') {
            newOption.selected = 'selected'
        }
        select.append(newOption)
    }
    select.addEventListener('change', (evt) => {
        updateFlag(evt.target)
    })
}

const updateFlag = (el) => {
    let c = el.value
    cc = countryList[c]
    let img = el.parentElement.querySelector('img')
    let newsrc = `https://flagsapi.com/${cc}/flat/64.png`
    img.src = newsrc
}
btn.addEventListener('click', (evt) => {
    evt.preventDefault()
    updateExchangeRate()
})
const updateExchangeRate = async () => {
    let a = document.querySelector('input')
    let av = a.value
    if (av == '' || av < 1) {
        av = 1
        a.value = '1'
    }
    let url = `${BASE_URL}/${fromcurr.value.toLowerCase()}.json`
    let res = await fetch(url)
    let data = await res.json()
    let rate = data[fromcurr.value.toLowerCase()][tocurr.value.toLowerCase()]
    let am = rate * av
    m.innerText = `${av}${fromcurr.value} = ${am}${tocurr.value}`
}