class documenter{
    constructor(type, prix){
        this.type = type;
        this.prix = prix;
    }
}

let devis =  new documenter("Devis", 45)
let facture =  new documenter("Facture", 45)

class reparations {
    constructor(probleme, solution, prix){
        this.probleme = probleme;
        this.solution = solution;
        this.prix = prix;
    }
}

let rouleur = new reparations("rouleur", "rouleur neuf",45);
let pneuCreve = new reparations("pneu crevé", "pneu neuf",50);
let feuAvantCasse = new reparations("feu avant cassé", "feu  neuf",60);
let moteurEnPanne = new reparations("moteur en panne", "moteur neuf",800);
let huileAMoteurVide = new reparations("huile à moteur vide", "huile",100);

export {devis, facture, rouleur, pneuCreve, feuAvantCasse, moteurEnPanne, huileAMoteurVide
}