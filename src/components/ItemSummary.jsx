import { Link } from "react-router-dom";

function itemSummary(props) {
  return (
    <div className="items" key={props.itemDetails.id}>
      {props.itemDetails.thumbnail ? (
        <img src={props.itemDetails.thumbnail} />
      ) : (
        "no image"
      )}
      <p>{props.itemDetails.title}</p>

      <Link to={`/items/${props.itemDetails.id}`}>More Detail </Link>

      <button
        onClick={() => {
          props.callbackToDelete(props.itemDetails.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default itemSummary;
