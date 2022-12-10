import Button from "./Button";
import { Ship } from "../../../data/Models";
import styles from '../../../styles/ShipList.module.css'

export default function ListItem(props: { ship: Ship }) {

    var image = props.ship.image ? props.ship.image : "placeholder-image.jpg";

    return (
        <div className={styles.list_card}>
            <div style={{ backgroundImage: `url(${image})` }}
                className={styles.list_card_image}></div>
            <div className={styles.list_card_description}>
                <div className={styles.list_card_description_titles}>
                    <div className={styles.list_card_title}>{props.ship.name}</div>
                    <div className={styles.list_card_subtitle}>{props.ship.type}</div>
                </div>
                <div className={styles.list_card_description_link}>
                    <Button shipId={props.ship.id} />
                </div>
            </div>
        </div>
    )
}
