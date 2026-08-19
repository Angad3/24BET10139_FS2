import {useEffect, useState} from 'react'
function App() {
  const[color, setcolor] = useState("white")
  const click = color => {
    setcolor(color)
  }
  useEffect(() =>{document.body.style.backgroundColor = color},[color])
  return (
    <div>
      <button onClick={ () => click("red")}>RED</button>
      <button onClick={ () => click("blue")}>BLUE</button>
      <button onClick={ () => click("darkgreen")}>GREEN</button>
      <button onClick={ () => click("white")}>WHITE</button>
    </div>
  )
}

export default App
