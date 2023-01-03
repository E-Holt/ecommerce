import { useState } from "react"
import CircularProgress from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"
//importing default exports - name can be different, importing named exports - name must be the same
// import ProductListClass from "./components/ProductListClass"
import Cart from "./components/Cart"
import NavBar from "./components/mui/NavBar"
import ProductInfo from "./components/ProductInfo"
import { ProductList } from "./components/ProductList"

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedItem, setSelectedItem] = useState(null)

  function setItem(item) {
      setSelectedItem(item)
  }

  setTimeout(() => {
    setIsLoading(false)
  }, 2000)

  return (
    <>
      {isLoading ? (
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh'
          }}>
          <CircularProgress />
        </Box>
      ) : 
        (<div className="App">
        <NavBar />
        <ProductList setItem={setItem} />
        <ProductInfo item={selectedItem} />
        <Cart />
      </div>)
      }
    </>
  )
}

//Can have only one default export per file, but can have multiple named exports per file
export default App
