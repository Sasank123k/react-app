import React, { useState } from 'react';
import styles from './Accordion.module.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Accordion: React.FC = () => {
  const [activeIndex1, setActiveIndex1] = useState<number | null>(null);
  const [activeIndex2, setActiveIndex2] = useState<number | null>(null);
  const [activeIndex3, setActiveIndex3] = useState<number | null>(null);
  const [activeIndex4, setActiveIndex4] = useState<number | null>(null);
  const [activeNestedIndex, setActiveNestedIndex] = useState<number | null>(null);

  const [codeType1, setCodeType1] = useState('tsx');
  const [codeType2, setCodeType2] = useState('tsx');
  const [codeType3, setCodeType3] = useState('tsx');
  const [codeType4, setCodeType4] = useState('tsx');

  const toggleAccordion1 = (index: number) => {
    setActiveIndex1(activeIndex1 === index ? null : index);
  };

  const toggleAccordion2 = (index: number) => {
    setActiveIndex2(activeIndex2 === index ? null : index);
  };

  const toggleAccordion3 = (index: number) => {
    setActiveIndex3(activeIndex3 === index ? null : index);
  };

  const toggleAccordion4 = (index: number) => {
    setActiveIndex4(activeIndex4 === index ? null : index);
  };

  const toggleNestedAccordion = (index: number) => {
    setActiveNestedIndex(activeNestedIndex === index ? null : index);
  };

  const tsxCode1 = `// TSX code for Simple Accordion`;
  const cssCode1 = `/* CSS code for Simple Accordion */`;

  const tsxCode2 = `// TSX code for Accordion with Images`;
  const cssCode2 = `/* CSS code for Accordion with Images */`;

  const tsxCode3 = `// TSX code for Nested Accordion`;
  const cssCode3 = `/* CSS code for Nested Accordion */`;

  const tsxCode4 = `// TSX code for Toggle Accordion`;
  const cssCode4 = `/* CSS code for Toggle Accordion */`;

  return (
    <div className={styles.pageContainer}>
      {/* Simple Accordion */}
      <div className={styles.accordionSection}>
        <div className={styles.accordionContainer}>
          <div
            className={styles.accordionHeader}
            onClick={() => toggleAccordion1(0)}
          >
            Section 1
            {activeIndex1 === 0 ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {activeIndex1 === 0 && (
            <div className={styles.accordionContent}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus.</p>
            </div>
          )}
          <div
            className={styles.accordionHeader}
            onClick={() => toggleAccordion1(1)}
          >
            Section 2
            {activeIndex1 === 1 ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {activeIndex1 === 1 && (
            <div className={styles.accordionContent}>
              <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          )}
        </div>
      </div>
      <div className={styles.codeBoxContainer}>
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

      {/* Accordion with Images */}
      <div className={styles.accordionSection}>
        <div className={styles.accordionContainer}>
          <div
            className={styles.accordionHeader}
            onClick={() => toggleAccordion2(0)}
          >
            Image Section 1
            {activeIndex2 === 0 ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {activeIndex2 === 0 && (
            <div className={styles.accordionContent}>
              <img src="https://via.placeholder.com/100" alt="Placeholder" className={styles.accordionImage} />
              <p>Image content for Section 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus.</p>
            </div>
          )}
          <div
            className={styles.accordionHeader}
            onClick={() => toggleAccordion2(1)}
          >
            Image Section 2
            {activeIndex2 === 1 ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {activeIndex2 === 1 && (
            <div className={styles.accordionContent}>
              <img src="https://via.placeholder.com/100" alt="Placeholder" className={styles.accordionImage} />
              <p>Image content for Section 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          )}
        </div>
      </div>
      <div className={styles.codeBoxContainer}>
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

      {/* Nested Accordion */}
      <div className={styles.accordionSection}>
        <div className={styles.accordionContainer}>
          <div
            className={styles.accordionHeader}
            onClick={() => toggleAccordion3(0)}
          >
            Main Section 1
            {activeIndex3 === 0 ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {activeIndex3 === 0 && (
            <div className={styles.accordionContent}>
              <div
                className={styles.nestedAccordionHeader}
                onClick={() => toggleNestedAccordion(0)}
              >
                Nested Section 1.1
                {activeNestedIndex === 0 ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {activeNestedIndex === 0 && (
                <div className={styles.nestedAccordionContent}>
                  <p>Content for Nested Section 1.1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus.</p>
                </div>
              )}
              <div
                className={styles.nestedAccordionHeader}
                onClick={() => toggleNestedAccordion(1)}
              >
                Nested Section 1.2
                {activeNestedIndex === 1 ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {activeNestedIndex === 1 && (
                <div className={styles.nestedAccordionContent}>
                  <p>Content for Nested Section 1.2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className={styles.codeBoxContainer}>
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

      {/* Toggle Accordion */}
      <div className={styles.accordionSection}>
        <div className={styles.accordionContainer}>
          <div
            className={styles.accordionHeader}
            onClick={() => toggleAccordion4(0)}
          >
            Toggle Section 1
            {activeIndex4 === 0 ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {activeIndex4 === 0 && (
            <div className={styles.accordionContent}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ex nec urna dignissim faucibus.</p>
              <button className={styles.toggleButton}>Click me!</button>
            </div>
          )}
          <div
            className={styles.accordionHeader}
            onClick={() => toggleAccordion4(1)}
          >
            Toggle Section 2
            {activeIndex4 === 1 ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {activeIndex4 === 1 && (
            <div className={styles.accordionContent}>
              <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <button className={styles.toggleButton}>Click me!</button>
            </div>
          )}
        </div>
      </div>
      <div className={styles.codeBoxContainer}>
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

export default Accordion;
