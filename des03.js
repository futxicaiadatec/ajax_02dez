addEventListener('load', () => {
  const h = hyperscript

  if(typeof(window.Render) === "undefined"){

    // este trecho inicia o renderizado
    window.Render = (function(){
      function instrucao(texts){
        const domtext = texts.map( t => 
            h('div.mdl-cell.mdl-cell--6-col',
              h('pre',
                h('code.javascript',
                  t
        ))))
        domtext.forEach( dt => hljs.highlightBlock(dt))
        return function(){
            return h('div.mdl-grid',[...domtext, h('h1',"Escolha outro tema e faça um álbum semelhante ao dos gatinhos.")])
        }
      
      }
      function gatinhos(cats){
        const domcatcards = cats.map( c => 
            h('div.mdl-card.mdl-cell.mdl-cell--4-col',
              h('div.mdl-card__media',
                h('img',
                  {
                    src: c,
                    alt: 'imagem de um gato'
                  }
        ))))
        return function(){
            return h('div.mdl-grid', domcatcards)
        }
      }
      return {
          instrucao: instrucao,
          gatinhos: gatinhos
      }
    })()
    // este trecho finaliza o renderizado

    const listaTexto = [
      "/**\n** Material Design lite é um framework css,\n** criado pelo google para referência.\n** Não é parecido com o 'preferências' do chrome?\n*/\n",
      "/**\n** Ele é responsivo, ctrl+shift+m no devtools.\n** Você vai poder escolher o tamanho da tela.\n** Há muitos componentes para ele\n*/\n",
      "/**\n** hyperscript é uma forma de gerar hypertexto,\n** tanto no brownser quando no nodejs,\n** utilizando apenas funções javascript.\n*/\n",
      "/**\n** As divs do mdl estão sendo criadas desta forma\n** e inseridas na páginas com outerHTML.\n** essas funções podem ser parametrizadas\n*/\n"

    ]
    const instrucaoHTML = window.Render.instrucao(listaTexto)().outerHTML
    const onclickinstrucao = function(){
        document.querySelectorAll('div.page-content')[0].innerHTML = instrucaoHTML
        return false
    }
    document.querySelectorAll('a.instrucao')[0].onclick = onclickinstrucao
    document.querySelectorAll('a.instrucao')[1].onclick = onclickinstrucao
    document.querySelectorAll('div.page-content')[0].innerHTML = instrucaoHTML

    const listaGatinhos = [
      "cats/1.jpg",
      "cats/2.jpg",
      "cats/3.jpg",
      "cats/4.jpg",
      "cats/5.jpg",
      "cats/6.jpg",
      "cats/7.jpg",
      "cats/8.jpg",
      "cats/9.jpg"
    ]
    const gatinhosHTML = window.Render.gatinhos(listaGatinhos)().outerHTML
    const onclickgatinhos = function(){
        document.querySelectorAll('div.page-content')[0].innerHTML = gatinhosHTML
        return false
    }
    document.querySelectorAll('a.gatinhos')[0].onclick = onclickgatinhos
    document.querySelectorAll('a.gatinhos')[1].onclick = onclickgatinhos
  }else{
    console.error("Render já foi iniciada")
  }

  
})