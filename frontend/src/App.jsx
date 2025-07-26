import { Routes, Route } from "react-router-dom"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Companies from './pages/Companies'
import Products from './pages/Products'
import ChangePassword from './pages/ChangePassword'
import ProfilePage from "./pages/ProfilePage"
import EditPage from "./pages/EditPage.jsx"


import ProtectedRoute from "./components/auth/ProtectedRoute.jsx"

import { ToastContainer } from 'react-toastify'
import Unauthorized from "./pages/Unauthorized.jsx"
import { CreateProduct } from "./components/CreateProduct.jsx"

import ProductDetailPage from "./pages/ProductDetailPage.jsx"
import SearchResults from "./pages/SearchResult.jsx"

function App() {


  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Error" element={<Unauthorized />}></Route>
        {/* Protected Routes */}
        <Route element={<ProtectedRoute allowedRoles={['user']} />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/companies" element={<Companies />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/changepassword" element={<ChangePassword />}></Route>
          <Route path="/edit" element={<EditPage />}></Route>
          <Route path="/createProduct" element={<CreateProduct />} ></Route>
          <Route path="/productDetail/:id" element={<ProductDetailPage />} ></Route>
          <Route path="/search" element={<SearchResults />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
