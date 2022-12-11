import styles from "../../../styles/ShipDetails.module.css"
import { Mission } from "../../../data/Models";

const MissionList = (props: { missions: Mission[] }) => {
    return (
        <div className={styles.mission_list_item_container}>
            <div className={styles.info_title_container}>
                <div className={styles.info_title}>Missions</div>
                <div className={styles.info_arrow}></div>
            </div>

            {props.missions.map(mission =>
                <div key={mission.name} className={styles.mission_container}>
                    <div className={styles.mission_name}>{mission.name}</div>
                    <div className={styles.mission_flight}>Flight: {mission.flight}</div>
                </div>
            )}
        </div>
    )
}

export default MissionList;
