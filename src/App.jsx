import { useState } from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       {/* Navigation bar */}
       < NavigationBar />
       {/* Main component */}
       <main></main>
      </div>
    </>
  )
}

export default App
