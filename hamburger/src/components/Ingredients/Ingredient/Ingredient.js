import React, {memo} from 'react'
import './Ingredient.css'
import PropTypes from 'prop-types'

const Ingredient = props => {
    return(
        <section className="Ingredient">
            <h3>{props.ingredient.name} --- {props.ingredient.price} $</h3>
            <div> 
                <button onClick={()=>{props.change(props.ingredient.name, 'down')}}>-</button>
                <span>{props.ingredient.count}</span>
                <button onClick={()=>{props.change(props.ingredient.name, 'up')}}>+</button>
            </div>
            <div>{props.ingredient.priceTotal}</div>
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