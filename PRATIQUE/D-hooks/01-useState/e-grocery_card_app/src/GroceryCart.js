export default function GroceryCart(){

  const addItem = () => {
    return
  }

  const removeItem = () => {
    return
  }

  return (
    <div>
      <h1>Grocery Cart</h1>
        <ul>
          {item}
        </ul>
        <h2>Produce</h2>
        <ItemList items={produce} onItemClick={addItem} />
        <h2>Pantry Items</h2>
        <ItemList items={produce} onItemClick={addItem} />
    </div>
  )
}