import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BrokerPostAd = () => {
    const [agreed, setAgreed] = useState(false);
    const nav = useNavigate();

    return (
        <>
            <br />
            <br />
            <div className="w-full max-w-3xl mx-auto rounded-lg">
                <div className="px-6 py-4">
                    <h2 className="text-2xl font-bold text-slate-700">Broker Post Ad</h2>
                </div>
                <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="firstName1" className="block text-sm font-medium">
                                First Name
                            </label>
                            <input
                                style={{boxShadow:"0px 0px 25px 4px #00000040"}}
                                id="firstName1"
                                placeholder="First Name"
                                className="bg-white w-full border rounded-lg px-4 py-2"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="firstName2" className="block text-sm font-medium">
                                First Name
                            </label>
                            <input
                            style={{boxShadow:"0px 0px 25px 4px #00000040"}}
                                id="firstName2"
                                placeholder="First Name"
                                className="bg-white w-full border rounded-lg px-4 py-2"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="cellNo" className="block text-sm font-medium">
                                Cell No.
                            </label>
                            <input
                            style={{boxShadow:"0px 0px 25px 4px #00000040"}}
                                id="cellNo"
                                placeholder="Cell No."
                                className="bg-white w-full border rounded-lg px-4 py-2"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium">
                                Email
                            </label>
                            <input
                            style={{boxShadow:"0px 0px 25px 4px #00000040"}}
                                id="email"
                                type="email"
                                placeholder="Email"
                                className="bg-white w-full border rounded-lg px-4 py-2"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="destination" className="block text-sm font-medium">
                            Destination
                        </label>
                        <input
                        style={{boxShadow:"0px 0px 25px 4px #00000040"}}
                            id="destination"
                            placeholder="Destination"
                            className="bg-white w-full border rounded-lg px-4 py-2"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="dimension" className="block text-sm font-medium">
                            Dimension
                        </label>
                        <input
                        style={{boxShadow:"0px 0px 25px 4px #00000040"}}
                            id="dimension"
                            placeholder="Dimension"
                            className="bg-white w-full border rounded-lg px-4 py-2"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="description" className="block text-sm font-medium">
                            Description
                        </label>
                        <textarea
                        style={{boxShadow:"0px 0px 25px 4px #00000040"}}
                            id="description"
                            placeholder="Description"
                            rows={4}
                            className="bg-white w-full border rounded-lg px-4 py-2"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium">
                            Post Pictures & Videos
                        </label>
                        <div className="flex items-center justify-center w-24 h-24 border-2 border-dashed rounded-lg border-gray-300">
                            <span className="text-gray-400 text-lg font-bold">+</span>
                        </div>
                    </div>
                    <div className="relative inline-block">
                        <input
                            type="file"
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            onChange={(e) => console.log(e.target.files[0])} // Handle file selection
                        />
                        <button
                            className="text-sm bg-[#1252AE] text-white hover:bg-blue-700 rounded-lg py-2 px-4"
                        >
                            Browse From Your Device
                        </button>
                    </div>

                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            className="h-4 w-4"
                        />
                        <label
                            htmlFor="terms"
                            className="text-[#737D8C] text-sm font-medium leading-none"
                        >
                            I have read and I agree to the Sukoon Reality {" "}
                            <a href="#" className="text-blue-600 hover:underline">
                                Terms and Conditions
                            </a>
                        </label>
                    </div>
                </div>
                <div className="flex justify-end px-6 pb-6">
                    <button
                    onClick={()=>{ nav("/adspage")}}
                        className={`flex items-center justify-center py-2 px-4 text-white font-semibold rounded-lg ${agreed
                            ? "bg-[#1252AE] hover:bg-blue-700"
                            : "bg-gray-400 cursor-not-allowed"
                            }`}
                        disabled={!agreed}
                    >
                        <svg className="bg-transparent" width='20px' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M16 7L12 3M12 3L8 7M12 3V15M21 11V17.7992C21 18.9193 21 19.4794 20.782 19.9072C20.5903 20.2835 20.2843 20.5895 19.908 20.7812C19.4802 20.9992 18.9201 20.9992 17.8 20.9992H6.2C5.0799 20.9992 4.51984 20.9992 4.09202 20.7812C3.71569 20.5895 3.40973 20.2835 3.21799 19.9072C3 19.4794 3 18.9193 3 17.7992V11" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        Publish Ad
                    </button>
                </div>

            </div>

        </>
    );
};

export default BrokerPostAd;
