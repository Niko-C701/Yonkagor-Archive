// --------------------------------------------------------------------------- light-dark section

// 1. Seleccionamos el botón y el elemento raíz (HTML)
const themeBtn = document.querySelector("#icon-theme");
const rootElement = document.documentElement;

// 2. Función para aplicar el tema y guardar la preferencia
const applyTheme = (theme) => {
    // Aplicamos el atributo al root (esto cambia las variables CSS)
    rootElement.setAttribute("data-theme", theme);
    
    // Guardamos la elección en el localStorage
    localStorage.setItem("theme", theme);

    // se cambia  el icono visual (puedes usar emojis o innerHTML para SVGs)
    themeBtn.textContent = theme === "light" ? "nightlight" : "sunny";
};

// 3. Lógica de inicio (Se ejecuta al cargar la página)
const initTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Si hay algo guardado, lo usamos. Si no, usamos lo que diga el sistema.
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme(systemPrefersDark ? "dark" : "light");
    }
};

// 4. Evento de click para alternar
themeBtn.addEventListener("click", () => {
    const currentTheme = rootElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    
    applyTheme(newTheme);
});

// Ejecutamos la inicialización
initTheme();

// ------------------------------------------------------------------------- light-dark end