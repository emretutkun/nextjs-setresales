/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import React from "react";
const App = () => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const [title, setTitle] = useState("");
  var name;
  const submitContact = async (event: any) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://api.setre.com/api/SalesRemainingReport?STCode=${title}`
      );
      const cosmetics = response.data;
      const result = await response.data;
      console.log("result is: ", JSON.stringify(result, null, 4));
      setData(result);
    } catch (err) {
      // alert(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(data);
  var photo;
  return (
    <div>
      {err && <h2>{err}</h2>}
      <div className={styles.main}>
        <img className={styles.logon} src="/logonw.jpg" alt="/logo.jpg" />
        <div>
          <input
            className={styles.input}
            id="name"
            placeholder="bknz:el0521"
            name="name"
            type="text"
            onChange={(event) => setTitle(event.target.value)}
            required
          />
          <button
            className={styles.button}
            placeholder="bknz:el0521"
            onClick={submitContact}
          >
            ARA
          </button>
        </div>
        

        {isLoading && 
          <img src="/Loading.gif" className={styles.limage} alt="" />
        }<br></br>
        {data &&
          data.map((person: any) => {
            return (
              person.colorDescription == data[0].colorDescription && (
                <img src={person.photo} className={styles.image} alt="" />
              )
            );
          })}
        <br></br>
      </div>

      <div className={styles.debene}>
        <div className={styles.gösterbas}>Renk</div>
        <div className={styles.gösterbas}>Üretim</div>
        <div className={styles.gösterbas}>Satış</div>
        <div className={styles.gösterbas}>Kalan</div>

        {data &&
          data.map((person: any) => {
            return (
              <div key={person.colorDescription}>
                <div className={styles.gösterana}>
                  <p className={styles.p}>{person.colorDescription}</p>
                </div>
                <div className={styles.gösterana}>
                  <p className={styles.p}>{person.itemCode}</p>
                </div>
                <div className={styles.gösterana}>
                  <p className={styles.p}>{person.satis}</p>
                </div>
                <div className={styles.gösterana}>
                  <p className={styles.p}>{person.kalan}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
