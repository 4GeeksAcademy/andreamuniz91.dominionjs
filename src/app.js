/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dom = [".com", ".es"]
  function generadorDominio(pronoun, adj, noun, dom,) {
    let dominio = [];
    for (let p of pronoun) {
      for (let a of adj) {
        for (let n of noun) {
          for (let d of dom)
          dominio.push(`${p}${a}${n}${d}`);
        }
      }
    }
    return dominio;
  }  
  let domainNames = generadorDominio(pronoun, adj, noun, dom);
  domainNames.map(domain => {
    document.querySelector("#dominio").innerHTML += "<li>" + domain + "</li>";
  });
};
