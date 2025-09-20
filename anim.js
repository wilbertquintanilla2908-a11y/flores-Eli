// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Despacio, niña loca/Slow down, you crazy child ", time: 14 },
  { text: "Eres muy ambiciosa para una joven/You're so ambitious for a juvenile", time: 15 },
  { text: "Pero si eres tan inteligente/But then if you're so smart", time: 18 },
  { text: "Dime ¿por qué sigues tan asustada?/Tell me why are you still so afraid?", time: 20 },
  { text: "¿Dónde es el incendio? Por qué tanta prisa?/Where's the fire What's the hurry about??", time: 30 },
  { text: "Será mejor que te calmes antes de consumirte/You better cool it off before you burn it out", time: 32 },
  { text: "Tienes tanto que hacer y solo unas pocas horas en un día/You got so much to do and only so many hours in a day", time: 35 },
  { text: "Pero sabes que cuando la verdad está dicha/But you know that when the truth is told", time: 44 },
  { text: "Puedes lograr lo que quieras o puedes solo envejecer/That you can get what you want or you can just get old", time: 47 },
  { text: "Vas a comenzar antes de siquiera llegar a la mitad/You're gonna kick off before you even get halfway through", time: 51 },
  { text: "¿Cuándo te darás cuenta? Viena te espera/When will you realize Vienna waits for you?", time: 59 },
  { text: "Despacio, vas bien/Slow down, you're doing fine", time: 67 },
  { text: "No puedes ser todo lo que quieres antes del tiempo/You can't be everything you wanna be before your time", time: 69 },
  { text: "Aunque suene tan romántico en el límite esta noche/Although it's so romantic on the borderline tonight", time: 75 },
  { text: "Esta noche/Tonight", time: 80 },
  { text: "Es una lástima, pero es la vida que llevas/Too bad, but it's the life you lead", time: 81 },
  { text: "Estás tan adelantada que olvidaste lo que necesitas/You're so ahead of yourself that you forgot what you need", time: 85 },
  { text: "Aunque puedes ver cuando te equivocas/Though you can see when you're wrong", time: 87 },
  { text: "Sabes, no siempre puedes ver cuándo tienes razón/You know, you can't always see when you're right", time: 89 },
  { text: "Tienes razón/You're right", time: 93 },
  { text: "Tienes tu pasión, tienes tu Orgullo/You've got your passion, you've got your pride", time: 96 },
  { text: "¿Pero no sabes que solo los tontos están satisfechos?/But don't you know that only fools are satisfied?", time: 100 },
  { text: "Sigue soñando, pero no imagines que todos los sueños se harán realidad/Dream on, but don't imagine they'll all come true", time: 104 },
  { text: "¿Cuándo te darás cuenta? Viena te espera/When will you realize Vienna waits for you?", time: 112 },
  { text: "Despacio, niña loca/Slow down, you crazy child", time: 138 },
  { text: "Apaga el teléfono y desaparezca por un momento/And take the phone off the hook and disappear for a while", time: 142 },
  { text: "Está todo bien, puedes permitirse perder un día o dos/It's all right, you can afford to lose a day or two", time: 146 },
  { text: "¿Cuándo te darás cuenta? Viena te espera/When will you realize Vienna waits for you?", time: 150 },
  { text: "Sabes que cuando la verdad está dicha/You know that when the truth is told", time: 154 },
  { text: "Puedes lograr lo que quieras o puedes solo envejecer/That you can get what you want or you can just get old", time: 160 },
  { text: "Vas a comenzar antes de siquiera llegar a la mitad/You're gonna kick off before you even get halfway through", time: 164 },
  { text: "¿Por qué no te das cuenta? Viena te espera/Why don't you realize Vienna waits for you?", time: 170 },
  { text: "¿Cuándo te darás cuenta? Viena te espera/When will you realize Vienna waits for you", time: 174 },
  { text: "I Love You Elisma.", time: 178 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
