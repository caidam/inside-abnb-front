import React from 'react';
import { Chart as ChartJS, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, Tooltip, Legend);

function BarChartComponent({labels, colors, values}) {
    const chartData = {
        labels: labels,
        datasets: [{
            data: values,
            backgroundColor: colors,
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Set to false for responsive behavior
        plugins: {
            legend: {
                display: false,
                // position: 'right',
            },
        },
    };

    return <Bar data={chartData} options={options} />;
}

export default BarChartComponent;