let temp = {
    Belarus: 12,
    Russia: 10,
    Poland: 17,
    USA: 22,
    China: 21,
}
console.log(temp);
let sum = 0;
for (let i in temp) sum += temp[i];
let cred = sum / Object.keys(temp).length;
console.log('Средняя температура во всех странах: ' + cred);

function maxTemp(obj) {
    let max = 0;
    for (let i in obj) {
        if (max < obj[i]) max = obj[i];
    }
    return max;
}
let max = maxTemp(temp);
console.log('Максимальная температура среди всех стран: ' + max);