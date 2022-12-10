import ListItem from "./components/ListItem"
import { Ship } from "../../data/Models"
import styles from '../../styles/ShipList.module.css'


export default function ShipList(props: {items: Ship[]}) {
  return (
    <div className={styles.ship_list}>
      <main className="">
        <div className={styles.ship_list_title}>Collections</div>
        {props.items.map(item =><ListItem key={item.id} ship={item}/>)}
      </main>
    </div>
  )
}
