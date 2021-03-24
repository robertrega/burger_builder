import React from 'react';
import classes from './Burger.css'
import Ingredient from './Ingredient/Ingredient'

const burger = (props) => {
    let ingredientsArray = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <Ingredient key={igKey + i} type={igKey} />
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (ingredientsArray.length === 0) {
        ingredientsArray = <p>Please start adding indredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <Ingredient type="bun-top" />
            {ingredientsArray}
            <Ingredient type="bun-bottom" />
        </div>
    );
}

export default burger