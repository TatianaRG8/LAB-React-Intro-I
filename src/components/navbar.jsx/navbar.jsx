import { useState } from 'react'

function Navbar() {
    
    const [count, setCount] = useState(0)
    const [name, setName] = useState("No name")
    
    const sumCount = (e) => {
        setCount(count+1)
        console.log(e)
    }

    const handleName = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    };

    return (
        <div>
            {count}
            <h1>{ name}</h1>
        <button onClick={sumCount}> Contador </button>
        </div>
    )
}

export default Navbar
