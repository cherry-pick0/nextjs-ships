import styles from '../../styles/Home.module.css'
import Header from '../../modules/common/Header';
import Footer from '../../modules/common/Footer';
import Loader from '../../modules/common/Loader';
import { Ship } from '../../data/Models';
import React, { useState, useEffect } from 'react';
import ShipDetails from '../../modules/details/ShipDetails';


export async function getServerSideProps(context: { params: { shipId: string } }) {
    return {
        props: { shipId: context.params.shipId }
    }
}

const ShipPage = (props: { shipId: string }) => {
    const [data, setData]: [(Ship | any), any] = useState(null)
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
        <ShipDetails ship={data}/>
        <Footer />
    </div>;
}
export default ShipPage;