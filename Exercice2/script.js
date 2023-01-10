function findAvg(gradesList) {
    let sum = 0
    for (const grade of gradesList)
        sum += grade
    return sum / gradesList.length
}

function checkAvg(avg) {
    if(avg > 65)
        console.log(`Succes :=) ||Votre moyenne est ${avg}`)
    else
        console.log(`Votre moyenne est ${avg} Echec :=(`)
}
const grades = [75, 90, 30, 60, 89, 80]
const avg = findAvg(grades)
checkAvg(avg)