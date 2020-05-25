import React from 'react'
import classes from './OrderSummary.module.css'

const OrderSummary = props => {
    
    const ingredientComponents = props.ingredients.map(ingredient => 
        <li key={ingredient.name}>{ingredient.name.toUpperCase()} : {ingredient.count}</li>)
    
    return( 
        <section> 
            <h2>Votre commande</h2>
            <p>Un burger délicieux avec les ingéredients : </p>
            {ingredientComponents}
            <button>Continuer l'achat</button>
        </section>
    )
}

export default OrderSummary