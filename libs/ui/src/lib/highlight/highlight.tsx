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
  // First we need to split the string based on the search term
  const sections = text.split(regex);

  // After we have all the sections of the string in an array,
  // if the section is equal to the term, wrap it with the mark tag, if not, return a normal span tag
  return (
    <span>
      {sections
        .filter((section) => section)
        .map((section, i) =>
          regex.test(section) ? (
            <mark key={i}>{section}</mark>
          ) : (
            <span key={i}>{section}</span>
          )
        )}
    </span>
  );
}

export default Highlight;
