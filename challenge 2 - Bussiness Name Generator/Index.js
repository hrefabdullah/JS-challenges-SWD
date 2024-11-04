var random_adj = Math.random()
var random_name = Math.random()
var random_word = Math.random()
var adj, name, word;

if (random_adj < 0.3) {
    adj = "Amazing"
} else if (random_adj > 0.3 & random_adj < 0.7) {
    adj = "Fire"
} else {
    adj = "Crazy"
}

if (random_name < 0.3) {
    name = "Engine"
} else if (random_name > 0.3 & random_name < 0.7) {
    name = "Garments"
} else {
    name = "Foods"
}

if (random_word < 0.3) {
    word = "Bros"
} else if (random_word > 0.3 & random_word < 0.7) {
    word = "Limited"
} else {
    word = "hub"
}

console.log(`Your business name is ${adj} ${name} ${word}`)