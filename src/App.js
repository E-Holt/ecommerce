//importing default exports - name can be different
// import Product from "./components/Product"
//importing named exports - name must be the same
import { ProductList } from "./components/ProductList"
import Cart from "./components/Cart"
import NavBar from "./components/mui/NavBar"

function App() {
  return (
    <div className="App">
      <NavBar />
      <ProductList />
      <Cart />
    </div>
  )
}

//Can have only one default export per file, but can have multiple named exports per file
export default App;
