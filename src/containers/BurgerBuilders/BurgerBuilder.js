import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon:0.7,
  cheese: 0.6,
  meat: 1.0
}


class BurgerBuilder extends Component {
  state = {
     ingredients: {
          salad: 0,
          bacon: 0,
          cheese: 0,
          meat: 0
      },
      totalPrice: 4
  }

addIngredientHandler = (type) => {
  const oldCount = this.state.ingredients[type];
  const updatedCount = oldCount + 1;
  const updatedIngredient = {
    ...this.state.ingredients
  };
  updatedIngredient[type] = updatedCount;
  const priceAddition = INGREDIENT_PRICES[type];
  const oldPrice = this.state.totalPrice;
  const newPrice = priceAddition + oldPrice;
  this.setState({totalPrice: newPrice, ingredients: updatedIngredient});

}

removeIngredientHandler =(type) => {

  const oldCount = this.state.ingredients[type];
      if(oldCount <= 0) {
        return;
      }

  const updatedCount = oldCount - 1;
  const updatedIngredient = {
    ...this.state.ingredients
  };
  updatedIngredient[type] = updatedCount;
  const priceDeduction = INGREDIENT_PRICES[type];
  const oldPrice = this.state.totalPrice;
  const newPrice = oldPrice - priceDeduction;
  this.setState({totalPrice: newPrice, ingredients: updatedIngredient});


}

       render(){
          return (
            <Aux>
              <Burger ingredients={this.state.ingredients}/>
              <BuildControls
                ingredientAdded = {this.addIngredientHandler}
                ingredientRemoved = {this.removeIngredientHandler}
                price = {this.state.totalPrice}

                 />
            </Aux>
          )
        }


}

export default BurgerBuilder;
