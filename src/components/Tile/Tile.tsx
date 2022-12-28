import { ListItem } from '@mui/material';
import React from 'react';
import internal from 'stream';
import './tile.css';

interface Props {
    items: { id: number, carName: string, carDesc: string }[];
}

export const Tile = (props: Props) => {
    return (
        <>
        {props.items.map(item =>(
            <div className="tile">
                <h2 className='tileHeader'>{item.carName}</h2>
                <p className='tileDesc'>{item.carDesc}</p>
            </div>
        ))}
        </>
  )
}
