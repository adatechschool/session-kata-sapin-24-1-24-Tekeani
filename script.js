function afficherEtoiles(n) {
    let ligne =""
    for (let i = 0; i < n; i++) {
        ligne += "*"
    }
    ligne += "\\"
    console.log(ligne)
}


function afficherRectangle(hauteur, largeur) {
    for (let i = 0; i < hauteur; i++) {
        afficherEtoiles(largeur)
    }
}

// afficherRectangle(5, 5)


function afficherTriangleDroite(n) {
    for (let i = 0; i <= n; i++) {
        afficherEtoiles(i)
    }
}

afficherTriangleDroite (5)



// function afficherTriangleGauche(n) {
//     ligne += "/" 
//     for (let i = 0; i <= n; i++) {
//         afficherEtoiles(i)
//     }
//   }

// afficherTriangleGauche(5)