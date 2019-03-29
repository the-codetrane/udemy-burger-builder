import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
		</div>
	);
};

export default burger;
