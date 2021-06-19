import { axiosClient } from "./axiosClient";
import {FormData} from "./axiosClient";
const NewAPI = {
  getAll() {
    const url = `/news`;
    return axiosClient.get(url);
  },
  getNew() {
    const url = `/news/limit`;
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/news/${id}`;
    return axiosClient.get(url);
  },
  add(userID,news,token) {
    const url = `/news/create/${userID}`;
    return FormData.post(url, news,{
      headers : {
        Authorization : `Bearer ${token}`
      }
    });
  },
  // remove(id,userID,token) {
  //   const url = `/news/${id}/${userID}`;
  //   return axiosClient.delete(url,{
  //     headers : {
  //       Authorization : `Bearer ${token}`
  //     }
  //   });
  // },
  remove(id) {
    const url = `/news/${id}`;
    return axiosClient.delete(url);
  },
  update(id,data,userID,token) {
    const url = `/news/${id}/${userID}`;
    return FormData.put(url,data,{
      headers : {
        Authorization : `Bearer ${token}`
      }
    });
  },
};
export default NewAPI;
