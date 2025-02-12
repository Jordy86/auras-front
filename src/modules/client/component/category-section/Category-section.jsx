import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Category-section.scss";
import CircleBgAnimation from "../circle/Circle";
import Button from "../button/Button";

const CategorySection = ({ items, flexDirection = "row-reverse" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [items.length]);

    return (
        <div className="category-section-container" style={{ flexDirection }}>
            <CircleBgAnimation size={400} top="0" right="30" />
            <div className="image-container">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={items[currentIndex].src}
                        src={items[currentIndex].src}
                        alt={items[currentIndex].title}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 1 }}
                    />
                </AnimatePresence>
            </div>
            <div className="info-container">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={items[currentIndex].title}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="title">{items[currentIndex].title}</h2>
                        <p className="description">{items[currentIndex].description}</p>
                        <Button text={"Explore"}/>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default CategorySection;
