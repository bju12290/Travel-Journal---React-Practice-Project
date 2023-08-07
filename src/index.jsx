import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css"
import Navbar from './components/Nav-bar'

function Test() {
    return (
        <Navbar />
    )
}

ReactDOM.render(<Test />, document.getElementById("root"))