import greeting from './greeting.js'

const component = () => {
    let element = document.createElement('div')

    element.innerHTML = greeting.greeting()

    return element
}

document.body.appendChild(component())