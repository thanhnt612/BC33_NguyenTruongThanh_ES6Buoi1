document.querySelector("#btnKhoi1").onclick = () => {
  let diemToan = document.querySelector("#inpToan").value * 1;
  let diemLy = document.querySelector("#inpLy").value * 1;
  let diemHoa = document.querySelector("#inpHoa").value * 1;
  document.querySelector("#tbKhoi1").innerHTML = diemTB(
    diemToan,
    diemLy,
    diemHoa
  );
};
document.querySelector("#btnKhoi2").onclick = () => {
  let diemVan = document.querySelector("#inpVan").value * 1;
  let diemSu = document.querySelector("#inpSu").value * 1;
  let diemDia = document.querySelector("#inpDia").value * 1;
  let diemTA = document.querySelector("#inpEnglish").value * 1;
  document.querySelector("#tbKhoi2").innerHTML = diemTB(
    diemVan,
    diemSu,
    diemDia,
    diemTA
  );
};
let diemTB = (...restParam) => {
  switch (restParam.length) {
    case 3:
      {
        return (restParam[0] + restParam[1] + restParam[2]) / restParam.length;
      }
      break;
    case 4:
      {
        return (
          (restParam[0] + restParam[1] + restParam[2] + restParam[3]) /
          restParam.length
        );
      }
      break;
    default:
      break;
  }
};
