function CI(idade) {
    if (idade >= 5 && idade <= 7) {
        return "Infantil A";
    } else if (idade >= 8 && idade <= 10) {
        return "Infantil B";
    } else if (idade >= 11 && idade <= 13) {
        return "Juvenil A";
    } else if (idade >= 14 && idade <= 17) {
        return "Juvenil B";
    } else if (idade >= 18) {
        return "Adulto";
    } else {
        return "Idade inválida";
    }
}
function TestarPCD() {
    const casoT = {
        6: "Infantil A",
        9: "Infantil B",
        12: "Juvenil A",
        16: "Juvenil B",
        20: "Adulto",
        "-1": "Idade inválida"
    };

    let sucesso = true;
    for (let idade in casoT) {
        const cateEsp = casoT[idade];
        const obtida = CI(parseInt(idade));
        if (obtida !== cateEsp) {
            console.error(`Erro: ${idade} anos deveria ser ${cateEsp}, mas foi categorizado como ${obtida}`);
            sucesso = false;
        }
    }

    if (sucesso) {
        console.log("Teste passou com sucesso!");
    }
}

