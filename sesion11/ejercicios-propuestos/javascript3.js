let number = parseInt(prompt("Insertar numero del 1 al 6:"))

switch (number) {
  case 1:
    document.write(`
  Español: Uno
  <br>
  Inlges: One 
  <br>
  Frances: Un
  `)
    break;
  case 2:
    document.write(`
  Español: Dos
  <br>
  Inlges: Two 
  <br>
  Frances: Deux
  `)
    break;
  case 3:
    document.write(`
  Español: Tres
  <br>
  Inlges: Three 
  <br>
  Frances: Trois
  `)
    break;
  case 4:
    document.write(`
  Español: Cuatro
  <br>
  Inlges: Four 
  <br>
  Frances: Quatre
  `)
    break;
  case 5:
    document.write(`
  Español: Cinco
  <br>
  Inlges: Five 
  <br>
  Frances: Cinq
  `)
    break;
  case 6:
    document.write(`
  Español: Seis
  <br>
  Inlges: Six 
  <br>
  Frances: Six
  `)
    break;


  default:
    document.write(`Insertar numero del 1 al 6`)
    break;
}