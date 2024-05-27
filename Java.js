document.getElementById("Somar").addEventListener("click", function() {
    const input1 = parseFloat(document.getElementById("input1").value); 
    const input2 = parseFloat(document.getElementById("input2").value); 
    const resultado = document.getElementById("res");

    const soma = input1 + input2;
    resultado.textContent = soma; 
});

document.getElementById("Subtrair").addEventListener("click", function() {
    const input1 = parseFloat(document.getElementById("input1").value); 
    const input2 = parseFloat(document.getElementById("input2").value);
    const resultado = document.getElementById("res");

    const subtracao = input1 - input2;
    resultado.textContent = subtracao; 
});
