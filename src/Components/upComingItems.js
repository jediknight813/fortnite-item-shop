import { useEffect, useState } from "react";
import './item-styles.css';


function UpComingItems() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems()
  },[])

const fetchItems = async () => {
  const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get')
  const items = await data.json()
  console.log(items.data)
  setItems(items.data)
}

  return (
    <div className="item_grid">
      {items.map(items => (
        <div className={items.item.rarity}>
          <img className="item_image" alt={items.item.name} src={items.item.images.icon} />
          <h1 className="item_text">
            {items.item.name}
          </h1> 
        </div>  
      ))}
    </div>
  );
}

export default UpComingItems;
