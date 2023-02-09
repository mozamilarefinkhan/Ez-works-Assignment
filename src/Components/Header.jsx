import React, { useState } from 'react'
import "./Header.css"

const Header = ({ client }) => {
    const [domain, extendDomain] = useState(false)
    return (
        <div className='main-header'>
            <div className='main-section'>
                <div className="section1">
                    <div className='main-heading'>
                        <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                        <h2>{client.name}</h2>
                    </div>
                    <button>Edit</button>
                </div>
                <div className="section2">
                    <div className="company">
                        <h3>Company Code</h3>
                        <p>{client.code || "CODE"}</p><br />
                        <h3>Company Logo</h3>
                        <p>{client.logo || "Unavailable"}</p>
                    </div>
                    <div className="domains">
                        <h3>Domains</h3>
                        {
                            client.domains && client.domains.map((domain, index) => (
                                index < 3 && <p key={index}>{domain}</p>
                            ))
                        }
                        {!domain ? <p className='extend-domain' onClick={() => extendDomain(!domain)}>+{client.domains.length - 3} others</p> :
                            client.domains.length > 3 && client.domains.map((domain, index) => (
                                index >= 3 && <p>{domain}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header