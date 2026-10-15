function cadastrar (){
    //pega o valor digitado no forms
    let valor = document.querySelector("input").value
    
    // pegar o h1 e colocar
    let h1 = document.querySelector("h1")

    h1.textContent = `O nome digitado foi: ${valor}` 
}