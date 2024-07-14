import React, { useState } from 'react';
import styles from './Breadcrumb.module.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaHome, FaInfoCircle, FaPhone, FaChevronDown } from 'react-icons/fa';

const Breadcrumb: React.FC = () => {
  const [codeType1, setCodeType1] = useState('tsx');
  const [codeType2, setCodeType2] = useState('tsx');
  const [codeType3, setCodeType3] = useState('tsx');
  const [codeType4, setCodeType4] = useState('tsx');

  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);

  const tsxCode1 = `// TSX code for Simple Breadcrumb
import React from 'react';
import styles from './Breadcrumb.module.css';

const SimpleBreadcrumb: React.FC = () => {
  return (
    <div className={styles.breadcrumbSection}>
      <nav className={styles.simpleBreadcrumb}>
        <a href="/">Home</a>
        <span className={styles.breadcrumbSeparator}>/</span>
        <a href="/about">About</a>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span>Contact</span>
      </nav>
    </div>
  );
};

export default SimpleBreadcrumb;`;

  const cssCode1 = `/* CSS code for Simple Breadcrumb */
.breadcrumbSection {
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #333;
  display: flex;
  justify-content: center; /* Center align the breadcrumb */
}

.simpleBreadcrumb {
  display: flex;
  align-items: center;
  gap: 10px;
}

.breadcrumbSection a {
  text-decoration: none;
  color: #007bff;
  font-size: 18px; /* Increase font size */
  display: flex;
  align-items: center;
  position: relative;
  top: -1px; /* Adjust alignment */
}

.breadcrumbSection a:hover {
  text-decoration: underline;
}

.breadcrumbSeparator {
  margin: 0 5px;
  color: #6c757d;
  font-size: 18px; /* Increase font size */
  display: flex;
  align-items: center;
  position: relative;
  top: -1px; /* Adjust alignment */
}

/* Code Box */
.codeBox {
  width: 80%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #2d2d2d;
  color: #fff;
  max-height: 300px;
  overflow-y: scroll;
  position: relative;
}

.toggleButtons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
}

.toggleButton {
  padding: 5px 10px;
  cursor: pointer;
  border: 1px solid #ddd;
  background-color: #444;
  color: #fff;
  border-radius: 3px;
}

.toggleButton.active {
  background-color: #3b82f6;
  border-color: #3b82f6;
}

.copyButton {
  padding: 5px 10px;
  cursor: pointer;
  border: 1px solid #ddd;
  background-color: #444;
  color: #fff;
  border-radius: 3px;
  position: absolute;
  top: 10px;
  right: 10px;
}`;

  const tsxCode2 = `// TSX code for Icon Breadcrumb
import React from 'react';
import styles from './Breadcrumb.module.css';
import { FaHome, FaInfoCircle, FaPhone } from 'react-icons/fa';

const IconBreadcrumb: React.FC = () => {
  return (
    <div className={styles.breadcrumbSection}>
      <nav className={styles.iconBreadcrumb}>
        <a href="/"><FaHome className={styles.breadcrumbIcon} /> Home</a>
        <span className={styles.breadcrumbSeparator}>/</span>
        <a href="/about"><FaInfoCircle className={styles.breadcrumbIcon} /> About</a>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span><FaPhone className={styles.breadcrumbIcon} /> Contact</span>
      </nav>
    </div>
  );
};

export default IconBreadcrumb;`;

  const cssCode2 = `/* CSS code for Icon Breadcrumb */
.iconBreadcrumb {
  display: flex;
  align-items: center;
  gap: 10px;
}

.breadcrumbIcon {
  margin-right: 5px;
}

/* Other styles remain the same */
`;

  const tsxCode3 = `// TSX code for Dropdown Breadcrumb
import React, { useState } from 'react';
import styles from './Breadcrumb.module.css';
import { FaChevronDown } from 'react-icons/fa';

const DropdownBreadcrumb: React.FC = () => {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);

  const toggleDropdown1 = () => setIsDropdownOpen1(!isDropdownOpen1);
  const toggleDropdown2 = () => setIsDropdownOpen2(!isDropdownOpen2);
  const toggleDropdown3 = () => setIsDropdownOpen3(!isDropdownOpen3);

  return (
    <div className={styles.breadcrumbSection}>
      <nav className={styles.dropdownBreadcrumb}>
        <div className={styles.dropdownItem} onClick={toggleDropdown1}>
          Home <FaChevronDown />
          {isDropdownOpen1 && (
            <ul className={styles.dropdownMenu}>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          )}
        </div>
        <span className={styles.breadcrumbSeparator}>/</span>
        <div className={styles.dropdownItem} onClick={toggleDropdown2}>
          About <FaChevronDown />
          {isDropdownOpen2 && (
            <ul className={styles.dropdownMenu}>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          )}
        </div>
        <span className={styles.breadcrumbSeparator}>/</span>
        <div className={styles.dropdownItem} onClick={toggleDropdown3}>
          Contact <FaChevronDown />
          {isDropdownOpen3 && (
            <ul className={styles.dropdownMenu}>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default DropdownBreadcrumb;`;

  const cssCode3 = `/* CSS code for Dropdown Breadcrumb */
.dropdownBreadcrumb {
  display: flex;
  align-items: center;
  gap: 10px;
}

.dropdownItem {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.dropdownMenu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 10px;
  margin: 0;
  width: 150px;
  z-index: 1;
}

.dropdownMenu li {
  padding: 8px 12px;
  cursor: pointer;
}

.dropdownMenu li:hover {
  background-color: #f0f0f0;
}
`;

  const tsxCode4 = `// TSX code for Status Indicator Breadcrumb
import React from 'react';
import styles from './Breadcrumb.module.css';

const StatusIndicatorBreadcrumb: React.FC = () => {
  const steps = [
    { label: 'Step 1', status: 'completed' },
    { label: 'Step 2', status: 'in-progress' },
    { label: 'Step 3', status: 'not-started' },
    { label: 'Step 4', status: 'not-started' },
  ];

  return (
    <div className={styles.breadcrumbSection}>
      <nav className={styles.statusIndicatorBreadcrumb}>
        {steps.map((step, index) => (
          <div key={index} className={styles.statusItem}>
            <span className={styles.statusLabel}>{step.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default StatusIndicatorBreadcrumb;`;

  const cssCode4 = `/* CSS code for Status Indicator Breadcrumb */
.statusIndicatorBreadcrumb {
  display: flex;
  align-items: center;
  gap: 10px;
}

.statusItem {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  background-color: #007bff; /* Uniform color for all steps */
  color: white;
}

.statusLabel {
  font-size: 18px;
}

/* Other styles remain the same */
`;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.breadcrumbContainer}>
        {/* Simple Breadcrumb */}
        <div className={styles.breadcrumbSection}>
          <nav className={styles.simpleBreadcrumb}>
            <a href="/">Home</a>
            <span className={styles.breadcrumbSeparator}>/</span>
            <a href="/about">About</a>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span>Contact</span>
          </nav>
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

      <div className={styles.breadcrumbContainer}>
        {/* Icon Breadcrumb */}
        <div className={styles.breadcrumbSection}>
          <nav className={styles.iconBreadcrumb}>
            <a href="/"><FaHome className={styles.breadcrumbIcon} /> Home</a>
            <span className={styles.breadcrumbSeparator}>/</span>
            <a href="/about"><FaInfoCircle className={styles.breadcrumbIcon} /> About</a>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span><FaPhone className={styles.breadcrumbIcon} /> Contact</span>
          </nav>
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

      <div className={styles.breadcrumbContainer}>
        {/* Dropdown Breadcrumb */}
        <div className={styles.breadcrumbSection}>
          <nav className={styles.dropdownBreadcrumb}>
            <div className={styles.dropdownItem} onClick={() => setIsDropdownOpen1(!isDropdownOpen1)}>
              Home <FaChevronDown />
              {isDropdownOpen1 && (
                <ul className={styles.dropdownMenu}>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                </ul>
              )}
            </div>
            <span className={styles.breadcrumbSeparator}>/</span>
            <div className={styles.dropdownItem} onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}>
              About <FaChevronDown />
              {isDropdownOpen2 && (
                <ul className={styles.dropdownMenu}>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                </ul>
              )}
            </div>
            <span className={styles.breadcrumbSeparator}>/</span>
            <div className={styles.dropdownItem} onClick={() => setIsDropdownOpen3(!isDropdownOpen3)}>
              Contact <FaChevronDown />
              {isDropdownOpen3 && (
                <ul className={styles.dropdownMenu}>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                </ul>
              )}
            </div>
          </nav>
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

      <div className={styles.breadcrumbContainer}>
        {/* Status Indicator Breadcrumb */}
        <div className={styles.breadcrumbSection}>
          <nav className={styles.statusIndicatorBreadcrumb}>
            <div className={styles.statusItem}>
              <span className={styles.statusLabel}>Step 1</span>
            </div>
            <span className={styles.breadcrumbSeparator}>/</span>
            <div className={styles.statusItem}>
              <span className={styles.statusLabel}>Step 2</span>
            </div>
            <span className={styles.breadcrumbSeparator}>/</span>
            <div className={styles.statusItem}>
              <span className={styles.statusLabel}>Step 3</span>
            </div>
            <span className={styles.breadcrumbSeparator}>/</span>
            <div className={styles.statusItem}>
              <span className={styles.statusLabel}>Step 4</span>
            </div>
          </nav>
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
    </div>
  );
};

export default Breadcrumb;
