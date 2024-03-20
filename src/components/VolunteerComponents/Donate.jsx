import React from "react";
import axios from "axios";

const createDonationSession = async (e) => {
    e.preventDefault();
    try {
        const { data } = await axios.post(
            "/api/create-checkout-session/donate"
        );
        location.replace(data);
    } catch (err) {
        console.log(err);
    }
};

const Donate = () => {
    return (
        <>
            <div className="flex desktop:hidden flex-col min-h-[85vh] overflow-hidden">
                <div className="flex justify-center items-center h-40 mt-24 font-medium text-2xl px-6 ">
                    Click here to be taken to a secure payment powered by Stripe
                </div>
                <form
                    onSubmit={createDonationSession}
                    className="flex justify-center content-center"
                >
                    <button
                        type="submit"
                        className="bg-green-500 btn hover:btn-ghost"
                    >
                        Donate
                    </button>
                </form>
                <div className="flex justify-center text-lg mt-8 px-6">
                    The Community Festival of Nativities is a recognized
                    non-profit; monetary and in-kind donations are
                    tax-deductible. Your generous contributions help us maintain
                    this as a free event to the public.
                </div>
            </div>
            <div className="desktop:flex phone:hidden flex-col mt-24 h-[73vh] overflow-hidden">
                <div className="flex h-40 font-medium text-2xl justify-center items-center">
                    Click here to be taken to a secure payment powered by Stripe
                </div>
                <form
                    onSubmit={createDonationSession}
                    className="flex justify-center content-center"
                >
                    <button
                        type="submit"
                        className="bg-green-500 btn hover:btn-ghost"
                    >
                        Donate
                    </button>
                </form>
                <div className="flex justify-center">
                    <div className="flex justify-center text-lg w-1/3 indent-4 mt-8">
                        The Community Festival of Nativities is a recognized
                        non-profit; monetary and in-kind donations are
                        tax-deductible. Your generous contributions help us
                        maintain this as a free event to the public.
                    </div>
                </div>
            </div>
        </>
    );
};

export default Donate;
