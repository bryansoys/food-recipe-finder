import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [query, setQuery] = useState('');
  const [time, setTime] = useState('');
  const [budget, setBudget] = useState('');
  const [diet, setDiet] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?query=${query}&time=${time}&budget=${budget}&diet=${diet}`);
  };

  return (
    <div className="container" data-aos="fade-up">
      <h1>Recipe Finder</h1>
      <p>Everyone can cook — Find budget meals that will take you no time!</p>
      <div className="form-group">
        <input
          type="text"
          placeholder="Search"
          className="form-control"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          data-aos="fade-right"
        />
      </div>
      <div className="form-group">
        <label>Time duration</label>
        <select className="form-control" value={time} onChange={(e) => setTime(e.target.value)} data-aos="fade-left">
          <option value="">Select</option>
          <option value="30">less than 30 mins</option>
          <option value="60">less than 60 mins</option>
        </select>
      </div>
      <div className="form-group">
        <label>Budget</label>
        <select className="form-control" value={budget} onChange={(e) => setBudget(e.target.value)} data-aos="fade-left">
          <option value="">Select</option>
          <option value="10">less than $10</option>
          <option value="20">less than $20</option>
        </select>
      </div>
      <div className="form-group">
        <label>Diet</label>
        <select className="form-control" value={diet} onChange={(e) => setDiet(e.target.value)} data-aos="fade-left">
          <option value="">None</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
        </select>
      </div>
      <button className="btn btn-primary" onClick={handleSearch} data-aos="fade-up">Search</button>
    </div>
  );
};

export default Home;