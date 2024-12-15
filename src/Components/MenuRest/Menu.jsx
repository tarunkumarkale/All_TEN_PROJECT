import React, { useState } from 'react';
import { menuResturent } from '../../Constant';

const Menu = () => {
  const Bttn = ['Lunch', 'Breakfast', 'Dinner', 'All'];

  const [allmeals, setallmeals] = useState(menuResturent);
  const [searchQuery, setSearchQuery] = useState('');


const Fun = (category) => {
  if (category === 'All') {
    setallmeals(menuResturent); // Reset to show all meals
  } else {
    const Ok = menuResturent.filter((Element) => 
      Element.type.toLowerCase().includes(category.toLowerCase())
    );
    setallmeals(Ok); // Update state with filtered meals
  }
};


  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query); // Update the search query state

    const filteredMeals = menuResturent.filter((item) =>
      item.name.toLowerCase().includes(query)
    );
    setallmeals(filteredMeals); // Filter the meals based on the search query
  };

  return (
    <>
      <div className="flex justify-between items-center my-4 mx-4">
        <div className="flex">
          {Bttn.map((Element) => (
            <button
              key={Element}
              onClick={() => Fun(Element)}
              className="mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {Element}
            </button>
          ))}
        </div>
        <div className="flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search meals..."
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
        {allmeals.map((Element) => (
          <div key={Element.id} className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">{Element.name}</h2>
              <p className="text-gray-600 text-sm mt-2">Type: {Element.type}</p>
              <p className="text-gray-600 text-sm mt-2">Price: ₹{Element.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
