import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
    scales: {
        y: {
            // display: false,
            barPercentage: 0.5,
            categoryPercentage: 0.5,
            ticks: {
              align: 'start', // This will place the labels above the bars
            },
            grid: {
              drawOnChartArea: false, // This will prevent the grid lines from being drawn on the chart area
            },
        },
        x: {
          grid: {
            drawOnChartArea: false, // This will hide the grid lines for the x-axis
          },
        },
  },
};

const labels = ['Entire home/apt', 'Private room', 'Shared room', 'Hotel room'];
const colors = ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 206, 86)', 'rgb(75, 192, 192)'];

export function HBarChartComponent({ data }) {
  const datasets = [{
    data,
    borderColor: colors,
    backgroundColor: colors.map(color => `${color}80`), // adds transparency to the color
  }];

  return <Bar options={options} data={{ labels, datasets }} />;
}