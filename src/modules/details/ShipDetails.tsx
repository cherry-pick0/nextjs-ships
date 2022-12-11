import { Ship, Mission } from '../../data/Models';
import styles from "../../styles/ShipDetails.module.css"
import Description from "./components/Description";
import BasicInfo from './components/BasicInfo';
import MissionList from "./components/Missions";
import Button from './components/Button';


const ShipDetails = (props: { ship: Ship }) => {
    return (
        <div className={styles.ship_details_container}>
            <main>
                <Description image={props.ship.image} title={props.ship.name} subtitle={props.ship.type} />
                <BasicInfo  year={props.ship.year_built}
                            weight={props.ship.weight_kg}
                            class={props.ship.class}
                            port={props.ship.home_port} />
                <MissionList missions={props.ship.missions}/>
            </main>

            <div className={styles.back_container}>
                <Button />
                <div className={styles.back_container_text}>Back to the list</div>
            </div>
        </div>
    )
}

export default ShipDetails;