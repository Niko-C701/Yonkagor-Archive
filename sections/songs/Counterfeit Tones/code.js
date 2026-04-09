//traducciones section
const translations = {
    en: {
        principalDescription: "",
        textLyrics: "",
        yonkatDescription: "",
        textAbout: "",
        listElement1: "",
        listElement2: "",
        listElement3: "",
        listElement4: "",
    },
    es: {
        principalDescription: "Counterfeit tones es una cancion descartada por yonkagor, nunca tuvo un lanzamiento oficial en su canal principal de youtube, su unica publicacion fue en sonundclud y se encuentra actualmente eliminada",
        textLyrics: "Letra",
        yonkatDescription: "Sin nombre oficial A diferencia de los otros yonkats este nunca fue nombrado oficialmente",
        textAbout: "Mas informacion",
        listElement1: "Counterfeit tones nunca tuvo un lanzamiento oficial en su canal principal de youtube",
        listElement2: "Originalmente fue publicada en su cuenta de sonundcloud (bajo el antiguo nombre de usuario melodyline14), fue rescatada por varios canales en youtube aunque la mayoria se encuentran aliminados",
        listElement3: "Esta cancion fue publicada cuando su nombre era JonKagor y no Yonkagor",
        listElement41: 'esta cancion forma parte de varias canciones descartadas como ',
        listElement42: " y ",
    },
    ru: {
        principalDescription: "«Counterfeit tones» — это песня, от которой отказался yonkagor; она так и не была официально выпущена на его основном YouTube-канале. Единственная её публикация была на SoundCloud, и в настоящее время она удалена.",
        textLyrics: "текст песни",
        yonkatDescription: "Официального имени нет. В отличие от других йонкатов, этому так и не дали официального имени.",
        textAbout: "информация",
        listElement1: "У группы Counterfeit Tones никогда не было официального релиза на их основном YouTube-канале",
        listElement2: "Первоначально опубликованное на её аккаунте SoundCloud (под прежним именем пользователя melodyline14), видео было спасено несколькими каналами на YouTube, хотя большинство из них впоследствии были удалены.",
        listElement3: "Эта песня была выпущена, когда его сценическим псевдонимом был JonKagor, а не Yonkagor.",
        listElement41: "Эта песня входит в сборник отброшенных песен, в который также входят: ",
        listElement42: " и ",
    }
};

// 2. Configuración de idiomas
const supportedLangs = ['en', 'es', 'ru'];
const defaultLang = 'en';

// 3. Función principal para cambiar el idioma
function setLanguage(lang) {
    // Actualizar la etiqueta <html> para SEO y accesibilidad
    document.documentElement.lang = lang;

    // Actualizar el valor visual del menú desplegable
    document.getElementById('language-selector').value = lang;

    // Guardar la preferencia del usuario en su navegador
    localStorage.setItem('userLang', lang);

    // Buscar todos los elementos que tengan el atributo data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    
    // Reemplazar el texto de cada elemento
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n'); // Ejemplo: 'title'
        
        // Verificamos que la traducción exista para evitar errores
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// 4. Lógica de inicio (Se ejecuta al cargar la página)
document.addEventListener('DOMContentLoaded', () => {
    // A. Revisar si el usuario ya había elegido un idioma antes
    let savedLang = localStorage.getItem('userLang');
    let langToSet = defaultLang;

    if (savedLang && supportedLangs.includes(savedLang)) {
        // Si hay un idioma guardado y lo soportamos, usamos ese
        langToSet = savedLang;
    } else {
        // B. Si es su primera vez, detectamos el idioma del navegador
        // navigator.language devuelve cosas como 'es-MX' o 'en-US'. 
        // Usamos .slice(0, 2) para quedarnos solo con 'es' o 'en'.
        const browserLang = navigator.language.slice(0, 2);
        
        if (supportedLangs.includes(browserLang)) {
            langToSet = browserLang; // Usamos su idioma (es, ru, en)
        } else {
            langToSet = defaultLang; // Si habla francés (fr) u otro, le damos inglés
        }
    }

    // Aplicar el idioma decidido
    setLanguage(langToSet);

    // C. Escuchar cuando el usuario use el menú desplegable
    document.getElementById('language-selector').addEventListener('change', (evento) => {
        setLanguage(evento.target.value);
    });
});

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
