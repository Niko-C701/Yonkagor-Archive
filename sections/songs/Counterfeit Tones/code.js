const handleOnMouseMove = e => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
    }

    for(const card of document.querySelectorAll(".box--niko")) {
        card.onmousemove = e => handleOnMouseMove(e);
    }




const tarjeta = document.querySelector('.background');
const movimientoMaximo = 20; // Los 20px que quieres

window.addEventListener('mousemove', (e) => {
  // 1. Obtenemos la posición del mouse en porcentaje (de 0 a 1)
  // 2. Restamos 0.5 para que el centro de la pantalla sea el punto "0"
  const x = (e.clientX / window.innerWidth) - 0.5;
  const y = (e.clientY / window.innerHeight) - 0.5;

  // 3. Multiplicamos por el rango (movimientoMaximo * 2) 
  // para que se mueva entre -20px y 20px
  const moveX = x * (movimientoMaximo * .2);
  const moveY = y * (movimientoMaximo * .2);

  // 4. Aplicamos el movimiento
  tarjeta.style.transform = `translate(${moveX}px, ${moveY}px)`;
});
