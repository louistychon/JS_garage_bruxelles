import {marcus, julien, lea, serge, leo} from "./clients.js";
import {devis, facture, rouleur, pneuCreve, feuAvantCasse, moteurEnPanne, huileAMoteurVide} from "./documents.js";
import {maison, salleAttente, bureau, caisse, lieuxOrdonnes} from "./lieux.js";
import {norbert} from "./garagiste.js";

function rendezVousclient(clientname){
    console.log("Bonjour " + clientname.nom + ". Prenez place dans la " + salleAttente.nom + " svp");
    clientname.seDeplacer(maison, salleAttente)
    console.log(salleAttente)
    console.log("Merci pour votre attente " + clientname.nom + ". Notre garagiste va vous recevoir dans son " + bureau.nom + " Suivez-moi");
    clientname.seDeplacer(salleAttente, bureau)
    console.log(salleAttente)
    console.log(bureau)
    console.log("Bonjour " + clientname.nom + " ça fait plaisir de vous revoir ! Quel est votre problème ?");
    console.log("Mon problème vient du " + clientname.probleme)
    let x = clientname.probleme;
    console.log("Bien, nous allons nous en charger. Le prix pour cette réparation est de " + x.prix)

}

rendezVousclient(marcus)