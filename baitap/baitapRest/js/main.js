function getEle(id) {
  return document.getElementById(id);
}

const restParamsFunc = (...numbers) => {
  let total = 0;
  let TB  = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  TB = total/(numbers.length);
  return TB;
};


getEle('btnKhoi1').onclick = function(){
  let Đtoan = parseFloat(getEle('inpToan').value);
  let Đly = parseFloat(getEle('inpLy').value);
  let Đhoa = parseFloat(getEle('inpHoa').value);
  const totalRestParams = restParamsFunc(Đtoan, Đly, Đhoa);
  getEle('tbKhoi1').innerHTML = totalRestParams.toFixed(2);
};
getEle('btnKhoi2').onclick = function(){
  let Đvan = parseFloat(getEle('inpVan').value);
  let Đsu = parseFloat(getEle('inpSu').value);
  let Đdia = parseFloat(getEle('inpDia').value);
  let Eng = parseFloat(getEle('inpEnglish').value);
  const totalRestParams = restParamsFunc(Đvan, Đsu, Đdia, Eng);
  getEle('tbKhoi2').innerHTML = totalRestParams.toFixed(2);
};