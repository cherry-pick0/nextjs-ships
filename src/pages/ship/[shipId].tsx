import styles from '../../styles/Home.module.css'
import Header from '../../modules/common/Header';
import Footer from '../../modules/common/Footer';
import Loader from '../../modules/common/Loader';
import { ShipItemDetails } from '../../data/Models';
import React, { useState, useEffect } from 'react';


export async function getServerSideProps(context: { params: { shipId: string } }) {
    return {
        props: { shipId: context.params.shipId }
    }
}

const ShipDetails = (props: { shipId: string }) => {
    const [data, setData]: [(ShipItemDetails | any), any] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:3000/api/ships/' + props.shipId)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, []);

    if (isLoading || !data) return <Loader />

    return <div className={styles.container}>
        <Header />
        <main className={styles.main}>
            <div>{data.__typename}</div>
            <div>{data.home_port}</div>
            <div>{data.type}</div>
            <div>{data.weight_kg}</div>
        </main>
        <Footer />
    </div>;
}
export default ShipDetails;