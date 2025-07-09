import type { ItemData } from './types/item';

type singleItemProps = {
  item: ItemData;
  removeItem: (itemId: string) => void;
  editItem: (itemId: string) => void;
};

const SingleItem = (props: singleItemProps) => {
  const { item, removeItem, editItem } = props;
  // const [isChecked, setIsChecked] = useState(item.completed);
  const isChecked = item.completed;

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: isChecked ? 'line-through' : 'none',
        }}
      >
        {item.name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => removeItem(item.id)}
      >
        delete
      </button>
    </div>
  );
};

export default SingleItem;
