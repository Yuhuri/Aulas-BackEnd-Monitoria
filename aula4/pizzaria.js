function assarpizza(numero){
    return new Promise((resolve, reject)=>{
        console.log(`Começanda a assar a Pizza ${numero}`)

        const ok = true

        setTimeout(()=>{
            if(ok){
                console.log(`Pizza ${numero} pronta!`)
                resolve(`Dados da pizza ${numero}`)
            }
            else{
                reject(`Erro na pizza ${numero}`)
            }
        }, 1000)

    })
}

assarpizza(1)
    .then((resultado1)=>{
        console.log(resultado1)
        return assarpizza(2)
    })
    .then((resultado2)=>{
        console.log(resultado2)
        return assarpizza(3)
    })
    .then((resultado3)=>{
        console.log(resultado3)
        console.log("Sucesso, todas as pizzas foram entregues!!!")
    })
    .catch((erro)=>{
        console.error(erro)
    })
    .finally(()=>{
        console.log("Processo concluído")
    })