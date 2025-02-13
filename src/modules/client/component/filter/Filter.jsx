import React, { useState } from "react";
import { useLoader } from "../../../../context/LoaderContext";
import { SlidersHorizontal } from "lucide-react";
import Modal from "../../../../shared/component/Modal/Modal";
import Select from "react-select";
import { Slider, Box, Typography } from '@mui/material';
import Button from "../button/Button";
import "./Filter.scss";

const Filter = () => {
    const { loadingOn, loadingOff } = useLoader();

    const [isModalOpen, setModalOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [types, setTypes] = useState([]);
    const [tailles, setTailles] = useState([]);
    const [rangeValues, setRangeValues] = useState([0, 100000]);

    const handleSliderChange = (_event, newValue) => {
        setRangeValues(newValue);
    };

    const handleChangeSelect = (selectedOptions, setter) => {
        setter(selectedOptions || []);
    };

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const applyFilter = () => {
        closeModal();
        loadData();
    }

    const loadData = async () => {
        loadingOn();
        try {
          await new Promise((resolve) => setTimeout(resolve, 2000));
        } finally {
          loadingOff();
        }
    };

    const categorie = [
        { value: "1", label: "Bracelet" },
        { value: "2", label: "Colier" },
        { value: "3", label: "Bague" },
        { value: "4", label: "Boucle d'oreille" },
        { value: "5", label: "Boucle de nez" },
    ];

    const type = [
        { value: "1", label: "Or" },
        { value: "2", label: "Argent" },
        { value: "3", label: "Faux Or" },
        { value: "4", label: "Faux Argent" },
    ];

    const taille = [
        { value: "1", label: "S" },
        { value: "2", label: "XS" },
        { value: "3", label: "M" },
        { value: "4", label: "L" },
        { value: "5", label: "XL" },
        { value: "6", label: "XXL" },
        { value: "7", label: "Oversize" },
    ];
    
    return (
        <>
        <div className="filter-container">
            <div className="filter" onClick={openModal}><SlidersHorizontal />Filtrer</div>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className="filter-content">
                <div className="section">
                    <div className="section-title">Catégorie</div>
                    <div className="section-content">
                    <Select
                        options={categorie}
                        value={categories}
                        onChange={(option) => handleChangeSelect(option, setCategories)}
                        placeholder="Choisissez les catégories..."
                        isMulti
                    />
                    </div>
                </div>
                <div className="section">
                    <div className="section-title">Type</div>
                    <div className="section-content">
                    <Select
                        options={type}
                        value={types}
                        onChange={(option) => handleChangeSelect(option, setTypes)}
                        placeholder="Choisissez les types..."
                        isMulti
                    />
                    </div>
                </div>
                <div className="section">
                    <div className="section-title">Taille</div>
                    <div className="section-content">
                    <Select
                        options={taille}
                        value={tailles}
                        onChange={(option) => handleChangeSelect(option, setTailles)}
                        placeholder="Choisissez les Tailles..."
                        isMulti
                    />
                    </div>
                </div>
                <div className="section">
                    <div className="section-title">Price</div>
                    <div className="section-content price">
                    <Box>
                        <Slider
                            value={rangeValues}
                            onChange={handleSliderChange}
                            valueLabelDisplay="auto"
                            valueLabelFormat={(value) => `${value}Ar`}
                            min={0}
                            max={100000}
                            step={1000}
                            aria-labelledby="range-slider"
                            sx={{
                            color: '#4caf50',
                            height: 8,
                            '& .MuiSlider-thumb': {
                                backgroundColor: '#4caf50',
                                height: 24,
                                width: 24,
                                borderRadius: '50%',
                                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                            },
                            '& .MuiSlider-rail': {
                                backgroundColor: '#ddd',
                            },
                            }}
                        />
                        
                        <Typography sx={{ marginTop: 2 }}>
                            {`Prix entre: ${rangeValues[0]} - ${rangeValues[1]} Ariary`}
                        </Typography>
                    </Box>
                    </div>
                </div>
            </div>
            <div className="apply-btn">
                <div onClick={applyFilter}>
                    <Button  text="Appliquer"/>
                </div>
            </div>
        </Modal>
        </>
    );
};

export default Filter;