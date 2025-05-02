import MapView from "../components/MapView.tsx";
import StatisticsPanel from "../components/StatisticsPanel.tsx";
import PatientAppointments from "../components/PatientAppointments.tsx";
import PatientDashboardCard from "../components/PatientDashboardCard.tsx";
import Navbar from "../components/Navbar.tsx";

const Dashboard = () => {
    return (
        <>
            <Navbar />

            <div className="flex flex-col lg:flex-row gap-2 p-2">
                {/* Left Side */}
                <div className="w-full lg:w-1/2 flex flex-col gap-2">
                    {/* Row 1: MapView + StatisticsPanel */}
                    <div className="flex flex-col md:flex-row gap-2">
                        <div className="w-full md:w-3/5 border border-gray-300 rounded-[3px] p-1">
                            <MapView />
                        </div>
                        <div className="w-full md:w-2/5 border border-gray-300 rounded-[3px] p-1">
                            <StatisticsPanel />
                        </div>
                    </div>

                    {/* Row 2: PatientAppointments full width */}
                    <div className="border border-gray-300 rounded-[3px] p-1">
                        <PatientAppointments />
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-2">
                    {/* Left Section (60%) */}
                    <div className="w-full md:w-[60%] flex flex-col gap-2">
                        <div className="border border-gray-300 rounded-[3px]">
                            <PatientDashboardCard />
                        </div>
                    </div>

                    {/* Right Section (40%) */}
                    <div className="w-full md:w-[40%] border border-dashed border-gray-300 rounded-[3px] p-1 flex items-center justify-center text-[10px] text-gray-500">
                        Right sub-section (coming soon...)
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
