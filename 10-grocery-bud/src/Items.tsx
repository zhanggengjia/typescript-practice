import SingleItem from './SingleItem';
import type { ItemData } from './types/item';

type ItemsProps = {
  items: ItemData[];
  removeItem: (itemId: string) => void;
  editItem: (itemId: string) => void;
};

const Items = (props: ItemsProps) => {
  const { items, removeItem, editItem } = props;
  return (
    <div className="items">
      {items.length === 0 ? (
        <p>No items yet</p>
      ) : (
        items.map((item) => (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        ))
      )}
    </div>
  );
};

export default Items;
