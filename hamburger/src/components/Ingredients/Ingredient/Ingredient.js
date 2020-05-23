import React, {memo} from 'react'
import classes from './Ingredient.module.css'
import PropTypes from 'prop-types'

const Ingredient = props => {
    return(
        <section className={classes.Ingredient}>
            <h3><span>{props.ingredient.name} </span>{props.ingredient.price} $</h3>
            <div className={classes.IngredientCount}> 
                <button onClick={()=>{props.change(props.ingredient.name, 'down')}} disabled={props.ingredient.count === 0 ? true : false}>-</button>
                <span>{props.ingredient.count}</span>
                <button onClick={()=>{props.change(props.ingredient.name, 'up')}}>+</button>
            </div>
            <div className={classes.IngredientPrice}>{props.ingredient.priceTotal.toFixed(2)} $</div>
        </section>
    )
}

Ingredient.propTypes = {
    change : PropTypes.func,
    ingredient : PropTypes.shape({
        name : PropTypes.string.isRequired, 
        price : PropTypes.number.isRequired, 
        count : PropTypes.number.isRequired, 
        priceTotal : PropTypes.number.isRequired,
    })
}

export default memo(Ingredient)