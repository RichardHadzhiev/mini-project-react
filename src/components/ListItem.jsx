import ItemSummary from "./ItemSummary";
import Form from "./Form";

function ItemList({ content, setContent, callbackToDelete }) {
  return (
    <>
      <Form content={content} setContent={setContent} />
      <div className="container">
        {content.map((ele) => {
          return (
            <ItemSummary
              key={ele.id}
              itemDetails={ele}
              callbackToDelete={callbackToDelete}
            />
          );
        })}
      </div>
    </>
  );
}
export default ItemList;
