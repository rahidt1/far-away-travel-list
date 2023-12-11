export function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      {/* Here in onClick, we have to use callback function { ()=> } so that we can pass the item id while calling the onDeleteItem function. If we just pass the function 'onDeleteItem' it would pass event object (e) which is of no use to us. And if we passed id directly { onDeleteItem(id) } like this, this would immedietely call the onDeleteItem function without onClick event. So by adding a callback function, we are giving the power of calling onDeleteItem function to 'onClick' */}
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
