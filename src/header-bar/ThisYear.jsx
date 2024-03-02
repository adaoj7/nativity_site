import React from "react";
import ThisYearImage from "../assets/2022 Festival of Nativities handout.jpg";

const ThisYear = () => {
    return (
        <>
            {/* Mobile */}
            <div className="flex desktop:hidden mt-24 h-[73vh]">
                <div className="flex flex-col">
                    <h2 className="flex text-3xl font-bold justify-center pt-4">
                        This year
                    </h2>
                    <div className="flex justify-center py-8">
                        <img src={ThisYearImage} className="size-full px-4" />
                    </div>
                    <div className="px-6">
                        This year we will be celebrating the work of Jorge Cocco
                        and borrowing the theme from his nativity works
                    </div>
                </div>
            </div>
            {/* Desktop */}
            <div className="desktop:flex phone:hidden justify-center mt-24 h-[73vh]">
                <div className="flex flex-col justify-center">
                    <h2 className="flex text-3xl font-bold justify-center pt-4">
                        This year
                    </h2>
                    <div className="flex justify-center py-8">
                        <img src={ThisYearImage} className="h-96" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ThisYear;
