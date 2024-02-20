import "./Card.css";
import usersData from "./data";
const Cards = ({ props }) => {
  // const { usersData } = props;
  return (
    <div className="cardsList">
      {usersData.map((user, index) => {
        return (
          <div className="CardBox" key={index}>
            <h1>Title: {user.title}</h1>
            <p className="price">PRICE : {user.price}</p>
            <p className="category">CATEGORY : {user.category}</p>
            <p className="description">DESCRIPTION : {user.description}</p>
            <>
              <img src={user.image} />
            </>
            <p className="rating">Rating : {user.rating.count}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Cards;
