
import Link from 'next/link';

export default function Button(props: {shipId: string}) {
    return (
        <div className="">
            <main className="">
                 <Link href={`/ship/${props.shipId}`}>link do {props.shipId}</Link>
            </main>
        </div>
    )
}
