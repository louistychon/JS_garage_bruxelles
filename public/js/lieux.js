class lieux {
    constructor(nom, personnes){
        this.nom = nom;
        this.personnes = personnes;
    }
}

let maison = new lieux("Maison", [])
let salleAttente = new lieux("salle d'Attente",[])
let bureau = new lieux("Bureau",[])
let caisse = new lieux("Caisse", [])

let lieuxOrdonnes = [maison, salleAttente, bureau, caisse]

export {maison, salleAttente, bureau, caisse, lieuxOrdonnes}