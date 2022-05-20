class lieux {
    constructor(nom, personnes, vehicule){
        this.nom = nom;
        this.personnes = personnes;
        this.vehicule = vehicule;
    }
}

let maison = new lieux("Maison", [])
let salleAttente = new lieux("salle d'Attente",[])
let bureau = new lieux("Bureau",[])
let caisse = new lieux("Caisse", [])
let casse = new lieux("Casse", [], [])

let lieuxOrdonnes = [maison, salleAttente, bureau, caisse]

export {maison, salleAttente, bureau, caisse,casse, lieuxOrdonnes}