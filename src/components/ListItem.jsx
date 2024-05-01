import data from "../data/data.json"
import { useState } from "react"

function ListItem() {
    const [content,Setcontent] = useState(data)
  
  function deleteItem(dataId){
      const newValue = content.filter(ele => ele.id !== dataId)
      Setcontent(newValue)
  }
  return (
    <>
    {content.map((element) => {
      return (
        <div className='title' key={element.id}>
          {element.discountPercentage > 15
            ? <p className='deal'>*GREAT DEAL*</p>
            : ""
          }
          <p>{element.title}</p>
          <button onClick={() => 
          {deleteItem(element.id)
          }}>Delete</button>
          
        </div>
      )
    })}
    </>
  )
  
}

export default ListItem