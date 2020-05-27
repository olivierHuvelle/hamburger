//general Imports (Settings)
import React , {memo} from 'react'
import classes from './Modal.module.css'

//import Specific components 
import Backdrop from '../Backdrop/Backdrop'

//Hoc imports 
import Aux from '../../../hoc/Aux'

//ce modal je devrais avoir un state local pour implémenter la croix 
const Modal = props => {
   
    const modalComponent = !props.visible ? null : 
        <Aux>
            <div className={classes.Modal}>
                {props.children}
                <div className={classes.Cross} onClick={()=>{props.change(false)}}>X</div>
            </div>
            <Backdrop visible={props.visible} hide={props.change}/>
        </Aux>

    return(
        modalComponent
    )
}

export default memo(Modal) 

//donc là clairement c'est une bonne pratique je trouve pour le should component update 
//Donc dans un second temps je vais reprendre son code de Modal et le paste tout simplement 
