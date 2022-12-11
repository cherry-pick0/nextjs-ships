import styles from "../../../styles/ShipDetails.module.css"
import { Mission } from "../../../data/Models";

const BasicInfo = (props: { year: number, weight: number, port: string, class: number }) => {
    return (
        <div className={styles.basic_info_container}>
            <main>
                <div>
                    <div className={styles.info_title_container}>
                        <div className={styles.info_title}>Basic info</div>
                        <div className={styles.info_arrow}></div>
                    </div>
                </div>

                <div className={styles.basic_info_card_container}>
                    <div className={styles.basic_info_card}>
                        <div className={styles.basic_info_card_title}>Year built</div>
                        <div className={styles.basic_info_card_subtitle}>{props.year}</div>
                    </div>
                </div>

                <div className={styles.basic_info_card_container}>
                    <div className={styles.basic_info_card}>
                        <div className={styles.basic_info_card_title}>Weight</div>
                        <div className={styles.basic_info_card_subtitle}>{props.weight} kg</div>
                    </div>
                </div>

                <div className={styles.basic_info_card_container}>
                    <div className={styles.basic_info_card}>
                        <div className={styles.basic_info_card_title}>Class</div>
                        <div className={styles.basic_info_card_subtitle}>{props.class}</div>
                    </div>
                </div>

                <div className={styles.basic_info_card_container}>
                    <div className={styles.basic_info_card}>
                        <div className={styles.basic_info_card_title}>Home port</div>
                        <div className={styles.basic_info_card_subtitle}>{props.port}</div>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default BasicInfo;
