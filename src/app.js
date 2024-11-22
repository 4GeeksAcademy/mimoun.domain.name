/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

window.onload = function() {
  let domainList = ""; // Create a variable to store all generated domain names

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        domainList += pronoun[i] + adj[j] + noun[k] + ".com<br>"; // Append each domain with a line break
      }
    }
  }

  document.querySelector("#domain").innerHTML = domainList; // Add all domains to the innerHTML at once
};
