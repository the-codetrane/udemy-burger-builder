import React from 'react';
import classes from './BuildControl.nodule.css';
const buildControl = (props) => {
	<div className={classes.BuildControl}>
		<div className={classes.label}>{props.label}</div>
		<button className={classes.less}>Less</button>
		<button className={classes.More}>More</button>
	</div>;
};

export default buildControl;
