import { createContext } from 'react'
import Header from './components/Header.jsx'
// import ItemSkeleton from './components/ItemSkeleton.jsx';
// import Items from './components/Items';

const AppDispatchContext = createContext(null);

function App() {



  return (
    <div>
        <Header />
        {/* <Items /> */}
        {/* <ItemSkeleton /> */}
    </div>
  )
}

export default App
