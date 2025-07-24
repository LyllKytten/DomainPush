function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
    const colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
    let numbersOfColors={};
    console.log( 'цветов: ' + colorsCount );
    for ( let i=1; i<=colorsCount; i++ ) {
        let n = -1;
        do {
            n = randomDiap(1,7);
        } while (n in numbersOfColors)
        numbersOfColors[n] = 1;
        console.log(colors[n]);
    }
}

mood(6);