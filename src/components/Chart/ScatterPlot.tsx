import React, { useState } from 'react';
import styles from './ScatterPlot.module.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Line,
  ZAxis,
  Area,
  Cell
} from 'recharts';

const data01 = [
  { x: 100, y: 200, z: 300 },
  { x: 120, y: 100, z: 400 },
  { x: 170, y: 300, z: 500 },
  { x: 140, y: 250, z: 600 },
  { x: 150, y: 400, z: 700 },
  { x: 110, y: 280, z: 800 },
];

const data02 = [
  { x: 200, y: 260, z: 350 },
  { x: 240, y: 290, z: 450 },
  { x: 190, y: 290, z: 550 },
  { x: 198, y: 250, z: 650 },
  { x: 180, y: 280, z: 750 },
  { x: 210, y: 220, z: 850 },
];

const ScatterPlot: React.FC = () => {
  const [codeType, setCodeType] = useState('tsx');

  const tsxCode1 = `// TSX code for Simple Scatter Plot`;
  const cssCode1 = `/* CSS code for Simple Scatter Plot */`;

  const tsxCode2 = `// TSX code for Scatter Plot with Regression Line`;
  const cssCode2 = `/* CSS code for Scatter Plot with Regression Line */`;

  const tsxCode3 = `// TSX code for Heatmap Scatter Plot`;
  const cssCode3 = `/* CSS code for Heatmap Scatter Plot */`;

  const tsxCode4 = `// TSX code for Simulated 3D Scatter Plot`;
  const cssCode4 = `/* CSS code for Simulated 3D Scatter Plot */`;

  return (
    <div className={styles.chartContainer}>
      {/* Simple Scatter Plot */}
      <div className={styles.chartBox}>
        <h3>Simple Scatter Plot</h3>
        <div className={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart>
              <CartesianGrid />
              <XAxis dataKey="x" name="stature" unit="cm" />
              <YAxis dataKey="y" name="weight" unit="kg" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Legend />
              <Scatter name="A school" data={data01} fill="#8884d8" />
              <Scatter name="B school" data={data02} fill="#82ca9d" />
            </ScatterChart>
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

      {/* Scatter Plot with Regression Line */}
      <div className={styles.chartBox}>
        <h3>Scatter Plot with Regression Line</h3>
        <div className={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={data01}>
              <CartesianGrid />
              <XAxis type="number" dataKey="x" name="stature" unit="cm" />
              <YAxis type="number" dataKey="y" name="weight" unit="kg" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Legend />
              <Scatter name="A school" data={data01} fill="#8884d8" />
              <Line type="monotone" dataKey="y" stroke="#ff7300" />
            </ComposedChart>
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

      {/* Heatmap Scatter Plot */}
      <div className={styles.chartBox}>
        <h3>Heatmap Scatter Plot</h3>
        <div className={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart>
              <CartesianGrid />
              <XAxis dataKey="x" name="stature" unit="cm" />
              <YAxis dataKey="y" name="weight" unit="kg" />
              <ZAxis dataKey="z" range={[60, 400]} name="score" unit="points" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Legend />
              <Scatter name="A school" data={data01} fill="#8884d8">
                {data01.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={`rgba(136, 132, 216, ${entry.z / 800})`} />
                ))}
              </Scatter>
              <Scatter name="B school" data={data02} fill="#82ca9d">
                {data02.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={`rgba(130, 202, 157, ${entry.z / 850})`} />
                ))}
              </Scatter>
            </ScatterChart>
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

      {/* Simulated 3D Scatter Plot */}
      <div className={styles.chartBox}>
        <h3>Simulated 3D Scatter Plot</h3>
        <div className={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart>
              <CartesianGrid />
              <XAxis dataKey="x" name="stature" unit="cm" />
              <YAxis dataKey="y" name="weight" unit="kg" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Legend />
              <Scatter name="A school" data={data01} fill="#8884d8">
                {data01.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={`rgba(136, 132, 216, ${entry.z / 800})`} />
                ))}
              </Scatter>
              <Scatter name="B school" data={data02} fill="#82ca9d">
                {data02.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={`rgba(130, 202, 157, ${entry.z / 850})`} />
                ))}
              </Scatter>
            </ScatterChart>
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
    </div>
  );
};

export default ScatterPlot;
