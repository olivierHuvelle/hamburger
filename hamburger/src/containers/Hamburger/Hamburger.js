import React, {Component} from 'react'
import Ingredients from '../../components/Ingredients/Ingredients'
import BurgerDrawing from '../../components/BurgerDrawing/BurgerDrawing'


class Hamburger extends Component
{
    state = {
        ingredients : [
            {name : 'Salad', price : 0.5, count : 0, priceTotal : 0}, 
            {name : 'Bacon', price : 2.5, count : 0, priceTotal : 0}, 
            {name : 'Cheese', price : 1.5, count : 0, priceTotal : 0},
            {name : 'Meat', price : 1.2, count : 0, priceTotal : 0},
        ], 
        price : 0, 
        composition : [],
    }
    
    ingredientHandler = (ingredientName, direction) => {
        const updatedState = [...this.state.ingredients]
        const ingredient = updatedState[updatedState.findIndex(ingredient => ingredient.name === ingredientName)]
        if(ingredient.count === 0 && direction === 'down')
        {
            return
        }
        else if(direction !== 'up' && direction !== 'down')
        {
            return
        }
        else 
        {
            this.udpateIngredients(updatedState, ingredient, direction) 
            this.updatePrice() 
            this.updateComposition(ingredient.name, direction)
        }
    }

    udpateIngredients = (updatedState, ingredient, direction) => {
        ingredient.count = direction === 'down' ? ingredient.count - 1 : ingredient.count + 1 //update the count
        ingredient.priceTotal = ingredient.count * ingredient.price //update priceTotal
        this.setState({ ingredients : updatedState})
    }

    updatePrice = () => {
        const updatedState = [...this.state.ingredients] // we could use the prevState but works quiet = 
        this.setState({ price : updatedState.reduce((acc, current) => acc + current.priceTotal, 0)})
    }

    updateComposition = (ingredientName, direction) => {
        const updatedState = [...this.state.composition]
        direction === 'up' ? updatedState.push(ingredientName) : updatedState.splice(updatedState.lastIndexOf(ingredientName),1)
        this.setState({ composition : updatedState})
    }

    render() 
    {
        return(
            <section className="Hamburger">
                <h2>Votre hamburger</h2>
                <p>Prix total : {this.state.price.toFixed(2)} $</p>
                <BurgerDrawing ingredients={this.state.composition}/>
                <Ingredients ingredients={this.state.ingredients} change={this.ingredientHandler.bind(this)}/>
            </section>
        )
    }
}

export default Hamburger 

