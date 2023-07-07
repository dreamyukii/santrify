"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Data Pondok Pesantren",
    },
  },
};
const labels = ["January", "February", "March", "April", "May"];
export const data = {
  labels,
  datasets: [
    {
      label: "Santri",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "green",
    },
    {
      label: "Dana Masuk",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "green",
    },
    {
      label: "Dana Keluar",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "green",
    },
  ],
};

export default function ChartSantri() {
  return (
    <>
      <div>
        <Line options={options} data={data} />
      </div>
    </>
  )
}
