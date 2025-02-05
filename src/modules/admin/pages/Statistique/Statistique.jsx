import React, { useState } from "react";
import "./Statistique.css";
import AdminMenu from "../../component/MenuAdmin/AdminMenu";
import Chart from "react-apexcharts";
import { color } from "chart.js/helpers";


const Statistique = () => {
    const [menuOpen, setMenuOpen] = useState(true);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const years_today = Array.from({ length: new Date().getFullYear() - 2025 + 1 }, (_, i) => 2025 + i);

    const chartOptions = {
        chart: {
            type: "area",
            height: 350,
            width:400,
            toolbar: { show: false }
        },
        xaxis: {
            categories: [
                "Jan", "Fév", "Mar", "Avr", "Mai", "Juin",
                "Juil", "Août", "Sep", "Oct", "Nov", "Déc"
            ],
        },
        yaxis: {
            title: { text: "Quantité vendue" }
        },
        dataLabels: { enabled: false },
        stroke: { curve: "smooth" },
        fill: { type: "gradient", gradient: { shadeIntensity: 1 } },
        colors: ["#FF5733"], 
    };

    const chartOptionsbar = {
        chart: {
            type: 'bar',
            height: 350,
            zoom: { enable:false },
            toolbar: { show: false }

          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: ['Janvier', 'Février', 'Mars', 'Avris', 'Mai', 'Juin', 'Juillet',
              'Aout', 'Septemebre', 'Octobre', 'Novembre', 'Decembre'
            ],
          },
        stroke : {curve:"smooth"},
        colors:["#FF5733"]
    };


    const chartSeries = [
        {
            name: "Produits vendus",
            data: [10, 20, 15, 30, 25, 40, 35, 50, 45, 60, 55, 70] 
        }
    ];
    
    const chartSeriesBar = [
        {
            name: "Produits vendus",
            data: [100, 170, 59, 70, 10, 20, 78, 76, 47, 45,45,100] 
        }
    ];

    return (
        <>
            <AdminMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
            <div className={`statistique-content ${menuOpen ? "menu-open" : ""}`}>
                <h2 className="product-title">Statistique</h2>
                <div className="row statistique-row1">
                    <div className={`stat-courbe-anne ${menuOpen ? "menu-open" : ""}`}>
                        <h3>Statistique vente par mois pour une année 
                            <select name="" id="year">
                                {years_today.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                    ))}
                            </select>
                        </h3>
                        <Chart className={`chart-area ${menuOpen ? "menu-open" : ""}`} options={chartOptions} series={chartSeries} type="area" height={350} />
                    </div>
                    <div className={`stat-vente-mois ${menuOpen ? "menu-open" : ""}`}>
                        <h3>Le mois ou il y a plus de vente </h3>
                        <Chart options={chartOptionsbar} series={chartSeriesBar} type="bar" height={350} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Statistique;
