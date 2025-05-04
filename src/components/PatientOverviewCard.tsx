import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Child", value: 100, fill: "#7bdcb5", pattern: "dots" },
    { name: "Elderly", value: 150, fill: "#00bcd4", pattern: "grid" },
    { name: "Adult", value: 250, fill: "#3f51b5" },
];

const total = data.reduce((acc, d) => acc + d.value, 0);

const PatientOverviewCard = () => {
    return (
        <div className="relative bg-white p-2 rounded shadow w-full max-w-sm">
            <h2 className="text-[12px] font-semibold mb-2">Patient Overview (this week)</h2>

            <div className="relative w-full h-[250px]">
                {/* Center Overlay Text */}
                <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 text-center z-10">
                    <div className="text-[22px] font-bold text-black">{total}</div>
                    <div className="text-[8px] font-medium text-orange-500">compared to last week</div>
                    <span className="material-symbols-outlined text-orange-500 text-[16px]">
                        trending_up
                    </span>
                </div>

                {/* Pie Chart */}
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <defs>
                            <pattern id="dots" patternUnits="userSpaceOnUse" width="6" height="6">
                                <circle cx="3" cy="3" r="2" fill="#35a68a" />
                            </pattern>
                            <pattern id="grid" patternUnits="userSpaceOnUse" width="6" height="6">
                                <rect width="3" height="3" fill="#0288d1" />
                            </pattern>
                        </defs>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.pattern ? `url(#${entry.pattern})` : entry.fill}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Custom Legend */}
            <div className="relative flex justify-around mt-2">
                <div className="absolute text-[10px] flex items-center gap-1 -mt-[200px] ml-[80%]">
                    <span className="w-3 h-3 rounded-sm" style={{ background: "#7bdcb5" }}></span>
                    Child
                </div>
                <div className="absolute flex text-[10px]  items-center gap-1 -mt-[200px] mr-[75%]"> Elderly
                    <span className="w-3 h-3 rounded-sm" style={{ background: "#00bcd4" }}></span>

                </div>
                <div className="absolute text-[10px] flex items-center gap-1 -mt-[40px]">
                    <span className="w-3 h-3 rounded-sm" style={{ background: "#3f51b5" }}></span>
                    Adult
                </div>
            </div>
        </div>
    );
};

export default PatientOverviewCard;
