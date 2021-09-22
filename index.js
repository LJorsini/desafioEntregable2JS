let masaKg = parseFloat(prompt("Ingrese su peso en Kgs"));
let planeta = parseInt(prompt("Elija el planeta: \n 1-Mercurio\n 2-Venus \n 3-Tierra \n 4-Marte \n 5-Jupiter \n 6-Saturno \n 7-Urano \n 8-Neptuno \n 9-Pluton"));
let masa = 0;
let peso = 0;
masa = masaKg / 9.8;

if (planeta > 9 || planeta <= 0) {
    alert("El planeta no existe")
} else if (planeta == 1) {
    peso = masa * 3.7;
    alert("Su peso en Mercurio es : " + peso + " Kg ");
} else if (planeta == 2) {
    peso = masa * 8.8;
    alert("Su peso en Venus es : " + peso + " Kg ");
} else if (planeta == 3) {
    peso = masa * 9.8;
    alert(" Su peso en la Tierra es : " + peso + " Kg ");
} else if (planeta == 4) {
    peso = masa * 3.71;
    alert(" Su peso en Marte es : " + peso + " Kg ");
} else if (planeta == 5) {
    peso = masa * 24.79;
    alert(" Su peso en Jupiter es : " + peso + " Kg ");
} else if (planeta == 6) {
    peso = masa * 10.44;
    alert(" Su peso en Saturno es : " + peso + " Kg ");
} else if (planeta == 7) {
    peso = masa * 8.87;
    alert(" Su peso en Urano es : " + peso + " Kg ");
} else if (planeta == 8) {
    peso = masa * 11.5;
    alert(" Su peso en Neptuno es : " + peso + " Kg ");
} else {
    peso = masa * 0.62;
    alert("Lo siento, Pluton ya no es un planeta.. de todos modos, tu peso es:" + " " + peso + " Kg ");
}