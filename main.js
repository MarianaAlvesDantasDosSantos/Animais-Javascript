async function executar() {
  if (await perguntar("É mamifero?")) {
    if (await perguntar("É quadrupede?")) {
      if (await perguntar("É carnivoro? ")) {
        resposta("É o LEÃO");
      } else if (await perguntar("É herbivoro?")) {
        resposta("É o CAVALO");
      } else {
        resposta("");
      }
    } else if (await perguntar("É bipede?")) {
      if (await perguntar("É onívoro? ")) {
        resposta("É o HUMANO");
      } else if (await perguntar("É frutífero? ")) {
        resposta("É o MACACO");
      } else {
        resposta("");
      }
    } else if (await perguntar("É voador?")) {
      resposta("É MORCEGO ");
    } else if (await perguntar("É aquático?")) {
      resposta("É BALEIA ");
    } else {
      resposta("");
    }
  } else if (await perguntar("É ave?")) {
    if (await perguntar("É não-voador?")) {
      if (await perguntar("É tropical? ")) {
        resposta("É AVESTRUZ ");
      } else if (await perguntar("É polar?")) {
        resposta("É PINGUIM ");
      } else {
        resposta("");
      }
    } else if (await perguntar("É aquático?")) {
      resposta("É PATO");
    } else if (await perguntar("É de rapina?")) {
      resposta("É ÁGUIA");
    } else {
      resposta("");
    }
  } else if (await perguntar("É réptil?")) {
    if (await perguntar("tem casco?")) {
      resposta("É TARTARUGA ");
    } else if (await perguntar("É carnívoro? ")) {
      resposta("É CROCODILO ");
    } else if (await perguntar(" não tem patas? ")) {
      resposta("É COBRA ");
    } else {
      resposta("");
    }
  } else {
    resposta("");
  }
}


async function perguntar(texto) {
  const result = await Swal.fire({
    title: texto,
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sim",
    cancelButtonText: "Não"
  });
  return result.isConfirmed;
}

function resposta(texto) {
  if (texto !== "") {
    Swal.fire({
      title: texto,
      icon: "success"
    });
  } else {
    Swal.fire({
      title: "Animal não encontrado!",
      icon: "error"
    });
  }
}