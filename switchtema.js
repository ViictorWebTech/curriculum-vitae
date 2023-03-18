const tema = {
    light: {
      background: 'white',
      text: 'black',
    },
    dark: {
      background: 'black',
      text: 'white',
    }
};


  function temaDark() {
const darkModeToggle = document.querySelector('input[name=tema]');
darkModeToggle.addEventListener('change', function({ target }) {
  setTema(target.checked ? 'dark' : 'light');
});
}
 
function setTema(novoTema) {
    const CorTema = tema[novoTema]; // Seleciona o tema para aplicar
  
    Object.keys(CorTema).map(function(key) {
      html.style.setProperty(`--${key}`, CorTema[key]); // Altera as variáveis no css
    });
  
    localStorage.setItem('tema', novoTema); //Salva o tema escolhido no localStorage
}
  
const tema = localStorage.getItem('tema');
if( tema ) {
  setTema(tema)
}