import { Link } from "react-router-dom";
import AdminMenu from "../../component/MenuAdmin/AdminMenu";
import './Dashboard.css';
import React, { useState } from "react";

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(2025); 
  const [revenue, setRevenue] = useState(50000000); 

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const years = Array.from({ length: 6 }, (_, i) => 2020 + i);

  const handleYearChange = (event) => {
    const year = event.target.value;
    setSelectedYear(year);

    if (year === "2020") {
      setRevenue(50000000); 
    } else if (year === "2025") {
      setRevenue(60000000); 
    } else {
      setRevenue(40000000); 
    }
  };

  return (
    <>
      <AdminMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <div className={`dashboard-content ${menuOpen ? "menu-open" : ""}`}>
        <div className="row">
            <div className="card">
              <h3>Chiffre d'affaire pour l'année {selectedYear} 
                  <select id="year" value={selectedYear} onChange={handleYearChange}>
                  {years.map((year) => (
                      <option key={year} value={year}>
                      {year}
                      </option>
                  ))}
                  </select>
              </h3>
              <p>{revenue.toLocaleString()} Ariary</p> 
            </div>
            <div className="card-rigth">
                  Zavatra
            </div>
        </div>
        
      </div>
    </>
  );
};

export default Dashboard;
