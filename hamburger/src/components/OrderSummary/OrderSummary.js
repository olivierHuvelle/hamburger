import React from 'react'
//import classes from './OrderSummary.module.css'
import Button from '../UI/Button/Button'

const OrderSummary = props => {
    
    const ingredientComponents = props.ingredients.map(ingredient => 
        <li key={ingredient.name}>{ingredient.name.toUpperCase()} : {ingredient.count}</li>)
    
    return( 
        <section> 
            <h2>Votre commande</h2>
            <p>Un burger délicieux avec les ingéredients : </p>
            {ingredientComponents}
            <Button type="Danger" click={()=>{props.cancel(false)}}>Annuler</Button>
            <span>{props.price.toFixed(2)} $</span>
            <Button type="Success" click={()=>{props.purchase()}}>Continuer</Button>
        </section>
    )
}

export default OrderSummary

// faut je