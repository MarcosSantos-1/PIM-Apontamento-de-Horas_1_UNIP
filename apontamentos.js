const apontamentos = [];

function adicionarApontamento() {
  const funcionarioId = document.getElementById('funcionarioId').value;
  const data = document.getElementById('data').value;
  const horaEntrada = document.getElementById('horaEntrada').value;
  const horaSaida = document.getElementById('horaSaida').value;

  const apontamento = {
    funcionarioId,
    data,
    horaEntrada,
    horaSaida
  };

  const horasDia = calcularHorasDia(apontamento.horaEntrada, apontamento.horaSaida);

  if (horasDia > 12) {
    alert('Atenção: As horas trabalhadas não podem ultrapassar 12 horas por dia.');
    return;
  }

  apontamentos.push(apontamento);
  exibirApontamentos();
  calcularTotais();
  limparFormulario();
}

function exibirApontamentos() {
  const tableBody = document.querySelector('#apontamentosTable tbody');
  tableBody.innerHTML = '';

  apontamentos.forEach(apontamento => {
    const row = tableBody.insertRow();
    row.insertCell(0).textContent = apontamento.funcionarioId;
    row.insertCell(1).textContent = apontamento.data;
    row.insertCell(2).textContent = apontamento.horaEntrada;
    row.insertCell(3).textContent = apontamento.horaSaida;
    row.insertCell(4).textContent = calcularHorasDia(apontamento.horaEntrada, apontamento.horaSaida);
  });
}

function calcularHorasDia(horaEntrada, horaSaida) {
  const entrada = new Date(`2000-01-01T${horaEntrada}`);
  const saida = new Date(`2000-01-01T${horaSaida}`);
  const diff = Math.abs(saida - entrada);
  const horas = Math.floor(diff / 36e5);
  return horas;
}

function calcularTotais() {
  const totalHorasDiarias = apontamentos.reduce((total, apontamento) => {
    return total + calcularHorasDia(apontamento.horaEntrada, apontamento.horaSaida);
  }, 0);

  const totalHorasMensais = totalHorasDiarias * apontamentos.length;

  document.getElementById('totalHorasDiarias').textContent = `Total Horas Diárias: ${totalHorasDiarias}`;
  document.getElementById('totalHorasMensais').textContent = `Total Horas Mensais: ${totalHorasMensais}`;
}

function limparFormulario() {
  document.getElementById('funcionarioId').value = '';
  document.getElementById('data').value = '';
  document.getElementById('horaEntrada').value = '';
  document.getElementById('horaSaida').value = '';
}