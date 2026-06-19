import { useEffect, useMemo, useState } from "react";

export default function TypingText({ words }) {
  const safeWords = useMemo(() => words.filter(Boolean), [words]);
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!safeWords.length) return undefined;

    const current = safeWords[wordIndex];
    const atEnd = letterIndex === current.length;
    const atStart = letterIndex === 0;
    const delay = deleting ? 42 : atEnd ? 1300 : 80;

    const timer = window.setTimeout(() => {
      if (!deleting && atEnd) {
        setDeleting(true);
        return;
      }

      if (deleting && atStart) {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % safeWords.length);
        return;
      }

      setLetterIndex((count) => count + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, letterIndex, safeWords, wordIndex]);

  return (
    <span className="typing-text" aria-label={safeWords[wordIndex]}>
      {safeWords[wordIndex]?.slice(0, letterIndex)}
      <span className="typing-caret" aria-hidden="true" />
    </span>
  );
}
