import { axiosClient } from "./axiosClient";
const userAPI = {
  getAll() {
    const url = `/users`;
    return axiosClient.get(url);
  },
  
  get(id) {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },
  add(user) {
    const url = `/signup`;
    return axiosClient.post(url, user);
  },
  login(user) {
    const url = `/signin`;
    return axiosClient.post(url, user);
  },
  logout(user){
    const url = `/signout`;
    return axiosClient.get(url,user)
  },
  remove(id) {
    const url = `/users/${id}`;
    return axiosClient.delete(url);
  },
  update(id,data) {
    const url = `/users/${id}`;
    return axiosClient.put(url,data);
  },
};
export default userAPI;
