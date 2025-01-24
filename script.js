let ligne =""

function afficherEtoiles(n) {
    for (let i = 0; i < n; i++) {
        ligne += "*"
    }
    // ligne += "\\"
}


function afficherRectangle(hauteur, largeur) {
    for (let i = 0; i < hauteur; i++) {
        afficherEtoiles(largeur)
    }
}

// afficherRectangle(5, 5)


function afficherTriangleDroite(n) {
    ligne = ""
    for (let i = 0; i <= n; i ++) {
        afficherEtoiles(i)
        console.log(ligne + "\\")
        ligne = ""
    }
    
}

// afficherTriangleDroite (5)



function afficherTriangleGauche(n) {
    ligne = "" 
    for (let i = 0; i <= n; i++) {
        let espace =" ".repeat(n - i)
        afficherEtoiles(i)
        console.log(espace + "/" + ligne)
        ligne = ""
    }
  }

// afficherTriangleGauche(5)


function afficherPointeSapin(n) {
    console.log(" " .repeat(n - 1) + "*")
    afficherTriangleGauche(n)
    afficherTriangleDroite(n)
    console.log(" " .repeat(n - 1) + "|")
}

afficherPointeSapin(5);