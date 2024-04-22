import React from 'react';
import WorkHoursChart from '../../charts/WorkHoursChart';
import { tailwindConfig, formatValue } from '../../utils/Utils';

function SummaryComponent({ data, title }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px', backgroundColor: '#f0f9ff', borderRadius: '4px', margin: '10px 0' }}>
            <h3 style={{ color: tailwindConfig().theme.colors.slate[700], fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>
                {title} Hours Summary
            </h3>
            {data.labels.map((label, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '6px 10px', borderBottom: '1px solid #ddd', marginBottom: '4px', fontSize: '14px' }}>
                    <span>{label}:</span>
                    <span style={{ fontWeight: 'bold' }}>{(data.datasets[0].data[index])} hours</span>
                </div>
            ))}
        </div>
    );
}



function DashboardCardWorkHours() {
    const driverData = {
        labels: ['Driving Hours', 'Laytime Hours', 'Break Time'],
        datasets: [
            {
                data: [60, 20, 30],
                label: 'Driver',
                backgroundColor: [
                    tailwindConfig().theme.colors.emerald[400],
                    tailwindConfig().theme.colors.slate[300],
                    tailwindConfig().theme.colors.amber[400], // Added color for the third component
                ],
                hoverBackgroundColor: [
                    tailwindConfig().theme.colors.emerald[500],
                    tailwindConfig().theme.colors.slate[400],
                    tailwindConfig().theme.colors.amber[500], // Added color for the third component
                ],
                borderWidth: 1,
                borderColor: tailwindConfig().theme.colors.slate[800],
            }
        ]
    };

    const peerData = {
        labels: ['Driving Hours', 'Laytime Hours', 'Break Time'],
        datasets: [
            {
                label: 'Peers',
                data: [98 + 15, 29, 31 - 15],
                backgroundColor: [
                    tailwindConfig().theme.colors.blue[600], // Changed color for better contrast
                    tailwindConfig().theme.colors.gray[400], // Changed color for better contrast
                    tailwindConfig().theme.colors.red[400], // Added color for the third component
                ],
                hoverBackgroundColor: [
                    tailwindConfig().theme.colors.blue[700], // Changed color for better contrast
                    tailwindConfig().theme.colors.gray[500], // Changed color for better contrast
                    tailwindConfig().theme.colors.red[500], // Added color for the third component
                ],
                borderWidth: 1,
                borderColor: tailwindConfig().theme.colors.slate[800],
            }
        ]
    };

    return (
        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
            <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
                <h2 className="font-semibold text-slate-800 dark:text-slate-100">Work Hours Analysis</h2>
            </header>
            <div className="flex">
                <div className="w-1/2 p-3">
                    <SummaryComponent data={driverData} title="James'" />
                    <WorkHoursChart data={driverData} width={389} height={260} />
                </div>
                <div className="w-1/2 p-3">
                    <SummaryComponent data={peerData} title="Peers'" />
                    <WorkHoursChart data={peerData} width={389} height={260} />
                </div>
            </div>
            <div style={{ backgroundColor: '#f0f9ff', padding: '10px', borderRadius: '4px', margin: '20px' }}>
                <p style={{ color: '#333', fontSize: '14px' }}>Please considering decrease break time and improve working/driving efficiency.</p>
            </div>
        </div>
    );
}

export default DashboardCardWorkHours;