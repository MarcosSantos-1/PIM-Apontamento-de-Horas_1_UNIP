function atualizarRelogio() {
    const data = new Date();
    const hora = data.getHours();
    const minuto = data.getMinutes();
    const segundo = data.getSeconds();
  
    // Adiciona um zero à esquerda se for menor que 10
    const formatoHora = hora < 10 ? `0${hora}` : hora;
    const formatoMinuto = minuto < 10 ? `0${minuto}` : minuto;
    const formatoSegundo = segundo < 10 ? `0${segundo}` : segundo;
  
    document.getElementById('hora').innerHTML = `${formatoHora}:${formatoMinuto}:${formatoSegundo}`;
  
    // Saudação baseada na hora do dia
    let saudacao = '';
    if (hora >= 5 && hora < 12) {
      saudacao = 'Olá, bom dia!';
    } else if (hora >= 12 && hora < 18) {
      saudacao = 'Olá, boa tarde!';
    } else {
      saudacao = 'Olá, boa noite!';
    }
  
    document.getElementById('saudacao').innerHTML = saudacao;
  
    // Atualiza a cada segundo
    setTimeout(atualizarRelogio, 1000);
  }
  
  // Inicia o relógio quando a página carrega
  window.onload = atualizarRelogio;