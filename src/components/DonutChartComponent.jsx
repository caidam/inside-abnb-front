import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function DonutChartComponent({labels, colors, values}) {
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
                position: 'right', // Position the legend on the right
            },
        },
    };

    return < Doughnut data={chartData} options={options} />;
}

export default DonutChartComponent;