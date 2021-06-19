import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignUp from "../src/pages/website/user/SignUp";
import SignIn from "../src/pages/website/user/SignIn";
import HomePage from "./pages/website/home";
import NotFoundPage from "./pages/notFound";
import LayoutAdmin from "./layout/admin";
import LayoutWebsite from "./layout/website";
import Contact from "./pages/website/contact";
import ProductPage from "./pages/website/product/ProductPage";
import CategoryPage from "./pages/website/category";
import NewsPage from "./pages/website/news/newsPage";
import NewsDetail from "./pages/website/news/newsDetail";
import CartPage from "./pages/website/order/cart";
import ProductDetail from "./pages/website/product/ProductDetail";
import ListProduct from "./pages/admin/product/list";
import EditProduct from "./pages/admin/product/edit";
import ProductAdd from "./pages/admin/product/add";
import ListCategory from "./pages/admin/category/list";
import ListNews from "./pages/admin/news/list";
import ListOrder from "./pages/admin/order/list";
import DashboardPage from "./pages/admin/dashboad";
import AddCategory from "./pages/admin/category/add";
import EditCategory from "./pages/admin/category/edit";
import UserDashboard from "./pages/website/user/userDashboard"
import AdminDashboard from "./pages/website/user/adminDashboard"
import AdminRoute from "./auth/adminRoute"
import ListUsers from "./pages/admin/user"
import PrivateRoute from "./auth/privateRoute"
import ListProductInCategory from "./pages/admin/category/listProductInCategory"
const Routes = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/admin/:path?">
          <LayoutAdmin>
            <Switch>
              <Route exact path="/admin">
                <Redirect to="admin/dashboard" />
              </Route>
              <Route exact path="/admin/dashboard">
                <DashboardPage {...props}/>
              </Route>             
              <Route exact path="/admin/products">
                <ListProduct {...props} />
              </Route>
              <Route exact path="/admin/product/add">
                <ProductAdd {...props} />
              </Route>
              <Route exact path="/admin/product/:id">
                <EditProduct {...props} />
              </Route>
              <Route exact path="/admin/categories">
                <ListCategory {...props} />
              </Route>
              <Route exact path="/admin/category/add">
                <AddCategory {...props} />
              </Route>
              <Route exact path="/admin/category/:id">
                <EditCategory {...props} />
              </Route>
              <Route exact path="/admin/category/product/:id">
                <ListProductInCategory {...props} />
              </Route>
              <Route exact path="/admin/news">
                <ListNews {...props} />
              </Route>
              <Route exact path="/admin/users">
                <ListUsers {...props} />
              </Route>
              <Route exact path="/admin/order">
                <ListOrder {...props} />
              </Route>
              <Route path="/admin/*" component={NotFoundPage}></Route>
            </Switch>
          </LayoutAdmin>
        </Route>
        <Route>
          <LayoutWebsite {...props}>
            <Switch>
              <Route exact path="/" component={HomePage}>
                <HomePage {...props} />
              </Route>
              <PrivateRoute exact path="/user/dashboard">
                <UserDashboard/>
              </PrivateRoute>
              <AdminRoute exact path="/admin/dashboard">
                <AdminDashboard/>
              </AdminRoute>
              <Route exact path="/products" component={ProductPage}>
                <ProductPage {...props} />
              </Route>
              <Route exact path="/product/:id">
                <ProductDetail {...props}/>
              </Route>
              <Route exact path="/news" component={NewsPage}>
                <NewsPage {...props}/>
              </Route>
              <Route exact path="/new/:id" component={NewsPage}>
                <NewsDetail {...props}/>
              </Route>
              <Route
                exact
                path="/categories/:id"
                component={CategoryPage}
              ><CategoryPage {...props}/></Route>
              <Route exact path="/contact" component={Contact}></Route>
              <Route exact path="/cart" component={CartPage}>
                <CartPage {...props} />
              </Route>
              <Route exact path="/signin" component={SignIn}></Route>
              <Route exact path="/signup" component={SignUp}></Route>
              <Route path="*" component={NotFoundPage}>
              </Route>
            </Switch>
          </LayoutWebsite>
        </Route>
      </Switch>
    </Router>
  );
};
export default Routes;
