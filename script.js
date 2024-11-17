const submitBtn = document.getElementById(`submit`)
const section1 = document.getElementById(`sec1`)
const section2 = document.getElementById(`sec2`)
const resultArea = document.getElementById(`result`)
const rateBtns = document.querySelectorAll(`.btn`)
let result
let receive = null

const getValue = (e) => {
    result = e.target.value
    e.target.classList.add(`active`)
    if(receive) {
        receive.classList.remove(`active`)
    }
    receive = e.target
}

rateBtns.forEach(rateBtn => {
    rateBtn.addEventListener(`click`, getValue)
})

const showResult = () => {
    if(result) {
        section1.style.display = `none`
        section2.style.display = `block`
        resultArea.innerHTML = `You selected ${result} out of ${rateBtns.length}`
    }
}

submitBtn.addEventListener(`click`, showResult)
