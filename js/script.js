// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * This function gets the Cat fact.
 * The "async" is there because it will take time for the internet to return the value
 */
async function getRandomPokemon() {
  try {
    const resultJSON = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
    const jsonData = await resultJSON.json()
    const pokemonList = jsonData.results

    const randomIndex = Math.floor(Math.random() * pokemonList.length)
    const randomPokemon = pokemonList.at(randomIndex)

    // output
    document.getElementById("result").innerHTML = "<p>" + randomPokemon.name + "</p>"
  }

  catch (error) {
    document.getElementById("result").innerHTML = "Sorry, there is an error at this moment."
  }
}
