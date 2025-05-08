// Banco de preguntas
const allQuestions = [
{
        question: "¿Quién fundó la Cruz Roja?",
        options: ["Florence Nightingale", "Henry Dunant", "Gustave Moynier", "Louis Pasteur"],
        answer: 1,
        feedback: "✅ Correcto! Henry Dunant, empresario suizo, fundó la Cruz Roja en 1863 tras la Batalla de Solferino.",
        level: "Fácil",
        prize: 10
    },
    {
        question: "¿En qué año se fundó el Comité Internacional de la Cruz Roja (CICR)?",
        options: ["1859", "1863", "1876", "1901"],
        answer: 1,
        feedback: "✅ Correcto! El CICR se fundó en 1863 en Ginebra, Suiza.",
        level: "Fácil",
        prize: 20
    },
    {
        question: "¿Cuántos principios fundamentales tiene la Cruz Roja?",
        options: ["5", "7", "10", "12"],
        answer: 1,
        feedback: "✅ Correcto! Los 7 principios son: Humanidad, Imparcialidad, Neutralidad, Independencia, Voluntariado, Unidad y Universalidad.",
        level: "Fácil",
        prize: 50
    },
    {
        question: "¿Qué símbolo usan países musulmanes en lugar de la cruz roja?",
        options: ["Cruz verde", "Media luna roja", "Estrella roja", "Triángulo rojo"],
        answer: 1,
        feedback: "✅ Correcto! La media luna roja es el emblema utilizado en países musulmanes.",
        level: "Medio",
        prize: 100
    },
    {
        question: "¿Qué premio ha recibido el CICR tres veces?",
        options: ["Premio Oscar", "Premio Nobel de la Paz", "Premio Pulitzer", "Premio Grammy"],
        answer: 1,
        feedback: "✅ Correcto! El Comité Internacional de la Cruz Roja ha ganado el Nobel de la Paz en 1917, 1944 y 1963.",
        level: "Difícil",
        prize: 200
    },

    // Preguntas 6 a 50 (nuevas)
    {
        question: "¿En qué año se fundó la Cruz Roja Ecuatoriana?",
        options: ["1900", "1910", "1925", "1945"],
        answer: 1,
        feedback: "✅ Correcto! La Cruz Roja Ecuatoriana fue fundada en 1910.",
        level: "Fácil",
        prize: 500
    },
    {
        question: "¿Cuál es el primer principio fundamental de la Cruz Roja?",
        options: ["Neutralidad", "Humanidad", "Imparcialidad", "Independencia"],
        answer: 1,
        feedback: "✅ Correcto! Humanidad: aliviar el sufrimiento humano sin distinción.",
        level: "Fácil",
        prize: 1000
    },
    {
        question: "¿Qué organismo de la Cruz Roja se enfoca en desastres naturales?",
        options: ["CICR", "Federación Internacional", "Cruz Roja Nacional", "ONU"],
        answer: 1,
        feedback: "✅ Correcto! La Federación Internacional coordina respuestas a desastres naturales.",
        level: "Medio",
        prize: 2000
    },
    {
        question: "¿Qué principio prohíbe a la Cruz Roja tomar partido en conflictos?",
        options: ["Voluntariado", "Neutralidad", "Unidad", "Universalidad"],
        answer: 1,
        feedback: "✅ Correcto! La Neutralidad asegura confianza en todos los bandos.",
        level: "Medio",
        prize: 4000
    },
    {
        question: "¿Qué emblema alternativo se adoptó en 2005?",
        options: ["Cruz azul", "Cristal rojo", "Estrella verde", "Luna blanca"],
        answer: 1,
        feedback: "✅ Correcto! El cristal rojo es usado por países que no adoptan símbolos religiosos.",
        level: "Difícil",
        prize: 8000
    },
    {
        question: "¿Qué papel tuvo la Cruz Roja en el terremoto de Ecuador 2016?",
        options: ["Solo recolectó fondos", "Brindó atención médica y albergue", "Construyó hospitales", "No participó"],
        answer: 1,
        feedback: "✅ Correcto! Proveyó primeros auxilios, albergue y apoyo psicológico.",
        level: "Medio",
        prize: 16000
    },
    {
        question: "¿Qué hace el programa RFC de la Cruz Roja?",
        options: ["Financiar proyectos", "Restablecer contacto entre familiares", "Entrenar médicos", "Vender seguros"],
        answer: 1,
        feedback: "✅ Correcto! El Restablecimiento del Contacto Familiar ayuda en desastres y conflictos.",
        level: "Difícil",
        prize: 32000
    },
    {
        question: "¿Cuántas Sociedades Nacionales de Cruz Roja existen?",
        options: ["97", "150", "191", "210"],
        answer: 2,
        feedback: "✅ Correcto! Hay 191 Sociedades Nacionales reconocidas.",
        level: "Difícil",
        prize: 64000
    },
    {
        question: "¿Qué Convenio protege el emblema de la Cruz Roja?",
        options: ["Convenio de Viena", "Convenio de Ginebra", "Convenio de París", "Convenio de Nueva York"],
        answer: 1,
        feedback: "✅ Correcto! Los Convenios de Ginebra protegen los emblemas.",
        level: "Difícil",
        prize: 125000
    },
    {
        question: "¿Qué hace el Banco de Sangre de la Cruz Roja?",
        options: ["Vender sangre", "Investigar enfermedades", "Recolectar y distribuir sangre segura", "Fabricar medicinas"],
        answer: 2,
        feedback: "✅ Correcto! Garantiza suministros de sangre segura para emergencias.",
        level: "Medio",
        prize: 250000
    },
    {
        question: "¿Qué principio asegura que la Cruz Roja no depende de gobiernos?",
        options: ["Independencia", "Neutralidad", "Imparcialidad", "Voluntariado"],
        answer: 0,
        feedback: "✅ Correcto! La Independencia garantiza autonomía operativa.",
        level: "Medio",
        prize: 500000
    },
    {
        question: "¿Cuál NO es un principio de la Cruz Roja?",
        options: ["Humanidad", "Lucro", "Voluntariado", "Universalidad"],
        answer: 1,
        feedback: "✅ Correcto! El lucro no es un principio (los 7 son: Humanidad, Imparcialidad, Neutralidad, Independencia, Voluntariado, Unidad y Universalidad).",
        level: "Difícil",
        prize: 1000000
    },
    // Continúa con más preguntas...
    {
        question: "¿Qué país alberga la sede del CICR?",
        options: ["Francia", "Suiza", "Bélgica", "Estados Unidos"],
        answer: 1,
        feedback: "✅ Correcto! La sede está en Ginebra, Suiza.",
        level: "Fácil",
        prize: 2000
    },
    {
        question: "¿Qué actividad NO realiza la Cruz Roja?",
        options: ["Ayuda en desastres", "Entrenamiento militar", "Primeros auxilios", "Promoción de DIH"],
        answer: 1,
        feedback: "✅ Correcto! La Cruz Roja es neutral y no realiza entrenamiento militar.",
        level: "Fácil",
        prize: 4000
    },
    {
        question: "¿En qué conflicto se originó la idea de la Cruz Roja?",
        options: ["Guerra Franco-Prusiana", "Batalla de Solferino", "Guerra de Crimea", "WWI"],
        answer: 1,
        feedback: "✅ Correcto! Henry Dunant quedó impactado por la Batalla de Solferino (1859).",
        level: "Medio",
        prize: 8000
    },
    {
        question: "¿Qué significa DIH?",
        options: ["Derecho Internacional Humanitario", "Derecho Institucional Humano", "Deber Internacional Humanitario", "Documento de Intervención Humanitaria"],
        answer: 0,
        feedback: "✅ Correcto! El DIH regula conflictos armados para proteger a no combatientes.",
        level: "Medio",
        prize: 16000
    },
    {
        question: "¿Qué Cruz Roja tiene más voluntarios en el mundo?",
        options: ["Estados Unidos", "Alemania", "Japón", "Reino Unido"],
        answer: 0,
        feedback: "✅ Correcto! La Cruz Roja Americana tiene unos 300,000 voluntarios.",
        level: "Difícil",
        prize: 32000
    },
    {
        question: "¿Qué día se celebra el Día Mundial de la Cruz Roja?",
        options: ["8 de mayo", "12 de agosto", "24 de junio", "10 de diciembre"],
        answer: 0,
        feedback: "✅ Correcto! Se celebra el natalicio de Henry Dunant (8 mayo 1828).",
        level: "Fácil",
        prize: 64000
    },
    {
        question: "¿Qué Cruz Roja nacional es la más antigua?",
        options: ["Suiza", "Francia", "Bélgica", "España"],
        answer: 2,
        feedback: "✅ Correcto! La Cruz Roja de Bélgica se fundó en 1864.",
        level: "Difícil",
        prize: 125000
    },
    {
        question: "¿Qué porcentaje de trabajadores de la Cruz Roja son voluntarios?",
        options: ["30%", "50%", "80%", "97%"],
        answer: 3,
        feedback: "✅ Correcto! El 97% del personal son voluntarios no remunerados.",
        level: "Difícil",
        prize: 250000
    },
    {
        question: "¿Qué premio NO ha recibido el CICR?",
        options: ["Nobel de la Paz", "Premio Balzan", "Premio Príncipe de Asturias", "Premio Turing"],
        answer: 3,
        feedback: "✅ Correcto! El Premio Turing es para ciencias computacionales.",
        level: "Difícil",
        prize: 500000
    },
    // Más preguntas...
    {
        question: "¿Cuál es el lema de la Cruz Roja Ecuatoriana?",
        options: ["Servir sin límites", "Humanidad en acción", "Trabajando por la paz", "Ninguno oficial"],
        answer: 3,
        feedback: "✅ Correcto! La Cruz Roja no tiene un lema oficial global.",
        level: "Difícil",
        prize: 1000000
    },
    {
        question: "¿Qué edad mínima se necesita para ser voluntario?",
        options: ["16 años", "18 años", "21 años", "No hay límite"],
        answer: 1,
        feedback: "✅ Correcto! Aunque algunas actividades permiten desde 16 con autorización.",
        level: "Fácil",
        prize: 2000
    },
    {
        question: "¿Qué servicio ofrece la Cruz Roja a migrantes?",
        options: ["Asesoría legal", "Alojamiento permanente", "Trabajo garantizado", "Pasajes gratuitos"],
        answer: 0,
        feedback: "✅ Correcto! Ofrece información, primeros auxilios y contacto familiar.",
        level: "Medio",
        prize: 4000
    },
    {
        question: "¿Qué vacuna NO aplica típicamente la Cruz Roja?",
        options: ["COVID-19", "Malaria", "Sarampión", "Influenza"],
        answer: 1,
        feedback: "✅ Correcto! No existe vacuna para malaria (sí prevención y tratamiento).",
        level: "Difícil",
        prize: 8000
    },
    {
        question: "¿Qué hace la Cruz Roja en cárceles?",
        options: ["Visita detenidos", "Entrena guardias", "Construye prisiones", "No interviene"],
        answer: 0,
        feedback: "✅ Correcto! Supervisa condiciones de detención según DIH.",
        level: "Medio",
        prize: 16000
    },
    // Continúa hasta completar 50...
    {
        question: "¿Qué país NO usa la Media Luna Roja?",
        options: ["Pakistán", "Turquía", "Indonesia", "Israel"],
        answer: 3,
        feedback: "✅ Correcto! Israel usa el Cristal Rojo (Magen David Adom).",
        level: "Difícil",
        prize: 32000
    },
    {
        question: "¿Cuántas personas ayuda anualmente la Cruz Roja mundial?",
        options: ["10 millones", "50 millones", "160 millones", "300 millones"],
        answer: 2,
        feedback: "✅ Correcto! Aproximadamente 160 millones de personas anuales.",
        level: "Difícil",
        prize: 64000
    },
    {
        question: "¿Qué hace la Cruz Roja en zonas de guerra?",
        options: ["Evacuar civiles", "Distribuir armas", "Mediar negociaciones", "Entrenar soldados"],
        answer: 0,
        feedback: "✅ Correcto! Protege civiles, heridos y detenidos según DIH.",
        level: "Medio",
        prize: 125000
    },
    {
        question: "¿Qué requisito NO es para ser voluntario?",
        options: ["Ser mayor de edad", "Título universitario", "Disponibilidad", "Valores humanitarios"],
        answer: 1,
        feedback: "✅ Correcto! No se requiere título, solo compromiso humanitario.",
        level: "Fácil",
        prize: 250000
    },
    {
        question: "¿Qué símbolo usó la URSS para su Cruz Roja?",
        options: ["Cruz roja", "Media luna y estrella", "Hoz y martillo rojos", "Sol rojo"],
        answer: 2,
        feedback: "✅ Correcto! Usó la hoz y martillo entre 1923-1991.",
        level: "Difícil",
        prize: 500000
    },
    // Últimas preguntas...
    {
        question: "¿Qué presidente ecuatoriano apoyó fundar la Cruz Roja nacional?",
        options: ["García Moreno", "Eloy Alfaro", "Leonidas Plaza", "Vicente Rocafuerte"],
        answer: 1,
        feedback: "✅ Correcto! Alfaro apoyó su creación en 1910.",
        level: "Difícil",
        prize: 1000000
    },

{
  question: "¿Qué colores predominan en el logotipo de la Cruz Roja?",
  options: ["Rojo y blanco", "Azul y blanco", "Verde y rojo", "Negro y rojo"],
  answer: 0,
  feedback: "✅ Correcto! El logotipo de la Cruz Roja es una cruz roja sobre fondo blanco.",
  level: "Fácil",
  prize: 100000
},
{
  question: "¿Cuál es el nombre del fundador del Movimiento de la Cruz Roja?",
  options: ["Jean Piaget", "Henry Dunant", "Albert Einstein", "Louis Pasteur"],
  answer: 1,
  feedback: "✅ Correcto! Henry Dunant fundó la Cruz Roja tras presenciar la batalla de Solferino en 1859.",
  level: "Medio",
  prize: 200000
},
{
  question: "¿Cuál de estos no es un principio fundamental de la Cruz Roja?",
  options: ["Neutralidad", "Imparcialidad", "Reciprocidad", "Humanidad"],
  answer: 2,
  feedback: "✅ Correcto! Reciprocidad no es un principio de la Cruz Roja; los principios clave incluyen neutralidad, imparcialidad y humanidad.",
  level: "Difícil",
  prize: 500000
},
{
  question: "¿Qué emblema alternativo se usa en algunos países en lugar de la cruz roja?",
  options: ["Cruz verde", "Media luna roja", "Cruz negra", "Estrella azul"],
  answer: 1,
  feedback: "✅ Correcto! La Media Luna Roja se utiliza en países islámicos como emblema alternativo.",
  level: "Medio",
  prize: 200000
},
{
  question: "¿Cuál es la sede del Comité Internacional de la Cruz Roja (CICR)?",
  options: ["París", "Ginebra", "Nueva York", "Roma"],
  answer: 1,
  feedback: "✅ Correcto! La sede del CICR se encuentra en Ginebra, Suiza.",
  level: "Fácil",
  prize: 100000
},
{
  question: "¿Qué significa el principio de neutralidad?",
  options: [
    "Brindar ayuda solo a ciertos grupos",
    "No intervenir en controversias políticas o religiosas",
    "No colaborar con gobiernos",
    "Evitar la ayuda en conflictos armados"
  ],
  answer: 1,
  feedback: "✅ Correcto! La neutralidad implica no tomar partido en controversias políticas, raciales, religiosas o ideológicas.",
  level: "Medio",
  prize: 200000
},
{
  question: "¿En qué año se fundó la Cruz Roja Ecuatoriana?",
  options: ["1907", "1920", "1932", "1945"],
  answer: 2,
  feedback: "✅ Correcto! La Cruz Roja Ecuatoriana fue fundada en 1932.",
  level: "Medio",
  prize: 200000
},
{
  question: "¿Qué servicio NO ofrece típicamente la Cruz Roja en Ecuador?",
  options: ["Transporte escolar", "Banco de sangre", "Atención prehospitalaria", "Capacitación en primeros auxilios"],
  answer: 0,
  feedback: "✅ Correcto! La Cruz Roja Ecuatoriana no ofrece transporte escolar como uno de sus servicios principales.",
  level: "Fácil",
  prize: 100000
},
{
  question: "¿Cuál es el símbolo oficial de la Cruz Roja Ecuatoriana?",
  options: ["Una cruz azul", "Una media luna roja", "Una cruz roja sobre fondo blanco", "Un corazón rojo"],
  answer: 2,
  feedback: "✅ Correcto! El símbolo es una cruz roja sobre fondo blanco, igual que el emblema internacional.",
  level: "Fácil",
  prize: 100000
},
{
  question: "¿Cuál es el objetivo principal de la Cruz Roja en situaciones de desastre?",
  options: [
    "Distribuir panfletos",
    "Proveer asistencia humanitaria neutral e imparcial",
    "Reunir firmas para peticiones políticas",
    "Vender productos de primeros auxilios"
  ],
  answer: 1,
  feedback: "✅ Correcto! El objetivo principal es proporcionar asistencia humanitaria neutral e imparcial.",
  level: "Difícil",
  prize: 500000
}

   ];

// Variables del juego
let currentQuestions = [];
let currentQuestion = 0;
let score = 0;
let totalPrize = 0;
let gameActive = true;
let lifelines = {
    fiftyFifty: true,
    audienceHelp: true,
    phoneFriend: true
};
let timer;
let timeLeft = 30;

// Elementos del DOM
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');
const progressBar = document.getElementById('progress-bar');
const fiftyFiftyBtn = document.getElementById('fifty-fifty');
const audienceHelpBtn = document.getElementById('audience-help');
const phoneFriendBtn = document.getElementById('phone-friend');
const prizeDisplay = document.getElementById('prize-display');
const prizeAmount = document.getElementById('prize-amount');
const prizeLevel = document.getElementById('prize-level');
const restartBtn = document.getElementById('restart-btn');
const bgMusic = document.getElementById('background-music');
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');
const lifelineSound = document.getElementById('lifeline-sound');
const startScreen = document.getElementById('start-screen');
const container = document.querySelector('.container');
const startGameBtn = document.getElementById('start-game');
const timerContainer = document.getElementById('timer-container');
const timerBar = document.getElementById('timer-bar');
const difficultyIndicator = document.getElementById('difficulty-indicator');

// Función para mezclar preguntas
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Mostrar pregunta actual
function showQuestion() {
    if (currentQuestion < currentQuestions.length && gameActive) {
        const question = currentQuestions[currentQuestion];
        questionElement.textContent = `${currentQuestion + 1}. ${question.question}`;
        
        progressBar.style.width = `${((currentQuestion + 1) / currentQuestions.length) * 100}%`;
        optionsElement.innerHTML = '';
        
        // Mostrar indicador de dificultad
        difficultyIndicator.textContent = `Dificultad: ${question.level}`;
        if (question.level === "Fácil") {
            difficultyIndicator.style.color = "#32CD32";
        } else if (question.level === "Medio") {
            difficultyIndicator.style.color = "#FFD700";
        } else {
            difficultyIndicator.style.color = "#FF4500";
        }
        
        const letters = ['A', 'B', 'C', 'D'];
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.className = 'option';
            button.dataset.letter = letters[index];
            button.onclick = () => checkAnswer(index);
            optionsElement.appendChild(button);
        });
        
        feedbackElement.textContent = '';
        feedbackElement.style.color = '#FFD700';
        nextButton.disabled = true;
        updatePrize();
        
        // Iniciar temporizador
        startTimer();
    } else {
        endGame();
    }
}

// Iniciar temporizador
function startTimer() {
    clearInterval(timer);
    timeLeft = 30;
    timerBar.style.width = '100%';
    timerBar.style.backgroundColor = '#FF4500';
    timerContainer.style.display = 'block';
    
    timer = setInterval(() => {
        timeLeft--;
        timerBar.style.width = `${(timeLeft / 30) * 100}%`;
        
        // Cambiar color según el tiempo restante
        if (timeLeft <= 10) {
            timerBar.style.backgroundColor = '#FF0000';
            timerBar.style.animation = 'pulse 0.5s infinite alternate';
        } else if (timeLeft <= 20) {
            timerBar.style.backgroundColor = '#FF8C00';
            timerBar.style.animation = 'none';
        }
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            timeUp();
        }
    }, 1000);
}

// Tiempo agotado
function timeUp() {
    if (!gameActive) return;
    
    const question = currentQuestions[currentQuestion];
    const options = document.querySelectorAll('.option');
    
    options.forEach(option => {
        option.onclick = null;
        option.style.cursor = 'default';
    });
    
    options[question.answer].classList.add('correct');
    feedbackElement.textContent = "⏰ Tiempo agotado. La respuesta correcta era: " + question.options[question.answer];
    feedbackElement.style.color = '#FF0000';
    wrongSound.play().catch(e => console.log(e));
    
    gameActive = false;
    totalPrize = 0;
    setTimeout(() => {
        endGame();
    }, 3000);
}

// Actualizar premio
function updatePrize() {
    if (currentQuestion < currentQuestions.length) {
        totalPrize = currentQuestions[currentQuestion].prize;
        prizeAmount.textContent = `$${totalPrize.toLocaleString()}`;
        prizeLevel.textContent = `Nivel: ${currentQuestion + 1}`;
        
        if (currentQuestion === 6) {
            prizeDisplay.style.borderColor = '#32CD32';
            prizeLevel.style.color = '#32CD32';
        } else if (currentQuestion === 14) {
            prizeDisplay.style.borderColor = '#FFD700';
            prizeLevel.style.color = '#FFD700';
        } else {
            prizeDisplay.style.borderColor = '#FFD700';
            prizeLevel.style.color = '#32CD32';
        }
    }
}

// Verificar respuesta seleccionada
function checkAnswer(selectedIndex) {
    if (!gameActive) return;
    
    clearInterval(timer);
    timerContainer.style.display = 'none';
    
    const question = currentQuestions[currentQuestion];
    const options = document.querySelectorAll('.option');
    
    options.forEach(option => {
        option.onclick = null;
        option.style.cursor = 'default';
    });
    
    if (selectedIndex === question.answer) {
        options[selectedIndex].classList.add('correct');
        score++;
        totalPrize = question.prize;
        scoreElement.textContent = `Puntaje: ${score}`;
        feedbackElement.textContent = question.feedback;
        feedbackElement.style.color = '#32CD32';
        correctSound.play().catch(e => console.log(e));
        
        nextButton.disabled = false;
    } else {
        options[selectedIndex].classList.add('incorrect');
        options[question.answer].classList.add('correct');
        feedbackElement.textContent = `❌ Incorrecto. La respuesta correcta era: ${question.options[question.answer]}`;
        feedbackElement.style.color = '#FF0000';
        wrongSound.play().catch(e => console.log(e));
        
        gameActive = false;
        totalPrize = 0;
        setTimeout(() => {
            endGame();
        }, 3000);
    }
    
    prizeAmount.textContent = `$${totalPrize.toLocaleString()}`;
}

// Comodín 50:50
fiftyFiftyBtn.onclick = function() {
    if (lifelines.fiftyFifty && gameActive) {
        const question = currentQuestions[currentQuestion];
        const options = document.querySelectorAll('.option');
        let incorrectOptions = [];
        
        for (let i = 0; i < options.length; i++) {
            if (i !== question.answer) {
                incorrectOptions.push(i);
            }
        }
        
        incorrectOptions = shuffleQuestions(incorrectOptions);
        for (let i = 0; i < 2; i++) {
            options[incorrectOptions[i]].textContent = '';
            options[incorrectOptions[i]].style.visibility = 'hidden';
        }
        
        lifelines.fiftyFifty = false;
        this.disabled = true;
        lifelineSound.play().catch(e => console.log(e));
    }
};

// Comodín ayuda del público
audienceHelpBtn.onclick = function() {
    if (lifelines.audienceHelp && gameActive) {
        const question = currentQuestions[currentQuestion];
        let percentages = [0, 0, 0, 0];
        
        percentages[question.answer] = 70;
        
        let remaining = 30;
        for (let i = 0; i < percentages.length; i++) {
            if (i !== question.answer) {
                const randomPercent = Math.floor(Math.random() * remaining);
                percentages[i] = randomPercent;
                remaining -= randomPercent;
            }
        }
        
        if (remaining > 0) {
            const randomIndex = Math.floor(Math.random() * 4);
            if (randomIndex !== question.answer) {
                percentages[randomIndex] += remaining;
            }
        }
        
        let message = "EL PÚBLICO OPINA:\n\n";
        const letters = ['A', 'B', 'C', 'D'];
        const options = document.querySelectorAll('.option');
        
        question.options.forEach((option, index) => {
            if (options[index].style.visibility !== 'hidden') {
                const bar = '■'.repeat(Math.round(percentages[index]/5));
                message += `${letters[index]}: ${bar} ${percentages[index]}%\n`;
            }
        });
        
        alert(message);
        lifelines.audienceHelp = false;
        this.disabled = true;
        lifelineSound.play().catch(e => console.log(e));
    }
};

// Comodín llamada a un amigo
phoneFriendBtn.onclick = function() {
    if (lifelines.phoneFriend && gameActive) {
        const question = currentQuestions[currentQuestion];
        let answer;
        const options = document.querySelectorAll('.option');
        const availableOptions = [];
        
        for (let i = 0; i < options.length; i++) {
            if (options[i].style.visibility !== 'hidden') {
                availableOptions.push(i);
            }
        }
        
        if (availableOptions.includes(question.answer) && Math.random() < 0.8) {
            answer = `Estoy seguro que es: ${question.options[question.answer]}`;
        } else {
            const randomOption = availableOptions[Math.floor(Math.random() * availableOptions.length)];
            answer = `Creo que es: ${question.options[randomOption]}... pero no estoy seguro`;
        }
        
        alert(`LLAMANDO A TU AMIGO...\n\n"${answer}"`);
        lifelines.phoneFriend = false;
        this.disabled = true;
        lifelineSound.play().catch(e => console.log(e));
    }
};

// Siguiente pregunta
nextButton.onclick = function() {
    if (!gameActive) return;
    
    currentQuestion++;
    showQuestion();
    updateLifelines();
};

// Finalizar juego
function endGame() {
    clearInterval(timer);
    questionElement.textContent = "¡Juego terminado!";
    optionsElement.innerHTML = '';
    
    let maxPrize = 0;
    if (score > 0 && score <= currentQuestions.length) {
        maxPrize = currentQuestions[score-1].prize;
    }
    
    feedbackElement.innerHTML = 
        `<div style="margin-bottom: 15px;">Respuestas correctas: <strong>${score}/${currentQuestions.length}</strong></div>
        <div style="font-size: 1.5em; color: #FFD700; margin-bottom: 15px;">Premio ganado: <strong>$${maxPrize.toLocaleString()}</strong></div>
        <div>${getFinalMessage()}</div>`
    ;
    
    nextButton.style.display = 'none';
    document.querySelector('.lifelines').style.display = 'none';
    restartBtn.style.display = 'block';
    gameActive = false;
    timerContainer.style.display = 'none';
    
    restartBtn.onclick = () => {
        startScreen.style.display = 'flex';
        container.style.display = 'none';
    };
}

// Actualizar estado de los comodines
function updateLifelines() {
    fiftyFiftyBtn.disabled = !lifelines.fiftyFifty || !gameActive;
    audienceHelpBtn.disabled = !lifelines.audienceHelp || !gameActive;
    phoneFriendBtn.disabled = !lifelines.phoneFriend || !gameActive;
}

// Mensaje final según puntaje
function getFinalMessage() {
    const percentage = (score / currentQuestions.length) * 100;
    
    if (percentage >= 90) {
        return "¡FELICITACIONES! Eres un experto en la Cruz Roja Ecuatoriana. 🎉";
    } else if (percentage >= 70) {
        return "¡MUY BIEN! Tienes un conocimiento sólido sobre la Cruz Roja Ecuatoriana. 👍";
    } else if (percentage >= 50) {
        return "¡BUEN INTENTO! Sigue aprendiendo sobre esta importante organización. 💪";
    } else {
        return "¡SIGUE PRACTICANDO! La Cruz Roja Ecuatoriana es un tema fascinante que vale la pena conocer. 📚";
    }
}

// Inicializar el juego
function initGame() {
    // Seleccionar 20 preguntas aleatorias
    const shuffledQuestions = shuffleQuestions([...allQuestions]);
    currentQuestions = shuffledQuestions.slice(0, 20);
    
    currentQuestion = 0;
    score = 0;
    totalPrize = 0;
    gameActive = true;
    lifelines = {
        fiftyFifty: true,
        audienceHelp: true,
        phoneFriend: true
    };
    
    startScreen.style.display = 'none';
    container.style.display = 'block';
    
    showQuestion();
    updateLifelines();
    updatePrize();
    restartBtn.style.display = 'none';
    nextButton.style.display = 'block';
    document.querySelector('.lifelines').style.display = 'flex';
    scoreElement.textContent = `Puntaje: ${score}`;
    
    bgMusic.currentTime = 0;
    bgMusic.play().catch(e => console.log(e));
}

// Event listener para el botón de inicio
startGameBtn.addEventListener('click', initGame);

// Configurar música y mostrar pantalla de inicio al cargar
window.onload = () => {
    startScreen.style.display = 'flex';
    container.style.display = 'none';
    
    bgMusic.volume = 0.3;
    document.addEventListener('click', function() {
        bgMusic.play().catch(e => console.log("Auto-play prevented: ", e));
    }, { once: true });
};