import { useEffect, useState } from "react";


function App() {

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
    <div>
      {items.map(items => (
        <div>
          <img src={items.item.images.icon} />
          <h1>
            {items.item.name}
          </h1> 
        </div>  
      ))}
    </div>
  );
}

export default App;
