import Routes from "./Routes";
import { useState, useEffect } from "react";
import ProductAPI from "../src/api/productAPI";
import CategoryAPI from "../src/api/categoryAPI";
import NewAPI from "../src/api/newAPI";
import userAPI from "../src/api/userAPI";
import orderAPI from "../src/api/orderAPI";
import { useHistory } from "react-router-dom";
import { isAuthenticated } from "./auth";
import addToCart from "./cart";
function App() {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState([]);
  const [users, setUser] = useState([]);
  const [order, setOrder] = useState([]);

  //Product
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data: products } = await ProductAPI.getAll();
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  const removeProduct = async (id) => {
    const { user, token } = isAuthenticated();
    try {
      await ProductAPI.remove(id, user._id, token);
      const newProduct = products.filter((product) => product._id !== id);
      setProducts(newProduct);
    } catch (error) {}
  };
  const addProduct = async (item) => {
    const { user, token } = isAuthenticated();
    try {
      const { data } = await ProductAPI.add(item, user._id, token);
      setProducts([...products, data]);
    } catch (error) {
      console.log(error);
    }
  };
  const editProduct = async (id, product) => {
    const { user, token } = isAuthenticated();
    try {
      const { data } = await ProductAPI.update(id, product,user._id, token);
      const newProduct = await ProductAPI.getAll();
      setProducts( newProduct.data);
    } catch (error) {
      console.log(error);
    }
  };
  //Category
  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data: cate } = await CategoryAPI.getAll();
        setCategories(cate.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);
  const addCategory = async (category) => {
    const { user, token } = isAuthenticated();
    try {
      const { data: item } = await CategoryAPI.add(category, user._id, token);
      setCategories([...categories, item.data]);
      history.push("/admin/categories");
    } catch (error) {
      console.log(error);
    }
  };
  const removeCategory = async (id) => {
    const { user, token } = isAuthenticated();
    try {
      const { data: item } = await CategoryAPI.remove(id,user._id, token);
      // const newCategory = categories.filter((category) => category._id !== id);
      const newCategory = await ProductAPI.getAll();
      setCategories(newCategory.data);
      history.push("/admin/categories");
    } catch (error) {}
  };
  const editCategory = async (id, category) => {
    const { user, token } = isAuthenticated();
    try {
      const { data } =await CategoryAPI.update(id, category,user._id, token);
      // const newCategory = await CategoryAPI.getAll();
      // setCategories( newCategory.data);
      const newCategory = category.map((item) =>
        item.id === id ? category : item
      );
      setCategories([...newCategory, category]);
    } catch (error) {
      console.log(error);
    }
  };

  // News
  useEffect(() => {
    const getNews = async () => {
      try {
        const { data: news } = await NewAPI.getAll();
        setNews(news);
      } catch (error) {
        console.log(error);
      }
    };
    getNews();
  }, []);
  const removeNews = async (id) => {
    try {
      await NewAPI.remove(id);
      const newNews = news.filter((news) => news._id !== id);
      setNews(newNews);
    } catch (error) {}
  };

  // User
  useEffect(() => {
    const getUser = async () => {
      try {
        const { data: user } = await userAPI.getAll();
        setUser(user);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);
// Order
useEffect(() => {
  const getOrder = async () => {
    try {
      const { data: order } = await orderAPI.getAll();
      // console.log(order);
      setOrder(order);
    } catch (error) {
      console.log(error);
    }
  };
  getOrder();
}, []);
const addOrder = async (item) => {
  try {
    const { data } = await orderAPI.add(item);
    console.log(data);
    // setOrder([...order, data]);
    // localStorage.removeItem("cart");
  } catch (error) {
    console.log(error);
  }
};
  
  return (
  
 

    <div className="App">
      <Routes
        categories={categories}
        onDeleteCategory={removeCategory}
        onAddCategory={addCategory}
        onEditCategory={editCategory}
        products={products}
        onDeleteProduct={removeProduct}
        onDeleteNews={removeNews}
        onAddProduct={addProduct}
        onEditProduct={editProduct}
        news={news}
        users={users}
        order={order}
        onOrder={addOrder}
      />
    </div>

  );
}
export default App;
