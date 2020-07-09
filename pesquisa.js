/**
 * Recebe um CEP no formato string como parametro e envia os dados
 * para o formulario em index.html
 * 
 * @param {String} cep 
 */
function getDadosEnderecoPorCEP(cep) {
    // Acessando a url com a api do viacep, mandando o cep
    let url = `https://viacep.com.br/ws/${cep}/json/unicode/`

    let xhr = new XMLHttpRequest()
    // Abrindo uma requisição do tipo GET para a URL
    xhr.open('GET', url)

    xhr.onreadystatechange = () => {
        // Verificação se o estado é de request finished and response is ready e o status é 200: "OK"
        if (xhr.readyState == 4 && xhr.status == 200) {
            // recuperando a resposta em JSON
            let dadosJSONText = xhr.responseText
            //Fazendo o parse da respsota em JSON para objeto
            let dadosJSONObj = JSON.parse(dadosJSONText)

            //Atribuindo aos campos do formulario
            document.getElementById('endereco').value = `${dadosJSONObj.logradouro} ${dadosJSONObj.complemento}`
            document.getElementById('bairro').value = dadosJSONObj.bairro
            document.getElementById('cidade').value = dadosJSONObj.localidade
            document.getElementById('uf').value = dadosJSONObj.uf

        }
    }

    // Enviando a requisição
    xhr.send()
}