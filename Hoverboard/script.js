const container = document.querySelector('.container')
const colors = ['#e74c3c', '8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 500

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
    const color = getRandowColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color},0 0 15px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
     element.style.boxShadow = `0 0 2px #1d1d1d`
}

function getRandowColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}