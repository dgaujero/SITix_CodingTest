import React, { useEffect, useState } from 'react';
import { TicketData } from '../../ticket.model';

import Promo from '../Promo/Promo';
// import Team from '../Team/Team';
import './Tickets.css';

const Tickets: React.FC = () => {

    const [data, setData] = useState<TicketData[]>([]);

    const [sort, setSortBy] = useState<string>('name');

    const toggleMe = (val: string) => {
        setSortBy(val);
    }


    console.log(data)

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            async: true,
            crossDomain: true,
            headers:
            {
                "x-rapidapi-host": "free-nba.p.rapidapi.com",
                "x-rapidapi-key": "e5d8563997mshcfb030c802400d3p1ec262jsn6864acf2d34a"
            },
        };

        fetch("https://free-nba.p.rapidapi.com/teams?page=0", requestOptions)
            .then(response => response.json())
            .then(ticketData => setData(ticketData.data))
    }, [])


    return (
        <div className='container'>

            <div className='promoMobile'>
                <Promo />
            </div>

            <div className='ticketsContainer'>

                <div className='buttons'>
                    <button onClick={() => toggleMe('name')}>By Name</button>
                    <button onClick={() => toggleMe('price')}>By Price</button>
                </div>

                <div className='ticketsData'>
                    {/* <p>Ticket Data</p> */}

                    {sort === 'name' && data.map(ticket => (
                        <div >

                            <li key={ticket.name} className='ticket'>

                                <div>
                                    <p>{ticket.city} {ticket.name}</p>
                                </div>

                                <div>
                                    <p>from $price</p>
                                </div>

                            </li>

                            <hr />
                        </div>

                    ))}

                    {sort === 'price' && data.map(ticket => (
                        <div >

                            <li key={ticket.name} className='ticket'>

                                <div>
                                    <p>{ticket.city} {ticket.name}</p>
                                </div>

                                <div>
                                    <p>from $$price</p>
                                </div>

                            </li>

                            <hr />
                        </div>

                    ))}

                </div>

            </div>


            <div className='promo'>
                <Promo />
            </div>

        </div>
    )
}

export default Tickets