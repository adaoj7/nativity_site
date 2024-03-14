import React, { useState } from "react";

const Gallery = ({ carouselItems }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstItem = activeIndex === 0;
        const newIndex = isFirstItem
            ? carouselItems.length - 1
            : activeIndex - 1;
        setActiveIndex(newIndex);
    };

    const goToNext = () => {
        const isLastItem = activeIndex === carouselItems.length - 1;
        const newIndex = isLastItem ? 0 : activeIndex + 1;
        setActiveIndex(newIndex);
    };

    return (
        <>
            <h1 className="font-semibold text-lg">Gallery</h1>
            <div className="carousel rounded-box ">
                <div className="carousel-item relative">
                    <img
                        src={carouselItems[activeIndex]}
                        className="h-full"
                        alt="Carousel component"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <button
                            onClick={goToPrevious}
                            className="btn btn-circle"
                        >
                            ❮
                        </button>
                        <button onClick={goToNext} className="btn btn-circle">
                            ❯
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery;
