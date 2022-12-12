import {useState} from 'react';
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from 'react'
import { useRouter } from "next/router";
import axios from "axios";
import React, { Component } from 'react';
const App = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleClick = async () => {
    setIsLoading(true);

    try {
        const response = await axios.get(`https://api.setre.com/api/SalesRemainingReport?STCode=el0171`);
        const cosmetics = response.data;
    

    //   if (!response.ok) {
    //     throw new Error(`Error! status: ${response.status}`);
    //   }

      const result = await response.data;

      console.log('result is: ', JSON.stringify(result, null, 4));

      setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(data);
  var photo;
  return (

    <div>
      {err && <h2>{err}</h2>}
    <input className={styles.input} placeholder="bknz:el0521"></input>
      <button onClick={handleClick}>Fetch data</button>
      {data && data.map(person => {
        return (
            person.colorDescription==data[0].colorDescription &&
            <img src={person.photo} className={styles.image} alt="" />

        );
      })}

      <div className={styles.debene}>
    <div className={styles.gösterbas}>Renk</div>
    <div className={styles.gösterbas}>Üretim</div>
    <div className={styles.gösterbas}>Satış</div>
    <div className={styles.gösterbas}>Kalan</div>
      {isLoading && <h2>Loading...</h2>}

      {data && data.map(person => {
        return (
            <div key={person.id}>
            <div className={styles.gösterana}><p className={styles.p}>{person.colorDescription}</p></div>
            <div className={styles.gösterana}><p className={styles.p}>{person.satis}+{person.kalan}</p></div>
            <div className={styles.gösterana}><p className={styles.p}>{person.satis}</p></div>
            <div className={styles.gösterana}><p className={styles.p}>{person.kalan}</p></div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default App;