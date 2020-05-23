import React from 'react'
import './BurgerDrawing.css'
import PropTypes from 'prop-types'

const BurgerDrawing = (props) => {
    const breadTop = 
        <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
        </div>
    const BreadBottom = <div className="BreadBottom"></div>
    const ingredientElements = props.ingredients.map((ingredient, index) => <div className={ingredient} key={index}></div>)

    return(
        <div className="Burger">
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
