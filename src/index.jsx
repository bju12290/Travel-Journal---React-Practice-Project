import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css"
import Navbar from './components/Nav-bar'
import Cards from './components/Cards'
import Data from '../data.js'

function App() {
    const cardElements = Data.map(item => {
        return <Cards key={item.id} {...item}/>
    })
    return (
        <div>
        <Navbar />
        {cardElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))