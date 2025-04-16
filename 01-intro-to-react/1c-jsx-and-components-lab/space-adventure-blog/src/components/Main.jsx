import React from "react";

// create css styling in an object
const mainStyle = {
  backgroundColor: "#282c34",
  color: "white",
  padding: "20px",
  textAlign: "center",
};

export default function Main() {
  return (
    <main className="col-md-12">
      <div className="content" style={mainStyle}>
        <h1>Nibiru the 9th Planet</h1>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
        excepturi ipsum dolorum optio provident sunt natus ex, sapiente omnis.
        Expedita porro neque similique ipsa adipisci. Expedita explicabo
        incidunt reprehenderit ad. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Quos facilis aperiam delectus perspiciatis saepe
        architecto nihil, autem quam, sint dignissimos est molestias non!
        Aliquid voluptates eius laudantium itaque pariatur temporibus. Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorum quod
        minus ducimus ullam possimus nihil, repellat aliquam suscipit quas
        incidunt architecto quaerat id sunt necessitatibus omnis esse nesciunt
        ipsum! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Doloribus excepturi ipsum dolorum optio provident sunt natus ex,
        sapiente omnis. Expedita porro neque similique ipsa adipisci. Expedita
        explicabo incidunt reprehenderit ad. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Quos facilis aperiam delectus perspiciatis
        saepe architecto nihil, autem quam, sint dignissimos est molestias non!
        Aliquid voluptates eius laudantium itaque pariatur temporibus. Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorum quod
        minus ducimus ullam possimus nihil, repellat aliquam suscipit quas
        incidunt architecto quaerat id sunt necessitatibus omnis esse nesciunt
        ipsum!
      </p>
    </main>
  );
}
