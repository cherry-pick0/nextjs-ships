import styles from '../../styles/Loader.module.css';

export default function Loader() {
    return (
        <div className={styles.loader_container}>
            <div className={styles.lds_roller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}
