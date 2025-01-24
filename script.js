function afficherEtoiles(n) {
    let ligne =""
    for (let i = 0; i < n; i++) {
        ligne += "*"
    }
    console.log(ligne)
}


function afficherRectangle(hauteur, largeur) {
    for (let i = 0; i < hauteur; i++) {
        afficherEtoiles(largeur)
    }
}

afficherRectangle(5, 5)