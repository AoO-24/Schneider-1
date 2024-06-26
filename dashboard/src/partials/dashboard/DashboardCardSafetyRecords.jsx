import React from 'react';
import DriverSafetyRecordsChart from '../../charts/DriverSafetyRecordsChart';
import { tailwindConfig, formatValue } from '../../utils/Utils';

function SummaryComponent({ data }) {
    // Calculate total numbers instead of average
    const totalAccidents = data.datasets[0].data.reduce((a, b) => a + b, 0);
    const totalViolations = data.datasets[1].data.reduce((a, b) => a + b, 0);

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px 0' }}>
            <span style={{ color: tailwindConfig().theme.colors.red[500], fontWeight: 'bold' }}>
                {totalAccidents} Total Accidents
            </span>
            <span style={{ color: tailwindConfig().theme.colors.yellow[500], fontWeight: 'bold' }}>
                {totalViolations} Total Traffic Violations
            </span>
        </div>
    );
}


function DashboardCardSafetyRecords() {
    const chartData = {
        labels: [
            'Jan', 'Feb', 'Mar',
            'Apr', 'May', 'Jun',
        ],
        datasets: [
            {
                label: 'Number of Accidents',
                data: [0, 0, 1, 0, 0, 0],
                backgroundColor: tailwindConfig().theme.colors.red[400],
                hoverBackgroundColor: tailwindConfig().theme.colors.red[500],
                yAxisID: 'y-accidents',
                type: 'bar',
            },
            {
                label: 'Number of Traffic Violations',
                data: [0, 1, 1, 0, 1, 0],
                borderColor: tailwindConfig().theme.colors.yellow[400],
                backgroundColor: 'rgba(0, 0, 0, 0)',
                type: 'line',
                yAxisID: 'y-violations',
            }
        ],

    };

    return (
        <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
            <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
                <h2 className="font-semibold text-slate-800 dark:text-slate-100">Driver Safety Records Stats</h2>
            </header>
            <SummaryComponent data={chartData} />
            <DriverSafetyRecordsChart data={chartData} width={595} height={248} />
            <div style={{ backgroundColor: '#f0f9ff', padding: '10px', borderRadius: '4px', margin: '20px' }}>
                <p style={{ color: '#333', fontSize: '14px' }}>Suggestion: Don't be in a hurry and take breaks before driving to improve your concentration while driving</p>
            </div>

        </div>
    );
}

export default DashboardCardSafetyRecords;
