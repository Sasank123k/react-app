import React, { useState } from 'react';
import styles from './Chart.module.css';
import BarChart from './BarChart';
// Import other chart components here
 import LineChart from './LineChart';
 import PieChart from './PieChart';
 import AreaChart from './AreaChart';
 import ScatterPlot from './ScatterPlot';

const charts = [
  { name: 'Bar Chart', previewImage: 'https://via.placeholder.com/300x200?text=Bar+Chart+Preview' },
  { name: 'Line Chart', previewImage: 'https://via.placeholder.com/300x200?text=Line+Chart+Preview' },
  { name: 'Pie Chart', previewImage: 'https://via.placeholder.com/300x200?text=Pie+Chart+Preview' },
  { name: 'Area Chart', previewImage: 'https://via.placeholder.com/300x200?text=Area+Chart+Preview' },
  { name: 'Scatter Plot', previewImage: 'https://via.placeholder.com/300x200?text=Scatter+Plot+Preview' },
];

const Chart: React.FC = () => {
  const [selectedChart, setSelectedChart] = useState<string | null>(null);

  const handleShowDemo = (chartName: string) => {
    setSelectedChart(chartName);
  };

  const renderSelectedChart = () => {
    switch (selectedChart) {
      case 'Bar Chart':
        return <BarChart />;
      // Add cases for other charts here
      case 'Line Chart':
        return <LineChart/>; // Replace with <LineChart />
      case 'Pie Chart':
        return <PieChart/>; // Replace with <PieChart />
      case 'Area Chart':
        return <AreaChart/>; // Replace with <AreaChart />
      case 'Scatter Plot':
        return <ScatterPlot/>; // Replace with <ScatterPlot />
      default:
        return null;
    }
  };

  return (
    <div className={styles.chartContainer}>
      {selectedChart ? (
        <div className={styles.demoContainer}>
          <button className={styles.backButton} onClick={() => setSelectedChart(null)}>
            Back to Charts
          </button>
          {renderSelectedChart()}
        </div>
      ) : (
        charts.map((chart, index) => (
          <div key={index} className={styles.chartBox}>
            <h3>{chart.name}</h3>
            <div className={styles.imageContainer}>
              <img src={chart.previewImage} alt={`${chart.name} Preview`} className={styles.previewImage} />
            </div>
            <button className={styles.showDemoButton} onClick={() => handleShowDemo(chart.name)}>
              Show Demo
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Chart;
