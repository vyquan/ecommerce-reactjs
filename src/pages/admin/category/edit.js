import React, { useState, useEffect } from 'react'
import { useForm} from "react-hook-form";
import { useHistory, useParams } from 'react-router-dom';
import CategoryAPI from "../../../api/categoryAPI";

const EditCategory = ({ onEditCategory}) => {
  const {id} = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const [category, setCategory] = useState([])
    const onHandleSubmit = async(data) => {  
      onEditCategory(id, data);
        history.push('/admin/categories')
    }
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await CategoryAPI.get(id);
                setCategory(data);
            } catch (error) {
            }
        }
        getCategory();
    }, [])
  return (
    <main className="col-md-10 col-lg-10">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 ">
        <h1 className="h2">Edit Category</h1>
      </div>
      <form
        action=""
        className="form-contact contact_form"
        method="post"
        id="contactForm"
        noValidate="novalidate"
        onSubmit={handleSubmit(onHandleSubmit)}
      >
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="">Tên danh mục</label>
              <input
                className="form-control rounded-pill"
                name="name"
                id="name"
                type="text"
                placeholder="Tên danh mục"
                defaultValue={category.name}
                {...register("name", { required: true })}
              />
              {errors.name && <span className="text-danger mt-2">Name must be filled out</span>}
            </div>
          </div>
          <div className="col-lg-2 form-group text-center text-md-right mt-4">
            <button
              type="submit"
              className="button button-hero text-decoration-none"
            >
              Thêm
            </button>
          </div>
        </div>
        <div className="col-lg-2"></div>
      </form>
    </main>
  );
};

export default EditCategory;
