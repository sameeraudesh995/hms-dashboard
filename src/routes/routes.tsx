import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Appointments from "../pages/Appointments";
import Patients from "../pages/Patients";
import Prescriptions from "../pages/Prescriptions";
import Clinics from "../pages/Clinics";
import HospitalEssentials from "../pages/HospitalEssentials";
import SpecialEvents from "../pages/SpecialEvents";
import MedicalReports from "../pages/MedicalReports";
import Settings from "../pages/Settings";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                {/* Main layout route */}
                <Route path="/" element={<DashboardLayout />}>
                    {/* Child pages that will render inside <Outlet /> */}
                    <Route path="appointments" element={<Appointments />} />
                    <Route path="patients" element={<Patients />} />
                    <Route path="prescriptions" element={<Prescriptions />} />
                    <Route path="clinics" element={<Clinics />} />
                    <Route path="hospital-essentials" element={<HospitalEssentials />} />
                    <Route path="special-events" element={<SpecialEvents />} />
                    <Route path="medical-reports" element={<MedicalReports />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
            </Routes>
        </Router>
    );
}
