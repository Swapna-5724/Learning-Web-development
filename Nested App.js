for (let i =1; i <= 10; i++) {
    console/log(`i is: ${i}`)
}


for (let i =1; i <= 10; i++) {
    console/log(`i is: ${i}`)
    for(let j = 1; i < 4; i++) {
        console.log(`     j is: ${j}`)
    }
}


for (let j = 1; i < 4; i++) {
        console.log(`     j is: ${j}`)
    }


const seatinhChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i =0; i < seatingChart.length; i++) {
    console.log(seatingChart[i])
}


for (let i =0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW ${i + 1}`)
    // console.log(`ROW ${i}`)
    for(let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}

