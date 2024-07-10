import React, { useState } from 'react';
import styles from './Tab.module.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaHome, FaUser, FaCog, FaBell, FaInfoCircle } from 'react-icons/fa';

const Tab: React.FC = () => {
  const [activeTab1, setActiveTab1] = useState('overview');
  const [activeTab2, setActiveTab2] = useState('account');
  const [activeTab3, setActiveTab3] = useState('profile');
  const [activeTab4, setActiveTab4] = useState('home');
  const [activeTab5, setActiveTab5] = useState('info');

  const [codeType1, setCodeType1] = useState('tsx');
  const [codeType2, setCodeType2] = useState('tsx');
  const [codeType3, setCodeType3] = useState('tsx');
  const [codeType4, setCodeType4] = useState('tsx');
  const [codeType5, setCodeType5] = useState('tsx');

  const tsxCode1 = `// TSX code for Tab 1`;
  const cssCode1 = `.tabItem1 { /* CSS for Tab 1 */ }`;

  const tsxCode2 = `// TSX code for Tab 2`;
  const cssCode2 = `.tabItem2 { /* CSS for Tab 2 */ }`;

  const tsxCode3 = `// TSX code for Tab 3`;
  const cssCode3 = `.tabItem3 { /* CSS for Tab 3 */ }`;

  const tsxCode4 = `// TSX code for Tab 4`;
  const cssCode4 = `.tabItem4 { /* CSS for Tab 4 */ }`;

  const tsxCode5 = `// TSX code for Tab 5`;
  const cssCode5 = `.tabItem5 { /* CSS for Tab 5 */ }`;

  return (
    <div className={styles.pageContainer}>
      {/* Horizontal Scrollable Tabs */}
      <div className={styles.tabSection}>
        <div className={styles.tabsContainer}>
          <div className={styles.scrollableTabs}>
            <ul className={styles.tabsList}>
              <li
                className={`${styles.tabItem} ${activeTab1 === 'overview' ? styles.active : ''}`}
                onClick={() => setActiveTab1('overview')}
              >
                Overview
              </li>
              <li
                className={`${styles.tabItem} ${activeTab1 === 'activity' ? styles.active : ''}`}
                onClick={() => setActiveTab1('activity')}
              >
                Activity
              </li>
              <li
                className={`${styles.tabItem} ${activeTab1 === 'settings' ? styles.active : ''}`}
                onClick={() => setActiveTab1('settings')}
              >
                Settings
              </li>
              <li
                className={`${styles.tabItem} ${activeTab1 === 'more' ? styles.active : ''}`}
                onClick={() => setActiveTab1('more')}
              >
                More
              </li>
              <li
                className={`${styles.tabItem} ${activeTab1 === 'extra' ? styles.active : ''}`}
                onClick={() => setActiveTab1('extra')}
              >
                Extra
              </li>
            </ul>
          </div>
          <div className={styles.tabContent}>
            {activeTab1 === 'overview' && <div>Content for Overview</div>}
            {activeTab1 === 'activity' && <div>Content for Activity</div>}
            {activeTab1 === 'settings' && <div>Content for Settings</div>}
            {activeTab1 === 'more' && <div>Content for More</div>}
            {activeTab1 === 'extra' && <div>Content for Extra</div>}
          </div>
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

      {/* Vertical Tabs */}
      <div className={styles.tabSection}>
        <div className={styles.tabsContainerVertical}>
          <ul className={styles.tabsListVertical}>
            <li
              className={`${styles.tabItemVertical} ${activeTab2 === 'account' ? styles.active : ''}`}
              onClick={() => setActiveTab2('account')}
            >
              Account
            </li>
            <li
              className={`${styles.tabItemVertical} ${activeTab2 === 'billing' ? styles.active : ''}`}
              onClick={() => setActiveTab2('billing')}
            >
              Billing
            </li>
            <li
              className={`${styles.tabItemVertical} ${activeTab2 === 'users' ? styles.active : ''}`}
              onClick={() => setActiveTab2('users')}
            >
              Users
            </li>
          </ul>
          <div className={styles.tabContentVertical}>
            {activeTab2 === 'account' && <div>Content for Account</div>}
            {activeTab2 === 'billing' && <div>Content for Billing</div>}
            {activeTab2 === 'users' && <div>Content for Users</div>}
          </div>
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

      {/* Accordion Tabs */}
      <div className={styles.tabSection}>
        <div className={styles.accordionContainer}>
          <div
            className={`${styles.accordionTab} ${activeTab3 === 'profile' ? styles.active : ''}`}
            onClick={() => setActiveTab3(activeTab3 === 'profile' ? '' : 'profile')}
          >
            Profile
          </div>
          {activeTab3 === 'profile' && (
            <div className={styles.accordionContent}>Content for Profile</div>
          )}
          <div
            className={`${styles.accordionTab} ${activeTab3 === 'messages' ? styles.active : ''}`}
            onClick={() => setActiveTab3(activeTab3 === 'messages' ? '' : 'messages')}
          >
            Messages
          </div>
          {activeTab3 === 'messages' && (
            <div className={styles.accordionContent}>Content for Messages</div>
          )}
          <div
            className={`${styles.accordionTab} ${activeTab3 === 'notifications' ? styles.active : ''}`}
            onClick={() => setActiveTab3(activeTab3 === 'notifications' ? '' : 'notifications')}
          >
            Notifications
          </div>
          {activeTab3 === 'notifications' && (
            <div className={styles.accordionContent}>Content for Notifications</div>
          )}
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

      {/* Icon Tabs */}
      <div className={styles.tabSection}>
        <div className={styles.tabsContainer}>
          <ul className={styles.tabsList}>
            <li
              className={`${styles.tabItem} ${activeTab4 === 'home' ? styles.active : ''}`}
              onClick={() => setActiveTab4('home')}
            >
              <FaHome className={styles.tabIcon} /> Home
            </li>
            <li
              className={`${styles.tabItem} ${activeTab4 === 'services' ? styles.active : ''}`}
              onClick={() => setActiveTab4('services')}
            >
              <FaCog className={styles.tabIcon} /> Services
            </li>
            <li
              className={`${styles.tabItem} ${activeTab4 === 'contact' ? styles.active : ''}`}
              onClick={() => setActiveTab4('contact')}
            >
              <FaBell className={styles.tabIcon} /> Contact
            </li>
          </ul>
          <div className={styles.tabContent}>
            {activeTab4 === 'home' && <div>Content for Home</div>}
            {activeTab4 === 'services' && <div>Content for Services</div>}
            {activeTab4 === 'contact' && <div>Content for Contact</div>}
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

      {/* Animated Tabs */}
      <div className={styles.tabSection}>
        <div className={styles.tabsContainer}>
          <ul className={styles.tabsList}>
            <li
              className={`${styles.tabItem} ${activeTab5 === 'info' ? styles.active : ''}`}
              onClick={() => setActiveTab5('info')}
            >
              Info
            </li>
            <li
              className={`${styles.tabItem} ${activeTab5 === 'stats' ? styles.active : ''}`}
              onClick={() => setActiveTab5('stats')}
            >
              Stats
            </li>
            <li
              className={`${styles.tabItem} ${activeTab5 === 'help' ? styles.active : ''}`}
              onClick={() => setActiveTab5('help')}
            >
              Help
            </li>
          </ul>
          <div className={`${styles.tabContent} ${styles.animatedContent}`}>
            {activeTab5 === 'info' && <div>Content for Info</div>}
            {activeTab5 === 'stats' && <div>Content for Stats</div>}
            {activeTab5 === 'help' && <div>Content for Help</div>}
          </div>
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

export default Tab;
