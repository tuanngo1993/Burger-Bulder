import React from "react";

import classes from "./NavigationItems.css"

import {navigationItem as Navigationitem} from "./NavigationItem/NavigationItem";

export const navigationItems = props => <ul className={classes.NavigationItems}>
	<Navigationitem link="/" active>Burgerr Builder</Navigationitem>
	<Navigationitem link="/">Checkout</Navigationitem>
</ul>;