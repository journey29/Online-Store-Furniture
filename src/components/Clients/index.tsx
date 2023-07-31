import React from 'react'
import { ClientsList } from './ClientsList'

export const Clients: React.FC = () => {
    return (
        <div className='clients'>
            <div className="container">
                <h3 className='clients__title'>Client Section</h3>
                <ClientsList />
            </div>
        </div>
    )
}

