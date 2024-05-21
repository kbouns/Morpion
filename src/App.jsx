import { useState } from 'react'
import TicTacToe from './Components/TicTacToe/TicTacToe'

function App() {
  const [count, setCount] = useState(0)

  return (

      <div>
        <TicTacToe />
      </div>
      

  );
}

export default App
