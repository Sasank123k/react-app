import React, { useState } from 'react';
import styles from './PieChart.module.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  PieChart as RechartPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300'];

const PieChart: React.FC = () => {
  const [codeType, setCodeType] = useState('tsx');

  const tsxCode1 = `// TSX code for Variable Radius Pie Chart`;
  const cssCode1 = `/* CSS code for Variable Radius Pie Chart */`;

  const tsxCode2 = `// TSX code for Donut Chart`;
  const cssCode2 = `/* CSS code for Donut Chart */`;

  const tsxCode3 = `// TSX code for Exploded Pie Chart`;
  const cssCode3 = `/* CSS code for Exploded Pie Chart */`;

  const tsxCode4 = `// TSX code for 3D Pie Chart`;
  const cssCode4 = `/* CSS code for 3D Pie Chart */`;

  const tsxCode5 = `// TSX code for Multi-level Pie Chart`;
  const cssCode5 = `/* CSS code for Multi-level Pie Chart */`;

  return (
    <div className={styles.chartContainer}>
      {/* Variable Radius Pie Chart */}
      <div className={styles.chartBox}>
        <h3>Variable Radius Pie Chart</h3>
        <div className={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height={300}>
            <RechartPieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={(entry) => entry.value / 10 + 50}
                fill="#8884d8"
                dataKey="value"
                isAnimationActive={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </RechartPieChart>
          </ResponsiveContainer>
        </div>
        <div className={styles.codeBox}>
          <div className={styles.codeHeader}>
            <div className={styles.toggleButtons}>
              <button
                className={`${styles.toggleButton} ${codeType === 'tsx' ? styles.active : ''}`}
                onClick={() => setCodeType('tsx')}
              >
                TSX
              </button>
              <button
                className={`${styles.toggleButton} ${codeType === 'css' ? styles.active : ''}`}
                onClick={() => setCodeType('css')}
              >
                CSS
              </button>
            </div>
            <CopyToClipboard text={codeType === 'tsx' ? tsxCode1 : cssCode1}>
              <button className={styles.copyButton}>Copy</button>
            </CopyToClipboard>
          </div>
          <pre>{codeType === 'tsx' ? tsxCode1 : cssCode1}</pre>
        </div>
      </div>

      {/* Donut Chart */}
      <div className={styles.chartBox}>
        <h3>Donut Chart</h3>
        <div className={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height={300}>
            <RechartPieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </RechartPieChart>
          </ResponsiveContainer>
        </div>
        <div className={styles.codeBox}>
          <div className={styles.codeHeader}>
            <div className={styles.toggleButtons}>
              <button
                className={`${styles.toggleButton} ${codeType === 'tsx' ? styles.active : ''}`}
                onClick={() => setCodeType('tsx')}
              >
                TSX
              </button>
              <button
                className={`${styles.toggleButton} ${codeType === 'css' ? styles.active : ''}`}
                onClick={() => setCodeType('css')}
              >
                CSS
              </button>
            </div>
            <CopyToClipboard text={codeType === 'tsx' ? tsxCode2 : cssCode2}>
              <button className={styles.copyButton}>Copy</button>
            </CopyToClipboard>
          </div>
          <pre>{codeType === 'tsx' ? tsxCode2 : cssCode2}</pre>
        </div>
      </div>

      {/* Exploded Pie Chart */}
      <div className={styles.chartBox}>
        <h3>Exploded Pie Chart</h3>
        <div className={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height={300}>
            <RechartPieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                isAnimationActive={false}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    style={{
                      transform: index === 0 ? 'scale(1.1)' : 'scale(1)',
                      transformOrigin: 'center',
                    }}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </RechartPieChart>
          </ResponsiveContainer>
        </div>
        <div className={styles.codeBox}>
          <div className={styles.codeHeader}>
            <div className={styles.toggleButtons}>
              <button
                className={`${styles.toggleButton} ${codeType === 'tsx' ? styles.active : ''}`}
                onClick={() => setCodeType('tsx')}
              >
                TSX
              </button>
              <button
                className={`${styles.toggleButton} ${codeType === 'css' ? styles.active : ''}`}
                onClick={() => setCodeType('css')}
              >
                CSS
              </button>
            </div>
            <CopyToClipboard text={codeType === 'tsx' ? tsxCode3 : cssCode3}>
              <button className={styles.copyButton}>Copy</button>
            </CopyToClipboard>
          </div>
          <pre>{codeType === 'tsx' ? tsxCode3 : cssCode3}</pre>
        </div>
      </div>

      {/* 3D Pie Chart */}
      <div className={styles.chartBox}>
        <h3>3D Pie Chart</h3>
        <div className={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height={300}>
            <RechartPieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                isAnimationActive={false}
                style={{ filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5))' }}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </RechartPieChart>
          </ResponsiveContainer>
        </div>
        <div className={styles.codeBox}>
          <div className={styles.codeHeader}>
            <div className={styles.toggleButtons}>
              <button
                className={`${styles.toggleButton} ${codeType === 'tsx' ? styles.active : ''}`}
                onClick={() => setCodeType('tsx')}
              >
                TSX
              </button>
              <button
                className={`${styles.toggleButton} ${codeType === 'css' ? styles.active : ''}`}
                onClick={() => setCodeType('css')}
              >
                CSS
              </button>
            </div>
            <CopyToClipboard text={codeType === 'tsx' ? tsxCode4 : cssCode4}>
              <button className={styles.copyButton}>Copy</button>
            </CopyToClipboard>
          </div>
          <pre>{codeType === 'tsx' ? tsxCode4 : cssCode4}</pre>
        </div>
      </div>

      {/* Multi-level Pie Chart */}
      <div className={styles.chartBox}>
        <h3>Multi-level Pie Chart</h3>
        <div className={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height={300}>
            <RechartPieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#8884d8"
                dataKey="value"
                isAnimationActive={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#82ca9d"
                dataKey="value"
                isAnimationActive={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </RechartPieChart>
          </ResponsiveContainer>
        </div>
        <div className={styles.codeBox}>
          <div className={styles.codeHeader}>
            <div className={styles.toggleButtons}>
              <button
                className={`${styles.toggleButton} ${codeType === 'tsx' ? styles.active : ''}`}
                onClick={() => setCodeType('tsx')}
              >
                TSX
              </button>
              <button
                className={`${styles.toggleButton} ${codeType === 'css' ? styles.active : ''}`}
                onClick={() => setCodeType('css')}
              >
                CSS
              </button>
            </div>
            <CopyToClipboard text={codeType === 'tsx' ? tsxCode5 : cssCode5}>
              <button className={styles.copyButton}>Copy</button>
            </CopyToClipboard>
          </div>
          <pre>{codeType === 'tsx' ? tsxCode5 : cssCode5}</pre>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
