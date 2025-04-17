import "./App.css";
import {
  ColdTemperature,
  CloudCover,
  Rain,
  HotTemperature,
  Footer,
  Reuseme,
} from "./components";

function App() {
  let cloudCover;

  const isCloudy = true;

  if (isCloudy) {
    cloudCover = <CloudCover />;
  }

  const isRainy = true;

  const rain = isRainy && <Rain />;
  const curr_temp = 81;

  const temp = curr_temp > 80 ? <HotTemperature /> : <ColdTemperature />;

  const data_structure = [
    {
      name: "Cloud Cover",
      text: "It's cloudy today.",
      img_link: "/cloudy.jpg",
    },
    {
      name: "Sunny",
      text: "It's very hot today.",
      img_link: "/Sun.webp",
    },
    {
      name: "Rainy",
      text: "It's very wet today.",

      img_link: "/Rain.jpg",
    },
    {
      name: "Cold",
      text: "It's freezing today.",
      img_link: "/Cold.jpg",
    },
  ];
  return (
    <>
      <div className="m-0 " id="App">
        <nav className="navbar bg-slate-700 flex flex-row justify-between items-center">
          <h1 className=" text-emerald-500">Weather Conditions</h1>
          <img className="w-20 h-20 rounded-full" src="/lightning-bolts.jpg" />
        </nav>
        <div className="container">
          <div className="row flex flex-wrap justify-center">
            {/* Inside here We
            will create the card for the weather conditions 
            CloudCover, Rain, HotTemperature, Cold Temperature
            */}
            {/* {cloudCover}
            {rain}
            {temp} */}
            {/* <Reuseme
              name={"Cloud Cover"}
              text={"It's cloudy today"}
              img_link={"/cloudy.jpg"}
            />
            <Reuseme
              name={"Sunny"}
              text={"Its very hot today"}
              img_link={"/Sun.webp"}
            />
            <Reuseme
              name={"Rainy"}
              text={"It's very wet today"}
              img_link={"/Rain.jpg"}
            />
            <Reuseme
              name={"Cold"}
              text={"It's freezing today"}
              img_link={"/Cold.jpg"}
            /> */}
            {data_structure.map((data, index) => {
              return (
                <Reuseme
                  key={index}
                  name={data.name}
                  text={data.text}
                  img_link={data.img_link}
                />
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
