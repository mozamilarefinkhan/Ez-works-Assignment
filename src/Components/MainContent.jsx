import React, { useState } from 'react'
import "./MainContent.css"

const MainContent = ({ client }) => {
    const [activeNav, setActiveNav] = useState({ entities: true });
    const [activeEntity, setActiveEntity] = useState(1);
    const activateEntity = (id) => {
        if (activeEntity === id) setActiveEntity("");
        else setActiveEntity(id);
    }
    return (
        <div className='content-division'>
            <nav>
                <ul>
                    <li className={`${activeNav.entities && "active"}`} onClick={() => setActiveNav({ entities: true })}>ENTITIES</li>
                    <li className={`${activeNav.invoice && "active"}`} onClick={() => setActiveNav({ invoice: true })}>INVOICE CODES</li>
                    <li className={`${activeNav.users && "active"}`} onClick={() => setActiveNav({ users: true })}>USERS</li>
                </ul>
            </nav>
            <div className='main-content'>
                {
                    activeNav.entities &&
                    <div className='client_entities'>
                        <div className='content_heading'>
                            <h2>{client.entities.length} Entities</h2>
                            <i className="fa-sharp fa-solid fa-square-plus"></i>
                        </div>
                        <table>
                            <thead className='table_heading'>
                                <th>Billing Location</th>
                                <th>Entity Name</th>
                                <th>Entity Code</th>
                                <th>MSLA valid through</th>
                                <th>External</th>
                            </thead>
                            <tbody>
                                {
                                    client.entities.map((entity, index) => (
                                        <>
                                            <tr className='table_collection' key={index}>
                                                <td>{entity.billing_location}</td>
                                                <td>{entity.entity_name}</td>
                                                <td>{entity.entity_code}</td>
                                                <td>{entity.MSLA_valid}</td>
                                                <td>{entity.file_sharing}</td>
                                                <i className={activeEntity === entity.entity_id ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"} onClick={() => activateEntity(entity.entity_id)}></i>
                                            </tr>
                                            {activeEntity === entity.entity_id && <td className='table_details' colSpan='6'>
                                                <table><tbody>
                                                    <tr>
                                                        <td>
                                                            <h2>Address</h2>
                                                            {entity.address.map((address, index) => (<p key={index}>{address}</p>))}
                                                        </td>
                                                        <td key={index}>
                                                            <h2>Company Registration Number</h2>
                                                            <p>{entity.company_reg_number}</p><br />
                                                            <h2>Company Registration Validity</h2>
                                                            <p>{entity.company_reg_validity}</p>
                                                        </td>
                                                        <td key={index}>
                                                            <h2>TAX Registration Number</h2>
                                                            <p>{entity.TAX_reg_number}</p><br />
                                                            <h2>TRN Validity</h2>
                                                            <p>{entity.TRN_validity}</p>
                                                        </td>
                                                        <i className="fa-solid fa-pen-to-square"></i>
                                                    </tr>
                                                    <tr key={index}>
                                                        <td>
                                                            <h2>Charge Code / PO Number</h2>
                                                            <p>{entity.charge_code}</p>
                                                        </td>
                                                        <td key={index}>
                                                            <h2>Duration of File Storage</h2>
                                                            <p>{entity.duration_of_storage}</p>
                                                        </td>
                                                        <td key={index}>
                                                            <h2>Currency</h2>
                                                            <p>{entity.currency}</p>
                                                        </td>
                                                    </tr>
                                                    <tr key={index}>
                                                        <td colSpan='2' >
                                                            <h2>MSLA</h2>
                                                            <div style={{ display: "flex", alignItems: "center" }}>

                                                                <p>{entity.MSLA}</p>
                                                                <span style={{ marginLeft: "10px", fontSize: "1rem", fontWeight: "bolder", marginBottom: "1rem" }}><i className="fa fa-eye" aria-hidden="true"></i></span>
                                                                <span className="download_icon">
                                                                    <i className="fa fa-download" aria-hidden="true"></i>
                                                                </span>
                                                            </div>



                                                        </td>
                                                        <td>
                                                            <h2>VAT+WHT</h2>
                                                            <p>{entity.vat + "+" + entity.wht}</p>
                                                        </td>
                                                    </tr>
                                                </tbody></table>
                                                <h2>Corporte price as per MSLA</h2>
                                                <table className='corporate_details'>
                                                    <thead className='table_heading'>
                                                        <th>Service</th>
                                                        <th>Units</th>
                                                        <th>List Price</th>
                                                        <th>Offered Price</th>
                                                        <th>Discount</th>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            entity.corporate_price_per_MSLA.map((corporate, index) => {
                                                                return <tr className='table_collection corporate_collection_details' key={index}>
                                                                    <td>{corporate.service}:{corporate.EZ_assured ? "EZ Assured" : null}</td>
                                                                    <td>{corporate.units}</td>
                                                                    <td>{corporate.list_price} AED</td>
                                                                    <td>{corporate.Offered_price} AED</td>
                                                                    <td>{corporate.discount}</td>
                                                                </tr>
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </td>
                                            }
                                        </>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        </div>
    )
}

export default MainContent