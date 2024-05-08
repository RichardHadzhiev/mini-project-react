import { useParams } from "react-router-dom";

function ItemDetails(props) {
  const { itemId } = useParams();
  const item = props.content.find((ele) => ele.id === parseInt(itemId));
  return (
    <div className="title">
      <h1>{item.title}</h1>
      {item.thumbnail ? (
        <img
          className="image"
          src={item.thumbnail}
          style={{ maxWidth: "100px" }}
        />
      ) : (
        "no image"
      )}
      <p>{item.brand}</p>
      <p>Description: {item.description}</p>
      <p>Price: {item.price}</p>
    </div>
  );
}

export default ItemDetails;

// {element.discountPercentage > 15 ? (
//     <p className="deal">*GREAT DEAL*</p>
//   ) : (
//     ""
//   )}
