import { useEffect, useState, useReducer } from "react"
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom"
import CircularProgress from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"
//importing default exports - name can be different, importing named exports - name must be the same
// import ProductListClass from "./components/ProductListClass"
import Cart, { loader } from "./components/Cart"
import NavBar from "./components/mui/NavBar"
import ProductInfo from "./components/ProductInfo"
import { ProductList } from "./components/ProductList"
import AddProduct from "./components/AddProduct"
import Login from "./components/Login"
import { GlobalContext } from "./components/utils/globalStateContext"
import globalReducer from "./components/reducers/globalReducer"
import ProtectedRoute from "./components/ProtectedRoute"
import NotFound from "./components/NotFound" 


function App() {
  const [isLoading, setIsLoading] = useState(true)

  const initialState ={
    loggedInUserName: '',
    token:''
  }

  const [store, dispatch] = useReducer(globalReducer, initialState)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element= {<MainPage />} errorElement={<NotFound />}>
        <Route path="login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="product/add" element={<AddProduct />} />
          <Route path="cart" element={<Cart />} loader={loader} />
        </Route>
        <Route path="product/:productId" element={<ProductInfo />} />
        <Route path="/" element={<ProductList />} />
      </Route>
    )
  )

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
          <RouterProvider router={router} />
        </GlobalContext.Provider>
      </div>)
      }
    </>
  )
}

function MainPage() {

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

//Can have only one default export per file, but can have multiple named exports per file
export default App
