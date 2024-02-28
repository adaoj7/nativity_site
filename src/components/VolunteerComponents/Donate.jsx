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
        <div className="mt-24 h-[73vh] overflow-hidden">
            <div className="flex h-40 font-medium text-2xl justify-center items-center">
                Click here to be taken to a secure payment powered by Stripe
            </div>
            <form
                onSubmit={createDonationSession}
                className="flex justify-center content-center"
            >
                <button
                    type="submit"
                    className="bg-green-500 btn hover:bg-slate-500"
                >
                    Donate
                </button>
            </form>
            <div className="flex justify-center text-lg px-60 mx-80 mt-8">
                The Community Festival of Nativities is a recognized non-profit;
                monetary and in-kind donations are tax-deductible. Your generous
                contributions help us maintain this as a free event to the
                public.
            </div>
        </div>
    );
};

export default Donate;
