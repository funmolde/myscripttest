// ==UserScript==
// @name         Cliquez sur Suivant automatiquement
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Clique automatiquement sur le bouton "Suivant" ayant le sélecteur CSS .tex:nth-child(1)
// @author       Vous
// @match        https://esprit-donghua.xyz/*
// @match        https://odysee.com/*
// @grant        none
// ==/UserScript==

// Fonction pour cliquer sur l'élément
    function cliquerSurSuivant() {
        var boutonSuivant = document.querySelector('div.nvs a[aria-label="next"]');
        if (boutonSuivant) {
            boutonSuivant.click();
        } else {
            console.log("Bouton Suivant non trouvé.");
        }
    }

    // Exécuter la fonction au chargement de la page
    window.addEventListener('load', cliquerSurSuivant);
})();
