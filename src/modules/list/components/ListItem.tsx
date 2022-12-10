import Button from "./Button";
import { Ship } from "../../../data/Models";

export default function ListItem(props: {ship: Ship}) {
    return (
        <div className="">
            <main className="">
                <div>{props.ship.name}</div>
                <Button shipId={props.ship.id} />
            </main>
        </div>
    )
}
