import ProductList from "../components/pages/ProductList/ProductList"
import Dashboard from "../components/pages/Dashboard/Dashboard"
import AddProduct from "../components/pages/AddProduct/AddProduct"
import EditProduct from "../components/pages/EditProduct/EditProduct"
import BuySell from "../components/pages/BuySell/BuySell"
import History from "../components/pages/History/History"

let authRoutes = [
    {
        path : "product/list/all",
        element : <ProductList />
      },
    {
        path : "dashboard",
        element : <Dashboard />
      },
    {
        path : "product/add",
        element : <AddProduct />
      },
    {
        path : "product/edit/:id",
        element : <EditProduct />
      },
    {
        path : "product/qty/:id",
        element : <BuySell />
      },
    {
        path : "history",
        element : <History />
      },
]

export default authRoutes