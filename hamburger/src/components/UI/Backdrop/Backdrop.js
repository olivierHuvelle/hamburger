import React from 'react'
import classes from './Backdrop.module.css'

const Backdrop = props => {
    const backdropElement = props.visible ? <div className={classes.Backdrop} onClick={()=>{props.hide(false)}}></div> : null 
    return backdropElement
}

export default Backdrop


//ce serait plus propre de faire une fonction hideModal générale 