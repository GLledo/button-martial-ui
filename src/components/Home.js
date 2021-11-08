import React from 'react'
import ButtonDev from './ButtonDev'
import './Home.css'

export default function Home() {
    return (
        <div>
            <div>
                <p>{'\u0062'} Button </p>
                <ButtonDev text="<button />" nameButon="Default" variantButton="contained" />  
            </div>
            <div>
                <p>Button variant="outlined"</p>
                <ButtonDev text="<button />" nameButon="Default" variantButton="outlined" colorBg="secondary"/>  
            </div>
            <div>
                <p>Button variant="text"</p>
                <ButtonDev text="<button />" nameButon="Default" variantButton="text" colorBg="secondary"/>  
            </div>
            <div>
                <p>Button startIcon="local_grocery_store"</p>
                <ButtonDev text="<button />" nameButon="Default" variantButton="contained" colorBg="secondary" simplified positionIcon/>  
            </div>
            <div>
                <p>Button endIcon="local_grocery_store"</p>
                <ButtonDev text="<button />" nameButon="Default" variantButton="contained" colorBg="secondary" simplified />  
            </div>
            <div>
                <p>Button size="sm"</p>
                <ButtonDev text="<button />" nameButon="Default" tam="small" variantButton="contained" />  
            </div>
            <div>
                <p>Button size="md"</p>
                <ButtonDev text="<button />" nameButon="Default" tam="medium" variantButton="contained" />  
            </div>
            <div>
                <p>Button size="lg"</p>
                <ButtonDev text="<button />" nameButon="Default" tam="large" variantButton="contained" />  
            </div>
            <div>
                <p>Button </p>
                <ButtonDev text="<button />" nameButon="Default" variantButton="contained" colorBg="danger"/>  
            </div>
            <div>
                <p>Button </p>
                <ButtonDev text="<button />" nameButon="Default" variantButton="contained" />  
            </div>
        </div>
    )
}
