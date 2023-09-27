const billInput = document.querySelector('.bill-input')
const tipBtn = document.querySelectorAll('.percentage')
const peopleInput = document.querySelector('.people-number-input')

const tipAmount = document.querySelector('.tip-amount-price-text')
const totalTip = document.querySelector('.total-amount-price-text')
const error = document.querySelector('.error')

const resetBtn = document.querySelector('.reset')

let billValue = billInput.value
let peopleValue = peopleInput.value
let tipPercent

let totalTipAmount

const showTipOnPerson = () => {
	totalTipAmount = (billValue * tipPercent) / 100
	tipAmount.textContent = '$' + totalTipAmount.toFixed(2)
}

const showTipOnTotal = () => {
	let totalGroupTipAmount = totalTipAmount * peopleValue
	totalTip.textContent = '$' + totalGroupTipAmount.toFixed(2)
}

tipBtn.forEach(tip => {
	tip.addEventListener('click', () => {
		if (peopleValue.length === 0 || billValue.length === 0) {
			error.style.display = 'flex'
			error.innerHTML = 'Some fields are empty'
		} else {
			error.style.display = 'none'
		}

		tip.classList.toggle('active')

		if (tip.textContent === '5%') {
			tipPercent = 5
		} else if (tip.textContent === '10%') {
			tipPercent = 10
		} else if (tip.textContent === '15%') {
			tipPercent = 15
		} else if (tip.textContent === '25%') {
			tipPercent = 25
		} else if (tip.textContent === '50%') {
			tipPercent = 50
		} else {
			tipPercent = 0
		}
		showTipOnPerson()
		showTipOnTotal()
	})
})

billInput.addEventListener('change', e => {
	billValue = e.target.value
	console.log(billValue)
})

peopleInput.addEventListener('change', e => {
	peopleValue = e.target.value
	console.log(peopleValue)
})

resetBtn.addEventListener('click', () => {
	totalTipAmount = 0
	totalGroupTipAmount = 0
	tipAmount.textContent = '$' + totalTipAmount.toFixed(2)
	totalTip.textContent = '$' + totalGroupTipAmount.toFixed(2)
	billInput.value = ''
	peopleInput.value = ''
})
