function getEle(id) {
  return document.getElementById(id);
}
const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

let changeColor = (item,index) => {
  for (let i = 0; i < colorList.length; i++) {
    document.getElementsByClassName("color-button")[i].classList.remove("active");
    getEle("house").classList.remove(colorList[i]);
  }
  document.getElementsByClassName("color-button")[index].classList.add("active");
  getEle("house").classList.add(item);
}

let content = "";
colorList.forEach((item, index) => {
  content += `
    <button class="color-button ${item}" onclick="changeColor('${item}',${index})"></button>
    `;
});
getEle("colorContainer").innerHTML = content;
document.getElementsByClassName("color-button")[0].classList.add("active");


