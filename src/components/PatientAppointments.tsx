import React, { useState } from 'react';
import '../App.css';

const dates = Array.from({ length: 15 }, () => ({
    day: 'Wed',
    date: 12,
}));

const appointments = [
    {
        name: 'Caren G. Simpson',
        date: '20-07-28',
        time: '09:00 AM',
        doctor: 'Dr. Petra Winsburry',
        treatment: 'Routine Check-Up',
        status: 'Confirmed',
    },
    {
        name: 'Edgar Warrow',
        date: '20-07-28',
        time: '10:30 AM',
        doctor: 'Dr. Olivia Martinez',
        treatment: 'Cardiac Consultation',
        status: 'Confirmed',
    },
    {
        name: 'Ocean Jane Lupre',
        date: '20-07-28',
        time: '11:00 AM',
        doctor: 'Dr. Damian Sanchez',
        treatment: 'Pediatric Check-Up',
        status: 'Pending',
    },
    {
        name: 'Shane Riddick',
        date: '20-07-28',
        time: '01:00 PM',
        doctor: 'Dr. Chloe Harrington',
        treatment: 'Skin Allergy',
        status: 'Cancelled',
    },
];

const getStatusStyle = (status: string) => {
    switch (status) {
        case 'Confirmed':
            return 'bg-teal-100 text-teal-700';
        case 'Pending':
            return 'bg-red-100 text-red-600';
        case 'Cancelled':
            return 'bg-gray-200 text-gray-600';
        default:
            return '';
    }
};

const PatientAppointments: React.FC = () => {
    const [selectedDateIndex, setSelectedDateIndex] = useState(6);

    return (
        <div className="bg-white rounded-[3px]  border-gray-200 p-2 w-full">
            <h2 className="text-[7px] font-bold mb-1">Patient Appointments</h2>

            {/* Date Carousel */}
            <div className="flex items-center bg-blue-100 rounded-full overflow-x-auto no-scrollbar">
                <button className="text-xs font-bold px-1">&lt;</button>

                <div className="flex space-x-2 mx-1">
                    {dates.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center justify-center min-w-[30px] p-0.5 rounded-md cursor-pointer mt-0.5 mb-0.5 text-[6px] ${
                                selectedDateIndex === index ? 'bg-[#3E3C8D] text-white' : ''
                            }`}
                            onClick={() => setSelectedDateIndex(index)}
                        >
                            <span className="font-medium">{item.day}</span>
                            <span className="text-[8px] font-bold">{item.date}</span>
                        </div>
                    ))}
                </div>

                <button className="text-xs font-bold px-1">&gt;</button>
            </div>

            {/* Appointments Table */}
            <div className="mt-2 overflow-x-auto">
                <table className="min-w-full text-[7px]">
                    <thead className="text-gray-300 font-normal">
                    <tr>
                        <th className="text-left px-1 py-1">Name</th>
                        <th className="text-left px-1 py-1">Date</th>
                        <th className="text-left px-1 py-1">Time</th>
                        <th className="text-left px-1 py-1">Doctor</th>
                        <th className="text-left px-1 py-1">Treatment</th>
                        <th className="text-left px-1 py-1">Status</th>
                    </tr>
                    </thead>
                    <tbody className="text-gray-700">
                    {appointments.map((appt, index) => (
                        <tr key={index} className="border-t">
                            <td className="px-1 py-1">{appt.name}</td>
                            <td className="px-1 py-1">{appt.date}</td>
                            <td className="px-1 py-1">{appt.time}</td>
                            <td className="px-1 py-1">{appt.doctor}</td>
                            <td className="px-1 py-1">{appt.treatment}</td>
                            <td className="px-1 py-1">
                                    <span className={`px-1 py-0.5 rounded-[2px] text-[6px] font-semibold ${getStatusStyle(appt.status)}`}>
                                        {appt.status}
                                    </span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PatientAppointments;
