import React from 'react';

/**
 * Au va transformer notre <h1> en un composant
 * A l'interrieur on va incorporer du style
 * ce style on va le définir grace au props color et myStyle
 * Comment récupérer this.props.color qui se trouve dans Mycars.js?
 * On va le passer en tant que props (myStyle) au composant MyHeader présent dans Mycars
 * le color de myStyle provient de l'élément parent de myCars -> color={this.state.color}
 * Pour pouvoir accéder à l'élement enfant (title) je le passe en paramètre children dans ma fonction
 * car sur Mycars, il s'agit de l'enfant de mon composant MyHeader
 */
const MyHeader = ({ myStyle, children }) => <h1 style={{color: myStyle}}>{children}</h1>

export default MyHeader;