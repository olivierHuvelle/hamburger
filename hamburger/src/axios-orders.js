/*
    De nouveau je ne suis pas d'accord avec cette facon de code 
    Pour moi créer un seul fichier axios et dedans faire des exports particuliers 
*/

import axios from 'axios'

const orderInstance = axios.create({
    baseURL : 'https://hamburger-febfe.firebaseio.com'
})

export default orderInstance