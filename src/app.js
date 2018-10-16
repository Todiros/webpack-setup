import React from 'react'
import { render } from 'react-dom'
import Main from './components/Main'
import './style/main.sass'

if (module.hot) {
    module.hot.accept();
}

render(<Main />, document.getElementById('root'))