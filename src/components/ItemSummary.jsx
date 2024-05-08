import { Link } from "react-router-dom";

function itemSummary(props) {
  return (
    <div className="container" key={props.itemDetails.id}>
      <Link to={`/items/${props.itemDetails.id}`}>
        <div className="title">
          {props.itemDetails.thumbnail ? (
            <img className="image" src={props.itemDetails.thumbnail} />
          ) : (
            "no image"
          )}

          <p>{props.itemDetails.title}</p>
        </div>
      </Link>
      <button
        className="button"
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
