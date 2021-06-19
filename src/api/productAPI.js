import { axiosClient } from "./axiosClient";
import { FormData } from "./axiosClient";
const ProductAPI = {
  getAll() {
    const url = `/products`;
    return axiosClient.get(url);
  },
  getTrending() {
    const url = `/products/limit`;
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/product/${id}`;
    return axiosClient.get(url);
  },
  add(product,userID,token) {
    const url = `/products/${userID}`;
    return FormData.post(url, product,{
      headers : {
        Authorization : `Bearer ${token}`
      }
    });
  },
  // add(product) {
  //   const url = `/products`;
  //   return FormData.post(url, product);
  // },
  remove(id,userID,token) {
    const url = `/product/${id}/${userID}`;
    return axiosClient.delete(url,{
      headers : {
        Authorization : `Bearer ${token}`
      }
    })
  },
  update(id,data,userID,token) {
    const url = `/product/${id}/${userID}`;
    return FormData.put(url,data,{
      headers : {
        Authorization : `Bearer ${token}`
      }
    });
  },
  // update(id, data) {
  //   const url = `/product/${id}`;
  //   return FormData.put(url, data);
  // },
};
export default ProductAPI;
