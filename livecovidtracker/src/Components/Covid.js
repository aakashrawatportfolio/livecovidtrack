import React, { useEffect, useState } from 'react'
import './Covid.css';
const Covid = () => {
const[data,setData] =useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualdata = await res.json();
            console.log(actualdata.statewise[0])
            setData(actualdata.statewise[0])
        } catch (err) {
            console.log(err);
        }

    }
    useEffect(() => {
         getCovidData();
    }, []);
    return (
        <>
            <section>
           
                <h1 >LIVE SERVER </h1>
                <h2>COVID-19 CORONAVIRUS TRACKER</h2>
                <ul>
                    <li className='card'>
                        <div className="card_main">
                            <div className='card_liner'>
                                <p className='card_name'>OUR<span>COUNTRY</span>
                                </p>
                                <p className="card_total card_small">INDIA</p>
                            </div>
                        </div >

                    </li>
                    
                    <li className='card'>
                        <div className="card_main">
                            <div className='card_liner'>
                                <p className='card_name'>Total<span>RECOVERED</span>
                                </p>
                                <p className="card_total card_small">{data.recovered}</p>
                            </div>
                        </div >

                    </li>
                    <li className='card'>
                        <div className="card_main">
                            <div className='card_liner'>
                                <p className='card_name'>Total<span>CONFIRMED</span>
                                </p>
                                <p className="card_total card_small">{data.confirmed}</p>
                            </div>
                        </div >

                    </li>
                    <li className='card'>
                        <div className="card_main">
                            <div className='card_liner'>
                                <p className='card_name'>Total<span>DEATHS</span>
                                </p>
                                <p className="card_total card_small">{data.deaths}</p>
                            </div>
                        </div >

                    </li>
                    <li className='card'>
                        <div className="card_main">
                            <div className='card_liner'>
                                <p className='card_name'>Total<span>ACTIVE</span>
                                </p>
                                <p className="card_total card_small">{data.active}</p>
                            </div>
                        </div >

                    </li>
                    <li className='card'>
                        <div className="card_main">
                            <div className='card_liner'>
                                <p className='card_name'>Last<span>UPDATE</span>
                                </p>
                                <p className="card_total card_small">{data.lastupdatedtime}</p>
                            </div>
                        </div >

                    </li>
                </ul>
            </section>
        </>
    )
}

export default Covid
