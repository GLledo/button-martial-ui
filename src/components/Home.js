import React from 'react'
import ButtonDev from './ButtonDev'

export default function Home() {
    return (
        <div>
            <div>
                <p>{'\u0062'} Button  & </p>
                <ButtonDev text="<button />" nameButon="Default" variantButton="contained" />  
            </div>
        </div>
    )
}
