let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

for (i = 1; i <= 1000; i++){
    result = 0
    for (j = 1; j <= 2; j++){
        dado = Math.floor(Math.random() * 6) + 1
        result += dado
    }
    count[result - 2] += 1
}

function creatingHTML (){
    let body = document.querySelector(`body`)

    let main = document.createElement(`main`)
        main.classList.add(`mainDice`)
    
    let table = document.createElement(`table`)
        table.classList.add(`diceResult`)
    
    let trDice = document.createElement(`tr`)
        trDice.classList.add(`numero`)
    let trResult = document.createElement(`tr`)
        trResult.classList.add(`resultados`)

    for (i = 2; i <= 12; i++){
        let tdDice = document.createElement(`td`)
            tdDice.classList.add(`dadoNumero`)
            tdDice.innerText = `${i}`
            trDice.append(tdDice)

        let tdResult = document.createElement(`td`)
            tdResult.classList.add(`dadoResultado`)
            tdResult.innerText = `${count[i - 2]}`
            trResult.append(tdResult)
    }
    body.append(main)
    main.append(table)
    table.append(trDice, trResult)
    console.log(body)
}

function creatingHTMLCanvas (){
    let body = document.querySelector(`body`)

    let canvas = document.createElement(`canvas`)
        canvas.classList.add(`myChart`)
        body.append(canvas)

    const config = {
        type: `bar`,
        data:{
            labels: [`2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`],
            datasets: [{label: `Número de rolagem`, data: count}]
        }
    }

    const chartRoll = new Chart(canvas, config)
}

function start (){
    creatingHTML ()
    creatingHTMLCanvas ()
}

start ()