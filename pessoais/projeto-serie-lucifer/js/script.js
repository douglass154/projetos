
const button = document.querySelector('button');
const section = document.querySelector('.resultados-pesquisa');

const createNewElement = (personagens) => {
   for (let personagem of personagens) {
      const div = document.createElement('div');
      div.classList.add('item-resultado');

      div.innerHTML = `
         <img src="${personagem.img}" alt="${personagem.nome}">
         <div class="infos-item-resultado">
            <h2>${personagem.nome}</h2>
            <p class="descricao-meta">${personagem.descricao}</p>
            <a href="${personagem.src}" target="_blank">Mais informações</a>
         </div>
      `

      section.appendChild(div);
   }  
}

createNewElement(personagens)
      
const pesquisar = () => {
   let campoPesquisa = document.querySelector('#campo-pesquisa').value;
   campoPesquisa = campoPesquisa.toLowerCase();
   let resultado = '';
   
   if (!campoPesquisa) {
      section.innerHTML = '<p>Nada foi encontrado. Digite alguma palavra chave</p>'
      return
   };

   for (let personagem of personagens) {
      const nome = personagem.nome.toLowerCase();
      const descricao = personagem.descricao.toLowerCase();

      if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
         resultado += `
            <div class="item-resultado">
               <img src="${personagem.img}" alt="${personagem.nome}">
               <div class="infos-item-resultado">
                  <h2>${personagem.nome}</h2>
                  <p class="descricao-meta">${personagem.descricao}</p>
                  <a href="${personagem.src}" target="_blank">Mais informações</a>
               </div>
            </div>
         `
      }
   }

   if (!resultado) {
      section.innerHTML = '<p>Nada foi encontrado. Não possuimos nenhuma informação sobre isso.</p>'
      return;
   }
   
   section.innerHTML = resultado;
}

button.addEventListener('click', pesquisar);