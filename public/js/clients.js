class documenter{
    constructor(type, probleme, solution, prix, paye){
        this.type = type;
        this.probleme = probleme;
        this.solution = solution;
        this.prix = prix;
        this.paye = paye;
    }
}

class client {
    constructor(nom, vehicule, argent, probleme) {
        this.nom = nom;
        this.vehicule = vehicule;
        this.argent = argent;
        this.probleme = probleme;
        this.seDeplacer = (endroitdepart, endroitarrive) => {
            endroitarrive.personnes.push(this.nom);
            endroitdepart.personnes.splice(this.nom)
        }
        this.payer = (document) => {
            if (this.argent > document.prix) {
                this.argent -= document.prix
                console.log("document payé, argent de " + this.nom + " ? " + this.argent)
            }
            else{
                console.log("vous êtes pauvre, la voiture part à la casse !")
            }
        }
    }
}

let devis = new documenter("devis","devis", "devis", 45, false)
let rouleur = new documenter("devis","rouleur", "rouleur neuf",45, false);
let pneuCreve = new documenter("devis","pneu crevé", "pneu neuf",50, false);
let feuAvantCasse = new documenter("devis","feu avant cassé", "feu  neuf",60, false);
let moteurEnPanne = new documenter("devis","moteur en panne", "moteur neuf",800, false);
let huileAMoteurVide = new documenter("devis","huile à moteur vide", "huile",100, false);

let marcus = new client('Marcus', 'BMW', 200, 
    rouleur);
let julien = new client('Julien', "Peugeot", 100, 
    pneuCreve);
let lea = new client('Léa', "Renault", 300, 
    feuAvantCasse);
let serge = new client('Serge', "Mercedes", 500, 
    moteurEnPanne);
let leo = new client('Léo', "Audi", 600, 
    huileAMoteurVide);



export {
    devis,
    marcus,
    julien,
    lea,
    serge,
    leo, 
}