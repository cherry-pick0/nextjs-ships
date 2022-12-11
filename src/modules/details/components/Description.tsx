import styles from "../../../styles/ShipDetails.module.css"
import Button from "./Button";

const Description = (props: { image: string, title: string, subtitle: string }) => {


    var image = props.image ? props.image : "../placeholder-image.jpg";

    return (
        <div className={styles.main_description}>
            <div style={{ backgroundImage: `url(${image})` }}
                className={styles.main_description_image}>
            </div>
            <div className={styles.main_description_description}>
                <div className={styles.main_description_description_titles}>
                    <div className={styles.main_description_title}>{props.title}</div>
                    <div className={styles.main_description_subtitle}>{props.subtitle}</div>
                </div>
            </div>
            <div className={styles.main_description_description_link}>
                <Button />
            </div>
        </div>
    )
}

export default Description;
