import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/sample1.jpg",
      title: "Hall Design",
    },
    {
      id: 2,
      url: "/sample2.jpg",
      title: "Hall Design",
    },
    {
      id: 3,
      url: "/sample3.jpg",
      title: "TV Space Design",
    },
    {
      id: 4,
      url: "sample4.jpg",
      title: "TV Design Clasical",
    },
    {
      id: 5,
      url: "sample5.jpg",
      title: "Main Hall",
    },
    {
      id: 6,
      url: "sample6.jpg",
      title: "Bedroom",
    },
  ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;