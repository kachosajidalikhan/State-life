import { useState } from "react";

export default function BrokerSignup() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        cellNo: "",
        email: "",
        password: "",
        confirmPassword: "",
        address: "",
        agencyname: "",
        agreeToTerms: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCheckbox = (e) => {
        setFormData((prev) => ({
            ...prev,
            agreeToTerms: e.target.checked,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="w-full max-w-2xl">
                <h1 className="text-2xl font-semibold text-gray-700 mb-6">Broker Sign Up</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full p-3 rounded-md border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full p-3 rounded-md border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="tel"
                            name="cellNo"
                            placeholder="Cell No."
                            value={formData.cellNo}
                            onChange={handleChange}
                            className="w-full p-3 rounded-md border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 rounded-md border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-3 rounded-md border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full p-3 rounded-md border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />

                    <input
                        type="text"
                        name="address"
                        placeholder="Agency Name"
                        value={formData.agencyname}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />

                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="terms"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleCheckbox}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-600">
                            I have read and I agree to the Sukoon Reality{" "}
                            <a href="#" className="text-blue-600 hover:underline">
                                Terms and Conditions
                            </a>
                        </label>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Next
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
