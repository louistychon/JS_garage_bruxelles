class garagiste {
    constructor(nom, chiens) {
        this.nom = nom;
        this.chiens = chiens;
        this.faireDevis = (client, devis) => {
            console.log("Bien, nous allons nous en charger. Le prix pour ce devis est de " + devis.prix)
            client.devis = `Devis: ${devis.prix}`;
        }
        this.faireFacture = (client, prixReparation) => {
            client.facture.push("facture faite " + prixReparation + " merci de payer à la caisse");
        }
    }
}

let norbert = new garagiste("norbert", "Berger allemand");
var intervalId = window.setInterval(function aboie(){
    console.log("wouf wouf")
  }, 2000);

export {
    norbert
}