import styles from './highlight.module.scss';

/* eslint-disable-next-line */
export interface HighlightProps {
  term: string;
  text: string;
}

export function Highlight({ term, text }: HighlightProps) {
  if (!term) {
    return <span>{text}</span>;
  }
  const regex = new RegExp(`(${term})`, 'gi');
  const sections = text.split(regex);
  return (
    <span>
      {sections
        .filter((part) => part)
        .map((part, i) =>
          regex.test(part) ? (
            <mark key={i}>{part}</mark>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
    </span>
  );
}

export default Highlight;
