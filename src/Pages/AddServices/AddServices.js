import React from "react";
import "./AddServices.css";

import { useForm } from "react-hook-form";
import axios from "axios";
const AddServices = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:4000/services", data).then((res) => {
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
    });
  };
  return (
    <div className="add-service">
      <h1>Add a service</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          Placeholder="Name"
        />
        <textarea {...register("description")} Placeholder="description" />
        <input type="number" {...register("price")} Placeholder="price" />
        <input {...register("img")} Placeholder="picture" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddServices;
