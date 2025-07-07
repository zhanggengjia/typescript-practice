import { useEffect, useState, type ReactElement } from 'react';
import menu from './data';
import Product from './Product';
import type { ProductData } from './types/product';
const App = (): ReactElement => {
  const [categories, setCategories] = useState<string[]>([]);
  const [showItems, setShowItems] = useState<ProductData[]>(menu);

  useEffect(() => {
    const uniqeCategories = [
      'all',
      ...new Set(menu.map((item) => item.category)),
    ];

    setCategories(uniqeCategories);
  }, []);

  const handleFilter = (selectItem: string) => {
    if (selectItem === 'all') {
      setShowItems(menu);
    } else {
      setShowItems(menu.filter((item) => item.category === selectItem));
    }
  };

  return (
    <main>
      <div className="menu">
        <h1 className="title">Menu</h1>
        <div className="title-underline"></div>
        <div className="btn-container">
          {categories.map((category, id) => (
            <button
              key={id}
              className="btn"
              onClick={() => handleFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <section className="section-center">
          {showItems.map((item) => (
            <Product key={item.id} {...item} />
          ))}
        </section>
      </div>
    </main>
  );
};
export default App;
