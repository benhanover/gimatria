import { useState } from 'react'

function Bla () {
    const [x, setX] = useState(0)

    const handleIncrement = () => {
        setX(x + 1)
    }

    return(
        <div onClick={handleIncrement}>{x}</div>
    )
}

export default Bla