import { useState } from "react";

function Form({ content, setContent }) {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const itemIds = content.map((item) => item.id);
    const maxId = Math.max(...itemIds);

    const newItem = {
      id: maxId + 1,
      title: title,
      description: description,
      price: price,
      brand: brand,
      category: category,
      thumbnail: thumbnail,
    };

    const newList = [newItem, ...content];
    setContent(newList);
    console.log(...content);

    setTitle("");

    setDescription("");
    setCategory("");
    setBrand("");
    setPrice("");
    setThumbnail("");
  };
  return (
    <>
      <section className="submit">
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              required
              placeholder="Enter the Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </label>
        </form>
        <form onSubmit={handleSubmit}>
          <label>
            Description:
            <input
              type="text"
              name="description"
              placeholder="Enter a Description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </label>
        </form>
        <form onSubmit={handleSubmit}>
          <label>
            Price:
            <input
              type="number"
              name="price"
              required
              min={1}
              placeholder="Enter the Price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </label>
        </form>
        <form onSubmit={handleSubmit}>
          <label>
            Image
            <input
              type="url"
              name="image"
              placeholder="Place the Image"
              value={thumbnail}
              onChange={(e) => {
                setThumbnail(e.target.value);
              }}
            />
          </label>
        </form>
        <form onSubmit={handleSubmit}>
          <label>
            Brand:
            <input
              type="text"
              name="brand"
              placeholder="Enter the Brand"
              value={brand}
              onChange={(e) => {
                setBrand(e.target.value);
              }}
            />
          </label>
        </form>
        <form onSubmit={handleSubmit}>
          <label>
            Category:
            <input
              type="text"
              name="category"
              placeholder="Enter the Category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </label>
        </form>
        <form className="create" onSubmit={handleSubmit}>
          <button>Create</button>
        </form>
      </section>
    </>
  );
}

export default Form;
