import styles from '../styles/Home.module.css'
import Header from '../modules/common/Header';
import Footer from '../modules/common/Footer';
import ShipList from '../modules/list/ShipList';
import { Ship } from '../data/Models';
import React, { useState, useEffect } from 'react';
import Loader from '../modules/common/Loader';


export default function Home() {

  const [data, setData]: [(Ship[] | any), any] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
      setLoading(true)
      fetch('http://localhost:3000/api/ships')
          .then((res) => res.json())
          .then((data) => {
              setData(data)
              setLoading(false)
          })
  }, []);

  if (isLoading || !data) return <Loader/>

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <ShipList items={data}/>
      </main>
      <Footer />
    </div>
  )
}
