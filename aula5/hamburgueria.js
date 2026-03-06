 function fazerHamburguer(numero){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(numero == 4){
                reject("Falha ao fazer o quarto hamburguer")
            }
            else{
                resolve(`Hamburguer ${numero} pronto!`)
            }
        }, 1000)
    })
 }

 async function preparaPedido(quantidade){
    console.log("Começando a preparar pedido")

    try{
        for(let i = 0; i < quantidade; i++){
            console.log(`Preparando hamburguer ${i}`)

            const resultado = await fazerHamburguer(i)
            console.log(resultado)
        }
    }catch(erro){
        console.error("Erro encontrado: ", erro)
    }
 }


 preparaPedido(5)