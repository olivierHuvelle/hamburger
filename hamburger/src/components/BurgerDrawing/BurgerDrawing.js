import React from 'react'
import classes from './BurgerDrawing.module.css'
import PropTypes from 'prop-types'

const BurgerDrawing = (props) => {
    const breadTop = 
        <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
        </div>
    const BreadBottom = <div className={classes.BreadBottom}></div>

    let ingredientElements = props.ingredients.map((ingredient, index) => <div className={classes[ingredient]} key={index}></div>)

    if(ingredientElements.length === 0){
        ingredientElements = <p>Start Composing your burger !</p>
    }
    
    return(
        <div className={classes.Burger}>
            {breadTop}
            {ingredientElements}
            {BreadBottom}
        </div>
    )
}

BurgerDrawing.propTypes = {
    ingredients : PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default BurgerDrawing
