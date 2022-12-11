
import Link from 'next/link';
import styles from '../../../styles/ShipDetails.module.css';

export default function Button() {
    var arrow_left_svg = "../icon_arrow_left.svg"

    return (
        <Link href="/">
            <div className={styles.button_circle}>
                <i className={styles.arrow_left} style={{ backgroundImage: `url(${arrow_left_svg})` }}></i>
            </div>
        </Link>
    )
}
