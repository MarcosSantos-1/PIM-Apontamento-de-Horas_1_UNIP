function registrarFerias() {
    // Obtenha os valores dos campos do formulário
    const funcionarioId = document.getElementById('funcionarioId').value;
    const dataAdmissao = document.getElementById('dataAdmissao').value;
    const inicioAquisicao = document.getElementById('inicioAquisicao').value;
    const terminoAquisicao = document.getElementById('terminoAquisicao').value;
    const inicioGozo = document.getElementById('inicioGozo').value;
    const terminoGozo = document.getElementById('terminoGozo').value;
  
    // Exemplo: Valide se os campos estão preenchidos
    if (!funcionarioId || !dataAdmissao || !inicioAquisicao || !terminoAquisicao || !inicioGozo || !terminoGozo) {
      document.getElementById('statusMensagem').innerText = 'Por favor, preencha todos os campos.';
      return;
    }
  
    // Adicione uma nova linha à tabela com os dados inseridos
    const tabela = document.getElementById('feriasTable').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();
    const celulas = [
      funcionarioId,
      dataAdmissao,
      inicioAquisicao,
      terminoAquisicao,
      inicioGozo,
      terminoGozo
    ];
  
    celulas.forEach((valor, index) => {
      const novaCelula = novaLinha.insertCell(index);
      novaCelula.appendChild(document.createTextNode(valor));
    });
  
    // Exiba uma mensagem de sucesso
    document.getElementById('statusMensagem').innerText = 'Férias registradas com sucesso!';
  }