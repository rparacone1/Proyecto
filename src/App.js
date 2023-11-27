import NavBar from "./NavBar/NavBar";
import { BrowseRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './componentes/ItemListContainer.js'
import ItemDetailContainer from "./componentes/ItemDetailContainer"
import "./App.css"
import ItemCount from "./componentes/ItemCount/ItemCount";


function App() {
  return (
    <div className="App">
      <BrowseRouter >
        <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryID' element={<ItemDetailContainer/>} />
          <Route path='/item/:itemID' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<cart />}
          <Route path = '/checkout' element={<checkout />}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
        </CartProvider> 
      </BrowseRouter>
    </div>
  );
}
export default App;

