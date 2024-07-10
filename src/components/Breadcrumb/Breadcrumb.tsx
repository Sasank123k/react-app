import React, { useState } from 'react';
import styles from './Breadcrumb.module.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaHome, FaChevronRight, FaChevronDown, FaAngleDoubleRight } from 'react-icons/fa';

const Breadcrumb: React.FC = () => {
  const [codeType1, setCodeType1] = useState('tsx');
  const [codeType2, setCodeType2] = useState('tsx');
  const [codeType3, setCodeType3] = useState('tsx');
  const [codeType4, setCodeType4] = useState('tsx');
  const [codeType5, setCodeType5] = useState('tsx');

  const tsxCode1 = `// TSX code for Simple Breadcrumb`;
  const cssCode1 = `.simpleBreadcrumb { /* CSS for Simple Breadcrumb */ }`;

  const tsxCode2 = `// TSX code for Icon Breadcrumb`;
  const cssCode2 = `.iconBreadcrumb { /* CSS for Icon Breadcrumb */ }`;

  const tsxCode3 = `// TSX code for Vertical Breadcrumb`;
  const cssCode3 = `.verticalBreadcrumb { /* CSS for Vertical Breadcrumb */ }`;

  const tsxCode4 = `// TSX code for Step Breadcrumb`;
  const cssCode4 = `.stepBreadcrumb { /* CSS for Step Breadcrumb */ }`;

  const tsxCode5 = `// TSX code for Animated Breadcrumb`;
  const cssCode5 = `.animatedBreadcrumb { /* CSS for Animated Breadcrumb */ }`;

  return (
    <div className={styles.pageContainer}>
      {/* Simple Breadcrumb */}
      <div className={styles.breadcrumbSection}>
        <div className={styles.simpleBreadcrumb}>
          <a href="#">Home</a> / <a href="#">Library</a> / <a href="#">Data</a>
        </div>
        <div className={styles.codeBox}>
          <div className={styles.toggleButtons}>
            <button
              className={`${styles.toggleButton} ${codeType1 === 'tsx' ? styles.active : ''}`}
              onClick={() => setCodeType1('tsx')}
            >
              TSX
            </button>
            <button
              className={`${styles.toggleButton} ${codeType1 === 'css' ? styles.active : ''}`}
              onClick={() => setCodeType1('css')}
            >
              CSS
            </button>
          </div>
          <CopyToClipboard text={codeType1 === 'tsx' ? tsxCode1 : cssCode1}>
            <button className={styles.copyButton}>Copy</button>
          </CopyToClipboard>
          <pre>{codeType1 === 'tsx' ? tsxCode1 : cssCode1}</pre>
        </div>
      </div>

      {/* Icon Breadcrumb */}
      <div className={styles.breadcrumbSection}>
        <div className={styles.iconBreadcrumb}>
          <a href="#"><FaHome className={styles.breadcrumbIcon} /> Home</a>
          <FaChevronRight className={styles.breadcrumbSeparator} />
          <a href="#">Library</a>
          <FaChevronRight className={styles.breadcrumbSeparator} />
          <a href="#">Data</a>
        </div>
        <div className={styles.codeBox}>
          <div className={styles.toggleButtons}>
            <button
              className={`${styles.toggleButton} ${codeType2 === 'tsx' ? styles.active : ''}`}
              onClick={() => setCodeType2('tsx')}
            >
              TSX
            </button>
            <button
              className={`${styles.toggleButton} ${codeType2 === 'css' ? styles.active : ''}`}
              onClick={() => setCodeType2('css')}
            >
              CSS
            </button>
          </div>
          <CopyToClipboard text={codeType2 === 'tsx' ? tsxCode2 : cssCode2}>
            <button className={styles.copyButton}>Copy</button>
          </CopyToClipboard>
          <pre>{codeType2 === 'tsx' ? tsxCode2 : cssCode2}</pre>
        </div>
      </div>

      {/* Vertical Breadcrumb */}
      <div className={styles.breadcrumbSection}>
        <div className={styles.verticalBreadcrumb}>
          <a href="#">Home</a>
          <FaChevronDown className={styles.breadcrumbSeparator} />
          <a href="#">Library</a>
          <FaChevronDown className={styles.breadcrumbSeparator} />
          <a href="#">Data</a>
        </div>
        <div className={styles.codeBox}>
          <div className={styles.toggleButtons}>
            <button
              className={`${styles.toggleButton} ${codeType3 === 'tsx' ? styles.active : ''}`}
              onClick={() => setCodeType3('tsx')}
            >
              TSX
            </button>
            <button
              className={`${styles.toggleButton} ${codeType3 === 'css' ? styles.active : ''}`}
              onClick={() => setCodeType3('css')}
            >
              CSS
            </button>
          </div>
          <CopyToClipboard text={codeType3 === 'tsx' ? tsxCode3 : cssCode3}>
            <button className={styles.copyButton}>Copy</button>
          </CopyToClipboard>
          <pre>{codeType3 === 'tsx' ? tsxCode3 : cssCode3}</pre>
        </div>
      </div>

      {/* Step Breadcrumb */}
      <div className={styles.breadcrumbSection}>
        <div className={styles.stepBreadcrumb}>
          <div className={styles.stepItem}>
            <span className={styles.stepNumber}>1</span>
            <a href="#">Home</a>
          </div>
          <FaAngleDoubleRight className={styles.breadcrumbSeparator} />
          <div className={styles.stepItem}>
            <span className={styles.stepNumber}>2</span>
            <a href="#">Library</a>
          </div>
          <FaAngleDoubleRight className={styles.breadcrumbSeparator} />
          <div className={styles.stepItem}>
            <span className={styles.stepNumber}>3</span>
            <a href="#">Data</a>
          </div>
        </div>
        <div className={styles.codeBox}>
          <div className={styles.toggleButtons}>
            <button
              className={`${styles.toggleButton} ${codeType4 === 'tsx' ? styles.active : ''}`}
              onClick={() => setCodeType4('tsx')}
            >
              TSX
            </button>
            <button
              className={`${styles.toggleButton} ${codeType4 === 'css' ? styles.active : ''}`}
              onClick={() => setCodeType4('css')}
            >
              CSS
            </button>
          </div>
          <CopyToClipboard text={codeType4 === 'tsx' ? tsxCode4 : cssCode4}>
            <button className={styles.copyButton}>Copy</button>
          </CopyToClipboard>
          <pre>{codeType4 === 'tsx' ? tsxCode4 : cssCode4}</pre>
        </div>
      </div>

      {/* Animated Breadcrumb */}
      <div className={styles.breadcrumbSection}>
        <div className={styles.animatedBreadcrumb}>
          <a href="#">Home</a>
          <FaChevronRight className={styles.breadcrumbSeparator} />
          <a href="#">Library</a>
          <FaChevronRight className={styles.breadcrumbSeparator} />
          <a href="#">Data</a>
        </div>
        <div className={styles.codeBox}>
          <div className={styles.toggleButtons}>
            <button
              className={`${styles.toggleButton} ${codeType5 === 'tsx' ? styles.active : ''}`}
              onClick={() => setCodeType5('tsx')}
            >
              TSX
            </button>
            <button
              className={`${styles.toggleButton} ${codeType5 === 'css' ? styles.active : ''}`}
              onClick={() => setCodeType5('css')}
            >
              CSS
            </button>
          </div>
          <CopyToClipboard text={codeType5 === 'tsx' ? tsxCode5 : cssCode5}>
            <button className={styles.copyButton}>Copy</button>
          </CopyToClipboard>
          <pre>{codeType5 === 'tsx' ? tsxCode5 : cssCode5}</pre>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
