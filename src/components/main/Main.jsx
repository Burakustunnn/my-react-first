import "./Main.css";
const Main = (props) => {
  const { img, title, capacity, stadyum } = props;
  return (
    <div className="main">

      <div className="card">
        <img src={img} alt="" />
        <h2>{title}</h2>
        <h3>{stadyum}</h3>
        <p>Capacity: {capacity}</p>
      </div>
      
    </div>
  );
};

export default Main;
