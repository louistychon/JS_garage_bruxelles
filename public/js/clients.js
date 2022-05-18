class client { 
    constructor(nom, vehicule, argent, probleme){
        this.nom = nom;
        this.vehicule = vehicule;
        this.argent = argent;
        this.probleme = probleme;
        this.seDeplacer = (endroitdepart,endroitarrive) =>{
            endroitarrive.personnes.push(this.nom);
            endroitdepart.personnes.splice(this.nom)
        }
        this.prendreFacture = (facture) =>{

        }
        this.payer = (prixprestation) =>{

        }
    }
}

let marcus = new client('Marcus','BMW', 200, "rouleur");
let julien = new client('Julien', "Peugeot", 100, "pneu crevé");
let lea = new client('Léa', "Renault", 300, "feu avant cassé");
let serge = new client('Serge',"Mercedes", 500, "moteur en panne");
let leo = new client('Léo', "Audi", 600, "huile à moteur vide");

export {marcus, julien, lea, serge, leo
}

