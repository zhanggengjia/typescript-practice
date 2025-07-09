import { useState, type ReactElement } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import Items from './Items';
import { ToastContainer, toast } from 'react-toastify';
import { type ItemData } from './types/item';

// const getLocalStorage = (): ItemData[] => {
//   let list = localStorage.getItem('list');
//   let objList: ItemData[];
//   if (list) {
//     objList = JSON.parse(list);
//   } else {
//     objList = EmptyItemData;
//   }
//   return objList;
// };

const getLocalStorage = (): ItemData[] => {
  const list = localStorage.getItem('list');
  return list ? JSON.parse(list) : [];
};

// //equal to getLocalStorage()
// if (localStorage.getItem('list') === '' || null) {
//   const defaultList: ItemData[] = [];
// } else {
//   const defaultList: ItemData[] = JSON.parse(localStorage.getItem('list')!);
// }

// const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

const setLocalStorage = (items: ItemData[]) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const App = (): ReactElement => {
  const [items, setItems] = useState<ItemData[]>(getLocalStorage());

  const addItem = (itemName: string) => {
    const newItem: ItemData = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };

    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item added to the list successfully');
  };

  const editItem = (itemId: string) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const removeItem = (itemId: string) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item deleted');
  };

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
      <ToastContainer position="top-center" />
    </section>
  );
};

export default App;
