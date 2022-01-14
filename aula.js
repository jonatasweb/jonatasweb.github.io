//## ORGANIZAÇÃO NO CSS

//Podemos criar outros arquivos CSS, um para cada componente, como 'header.css';
//-> Aí posso linkar diretamente no HTML, e o HTML usa os estilos deste arquivo
//ou
//-> Importar tudo dentro do 'style.css', usamdo '@import './header.css'; o ./ relaciona a partir do próprio arquivo style.css

//-> Aí no HTML chama somente o 'style.css' e esse style puxa todos os outros.

// /\ não é a forma mais performática. Mais pra frente no curso veremos uma forma melhor.


//==============================================================================
//CSS global.css -> Aqui vão ter resets, classes gerais do site, que usaremos em várias páginas, etc
//CSS header.css -> Posso usar ele em mais páginas, desde que o arquivo HTML dessa página puxe o style.css (onde tem os @imports)


//==============================================================================
//SECTION
//-> Preferi usar uma section e não um article pq é uma seção do site. Se eu remover do site não faz sentido fora dele, como um artigo para outro site qualquer, ele é uma parte de um portifólio, por isso uma section


//==============================================================================
//PODE PADRÃO TODO INTEM FLEX TEM A MESMA ALTURA. ISSO PODE GERAR DESALINHAMENTOS PQ NEM TODO ELEMENTO PRECISA DE ALTURA X
//-> no Container: align-items: flex-start ==> Isso alinha o conteúdo de cada item flex no início, aí a parte de baixo não fica esticada. Mas ainda assim fica desigual, um menor, outro maior, etc.
//-> Para todos do mesmo tamanho porém um determinado texto na parte de baixo de todos os itens, para não ficar desalinhado, devemos usar: ==> Colocar flex: 1; no flex-item que deseja que ele cresca o máximo que der, assim empurra o texto que estava desalinhado sempre pro final da caixa.
//.faculdade-curso: flex: 1; isso ele toma todo o espaço horizontal e vertical, e a instituição é empurrada sempre pro final, ficando todas no final da caixa, alinhadas.


//==============================================================================
// ### ACESSIBILIDADE ###
//-> Colocar as meta tags completas
//-> Colocar direto no HTML o width e height das imagens (quando o site carrega as imagens não são carregadas instantaneamente. Então o site carrega o html e quando chegar a vez dele carregar as imagens o site até se movimenta para colocar elas nos lugares). Então para imagens grandes colocar mais ou menos metade dos tamanhos de W e H. E no CSS global onde seta width=100% colocamos a altura AUTO, para ele colocar a altura proporcional à largura.
//