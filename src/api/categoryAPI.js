import { axiosClient } from "./axiosClient";
import { FormData } from "./axiosClient";
const CategoryAPI = {
  getAll() {
    const url = `/categories`;
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/category/${id}`;
    return axiosClient.get(url);
  },
  add( category,userID, token) {
    const url = `/categories/${userID}`;
    return axiosClient.post(url, category, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  // add(category) {
  //   const url = `/categories`;
  //   return axiosClient.post(url, category);
  // },
  // remove(id) {
  //   const url = `/category/${id}`;
  //   return axiosClient.delete(url);
  // },
  remove(id, userID, token) {
    const url = `/category/${id}/${userID}`;
    return axiosClient.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  // update(id,data) {
  //   const url = `/category/${id}`;
  //   return axiosClient.put(url, data);
  // },
  update(id, data, userID, token) {
    const url = `/category/${id}/${userID}`;
    return axiosClient.put(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
export default CategoryAPI;
