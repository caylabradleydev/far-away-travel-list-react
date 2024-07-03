import { useState } from "react";
import { Item } from "../components";

function PackingList({
  items,
  onDeleteItem,
  onToggleItemPacked,
  onDeleteAllItems,
}) {
  const [sortby, setSortBy] = useState("input");
  let sortedItems;

  if (sortby === "input") sortedItems = items;
  if (sortby === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortby === "packedStatus")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItemPacked={onToggleItemPacked}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortby} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packedStatus">sort by packed status</option>
        </select>
        <button onClick={() => onDeleteAllItems()}>Clear List</button>
      </div>
    </div>
  );
}

export default PackingList;
