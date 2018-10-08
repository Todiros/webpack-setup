import greeting from 'greeting'

const component = () => {
    let element = document.createElement('div')

    element.innerHTML = greeting()

    return element;
}
  
document.body.appendChild(component)