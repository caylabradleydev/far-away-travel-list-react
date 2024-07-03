function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        {" "}
        <em>Start adding some items to your packing list </em>
      </footer>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      {packedPercentage === 100 ? (
        <em>You've got everything you need! Ready to go!</em>
      ) : (
        <em>
          {packedPercentage === 100} You have {numItems} items on your list, and
          you already packed {numPacked} ({packedPercentage}%)
        </em>
      )}
    </footer>
  );
}

export default Stats;
