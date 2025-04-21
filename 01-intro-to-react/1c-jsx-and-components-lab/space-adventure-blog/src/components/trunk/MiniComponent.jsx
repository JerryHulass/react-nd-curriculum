function Greeting(props) {
  return <h1>Hey {props.name}</h1>;
}

function Smoothie() {
  // css styling in props change colors
  const smoothie_ingredients = {
    item1: "Coconut",
    item2: "Water",
    item3: "Banana",
  };

  return (
    <div>
      <UseMe obj={smoothie_ingredients} />
    </div>
  );
}

//blender
function UseMe(props) {
  // css styling in props change colors
  return <h6 className=""></h6>;
}
