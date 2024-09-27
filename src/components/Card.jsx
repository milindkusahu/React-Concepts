

const Card = () => {
  const arr = [
    {
      image:
        "https://images.unsplash.com/photo-1519223400710-6da9e1b777ea?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon Basics",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.",
      instock: true,
    },

    {
      image:
        "https://images.unsplash.com/photo-1547032175-7fc8c7bd15b3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Daily Objects",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.",
      instock: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Apple",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.",
      instock: true,
    },
  ];

  return (
    <>
      {arr.map((ele, index) => (
        <div key={index} className="card-container">
          <img src={ele.image} alt="" />
          <div className="card-description">
            <h1>{ele.name}</h1>
            <p>{ele.description}</p>
          </div>
          <button
            className="btn"
            style={
              ele.instock
                ? { color: "black", background: "#00FF00" }
                : { color: "white", background: "#FF0000" }
            }
          >
            {ele.instock ? "In Stock" : "Out of Stock"}
          </button>
        </div>
      ))}
    </>
  );
};

export default Card;
