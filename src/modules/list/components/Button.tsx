
import Link from 'next/link';
import styles from '../../../styles/ShipList.module.css';

export default function Button(props: { shipId: string }) {
    return (
        <div className={styles.button_circle}>
            <Link href={`/ship/${props.shipId}`}><i> &#10140;</i></Link>
        </div>
    )
}
