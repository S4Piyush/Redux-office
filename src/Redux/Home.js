import React from 'react'
import { useDispatch } from 'react-redux'
import { sinupData } from './Action/Action'
function Home() {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(sinupData())
    }
    return (
        <div className="App">
            <button onClick={() => handleClick()}>+</button>
        </div>
    )
}

export default Home