// Função para rolar para o topo da página
// Rola para o topo antes de recarregar a página
window.onbeforeunload = function() {
  window.scrollTo(0, 0);
}