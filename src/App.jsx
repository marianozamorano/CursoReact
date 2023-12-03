import React from 'react'


import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'


const App = () => {

  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Primer Pre Entrega"/>
    </div>
  )
}

export default App
