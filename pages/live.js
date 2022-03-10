import React from "react";
import styles from "../styles/Live.module.css";
import { useState, useEffect } from "react";

export default function Live() {
    const [search, setSearch] = useState('')
    const [users, setUser] = useState([])
    const [result, setResult] = useState([])

    useEffect(async () => {
        const res = await fetch('https://randomuser.me/api?results=50')
        console.log(res)
        const { results } = await res.json()
        console.log(result)
        setResult(results)
    },[])

    const userSearch = (value) => {
        const list = document.getElementsByTagName('li')
        console.log("list",list)
        Array.from(list).forEach(li => {
            // console.log(li)
            if (li.innerText.toLowerCase().includes(value.toLowerCase())) {
                li.style.display = "flex"
            } else {
                li.style.display = "none"
            }
        })
    }

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "calc(100vh - 160px)",
            }}
        >
            <div className={styles.container}>
                <header className={styles.header}>
                    <h4 className={styles.title}>Live User Filter</h4>
                    <small className={styles.subtitle}>
                        Search By Name and/or location
                    </small>
                    <input type="text" onInput={(e)=>{userSearch(e.target.value)}} id="filter" placeholder="Search" />
                </header>
                <ul className={styles.userlist} id="result">
                    { result.length > 0 ?
                        result.map( user => 
                            // ul.appendChild(li)
                            // console.log(user)
                            (<li>
                              <img src={user.picture.large} alt={user.name.first} />
                              <div className={styles.userinfo}>
                                  <h4>{user.name.first} {user.name.last}</h4>
                                  <p>{user.location.city}, {user.location.country}</p>
                              </div>
                              </li>  
                            )
                        ): <li>Loading...</li>}
                </ul>
            </div>
        </div>
    );
}