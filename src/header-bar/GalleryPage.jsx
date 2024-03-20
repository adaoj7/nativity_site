import React from "react";

const Gallery = () => {
    return (
        <>
            <div className="min-h-[73vh] flex justify-center">
                <div className="flex justify-center flex-col w-2/3 mt-24">
                    <div className=" w-full carousel rounded-box">
                        <div
                            id="item1"
                            className="carousel-item relative w-full"
                        >
                            <img
                                src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
                                className="w-full"
                            />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#item4" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#item2" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div
                            id="item2"
                            className="carousel-item relative w-full"
                        >
                            <img
                                src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                                className="w-full"
                            />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#item1" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#item3" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div
                            id="item3"
                            className="carousel-item relative w-full"
                        >
                            <img
                                src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
                                className="w-full"
                            />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#item2" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#item4" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div
                            id="item4"
                            className="carousel-item relative w-full"
                        >
                            <img
                                src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                                className="w-full"
                            />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#item3" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#item1" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center w-full py-2 gap-2">
                        <a href="#item1" className="btn btn-xs">
                            1
                        </a>
                        <a href="#item2" className="btn btn-xs">
                            2
                        </a>
                        <a href="#item3" className="btn btn-xs">
                            3
                        </a>
                        <a href="#item4" className="btn btn-xs">
                            4
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery;
