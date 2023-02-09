import React, { useState } from 'react'
import "./ClientContent.css"
import { data } from '../data';

const ClientContent = ({ setClient, selectClient }) => {
    const [ascending, setAscending] = useState(true);
    const [active, setActive] = useState("");
    const handleClick = (client) => {
        setActive(client.id);
        setClient(client);
        selectClient(true);
    }
    return (
        <div className='client_content'>
            <div className='client_header'>
                <header className='client_heading_section'>
                    <div className='heading'>
                        <h1>Clients</h1>
                        <i className={`${ascending ? "fa-solid fa-arrow-up-short-wide" : "fa-solid fa-arrow-up-wide-short"}`} onClick={() => setAscending(!ascending)}></i>
                        <p>Creation Time</p>
                    </div>
                    <i className="fa-sharp fa-solid fa-square-plus"></i>
                </header>
            </div>
            <div className='clients_search_bar'>
                <div className='search_bar'>
                    <input className='search_input' placeholder='Company, Entity, User, Domain, Service, Location' />
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
            <select>
                {
                    data.map((client, index) => {
                        return (
                            <option key={index}>{client.reg_date}</option>
                        )
                    })
                }
            </select>
            <div>
                {
                    data.map((client, index) => (
                        <div className={`client-head ${active === client.id && "client-head-active"}`} onClick={() => handleClick(client)} key={index}>
                            <div className={`client-title ${active === client.id && "client-title-active"}`}>
                                <p>{client.name || "Company Name"}</p>
                                <p>{client.code || "CODE"}</p>
                            </div>
                            <div className={`client-counts ${active === client.id && "client-counts-active"}`}>
                                <p>{client.entities.length} Entities</p>
                                <p>{client.user.length} Users</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ClientContent