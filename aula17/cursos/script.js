fetch('alunos.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('conteudo');
    let html = '';

    for (let curso in data) {
      html += `<h2>${curso}</h2><ul>`;
      data[curso].forEach(aluno => {
        html += `<li>${aluno}</li>`;
      });
      html += `</ul>`;
    }

    container.innerHTML = html;
  })
  .catch(error => {
    console.error('Erro ao carregar o JSON:', error);
  });
