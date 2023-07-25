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
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import { useEffect, useState } from "react";
import axios from "axios";
export default function ChartSantri() {
  const [santri, setSantri] = useState([]);
const getSantri = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/santri`);
    setSantri(response.data.data.data);
  } catch (error) {
    console.log(error.messsage);
  }
};
useEffect(() => {
  getSantri();
}, []);

 const options = {
  type: 'doughnut',
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
  return (
    <>
      <div>
        
      </div>
    </>
  )
}
