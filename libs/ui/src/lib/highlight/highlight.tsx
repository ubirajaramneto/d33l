import styles from './highlight.module.scss';

/* eslint-disable-next-line */
export interface HighlightProps {}

export function Highlight(props: HighlightProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Highlight!</h1>
    </div>
  );
}

export default Highlight;
