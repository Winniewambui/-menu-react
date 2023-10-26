import React, { useState } from 'react';
import './App.css';
import Data from './components/Data';
import Categories from './components/Categories';
import Menu from './components/Menu';

const allCategories = ['all', ...new Set(Data.map(item => item.category))]


function App() {
  const [menu, setMenuItems] = useState(Data);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(Data);
      return;
    }
    const newItems = Data.filter((item) => item.category === category);
    setMenuItems(newItems)
  };


  return (
    <main>
      <section className="main-container">
        <div className='title'>
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />       
         <Menu menu={menu} />
      </section>
    </main>
  );
}

export default App;

//you are passing the Data variable as a prop to the MenuItem component and naming it menu. 
//This indicates that you intend to provide menu data to the MenuItem component, 
//and the name menu is a clear and concise choice for the prop.
//Using Data as the prop name
//menu is the data you're passing to the MenuItem component.