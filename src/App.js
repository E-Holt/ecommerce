import { useEffect, useState, useReducer } from "react"
import CircularProgress from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"
//importing default exports - name can be different, importing named exports - name must be the same
// import ProductListClass from "./components/ProductListClass"
import Cart from "./components/Cart"
import NavBar from "./components/mui/NavBar"
import ProductInfo from "./components/ProductInfo"
import { ProductList } from "./components/ProductList"
import AddProduct from "./components/AddProduct"
import Login from "./components/Login"
import { GlobalContext } from "./components/utils/globalStateContext"
import globalReducer from "./components/reducers/globalReducer"

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedItem, setSelectedItem] = useState(null)

  const initialState ={
    loggedInUserName: '',
    token:''
  }

  const [store, dispatch] = useReducer(globalReducer, initialState)

  function setItem(item) {
      setSelectedItem(item)
  }

  setTimeout(() => {
    setIsLoading(false)
  }, 2000)

  useEffect (() => {
    const username = localStorage.getItem("username")
    const token = localStorage.getItem("token")
    if (username && token) {
      dispatch({
        type: 'setLoggedInUserName',
        data: username
      })
      dispatch({
        type: 'setToken',
        data: token
      })
    }
  }, [])

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
        <GlobalContext.Provider value={{store, dispatch}}>
          <NavBar />
          <Login />
          <ProductList setItem={setItem} />
          <ProductInfo item={selectedItem} />
          <AddProduct />
          <Cart />
        </GlobalContext.Provider>
      </div>)
      }
    </>
  )
}

//Can have only one default export per file, but can have multiple named exports per file
export default App
