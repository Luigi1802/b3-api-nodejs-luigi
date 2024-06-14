// variables
let a = 1;
const b = 18;

// a = 2; fonctionne
// b = 15; erreur

//  fonctions
function test(mot) {
    return `mon mot : ${mot}`;
}
const test2 = (mot) => {
    mot = mot.toUpperCase();
    return `mon mot : ${mot}`;
}
const test3 = nb => nb + 1;

// console.log(test("pêche"));
// console.log(test2("framboise"));
// console.log(test3(18));