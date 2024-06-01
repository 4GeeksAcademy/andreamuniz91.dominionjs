/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
  function generatorDomain(pronoun, adjetive, noun, domains,) {
    let domain = [];
    for (let p of pronoun) {
      for (let a of adjetive) {
        for (let n of noun) {
          for (let d of domains)
            domain.push(`${p}${a}${n}${d}`);
        }
      }
    }
    return domain;
  }  


  let pronoun = ["the", "our"];
  let adjetive = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domains = [".com", ".es"]
  let domainNames = generatorDomain(pronoun, adjetive, noun, domains);
  domainNames.map(domain => {
    document.querySelector("#list-domain").innerHTML += "<li>" + domain + "</li>";
  });
};
