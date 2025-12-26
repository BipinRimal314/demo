import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Terminal } from 'lucide-react';

// Syntax highlighting token types and their colors
const tokenColors = {
  keyword: '#c678dd',      // Purple - keywords like export, const, if, return
  string: '#98c379',       // Green - strings
  number: '#d19a66',       // Orange - numbers
  comment: '#5c6370',      // Gray - comments
  function: '#61afef',     // Blue - function names
  property: '#e5c07b',     // Yellow - object properties
  operator: '#56b6c2',     // Cyan - operators
  punctuation: '#abb2bf',  // Light gray - punctuation
  type: '#e5c07b',         // Yellow - types
  default: '#abb2bf',      // Default text color
};

// Simple syntax highlighter for TypeScript/JavaScript
const highlightCode = (line, language) => {
  const keywords = [
    'export', 'default', 'const', 'let', 'var', 'function', 'return', 'if', 'else',
    'for', 'while', 'class', 'extends', 'import', 'from', 'async', 'await', 'new',
    'try', 'catch', 'throw', 'typeof', 'instanceof', 'true', 'false', 'null', 'undefined',
    'this', 'super', 'static', 'private', 'public', 'protected', 'interface', 'type',
    'enum', 'implements', 'readonly', 'as', 'in', 'of', 'get', 'set'
  ];

  const tokenize = (line) => {
    const tokens = [];
    let remaining = line;
    let position = 0;

    while (remaining.length > 0) {
      let matched = false;

      // Comments
      if (remaining.startsWith('//')) {
        tokens.push({ type: 'comment', value: remaining });
        break;
      }

      // Strings (double quotes)
      const doubleStringMatch = remaining.match(/^"([^"\\]|\\.)*"/);
      if (doubleStringMatch) {
        tokens.push({ type: 'string', value: doubleStringMatch[0] });
        remaining = remaining.slice(doubleStringMatch[0].length);
        matched = true;
        continue;
      }

      // Strings (single quotes)
      const singleStringMatch = remaining.match(/^'([^'\\]|\\.)*'/);
      if (singleStringMatch) {
        tokens.push({ type: 'string', value: singleStringMatch[0] });
        remaining = remaining.slice(singleStringMatch[0].length);
        matched = true;
        continue;
      }

      // Strings (backticks)
      const templateMatch = remaining.match(/^`([^`\\]|\\.)*`/);
      if (templateMatch) {
        tokens.push({ type: 'string', value: templateMatch[0] });
        remaining = remaining.slice(templateMatch[0].length);
        matched = true;
        continue;
      }

      // Numbers
      const numberMatch = remaining.match(/^\d+(\.\d+)?/);
      if (numberMatch) {
        tokens.push({ type: 'number', value: numberMatch[0] });
        remaining = remaining.slice(numberMatch[0].length);
        matched = true;
        continue;
      }

      // Keywords and identifiers
      const wordMatch = remaining.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*/);
      if (wordMatch) {
        const word = wordMatch[0];
        if (keywords.includes(word)) {
          tokens.push({ type: 'keyword', value: word });
        } else if (remaining.slice(word.length).match(/^\s*[(:]/)) {
          // Function call or definition
          tokens.push({ type: 'function', value: word });
        } else {
          tokens.push({ type: 'default', value: word });
        }
        remaining = remaining.slice(word.length);
        matched = true;
        continue;
      }

      // Operators
      const operatorMatch = remaining.match(/^(===|!==|==|!=|<=|>=|=>|&&|\|\||[+\-*/%=<>!&|^~?:])/);
      if (operatorMatch) {
        tokens.push({ type: 'operator', value: operatorMatch[0] });
        remaining = remaining.slice(operatorMatch[0].length);
        matched = true;
        continue;
      }

      // Punctuation
      const punctMatch = remaining.match(/^[{}[\]();,.:]/);
      if (punctMatch) {
        tokens.push({ type: 'punctuation', value: punctMatch[0] });
        remaining = remaining.slice(1);
        matched = true;
        continue;
      }

      // Whitespace
      const spaceMatch = remaining.match(/^\s+/);
      if (spaceMatch) {
        tokens.push({ type: 'default', value: spaceMatch[0] });
        remaining = remaining.slice(spaceMatch[0].length);
        matched = true;
        continue;
      }

      // Any other character
      tokens.push({ type: 'default', value: remaining[0] });
      remaining = remaining.slice(1);
    }

    return tokens;
  };

  return tokenize(line);
};

const CodePlayground = ({
  code = '',
  language = 'typescript',
  filename = 'example.ts',
  height = '300px',
  showLineNumbers = true,
}) => {
  const [copied, setCopied] = useState(false);
  const [hoveredLine, setHoveredLine] = useState(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const lines = useMemo(() => code.trim().split('\n'), [code]);

  return (
    <div
      style={{
        background: '#0F1115', // Hardcoded Dark Background
        border: '1px solid #1f2937', // Hardcoded Dark Border
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-sm)',
        lineHeight: '1.7',
        height: height,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', // Strong shadow
      }}
    >
      {/* Window Chrome */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 'var(--space-3) var(--space-4)',
          borderBottom: '1px solid #1f2937',
          background: '#111827', // Darker chrome
        }}
      >
        {/* Traffic lights */}
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <TrafficLight color="#ff5f57" />
          <TrafficLight color="#febc2e" />
          <TrafficLight color="#28c840" />
        </div>

        {/* Filename tab */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            padding: 'var(--space-1) var(--space-3)',
            background: '#1f2937',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid #374151',
          }}
        >
          <Terminal size={12} style={{ color: '#9ca3af' }} />
          <span
            style={{
              color: '#e5e7eb',
              fontSize: 'var(--text-xs)',
              letterSpacing: 'var(--tracking-mono)',
            }}
          >
            {filename}
          </span>
        </div>

        {/* Copy button */}
        <motion.button
          onClick={handleCopy}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '28px',
            height: '28px',
            background: '#1f2937',
            border: '1px solid #374151',
            borderRadius: 'var(--radius-sm)',
            cursor: 'pointer',
            color: copied ? '#10b981' : '#9ca3af',
            transition: 'all 0.2s ease',
          }}
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div
                key="check"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Check size={14} />
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Copy size={14} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Code Editor Area */}
      <div
        style={{
          flex: 1,
          overflow: 'auto',
          padding: 'var(--space-4) 0',
          scrollbarWidth: 'thin',
          scrollbarColor: '#4b5563 transparent',
        }}
      >
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            tableLayout: 'fixed',
          }}
        >
          <tbody>
            {lines.map((line, lineIndex) => (
              <motion.tr
                key={lineIndex}
                onMouseEnter={() => setHoveredLine(lineIndex)}
                onMouseLeave={() => setHoveredLine(null)}
                style={{
                  background:
                    hoveredLine === lineIndex
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'transparent',
                  transition: 'background 0.15s ease',
                }}
              >
                {/* Line number */}
                {showLineNumbers && (
                  <td
                    style={{
                      userSelect: 'none',
                      color: '#4b5563', // Dark mode line number color
                      textAlign: 'right',
                      paddingRight: 'var(--space-4)',
                      paddingLeft: 'var(--space-4)',
                      width: '50px',
                      verticalAlign: 'top',
                      fontSize: 'var(--text-xs)',
                      opacity: hoveredLine === lineIndex ? 1 : 0.5,
                      transition: 'opacity 0.15s ease',
                    }}
                  >
                    {lineIndex + 1}
                  </td>
                )}

                {/* Code content with syntax highlighting */}
                <td
                  style={{
                    whiteSpace: 'pre',
                    paddingRight: 'var(--space-4)',
                    overflow: 'visible',
                    color: '#abb2bf', // Default text color for One Dark
                  }}
                >
                  {highlightCode(line, language).map((token, tokenIndex) => (
                    <span
                      key={tokenIndex}
                      style={{
                        color: tokenColors[token.type] || tokenColors.default,
                      }}
                    >
                      {token.value}
                    </span>
                  ))}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom status bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 'var(--space-2) var(--space-4)',
          borderTop: '1px solid #1f2937',
          background: '#111827',
          fontSize: 'var(--text-xs)',
          color: '#6b7280',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
          <span>{language}</span>
          <span>UTF-8</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
          <span>Ln {lines.length}</span>
          <span>Spaces: 2</span>
        </div>
      </div>
    </div>
  );
};

// Traffic light component
const TrafficLight = ({ color }) => (
  <div
    style={{
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      background: color,
      opacity: 0.9,
    }}
  />
);

export default CodePlayground;
