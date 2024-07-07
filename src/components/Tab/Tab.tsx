import React, { useState } from 'react';
import styles from './Tab.module.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Tab: React.FC = () => {
  const [activeTab1, setActiveTab1] = useState('overview');
  const [activeTab2, setActiveTab2] = useState('account');
  const [codeType, setCodeType] = useState('tsx');

  const handleTabClick1 = (tab: string) => {
    setActiveTab1(tab);
  };

  const handleTabClick2 = (tab: string) => {
    setActiveTab2(tab);
  };

  const tsxCode1 = `import React, { useState } from 'react';
import styles from './Tab.module.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Tab1: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.tabsContainer}>
      <ul className={styles.tabsList}>
        <li
          className={\`\${styles.tabItem} \${activeTab === 'overview' ? styles.active : ''}\`}
          onClick={() => handleTabClick('overview')}
        >
          Overview
        </li>
        <li
          className={\`\${styles.tabItem} \${activeTab === 'activity' ? styles.active : ''}\`}
          onClick={() => handleTabClick('activity')}
        >
          Activity
        </li>
        <li
          className={\`\${styles.tabItem} \${activeTab === 'settings' ? styles.active : ''}\`}
          onClick={() => handleTabClick('settings')}
        >
          Settings
        </li>
        <li
          className={\`\${styles.tabItem} \${activeTab === 'collaborators' ? styles.active : ''}\`}
          onClick={() => handleTabClick('collaborators')}
        >
          Collaborators
        </li>
        <li
          className={\`\${styles.tabItem} \${activeTab === 'notifications' ? styles.active : ''}\`}
          onClick={() => handleTabClick('notifications')}
        >
          Notifications
        </li>
      </ul>
      <div className={styles.tabContent}>
        {activeTab === 'overview' && <div>Content for Overview</div>}
        {activeTab === 'activity' && <div>Content for Activity</div>}
        {activeTab === 'settings' && <div>Content for Settings</div>}
        {activeTab === 'collaborators' && <div>Content for Collaborators</div>}
        {activeTab === 'notifications' && <div>Content for Notifications</div>}
      </div>
    </div>
  );
};

export default Tab1;`;

  const cssCode1 = `.tabsContainer {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #1a202c;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: white;
}

.tabsList {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  border-bottom: 2px solid #e0e0e0;
}

.tabItem {
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  color: #cbd5e0;
  transition: all 0.3s ease;
}

.tabItem:hover {
  color: #63b3ed;
}

.tabItem.active {
  border-bottom: 2px solid #63b3ed;
  color: #63b3ed;
}

.tabContent {
  padding: 20px;
  background-color: #2d3748;
  border-radius: 8px;
}`;

  const tsxCode2 = `import React, { useState } from 'react';
import styles from './Tab.module.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Tab2: React.FC = () => {
  const [activeTab, setActiveTab] = useState('account');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.tabsContainer}>
      <ul className={styles.tabsList2}>
        <li
          className={\`\${styles.tabItem2} \${activeTab === 'account' ? styles.active : ''}\`}
          onClick={() => handleTabClick('account')}
        >
          My Account
        </li>
        <li
          className={\`\${styles.tabItem2} \${activeTab === 'company' ? styles.active : ''}\`}
          onClick={() => handleTabClick('company')}
        >
          Company
        </li>
        <li
          className={\`\${styles.tabItem2} \${activeTab === 'team' ? styles.active : ''}\`}
          onClick={() => handleTabClick('team')}
        >
          Team Members
        </li>
        <li
          className={\`\${styles.tabItem2} \${activeTab === 'billing' ? styles.active : ''}\`}
          onClick={() => handleTabClick('billing')}
        >
          Billing
        </li>
      </ul>
      <div className={styles.tabContent}>
        {activeTab === 'account' && <div>Content for My Account</div>}
        {activeTab === 'company' && <div>Content for Company</div>}
        {activeTab === 'team' && <div>Content for Team Members</div>}
        {activeTab === 'billing' && <div>Content for Billing</div>}
      </div>
    </div>
  );
};

export default Tab2;`;

  const cssCode2 = `.tabsContainer {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #333;
}

.tabsList2 {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  border-bottom: 2px solid #e0e0e0;
}

.tabItem2 {
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  color: #6c757d;
  transition: all 0.3s ease;
}

.tabItem2:hover {
  color: #495057;
}

.tabItem2.active {
  border-bottom: 2px solid #007bff;
  color: #007bff;
}

.tabContent {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
}`;

  return (
    <div>
      {/* First Tab Component */}
      <div className={styles.tabsContainer}>
        <ul className={styles.tabsList}>
          <li
            className={`${styles.tabItem} ${activeTab1 === 'overview' ? styles.active : ''}`}
            onClick={() => handleTabClick1('overview')}
          >
            Overview
          </li>
          <li
            className={`${styles.tabItem} ${activeTab1 === 'activity' ? styles.active : ''}`}
            onClick={() => handleTabClick1('activity')}
          >
            Activity
          </li>
          <li
            className={`${styles.tabItem} ${activeTab1 === 'settings' ? styles.active : ''}`}
            onClick={() => handleTabClick1('settings')}
          >
            Settings
          </li>
          <li
            className={`${styles.tabItem} ${activeTab1 === 'collaborators' ? styles.active : ''}`}
            onClick={() => handleTabClick1('collaborators')}
          >
            Collaborators
          </li>
          <li
            className={`${styles.tabItem} ${activeTab1 === 'notifications' ? styles.active : ''}`}
            onClick={() => handleTabClick1('notifications')}
          >
            Notifications
          </li>
        </ul>
        <div className={styles.tabContent}>
          {activeTab1 === 'overview' && <div>Content for Overview</div>}
          {activeTab1 === 'activity' && <div>Content for Activity</div>}
          {activeTab1 === 'settings' && <div>Content for Settings</div>}
          {activeTab1 === 'collaborators' && <div>Content for Collaborators</div>}
          {activeTab1 === 'notifications' && <div>Content for Notifications</div>}
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
        <CopyToClipboard text={codeType === 'tsx' ? tsxCode1 : cssCode1}>
          <button className={styles.copyButton}>Copy</button>
        </CopyToClipboard>
        <pre>{codeType === 'tsx' ? tsxCode1 : cssCode1}</pre>
      </div>

      {/* Second Tab Component */}
      <div className={styles.tabsContainer}>
        <ul className={styles.tabsList2}>
          <li
            className={`${styles.tabItem2} ${activeTab2 === 'account' ? styles.active : ''}`}
            onClick={() => handleTabClick2('account')}
          >
            My Account
          </li>
          <li
            className={`${styles.tabItem2} ${activeTab2 === 'company' ? styles.active : ''}`}
            onClick={() => handleTabClick2('company')}
          >
            Company
          </li>
          <li
            className={`${styles.tabItem2} ${activeTab2 === 'team' ? styles.active : ''}`}
            onClick={() => handleTabClick2('team')}
          >
            Team Members
          </li>
          <li
            className={`${styles.tabItem2} ${activeTab2 === 'billing' ? styles.active : ''}`}
            onClick={() => handleTabClick2('billing')}
          >
            Billing
          </li>
        </ul>
        <div className={styles.tabContent}>
          {activeTab2 === 'account' && <div>Content for My Account</div>}
          {activeTab2 === 'company' && <div>Content for Company</div>}
          {activeTab2 === 'team' && <div>Content for Team Members</div>}
          {activeTab2 === 'billing' && <div>Content for Billing</div>}
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
        <CopyToClipboard text={codeType === 'tsx' ? tsxCode2 : cssCode2}>
          <button className={styles.copyButton}>Copy</button>
        </CopyToClipboard>
        <pre>{codeType === 'tsx' ? tsxCode2 : cssCode2}</pre>
      </div>
    </div>
  );
};

export default Tab;
