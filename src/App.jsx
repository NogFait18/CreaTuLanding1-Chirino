import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
    {/* Proyecto iniciado y reseteado de estilos, hay que importar y utilizar los componentes y agregarles un estilo base */}
    <NavBar/>
    <ItemListContainer saludo="Bienvenido a nuestra tienda"/>
    </>
  )
}

export default App
