import React from "react";
import { useFormik } from "formik";
import { Helmet } from "react-helmet";
import "../AddProductPage/index.scss"
import { ProductSchema } from "../../validation/productschema";
import { addNewPost } from "../../Services";


const AddProductPage = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      imageUrl: "",
    },
    onSubmit: (values) => {
      addNewPost(values).then((res)=>{console.log(res)})
    },
    validationSchema:ProductSchema
  });
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>AddProductPage</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
     <div id="productadd">
      <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <label htmlFor="lastName">price</label>
        <input
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        <label htmlFor="email">imageUrl</label>
        <input
          id="imageUrl"
          name="imageUrl"
          type="string"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <button type="submit">Submit</button>
      </form>
      </div>
     </div>
    </>
  );
};
export default AddProductPage;
