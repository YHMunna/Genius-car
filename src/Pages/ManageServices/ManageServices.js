import React, { useEffect, useState } from "react";

const ManageServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/services/")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleDelete = (id) => {
    const url = `http://localhost:4000/services/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
          alert("deleted");
        }
      });
  };
  return (
    <div>
      <h1>All services</h1>
      {services.map((service) => (
        <div key={service._id}>
          <h4>Name :{service.name}</h4>
          <button onClick={() => handleDelete(service._id)}>Delete</button>
          <h4>Price :{service.price}</h4>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
