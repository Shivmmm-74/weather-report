import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { JackInTheBox, Roll } from "react-awesome-reveal";

ChartJS.register(ArcElement, Tooltip, Legend);

const AirQualityChart = ({ airQualityData }) => {
  const {
    co,
    no2,
    o3,
    so2,
    pm2_5,
    pm10,
    "us-epa-index": epaIndex,
    "gb-defra-index": defraIndex,
  } = airQualityData;

  // Chart.js data configu
  const data = {
    labels: ["CO", "NO₂", "O₃", "SO₂", "PM₂.₅", "PM₁₀"],
    datasets: [
      {
        label: "Air Quality Components (µg/m³)",
        data: [co, no2, o3, so2, pm2_5, pm10],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const value = tooltipItem.raw;
            return `${tooltipItem.label}: ${value} µg/m³`;
          },
        },
      },
    },
  };

  const airQualityMessage =
    epaIndex === 1
      ? "🟢 Good air quality: Air quality is considered satisfactory, and air pollution poses little or no risk to health."
      : epaIndex === 2
      ? "🟡 Moderate air quality: Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution."
      : epaIndex === 3
      ? "🟠 Unhealthy for sensitive groups: Members of sensitive groups, such as children, older adults, and individuals with respiratory or heart conditions, may experience health effects. General public is less likely to be affected."
      : epaIndex === 4
      ? "🔴 Unhealthy: Everyone may begin to experience health effects. Sensitive groups may experience more serious health effects. It is advisable to reduce prolonged outdoor activities."
      : epaIndex === 5
      ? "🟣 Very unhealthy: Health alert! Everyone may experience more serious health effects, including significant respiratory or cardiovascular issues. Avoid outdoor activities, and stay indoors with air purification if possible."
      : "⚫ Hazardous: Health warning of emergency conditions. The entire population is more likely to be affected. Prolonged exposure can lead to serious health issues such as asthma attacks, cardiovascular strain, and even life-threatening conditions. Take immediate precautions, stay indoors, and consult local health authorities for guidance.";

  return (
    <div className='w-full flex flex-col items-center  '>
      <h2 className='text-xl font-bold mb-4'>Air Quality Breakdown</h2>

      <div className='w-full sm:w-1/3'>
        <Roll duration={5000}>
          <Pie data={data} options={options} />
        </Roll>
      </div>

      <JackInTheBox>
        <div className='mt-6 sm:mx-64  mx-4 p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-lg text-white'>
          <h3 className='text-lg font-semibold mb-2'>
            <span className='underline'>EPA Index:</span> {epaIndex}
          </h3>
          <p className='mb-4'>{airQualityMessage}</p>
          <h3 className='text-lg font-semibold mb-2'>
            <span className='underline'>DEFRA Index:</span> {defraIndex}
          </h3>
          <p>
            The DEFRA index indicates air quality. A value of {defraIndex} means{" "}
            <span className='font-bold'>
              {defraIndex <= 3
                ? "Low"
                : defraIndex <= 6
                ? "Moderate"
                : defraIndex <= 9
                ? "High"
                : "Very High"}
            </span>{" "}
            pollution.
          </p>
        </div>
      </JackInTheBox>
    </div>
  );
};

export default AirQualityChart;
