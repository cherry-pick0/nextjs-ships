
import Link from 'next/link';
import styles from '../../../styles/ShipList.module.css';

export default function Button(props: { shipId: string }) {
    var arrow_right_svg = "icon_arrow_right.svg"

    return (
        <Link href={`/ship/${props.shipId}`}>
            <div className={styles.button_circle}>
                <i className={styles.arrow_right} style={{ backgroundImage: `url(${arrow_right_svg})` }}></i>
            </div>
        </Link>
    )
}
