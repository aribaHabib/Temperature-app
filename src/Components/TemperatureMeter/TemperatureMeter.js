import React, { useState } from 'react'
import './TemperatureMeter.css'

const TemperatureMeter = () => {
    const [prev, setPrev] = useState(10)
    const [color, setColor] = useState()
  
    const increaseTemperature = () => {
        const temperature = prev + 1;
        setPrev(temperature);
        if (prev < 15) {
            setColor('#035aa6');
        }
        else if(prev < 30)
        {
            setColor('rgb(221, 127, 11)');
        }
        else{
            setColor('rgb(184, 26, 26)');
        }
       }
     const decreaseTemperature = () => {
         if(prev > 0) {
            const temperature = prev - 1;
            setPrev(temperature);
            if (prev <= 15) {
                setColor('#035aa6');
            }
            else if(prev <= 30)
            {
                setColor('rgb(221, 127, 11)');
            }
            else{
                setColor('rgb(184, 26, 26)');
            }
         }
         return 0
       }

  return (
    <>
    <div className='root'>
        <div className='app'>
            <p className='circle' style={{background: `${color}`}}>{prev}°C</p>
        </div>
        <div className='button'>
            <button  onClick={increaseTemperature}>+</button>
            <button onClick={decreaseTemperature}>-</button>
        </div>
    </div>
    </>
  )
}

export default TemperatureMeter;
