import React, { useState } from 'react'

const App = () => {

  const [input, setInput] = useState('')
  const [str, setStr] = useState([{ id: 0, title: '' }])
  const [num, setNum] = useState([{ id: 0, title: '' }])

  const handleBtn = (e) => {
    e.preventDefault();

    const logic = { id: input.length + 1, title: input }

    isNaN(input) ? setStr([...str, logic]) : setNum([...num, logic])

    setInput('')
  }

  return (
    <div>
      <form>
        <input
          placeholder='enter string or number..'
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button onClick={handleBtn}>Filter</button>
      </form>
      <div>
        <h2>String</h2>
        {str.map((e, i) => (
          <h2 key={i}>{e.title}</h2>

        ))}
      </div>

      <div>
        <h2>Number</h2>
        {num.map((e, i) => (
          <h2 key={i + 1}>{e.title}</h2>
        ))}
      </div>
    </div>
  )
}

export default App
