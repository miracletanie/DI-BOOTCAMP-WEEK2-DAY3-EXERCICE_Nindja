const personne1 = {
    fullName: 'Dian Michelle',
    mass: 70,
    height: 2.73,
    bmi: function() {
        return this.mass / Math.pow(this.height, 2)
    }
}

const personne2 = {
    fullName: 'Ange Koffi',
    mass: 55,
    height: 1,
    bmi: function() {
        return this.mass / Math.pow(this.height, 2)
    }
}

function compareBMI(p1, p2) {
    return p1.bmi() > p2.bmi() ? p1 : p2
}

console.log(`${compareBMI(personne1, personne2).fullName} a plus de IBM`)