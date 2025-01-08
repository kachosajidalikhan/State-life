import React from "react";

export function UpgradeCard() {
  return (
    <div className="border bg-white w-full rounded-3xl shadow">
      <div className="flex flex-col lg:flex-row items-center justify-between p-6 gap-6">
        <div className="w-full lg:max-w-md space-y-4">
          <h2 className="text-xl lg:text-2xl font-bold">Upgrade Your Plan</h2>
          <p className="text-sm lg:text-base text-gray-500">
            Exclusive Features Access advanced tools and functionalities tailored to your
            needs. Increased Limits Enjoy higher usage limits for seamless performance.
            Priority Support Get faster responses and assistance from our dedicated support
            team.
          </p>
          <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition-all">
            Upgrade Now
          </button>
        </div>
        <div className="w-full lg:w-auto">
          <img
            src="../../src/assets/images/plan.png"
            alt="Upgrade illustration"
            className="h-[200px] w-full lg:w-[300px] hidden md:block object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
}
