
let buttonEnviar = document.getElementById("submit")


buttonEnviar.addEventListener("click", (e) => {
  e.preventDefault()
  const calcAhorro = (persona, ingresos, otrosIngresos, gastos) => {
    persona = document.getElementById("persona").value
    ingresos = document.getElementById("ingresos").value
    otrosIngresos = document.getElementById("otros-ingresos").value
    gastos = document.getElementById("gastos").value

    let totalIngresos = parseInt(ingresos) + parseInt(otrosIngresos)
    let ahorro = totalIngresos - parseInt(gastos)

    document.write(`
    <h1>Resultado:</h1>

    Persona: ${persona}
    <br>
    Ingresos: ${ingresos}
    <br>
    Otros ingresos: ${otrosIngresos}
    <br>
    Gastos: ${gastos}
    <br>
    Ahorro mensual: ${ahorro}
    `)
    return ahorro;
  }
  calcAhorro()
})