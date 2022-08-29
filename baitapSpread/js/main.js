// let str = "foo";
// let chars = [...str];
// console.log(chars);
let hover = () => {
  let heading = document.querySelector(".heading").textContent;
  let chars = [...heading];
  console.log(chars);
  let html = "";
  for (let index = 0; index < chars.length; index++) {
    let zoom = chars[index];
    console.log(zoom);
    html += `
      <span>${zoom}</span>
    `;
  }
  document.querySelector(".heading").innerHTML = html;
};
hover();
