import React from "react";
import Useform from "../hooks/useform";

const AddProducts = () => {
  const [data, handleChange, handleReset] = Useform({
    nombre: " ",
    edad: " ",
  });

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(data)
    handleReset()
    
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" onChange={handleChange} />

        <input type="text" name="edad" onChange={handleChange} />

        <button type="submit"> click me</button>
      </form>
    </div>
  );
};

export default AddProducts;
