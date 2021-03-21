function getEndereco(cep) {
    let url = `https://viacep.com.br/ws/${cep}/json/`
    let ajax = new XMLHttpRequest();

    ajax.open('GET',url);

    ajax.onreadystatechange = () =>{
        if (ajax.readyState == 4 && ajax.status == 200) {
            let JSONEndereco = ajax.responseText;
            let objEndereco = JSON.parse(JSONEndereco);
            console.log(objEndereco);
            let endereco = document.querySelector('#endereco').value = objEndereco.logradouro

            let bairro = document.querySelector('#bairro').value = objEndereco.bairro;

            let cidade = document.querySelector('#cidade').value = objEndereco.localidade;

            let uf = document.querySelector('#uf').value = objEndereco.uf;
        }else if(ajax.readyState == 4){
            alert('CEP não encontrado.');
        }
    }

    ajax.send()
}