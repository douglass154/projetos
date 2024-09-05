
const section = document.querySelector('.resultados-pesquisa');

const createNewElement = (personagens) => {
   
   for (let personagem of personagens) {
      const div = document.createElement('div');
      div.classList.add('item-resultado');

      div.innerHTML = `
         <h2>${personagem.nome}</h2>
         <p class="descricao-meta">${personagem.descricao}</p>
         <a href="${personagem.src}" target="_blank">Mais informações</a>
      `

      section.appendChild(div);
   }

}

createNewElement(personagens)