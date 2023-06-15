import React from 'react';
import './FilterCard.css';

const FilterCard = () => {
  const filterOptions = [
    'All',
    'New',
    'Baby',
    'Candles',
    'Birthday',
    'Flowers',
    'Miss You',
    'Hobbies',
    'Veterans',
    'Nature',
    'First Responders',
    'Family',
    'Holiday',
    'Special',
    'Mother’s Day',
    'Abstract',
    'Military',
    'Fantasy',
  ];

  return (
    <div className="filter-bar">
      <h3 className="filter-bar-title">Select a template</h3>
      {/* <p className="filter-bar-description">We have built 45+ <br/> templates for your</p> */}
      <p className="filter-bar-subdesc"> loved ones</p>
        <p className='cat-text'>Category</p>
      <div className="filter-options">
        <div className="filter-column">
          {filterOptions.slice(0, 9).map((option) => (
            <div className="filter-option" key={option}>
              <input type="checkbox" id={option} />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
    
      <div className="filter-column">
          {filterOptions.slice(9).map((option) => (
            <div className="filter-option" key={option}>
              <input type="checkbox" id={option} />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      
      </div>
        <button className='saveBtn'>Save</button>
    </div>
  );
};

export default FilterCard;
