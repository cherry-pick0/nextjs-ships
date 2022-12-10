import ListItem from "./components/ListItem"
import { Ship } from "../../data/Models"


export default function ShipList(props: {items: Ship[]}) {
  return (
    <div className="">
      <main className="">
        {props.items.map(item =><ListItem key={item.id} ship={item}/>)}
      </main>
    </div>
  )
}
