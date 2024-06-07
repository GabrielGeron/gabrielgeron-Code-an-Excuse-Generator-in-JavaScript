import "./style.css";

window.onload = function() {
  const who = ["The dog", "My grandma", "The mailman", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "my phone", "the car"];
  const when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  const getRandomElement = arr => {
    if (!Array.isArray(arr) || arr.length === 0) {
      throw new Error("Invalid array");
    }
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const generateExcuse = () => {
    const excuse = `${getRandomElement(who)} ${getRandomElement(
      action
    )} ${getRandomElement(what)} ${getRandomElement(when)}`;
    return excuse;
  };

  const excuseElement = document.getElementById("excuse");

  // Verificar si es la primera carga
  if (localStorage.getItem("firstLoad") === null) {
    // Establecer la bandera de primera carga
    localStorage.setItem("firstLoad", "false");
  } else {
    // Generar y mostrar una nueva excusa

    excuseElement.innerHTML = generateExcuse();
  }
};
