import { UpgradeCard } from "./UpgradeCard";
import { StatsCards } from "./StatsCards";
import PropertyGrid from "./PropertyGrid";

function Dashboard() {
    return (<>
        {/* <main className="bg-gray-100 flex flex-col w-[1144px] float-right  p-10"> */}
            <UpgradeCard />
            <br />
            <StatsCards />
            <br />
            <PropertyGrid />
        {/* </main> */}

    </>)
};

export default Dashboard;