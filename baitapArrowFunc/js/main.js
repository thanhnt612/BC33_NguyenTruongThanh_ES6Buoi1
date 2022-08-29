const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

let renderButton = (colors) => {
  let output = "";
  for (let index = 0; index < colors.length; index++) {
    let color = colors[index];
    console.log(color);
    output += `
      <button class="color-button ${color}" 
      onclick="changeColor('${color}')"
      ></button>
      `;
  }
  document.querySelector("#colorContainer").innerHTML = output;
};
renderButton(colorList);

window.changeColor = (color) => {
  console.log(color);
  let house = document.querySelector("#house");
  console.log(house);
  house.className = "house" + " " + color;
};
