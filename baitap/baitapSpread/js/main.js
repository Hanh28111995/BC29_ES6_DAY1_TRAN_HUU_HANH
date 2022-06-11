function getEle(id) {
    return document.getElementById(id);
  }
  let cont = getEle('t').innerText;  
  let chars=[... cont];
  let content = "";
  chars.forEach((item, index) => {
    content += `
      <span>${item}</span>
      `;
  });
  getEle("t").innerHTML = content;


  
