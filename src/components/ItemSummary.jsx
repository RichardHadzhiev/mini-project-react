import { Link } from "react-router-dom";

function itemSummary(props) {
  return (
    <div className="title" key={props.itemDetails.id}>
      {props.itemDetails.thumbnail ? (
        <img
          className="image"
          src={props.itemDetails.thumbnail}
          style={{ maxWidth: "100px" }}
        />
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
