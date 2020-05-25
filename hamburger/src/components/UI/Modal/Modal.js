import React, {useEffect, useRef} from 'react'
import classes from './Modal.module.css'

const Modal = props => {
   
    let modalComponent = null 
    const node = useRef()

    const clickHandle = (e) => {
        if(node.current && node.current.contains(e.target)){
            return
        }
        props.change(false)
    }   

    useEffect(() => {
        document.addEventListener('mousedown', clickHandle)

        return() => {
            document.removeEventListener('mousedown', clickHandle)
        }
    }, [])

    if(props.visible){
        modalComponent = 
            <div className={classes.Modal} ref={node}>
                {props.children}
                <div className={classes.Cross} onClick={()=>{props.change(false)}}>X</div>
            </div>
    }
    return(
        modalComponent
    )
}

export default Modal 