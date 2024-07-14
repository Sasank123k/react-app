import React, { useState } from 'react';
import styles from './LineChart.module.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  LineChart as RechartLineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const LineChart: React.FC = () => {
  const [codeType, setCodeType] = useState('tsx');

  const tsxCode1 = `// TSX code for Simple Line Chart`;
  const cssCode1 = `/* CSS code for Simple Line Chart */`;

  const tsxCode2 = `// TSX code for Dashed Line Chart`;
  const cssCode2 = `/* CSS code for Dashed Line Chart */`;

  const tsxCode3 = `// TSX code for Area Fill Line Chart`;
  const cssCode3 = `/* CSS code for Area Fill Line Chart */`;

  const tsxCode4 = `// TSX code for Step Line Chart`;
  const cssCode4 = `/* CSS code for Step Line Chart */`;

  const tsxCode5 = `// TSX code for Line Chart with Points`;
  const cssCode5 = `/* CSS code for Line Chart with Points */`;

  return (
    <div className={styles.chartContainer}>
      {/* Simple Line Chart */}
      <div className={styles.chartBox}>
        <h3>Simple Line Chart</h3>
        <div className={styles.chartWrapper}>
          <RechartLineChart data={data} width={1100} height={300}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" isAnimationActive={false} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" isAnimationActive={false} />
          </RechartLineChart>
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

      {/* Dashed Line Chart */}
      <div className={styles.chartBox}>
        <h3>Dashed Line Chart</h3>
        <div className={styles.chartWrapper}>
          <RechartLineChart data={data} width={1100} height={300}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeDasharray="5 5" isAnimationActive={false} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="3 4 5 2" isAnimationActive={false} />
          </RechartLineChart>
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

      {/* Area Fill Line Chart */}
      <div className={styles.chartBox}>
        <h3>Area Fill Line Chart</h3>
        <div className={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data} width={1100} height={300}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="pv" stroke="#8884d8" fillOpacity={0.3} fill="#8884d8" isAnimationActive={false} />
              <Area type="monotone" dataKey="uv" stroke="#82ca9d" fillOpacity={0.3} fill="#82ca9d" isAnimationActive={false} />
            </AreaChart>
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

      {/* Step Line Chart */}
      <div className={styles.chartBox}>
        <h3>Step Line Chart</h3>
        <div className={styles.chartWrapper}>
          <RechartLineChart data={data} width={1100} height={300}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="step" dataKey="pv" stroke="#8884d8" isAnimationActive={false} />
            <Line type="step" dataKey="uv" stroke="#82ca9d" isAnimationActive={false} />
          </RechartLineChart>
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

      {/* Line Chart with Points */}
      <div className={styles.chartBox}>
        <h3>Line Chart with Points</h3>
        <div className={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height={300}>
            <RechartLineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" dot={{ r: 6 }} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" dot={{ r: 6 }} activeDot={{ r: 8 }} />
            </RechartLineChart>
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

export default LineChart;
