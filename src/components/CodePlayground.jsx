import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Terminal } from 'lucide-react';

// Syntax highlighting token types and their colors
const tokenColors = {
  keyword: 'var(--token-keyword)',
  string: 'var(--token-string)',
  number: 'var(--token-number)',
  comment: 'var(--token-comment)',
  function: 'var(--token-function)',
  property: 'var(--token-property)',
  operator: 'var(--token-operator)',
  punctuation: 'var(--token-punctuation)',
  type: 'var(--token-property)',
  default: 'var(--token-default)',
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
        background: 'var(--bg-elevated)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-sm)',
        lineHeight: '1.7',
        height: height,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'var(--shadow-lg)',
      }}
    >
      {/* Window Chrome */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 'var(--space-3) var(--space-4)',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'var(--bg-secondary)',
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
            background: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          <Terminal size={12} style={{ color: 'var(--text-tertiary)' }} />
          <span
            style={{
              color: 'var(--text-secondary)',
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
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-sm)',
            cursor: 'pointer',
            color: copied ? 'var(--primary)' : 'var(--text-tertiary)',
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
                      ? 'var(--bg-surface-interactive)'
                      : 'transparent',
                  transition: 'background 0.15s ease',
                }}
              >
                {/* Line number */}
                {showLineNumbers && (
                  <td
                    style={{
                      userSelect: 'none',
                      color: 'var(--text-muted)',
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
                    color: 'var(--text-primary)',
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
          borderTop: '1px solid var(--border-subtle)',
          background: 'var(--bg-secondary)',
          fontSize: 'var(--text-xs)',
          color: 'var(--text-tertiary)',
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
