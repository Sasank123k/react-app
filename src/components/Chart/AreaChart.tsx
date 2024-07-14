import React, { useState } from 'react';
import styles from './AreaChart.module.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  AreaChart as RechartAreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush,
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

const AreaChart: React.FC = () => {
  const [codeType, setCodeType] = useState('tsx');

  const tsxCode1 = `// TSX code for Simple Area Chart`;
  const cssCode1 = `/* CSS code for Simple Area Chart */`;

  const tsxCode2 = `// TSX code for Stacked Area Chart`;
  const cssCode2 = `/* CSS code for Stacked Area Chart */`;

  const tsxCode3 = `// TSX code for Stepped Area Chart`;
  const cssCode3 = `/* CSS code for Stepped Area Chart */`;

  const tsxCode4 = `// TSX code for Brush Area Chart`;
  const cssCode4 = `/* CSS code for Brush Area Chart */`;

  const tsxCode5 = `// TSX code for Multi-Axis Area Chart`;
  const cssCode5 = `/* CSS code for Multi-Axis Area Chart */`;

  return (
    <div className={styles.chartContainer}>
      {/* Simple Area Chart */}
      <div className={styles.chartBox}>
        <h3>Simple Area Chart</h3>
        <div className={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height={300}>
            <RechartAreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" isAnimationActive={false} />
            </RechartAreaChart>
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

      {/* Stacked Area Chart */}
      <div className={styles.chartBox}>
        <h3>Stacked Area Chart</h3>
        <div className={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height={300}>
            <RechartAreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" isAnimationActive={false} />
              <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" isAnimationActive={false} />
            </RechartAreaChart>
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

      {/* Stepped Area Chart */}
      <div className={styles.chartBox}>
        <h3>Stepped Area Chart</h3>
        <div className={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height={300}>
            <RechartAreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="step" dataKey="uv" stroke="#8884d8" fill="#8884d8" isAnimationActive={false} />
              <Area type="step" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" isAnimationActive={false} />
            </RechartAreaChart>
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

      {/* Brush Area Chart */}
      <div className={styles.chartBox}>
        <h3>Brush Area Chart</h3>
        <div className={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height={300}>
            <RechartAreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" isAnimationActive={false} />
              <Brush dataKey="name" height={30} stroke="#8884d8" />
            </RechartAreaChart>
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

      {/* Multi-Axis Area Chart */}
      <div className={styles.chartBox}>
        <h3>Multi-Axis Area Chart</h3>
        <div className={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height={300}>
            <RechartAreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Area yAxisId="left" type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" isAnimationActive={false} />
              <Area yAxisId="right" type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" isAnimationActive={false} />
            </RechartAreaChart>
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

export default AreaChart;
