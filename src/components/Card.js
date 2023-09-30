const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image_src} alt="burger-image" />
      <h3>{props.name}</h3>
      <h4>{props.cuisines.join(", ")}</h4>
      <h4>{props.ratings}</h4>
      <h4>20 mins</h4>
    </div>
  );
};
export default Card;
