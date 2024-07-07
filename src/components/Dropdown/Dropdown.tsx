import React, { useState } from 'react';
import styles from './Dropdown.module.css';

const Dropdown: React.FC = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [nestedOpen, setNestedOpen] = useState(false);
  const [codeType, setCodeType] = useState('tsx');

  const toggleDropdown1 = () => setIsOpen1(!isOpen1);
  const toggleDropdown2 = () => setIsOpen2(!isOpen2);
  const toggleDropdown3 = () => setIsOpen3(!isOpen3);
  const toggleDropdown4 = () => setIsOpen4(!isOpen4);
  const toggleNestedDropdown = () => setNestedOpen(!nestedOpen);

  const dropdown1TsxCode = `import React, { useState } from 'react';
import styles from './Dropdown.module.css';

const Dropdown1: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={toggleDropdown} className={styles.dropdownButton}>
        Options
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <li className={styles.dropdownItem}>Account settings</li>
          <li className={styles.dropdownItem}>Support</li>
          <li className={styles.dropdownItem}>License</li>
          <li className={styles.dropdownItem}>Sign out</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown1;`;

  const dropdown1CssCode = `.dropdown {
  position: relative;
  display: inline-block;
}

.dropdownButton {
  background-color: #f8f8f8;
  color: #333;
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dropdownButton:hover {
  background-color: #e0e0e0;
}

.dropdownButton::after {
  content: ' ▼';
  font-size: 12px;
  margin-left: 8px;
}

.dropdownMenu {
  display: block;
  position: absolute;
  background-color: white;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  border-radius: 4px;
  z-index: 1;
  margin-top: 8px;
  padding: 10px 0;
}

.dropdownItem {
  color: #333;
  padding: 12px 20px;
  text-decoration: none;
  display: block;
  transition: background-color 0.3s ease;
}

.dropdownItem:hover {
  background-color: #f1f1f1;
}`;

  const dropdown2TsxCode = `import React, { useState } from 'react';
import styles from './Dropdown.module.css';

const Dropdown2: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown2}>
      <button onClick={toggleDropdown} className={styles.dropdownButton2}>
        Options
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu2}>
          <li className={styles.dropdownItem2}>
            <span className={styles.icon}>✏️</span> Edit
          </li>
          <li className={styles.dropdownItem2}>
            <span className={styles.icon}>📄</span> Duplicate
          </li>
          <li className={styles.dropdownItem2}>
            <span className={styles.icon}>🗃️</span> Archive
          </li>
          <li className={styles.dropdownItem2}>
            <span className={styles.icon}>➡️</span> Move
          </li>
          <li className={styles.dropdownItem2}>
            <span className={styles.icon}>👥</span> Share
          </li>
          <li className={styles.dropdownItem2}>
            <span className={styles.icon}>❤️</span> Add to favorites
          </li>
          <li className={styles.dropdownItem2}>
            <span className={styles.icon}>🗑️</span> Delete
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown2;`;

  const dropdown2CssCode = `.dropdown2 {
  position: relative;
  display: inline-block;
}

.dropdownButton2 {
  background-color: #f8f8f8;
  color: #333;
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dropdownButton2:hover {
  background-color: #e0e0e0;
}

.dropdownButton2::after {
  content: ' ▼';
  font-size: 12px;
  margin-left: 8px;
}

.dropdownMenu2 {
  display: block;
  position: absolute;
  background-color: white;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  border-radius: 4px;
  z-index: 1;
  margin-top: 8px;
  padding: 10px 0;
}

.dropdownItem2 {
  color: #333;
  padding: 12px 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;
}

.dropdownItem2:hover {
  background-color: #f1f1f1;
}

.icon {
  margin-right: 10px;
}`;

  const dropdown3TsxCode = `import React, { useState } from 'react';
import styles from './Dropdown.module.css';

const Dropdown3: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown3}>
      <button onClick={toggleDropdown} className={styles.dropdownButton3}>
        Options
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu3}>
          <li className={styles.dropdownHeader}>Signed in as tom@example.com</li>
          <li className={styles.dropdownItem3}>Account settings</li>
          <li className={styles.dropdownItem3}>Support</li>
          <li className={styles.dropdownItem3}>License</li>
          <li className={styles.dropdownItem3}>Sign out</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown3;`;

  const dropdown3CssCode = `.dropdown3 {
  position: relative;
  display: inline-block;
}

.dropdownButton3 {
  background-color: #f8f8f8;
  color: #333;
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dropdownButton3:hover {
  background-color: #e0e0e0;
}

.dropdownButton3::after {
  content: ' ▼';
  font-size: 12px;
  margin-left: 8px;
}

.dropdownMenu3 {
  display: block;
  position: absolute;
  background-color: white;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  border-radius: 4px;
  z-index: 1;
  margin-top: 8px;
  padding: 10px 0;
}

.dropdownHeader {
  padding: 12px 20px;
  font-size: 14px;
  color: #555;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
}

.dropdownItem3 {
  color: #333;
  padding: 12px 20px;
  text-decoration: none;
  display: block;
  transition: background-color 0.3s ease;
}

.dropdownItem3:hover {
  background-color: #f1f1f1;
}`;

  const dropdown4TsxCode = `import React, { useState } from 'react';
import styles from './Dropdown.module.css';

const Dropdown4: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [nestedOpen, setNestedOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleNestedDropdown = () => {
    setNestedOpen(!nestedOpen);
  };

  return (
    <div className={styles.dropdown4}>
      <button onClick={toggleDropdown} className={styles.dropdownButton4}>
        More Options
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu4}>
          <li
            className={styles.dropdownItem4}
            onMouseEnter={toggleNestedDropdown}
            onMouseLeave={toggleNestedDropdown}
          >
            Nested Options
            {nestedOpen && (
              <ul className={styles.nestedDropdownMenu}>
                <li className={styles.nestedDropdownItem}>Option 1</li>
                <li className={styles.nestedDropdownItem}>Option 2</li>
                <li className={styles.nestedDropdownItem}>Option 3</li>
              </ul>
            )}
          </li>
          <li className={styles.dropdownItem4}>Another Option</li>
          <li className={styles.dropdownItem4}>More Options</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown4;`;

  const dropdown4CssCode = `.dropdown4 {
  position: relative;
  display: inline-block;
}

.dropdownButton4 {
  background-color: #f8f8f8;
  color: #333;
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dropdownButton4:hover {
  background-color: #e0e0e0;
}

.dropdownButton4::after {
  content: ' ▼';
  font-size: 12px;
  margin-left: 8px;
}

.dropdownMenu4 {
  display: block;
  position: absolute;
  background-color: white;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  border-radius: 4px;
  z-index: 1;
  margin-top: 8px;
  padding: 10px 0;
}

.dropdownItem4 {
  color: #333;
  padding: 12px 20px;
  text-decoration: none;
  display: block;
  transition: background-color 0.3s ease;
  position: relative;
}

.dropdownItem4:hover {
  background-color: #f1f1f1;
}

.nestedDropdownMenu {
  display: block;
  position: absolute;
  left: 100%;
  top: 0;
  background-color: white;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  border-radius: 4px;
  z-index: 1;
  margin-top: 0;
  padding: 10px 0;
}

.nestedDropdownItem {
  color: #333;
  padding: 12px 20px;
  text-decoration: none;
  display: block;
  transition: background-color 0.3s ease;
}

.nestedDropdownItem:hover {
  background-color: #f1f1f1;
}`;

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      alert('Code copied to clipboard!');
    });
  };

  return (
    <div>
      <h2 className={styles.heading}>Account Options</h2>
      <div className={styles.dropdownContainer}>
        <div className={styles.dropdown}>
          <button onClick={toggleDropdown1} className={styles.dropdownButton}>
            Options
          </button>
          {isOpen1 && (
            <ul className={styles.dropdownMenu}>
              <li className={styles.dropdownItem}>Account settings</li>
              <li className={styles.dropdownItem}>Support</li>
              <li className={styles.dropdownItem}>License</li>
              <li className={styles.dropdownItem}>Sign out</li>
            </ul>
          )}
        </div>
      </div>
      <div className={styles.codeBox}>
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
        <button className={styles.copyButton} onClick={() => handleCopyCode(dropdown1TsxCode)}>
          Copy
        </button>
        <pre>{codeType === 'tsx' ? dropdown1TsxCode : dropdown1CssCode}</pre>
      </div>

      <h2 className={styles.heading}>Edit Options</h2>
      <div className={styles.dropdownContainer}>
        <div className={styles.dropdown2}>
          <button onClick={toggleDropdown2} className={styles.dropdownButton2}>
            Options
          </button>
          {isOpen2 && (
            <ul className={styles.dropdownMenu2}>
              <li className={styles.dropdownItem2}>
                <span className={styles.icon}>✏️</span> Edit
              </li>
              <li className={styles.dropdownItem2}>
                <span className={styles.icon}>📄</span> Duplicate
              </li>
              <li className={styles.dropdownItem2}>
                <span className={styles.icon}>🗃️</span> Archive
              </li>
              <li className={styles.dropdownItem2}>
                <span className={styles.icon}>➡️</span> Move
              </li>
              <li className={styles.dropdownItem2}>
                <span className={styles.icon}>👥</span> Share
              </li>
              <li className={styles.dropdownItem2}>
                <span className={styles.icon}>❤️</span> Add to favorites
              </li>
              <li className={styles.dropdownItem2}>
                <span className={styles.icon}>🗑️</span> Delete
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className={styles.codeBox}>
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
        <button className={styles.copyButton} onClick={() => handleCopyCode(dropdown2TsxCode)}>
          Copy
        </button>
        <pre>{codeType === 'tsx' ? dropdown2TsxCode : dropdown2CssCode}</pre>
      </div>

      <h2 className={styles.heading}>User Account</h2>
      <div className={styles.dropdownContainer}>
        <div className={styles.dropdown3}>
          <button onClick={toggleDropdown3} className={styles.dropdownButton3}>
            Options
          </button>
          {isOpen3 && (
            <ul className={styles.dropdownMenu3}>
              <li className={styles.dropdownHeader}>Signed in as tom@example.com</li>
              <li className={styles.dropdownItem3}>Account settings</li>
              <li className={styles.dropdownItem3}>Support</li>
              <li className={styles.dropdownItem3}>License</li>
              <li className={styles.dropdownItem3}>Sign out</li>
            </ul>
          )}
        </div>
      </div>
      <div className={styles.codeBox}>
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
        <button className={styles.copyButton} onClick={() => handleCopyCode(dropdown3TsxCode)}>
          Copy
        </button>
        <pre>{codeType === 'tsx' ? dropdown3TsxCode : dropdown3CssCode}</pre>
      </div>

      <h2 className={styles.heading}>Nested Dropdown</h2>
      <div className={styles.dropdownContainer}>
        <div className={styles.dropdown4}>
          <button onClick={toggleDropdown4} className={styles.dropdownButton4}>
            More Options
          </button>
          {isOpen4 && (
            <ul className={styles.dropdownMenu4}>
              <li
                className={styles.dropdownItem4}
                onMouseEnter={toggleNestedDropdown}
                onMouseLeave={toggleNestedDropdown}
              >
                Nested Options
                {nestedOpen && (
                  <ul className={styles.nestedDropdownMenu}>
                    <li className={styles.nestedDropdownItem}>Option 1</li>
                    <li className={styles.nestedDropdownItem}>Option 2</li>
                    <li className={styles.nestedDropdownItem}>Option 3</li>
                  </ul>
                )}
              </li>
              <li className={styles.dropdownItem4}>Another Option</li>
              <li className={styles.dropdownItem4}>More Options</li>
            </ul>
          )}
        </div>
      </div>
      <div className={styles.codeBox}>
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
        <button className={styles.copyButton} onClick={() => handleCopyCode(dropdown4TsxCode)}>
          Copy
        </button>
        <pre>{codeType === 'tsx' ? dropdown4TsxCode : dropdown4CssCode}</pre>
      </div>
    </div>
  );
};

export default Dropdown;
