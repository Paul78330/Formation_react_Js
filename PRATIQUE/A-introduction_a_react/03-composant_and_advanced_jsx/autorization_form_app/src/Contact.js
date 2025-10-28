import React, { useState } from "react";
// Définition de la fonction Contact
function Contact() {
  // Définition du mot de passe
  const password = "swordfish";
  // Utilisation du Hook d'état pour gérer l'autorisation
  const [authorized, setAuthorized] = useState(false);

  // Fonction pour gérer la soumission du formulaire
  function handleSubmit(e) {
    // Récupération du mot de passe entré par l'utilisateur
    const enteredPassword = e.target.querySelector(
      'input[type="password"]'
    ).value;
    // Vérification si le mot de passe entré est correct
    const auth = enteredPassword == password;
    // Mise à jour de l'état d'autorisation
    setAuthorized(auth);
  }

  // Définition du formulaire de connexion
  const login = (
    <form action="#" onSubmit={handleSubmit}>
      <input type="password" placeholder="password" />
      <input type="submit" />
    </form>
  );
  // Définition des informations de contact
  const contactInfo = (
    <ul>
      <li>client@example.com</li>
      <li>555.555.5555</li>
    </ul>
  );

  // Rendu du composant
  return (
    <div id="authorization">
      <h1>{authorized ? "Contact" : "Enter the Password"}</h1>
      {/* Affichage des informations de contact si l'utilisateur est autorisé, sinon affichage du formulaire de connexion */}
      {authorized ? contactInfo : login}
    </div>
  );
}

/**
 * Ce code définit un composant React appelé Contact. Il utilise le Hook d'état useState pour gérer l'état d'autorisation. Lorsque le formulaire est soumis, la fonction handleSubmit est appelée. Cette fonction récupère le mot de passe entré par l'utilisateur et vérifie s'il est correct. Si c'est le cas, l'état d'autorisation est mis à jour pour indiquer que l'utilisateur est autorisé. Enfin, le composant rend soit les informations de contact, soit le formulaire de connexion, en fonction de l'état d'autorisation.
 */



export default Contact;
