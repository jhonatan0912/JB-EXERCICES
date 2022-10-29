let vendedor = document.getElementById("vendedor")
let buttonSubmit = document.getElementById("submit");


buttonSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  const getMayor = (venta1, venta2, venta3, venta4, venta5) => {
    venta1 = document.getElementById("venta1").value;
    venta2 = document.getElementById("venta2").value;
    venta3 = document.getElementById("venta3").value;
    venta4 = document.getElementById("venta4").value;
    venta5 = document.getElementById("venta5").value;

    let mayor = Math.max(venta1, venta2, venta3, venta4, venta5);


    document.write(`
    Persona: ${vendedor.value}
    <br>
    Venta1: ${venta1}
    <br>
    Venta2: ${venta2}
    <br>
    Venta3: ${venta3}
    <br>
    Venta4: ${venta4}
    <br>
    Venta5: ${venta5}
    <br>
    El numero mayor es: ${mayor}
         `)
    return mayor;
  }




  getMayor()


})