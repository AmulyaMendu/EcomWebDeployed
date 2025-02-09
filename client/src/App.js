import { Routes, Route } from 'react-router-dom'

import About from './pages/About';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import ContactPage from './pages/ContactPage';
import Homepage from './pages/HomePage';
import Register from './pages/Auth/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Auth/Login';
import PrivateRoute from './components/Routes/Private';
import Dashboard from './pages/user/Dashboard';
import ForgotPassword from './pages/Auth/ForgotPassword';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Users from './pages/Admin/Users';
import UserOrder from './pages/user/UserOrder';
import Profile from './pages/user/Profile';
import Products from './pages/Admin/Products';
import UpdateProduct from './pages/Admin/UpdateProduct';
import Search from "./pages/Search"
import ProductDetails from "./pages/ProductDetails"
import Categories from "./pages/Categories"
import CategoryProduct from "./pages/CategoryProduct"
import CartPage from "./pages/CartPage"
import AdminOrders from './pages/Admin/AdminOrders';

function App() {
  return (<>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/product/:slug' element={<ProductDetails />} />
      <Route path='/categories' element={<Categories />} />
      <Route path='/category/:slug' element={<CategoryProduct />} />

      <Route path='/cart' element={<CartPage />} />

      <Route path='/search' element={<Search />} />

      <Route path='/dashboard' element={<PrivateRoute />}>
        <Route path='user' element={<Dashboard />} />
        <Route path='user/orders' element={<UserOrder />} />
        <Route path='user/profile' element={<Profile />} />

      </Route>

      <Route path='/dashboard' element={<AdminRoute />}>
        <Route path='admin' element={<AdminDashboard />} />
        <Route path='admin/create-category' element={<CreateCategory />} />
        <Route path='admin/create-product' element={<CreateProduct />} />
        <Route path='admin/products' element={<Products />} />
        <Route path='admin/product/:slug' element={<UpdateProduct />} />

        <Route path='admin/users' element={<Users />} />
        <Route path='admin/orders' element={<AdminOrders />} />



      </Route>

      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/policy' element={<Policy />} />
      <Route path='*' element={<Pagenotfound />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />


    </Routes>


  </>
  );
}

export default App;
