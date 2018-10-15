import greeting from './greeting.js'
import './style/main.sass'

const component = () => {
    let element = document.createElement('div')

    element.innerHTML = greeting.greeting()

    return element
}

document.body.appendChild(component())