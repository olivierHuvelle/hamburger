import React, {Component} from 'react'
import orderInstance from '../../axios-orders'
import Ingredients from '../../components/Ingredients/Ingredients'
import BurgerDrawing from '../../components/BurgerDrawing/BurgerDrawing'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'

/*
    Faut se faire aussi des règles au niveau des imports sinon devient un gros bordel je trouve 
*/

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
        purchasable : false,
        purchasing : false,
        loading : false, 
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
            this.udpatePurchasable()
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

    udpatePurchasable = () => {
        this.setState( prevState => ( {purchasable : prevState.price !== 0 ? true : false }))
    }

    purchaseHandler = () => {
        this.setState({ purchasing : true }) 
    }

    modalHandle = (show) => { //revoir le nom dans un second temps 
        this.state.purchasable && show ? this.setState({purchasing : true}) : this.setState({purchasing : false})
    }

    continuePuchase = () => {
        this.setState({loading : true})
        const order = {
            customer : {
                name : 'Olivier Huvelle', 
                address : {
                    street : 'Test street', 
                    zipCode : '415254', 
                    country : 'Belgium', 
                }, 
                email : 'test@test.be'
            }, 
            bill : this.state.price,
            command : this.state.ingredients.map(ingredient => ({name : ingredient.name, count : ingredient.count})) 
        }
        orderInstance.post('/orders.json', order)
            .then(response => this.setState({loading : false, purchasing : false}))
            .catch(error => {
                this.setState({loading : false, purchasing : false})
                console.error(error)
            })
    }

    render() 
    {
        const orderSummaryComponent = this.state.loading ? <Spinner/> : 
            <OrderSummary 
                ingredients={this.state.ingredients} 
                cancel={this.modalHandle} 
                price={this.state.price} 
                purchase={this.continuePuchase.bind(this)}
            />
        
        return(
            <section className="Hamburger">
                <Modal visible={this.state.purchasing} change={this.modalHandle} >
                   {orderSummaryComponent}
                </Modal>
                <h2>Votre hamburger</h2>
                <p>Prix total : {this.state.price.toFixed(2)} $</p>
                <BurgerDrawing ingredients={this.state.composition}/>
                <Ingredients ingredients={this.state.ingredients} change={this.ingredientHandler.bind(this)}/>
                <button disabled={!this.state.purchasable} onClick={()=>{this.modalHandle(true)}}>Acheter</button>
            </section>
        )
    }
}

export default WithErrorHandler(Hamburger, orderInstance) 
