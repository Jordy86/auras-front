import { Link } from "react-router-dom";
import AdminMenu from "../../component/MenuAdmin/AdminMenu";
import './Dashboard.css';
import React, { useState, useEffect, useRef } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [selectedYear, setSelectedYear] = useState(2025);
  const [revenue, setRevenue] = useState(50000000);
  const chartRef = useRef(null);

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

  const data = {
    labels: ['Bague', 'Collier', 'Bracelet', 'Boucle d\'oreille'],
    datasets: [
      {
        label: 'Produits les plus achetés',
        data: [17, 15, 45, 22],
        backgroundColor: [
          '#dc3545',
          '#36a2eb',
          '#7feb40',
          '#ffc107',
        ],
        borderColor: [
          '#ffffff',
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <AdminMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <div className={`dashboard-content ${menuOpen ? "menu-open" : ""}`}>
        <div className="row">
          <div className={`card-affaire ${menuOpen ? "menu-open" : ""}`}>
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
          <div className={`card-rigth ${menuOpen ? "menu-open" : ""}`}>
            <div className="liste-nombre">
              <div className="card-title"><span>Quelque chiffre statistique</span></div>
              <ul>
                <li> <i className="bi bi-folder"></i> Type produit : <span>7</span> </li>
                <li> <i className="bi bi-box"></i> Produit vendu : <span>40.000</span> </li>
                <li><i className="bi bi-file-text"></i> Nombre commande : <span>1.700 </span></li>
                <li><i className="bi bi-person"></i> Utilisateur : <span>1.000.000</span> </li>
              </ul>
            </div>
            <div className="stat-product">
              <div className="card-title"><span>Produit les plus achetés</span></div>
              <Pie ref={chartRef} data={data} /> 
            </div>
          </div>
        </div>
        <div className="row">
          <div className={`card-commande ${menuOpen ? "menu-open" : ""}`}>
            <div className="card-title"><span>Commande flash aujourd'hui</span></div>
            <ul className="list-groupa">
              <li className="list-groupa-item d-flex justify-content-between align-items-center">
                Bague <span className="badge bg-secondary rounded-pill">14</span>
              </li>
              <li className="list-groupa-item d-flex justify-content-between align-items-center">
                Collier
                <span className="badge bg-secondary rounded-pill">2</span>
              </li>
              <li className="list-groupa-item d-flex justify-content-between align-items-center">
                Bracelet
                <span className="badge bg-secondary rounded-pill">3</span>
              </li>
              <li className="list-groupa-item d-flex justify-content-between align-items-center">
                Boucle d'oreille
                <span className="badge bg-secondary rounded-pill">12</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className={`card-chiffre-produit ${menuOpen ? "menu-open" : ""}`}>
            <div className="card-title"><span>Chiffre d'affaire par produit</span></div>
            <ul className="list-groupa">
              <li className="list-groupa-item d-flex justify-content-between align-items-center">
                Bague <span className="">20.000.000 Ar</span>
              </li>
              <li className="list-groupa-item d-flex justify-content-between align-items-center">
                Collier
                <span className="">10.000.000 Ar</span>
              </li>
              <li className="list-groupa-item d-flex justify-content-between align-items-center">
                Bracelet
                <span className="">7.000.000 Ar</span>
              </li>
              <li className="list-groupa-item d-flex justify-content-between align-items-center">
                Boucle d'oreille
                <span className="">12.000.000 Ar</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
