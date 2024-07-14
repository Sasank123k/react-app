import React, { useState } from 'react';
import styles from './BarChart.module.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  BarChart as RechartBarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
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

const dataWithNegative = [
  { name: 'Page A', uv: 4000, pv: -2400, amt: 2400 },
  { name: 'Page B', uv: -3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: -9800, amt: 2290 },
  { name: 'Page D', uv: -2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: -4800, amt: 2181 },
  { name: 'Page F', uv: -2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: -4300, amt: 2100 },
];

const customData = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const BarChart: React.FC = () => {
  const [codeType, setCodeType] = useState('tsx');

  const tsxCode1 = `// TSX code for Simple Bar Chart`;
  const cssCode1 = `/* CSS code for Simple Bar Chart */`;

  const tsxCode2 = `// TSX code for Horizontal Bar Chart`;
  const cssCode2 = `/* CSS code for Horizontal Bar Chart */`;

  const tsxCode3 = `// TSX code for Stacked Bar Chart`;
  const cssCode3 = `/* CSS code for Stacked Bar Chart */`;

  const tsxCode4 = `// TSX code for Grouped Bar Chart`;
  const cssCode4 = `/* CSS code for Grouped Bar Chart */`;

  const tsxCode5 = `// TSX code for Positive-Negative Bar Chart`;
  const cssCode5 = `/* CSS code for Positive-Negative Bar Chart */`;

  const tsxCode6 = `// TSX code for Customized Bar Chart`;
  const cssCode6 = `/* CSS code for Customized Bar Chart */`;

  return (
    <div className={styles.chartContainer}>
      {/* Simple Bar Chart */}
      <div className={styles.chartBox}>
        <h3>Simple Bar Chart</h3>
        <div style={{ width: '100%', height: 300 }}>
          <RechartBarChart data={data} width={1100} height={300}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" isAnimationActive={false} />
            <Bar dataKey="uv" fill="#82ca9d" isAnimationActive={false} />
          </RechartBarChart>
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

      {/* Horizontal Bar Chart */}
      <div className={styles.chartBox}>
        <h3>Horizontal Bar Chart</h3>
        <div style={{ width: '100%', height: 300 }}>
          <RechartBarChart layout="vertical" data={data} width={1100} height={300}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" isAnimationActive={false} />
            <Bar dataKey="uv" fill="#82ca9d" isAnimationActive={false} />
          </RechartBarChart>
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

      {/* Stacked Bar Chart */}
      <div className={styles.chartBox}>
        <h3>Stacked Bar Chart</h3>
        <div style={{ width: '100%', height: 300 }}>
          <RechartBarChart data={data} width={1100} height={300}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" stackId="a" fill="#8884d8" isAnimationActive={false} />
            <Bar dataKey="uv" stackId="a" fill="#82ca9d" isAnimationActive={false} />
          </RechartBarChart>
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

      {/* Grouped Bar Chart */}
      <div className={styles.chartBox}>
        <h3>Grouped Bar Chart</h3>
        <div style={{ width: '100%', height: 300 }}>
          <RechartBarChart data={data} width={1100} height={300}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" isAnimationActive={false} />
            <Bar dataKey="uv" fill="#82ca9d" isAnimationActive={false} />
          </RechartBarChart>
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

      {/* Positive-Negative Bar Chart */}
      <div className={styles.chartBox}>
        <h3>Positive-Negative Bar Chart</h3>
        <div style={{ width: '100%', height: 300 }}>
          <RechartBarChart data={dataWithNegative} width={1100} height={300}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" isAnimationActive={false} />
            <Bar dataKey="uv" fill="#82ca9d" isAnimationActive={false} />
          </RechartBarChart>
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

      {/* Customized Bar Chart */}
      <div className={styles.chartBox}>
        <h3>Customized Bar Chart</h3>
        <div style={{ width: '100%', height: 300 }}>
          <RechartBarChart data={customData} width={1100} height={300}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="url(#colorPv)" isAnimationActive={false} />
            <Bar dataKey="uv" fill="url(#colorUv)" isAnimationActive={false} />
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
              </linearGradient>
            </defs>
          </RechartBarChart>
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
            <CopyToClipboard text={codeType === 'tsx' ? tsxCode6 : cssCode6}>
              <button className={styles.copyButton}>Copy</button>
            </CopyToClipboard>
          </div>
          <pre>{codeType === 'tsx' ? tsxCode6 : cssCode6}</pre>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
