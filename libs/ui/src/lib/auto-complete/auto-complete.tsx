import styles from './auto-complete.module.scss';

/* eslint-disable-next-line */
export interface AutoCompleteProps {}

export function AutoComplete(props: AutoCompleteProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AutoComplete!</h1>
    </div>
  );
}

export default AutoComplete;
