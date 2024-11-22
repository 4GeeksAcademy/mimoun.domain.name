/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

window.onload = function() {
  let domainList = "";

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        domainList += pronoun[i] + adj[j] + noun[k] + ".com<br>";
      }
    }
  }

  document.querySelector("#domain").innerHTML = domainList;
};
