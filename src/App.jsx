import { createContext } from 'react'
import Header from './components/Header.jsx'


const AppDispatchContext = createContext(null);
const AppContext = createContext(null);

function App() {



  return (
    <div>
        <Header />
      
    </div>
  )
}

export default App
