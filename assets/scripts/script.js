let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let emailOk = false;
let nomeOk = false;
let assuntoOk = false;

nome.style.width = "100%";
email.style.width = "100%";

function validaNome() {
  let txt = document.querySelector("#txt-nome");
  if (nome.value.length < 3) {
    txt.innerHTML = `Invalid Name`;
    txt.style.color = "red";
  } else {
    txt.innerHTML = `Name Validated`;
    txt.style.color = `green`;
    nomeOk = true;
  }
}

const validaEmail = () => {
  let txtemail = document.querySelector(`#txt-email`);
  if (email.value.indexOf(`@`) == -1 || email.value.indexOf(`.`) == -1) {
    txtemail.innerHTML = `Invalid Email`;
    txtemail.style.color = `red`;
  } else {
    txtemail.innerHTML = `Email Validated`;
    txtemail.style.color = `green`;
    emailOk = true;
  }
};

const validaAssunto = () => {
  let txtAssunto = document.querySelector(`#txt-assunto`);

  if (assunto.value.length >= 100) {
    txtAssunto.innerHTML = `- ${assunto.value.length - 100}`;
    txtAssunto.style.color = `red`;
    txtAssunto.style.display = `block`;
  } else {
    txtAssunto.style.display = `none`;
    assuntoOk = true;
  }
};

function enviar() {
  if (emailOk && nomeOk && assuntoOk) {
    alert(`Formulario enviado com sucesso!!`);
  } else {
    alert(`Preencha todos os campos corretamente!`);
  }
}
