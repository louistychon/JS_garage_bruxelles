import {devis, marcus, julien, lea, serge, leo} from "./clients.js";
import {maison, salleAttente, bureau, caisse,casse, lieuxOrdonnes} from "./lieux.js";
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
    console.log("Mon problème vient du " + clientname.probleme.probleme)
    norbert.faireDevis(clientname, devis)
    clientname.payer(devis, casse)
    console.log("très bien, je passe à la caisse pour voir l'étendue et le prix des réparations")
    clientname.seDeplacer(bureau, caisse)
    console.log(bureau)
    console.log(caisse)
    console.log("Le prix de vos réparations s'élève à " + clientname.probleme.prix)
    clientname.payer(clientname.probleme, casse)
    clientname.seDeplacer(caisse, maison)
    console.log(casse.vehicule)
    console.log("**** Client suivant *****")
}

rendezVousclient(marcus)
rendezVousclient(lea)
rendezVousclient(julien)
rendezVousclient(serge)
rendezVousclient(leo)