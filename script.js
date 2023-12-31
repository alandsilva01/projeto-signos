function enviar() {
    var data = new Date(document.getElementById("data-nascimento").value);
    var mes = data.getMonth() + 1;
    var dia = data.getDate();

    var signo ="";

    if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
        signo = "➠Aquário♒";
      } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
        signo = "➠Peixes♓";
      } else if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
        signo = "➠Áries♈";
      } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
        signo = "➠Touro♉";
      } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
        signo = "➠Gêmeos♊";
      } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
        signo = "➠Câncer♋";
      } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
        signo = "➠Leão♌";
      } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
        signo = "➠Virgem♍";
      } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
        signo = "➠Libra♎";
      } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
        signo = "➠Escorpião♏";
      } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
        signo = "➠Sagitário♐";
      } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
        signo = "➠Capricórnio♑";
      } else {
        signo = "Data de nascimento inválida.☹";
      }

      document.getElementById("res").innerHTML = "<span class= 'textores'>Seu signo é:</span><span class='link-signo' onclick='redirecionar()'>" + signo + "</span>";
      document.getElementById("res").dataset.signo = signo;
}

function redirecionar() {
  var signo = document.getElementById("res").dataset.signo;

  switch (signo) {
    case "Aquário":
      window.location.href = "aquario.html";
      break;
    case "Peixes":
      window.location.href = "peixes.html";
      break;
    case "Áries":
      window.location.href = "aries.html";
      break;
    case "Touro":
      window.location.href = "touro.html";
      break;
    case "Gêmeos":
      window.location.href = "gemeos.html";
      break;
    case "Câncer":
      window.location.href = "cancer.html";
      break;
    case "Leão":
      window.location.href = "leao.html";
      break;
    case "Virgem":
      window.location.href = "virgem.html";
      break;
    case "Libra":
      window.location.href = "libra.html";
      break;
    case "➠Escorpião♏":
      window.location.href = "escorpiao.html";
      break;
    case "Sagitário":
      window.location.href = "sagitario.html";
      break;
    case "Capricórnio":
      window.location.href = "capricornio.html";
      break;
    default:
      // Lidar com um caso inválido ou padrão
      break;
  }
}
