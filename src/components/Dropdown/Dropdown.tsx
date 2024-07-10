import React, { useState, useEffect, useRef } from 'react';
import styles from './Dropdown.module.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaUser, FaCog, FaSignOutAlt, FaCheck, FaCheckCircle, FaBell } from 'react-icons/fa';

const Dropdown: React.FC = () => {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
  const [isDropdownOpen5, setIsDropdownOpen5] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const [codeType1, setCodeType1] = useState('tsx');
  const [codeType2, setCodeType2] = useState('tsx');
  const [codeType3, setCodeType3] = useState('tsx');
  const [codeType4, setCodeType4] = useState('tsx');
  const [codeType5, setCodeType5] = useState('tsx');

  const handleCheckboxChange = (item: string) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(item)
        ? prevSelectedItems.filter((i) => i !== item)
        : [...prevSelectedItems, item]
    );
  };

  const handleSelectClick = () => {
    alert(`Selected items: ${selectedItems.join(', ')}`);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (!dropdownRef1.current?.contains(event.target as Node)) {
      setIsDropdownOpen1(false);
    }
    if (!dropdownRef2.current?.contains(event.target as Node)) {
      setIsDropdownOpen2(false);
    }
    if (!dropdownRef3.current?.contains(event.target as Node)) {
      setIsDropdownOpen3(false);
    }
    if (!dropdownRef4.current?.contains(event.target as Node)) {
      setIsDropdownOpen4(false);
    }
    if (!dropdownRef5.current?.contains(event.target as Node)) {
      setIsDropdownOpen5(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const dropdownRef1 = useRef<HTMLDivElement>(null);
  const dropdownRef2 = useRef<HTMLDivElement>(null);
  const dropdownRef3 = useRef<HTMLDivElement>(null);
  const dropdownRef4 = useRef<HTMLDivElement>(null);
  const dropdownRef5 = useRef<HTMLDivElement>(null);

  const tsxCode1 = `// TSX code for Dropdown 1`;
  const cssCode1 = `.dropdown { /* CSS for Dropdown 1 */ }`;

  const tsxCode2 = `// TSX code for Dropdown 2`;
  const cssCode2 = `.dropdown2 { /* CSS for Dropdown 2 */ }`;

  const tsxCode3 = `// TSX code for Dropdown 3`;
  const cssCode3 = `.dropdown3 { /* CSS for Dropdown 3 */ }`;

  const tsxCode4 = `// TSX code for Dropdown 4`;
  const cssCode4 = `.dropdown4 { /* CSS for Dropdown 4 */ }`;

  const tsxCode5 = `// TSX code for Dropdown 5`;
  const cssCode5 = `.dropdown5 { /* CSS for Dropdown 5 */ }`;

  return (
    <div className={styles.pageContainer}>
      {/* Dropdown 1 */}
      <div className={styles.dropdownSection}>
        <div className={styles.dropdown} ref={dropdownRef1}>
          <button
            className={styles.dropdownButton}
            onClick={() => setIsDropdownOpen1(!isDropdownOpen1)}
          >
            Dropdown 1
          </button>
          {isDropdownOpen1 && (
            <div className={styles.dropdownMenu}>
              <div className={styles.dropdownItem}>Item 1</div>
              <div className={styles.dropdownItem}>Item 2</div>
              <div className={styles.dropdownItem}>Item 3</div>
              <div className={styles.dropdownItem}>Item 4</div>
            </div>
          )}
        </div>

        {/* Code Box 1 */}
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

      {/* Dropdown 2 */}
      <div className={styles.dropdownSection}>
        <div className={styles.dropdown} ref={dropdownRef2}>
          <button
            className={styles.dropdownButton}
            onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}
          >
            Dropdown 2
          </button>
          {isDropdownOpen2 && (
            <div className={styles.dropdownMenu}>
              <div className={styles.dropdownItem}>
                <FaUser className={styles.dropdownIcon} /> Item 1
              </div>
              <div className={styles.dropdownItem}>
                <FaCog className={styles.dropdownIcon} /> Item 2
              </div>
              <div className={styles.dropdownItem}>
                <FaBell className={styles.dropdownIcon} /> Item 3
              </div>
              <div className={styles.dropdownItem}>
                <FaCheck className={styles.dropdownIcon} /> Item 4
              </div>
              <div className={styles.dropdownItem}>
                <FaSignOutAlt className={styles.dropdownIcon} /> Item 5
              </div>
            </div>
          )}
        </div>

        {/* Code Box 2 */}
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

      {/* Dropdown 3 */}
      <div className={styles.dropdownSection}>
        <div className={styles.dropdown} ref={dropdownRef3}>
          <button
            className={styles.dropdownButton}
            onClick={() => setIsDropdownOpen3(!isDropdownOpen3)}
          >
            Dropdown 3
          </button>
          {isDropdownOpen3 && (
            <div className={styles.dropdownMenu}>
              <div className={styles.dropdownItem}>
                <FaUser className={styles.dropdownIcon} />
                <div className={styles.userInfo}>
                  <span className={styles.userName}>John Doe</span>
                  <span className={styles.userEmail}>john.doe@gmail.com</span>
                </div>
              </div>
              <div className={styles.dropdownItem}>My Profile</div>
              <div className={styles.dropdownItem}>Settings</div>
              <div className={styles.dropdownItem}>Logout</div>
            </div>
          )}
        </div>

        {/* Code Box 3 */}
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

      {/* Dropdown 4 */}
      <div className={styles.dropdownSection}>
        <div className={styles.dropdown} ref={dropdownRef4}>
          <button
            className={styles.dropdownButton}
            onClick={() => setIsDropdownOpen4(!isDropdownOpen4)}
          >
            Dropdown 4
          </button>
          {isDropdownOpen4 && (
            <div className={styles.dropdownMenu}>
              <div className={styles.dropdownItem}>
                Item 1
                <span className={styles.nestedDropdownIndicator}>+</span>
                <div className={styles.nestedDropdownMenu}>
                  <div className={styles.dropdownItem}>Nested Item 1</div>
                  <div className={styles.dropdownItem}>Nested Item 2</div>
                </div>
              </div>
              <div className={styles.dropdownItem}>Item 2</div>
              <div className={styles.dropdownItem}>Item 3</div>
              <div className={styles.dropdownItem}>Item 4</div>
            </div>
          )}
        </div>

        {/* Code Box 4 */}
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

      {/* Dropdown 5 */}
      <div className={styles.dropdownSection}>
        <div className={styles.dropdown} ref={dropdownRef5}>
          <button
            className={styles.dropdownButton}
            onClick={() => setIsDropdownOpen5(!isDropdownOpen5)}
          >
            Dropdown 5
          </button>
          {isDropdownOpen5 && (
            <div className={styles.dropdownMenu}>
              <label className={styles.dropdownItem}>
                <input type="checkbox" className={styles.dropdownCheckbox} onChange={() => handleCheckboxChange('Item 1')} /> Item 1
              </label>
              <label className={styles.dropdownItem}>
                <input type="checkbox" className={styles.dropdownCheckbox} onChange={() => handleCheckboxChange('Item 2')} /> Item 2
              </label>
              <label className={styles.dropdownItem}>
                <input type="checkbox" className={styles.dropdownCheckbox} onChange={() => handleCheckboxChange('Item 3')} /> Item 3
              </label>
              <label className={styles.dropdownItem}>
                <input type="checkbox" className={styles.dropdownCheckbox} onChange={() => handleCheckboxChange('Item 4')} /> Item 4
              </label>
              <label className={styles.dropdownItem}>
                <input type="checkbox" className={styles.dropdownCheckbox} onChange={() => handleCheckboxChange('Item 5')} /> Item 5
              </label>
              <button className={styles.selectButton} onClick={handleSelectClick}>Select</button>
            </div>
          )}
        </div>

        {/* Code Box 5 */}
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

export default Dropdown;
