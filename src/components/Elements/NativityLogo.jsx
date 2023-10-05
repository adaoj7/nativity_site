import React from "react";

const NativityLogo = () => {
    return (
        <>
            <div className="desktop:hidden sticky flex pl-20">
                <img
                    src="src/assets/CFN White-01.png"
                    className="fixed invert h-20 mt-2"
                />
            </div>
            <div className="hidden sticky desktop:flex pl-12 justify-start ">
                <img
                    src="src/assets/CFN White-01.png"
                    className="fixed invert h-20 mt-2 "
                />
            </div>
        </>
    );
};

export default NativityLogo;
