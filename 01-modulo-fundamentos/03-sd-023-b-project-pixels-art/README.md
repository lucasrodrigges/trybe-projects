# Boas-vindas ao repositório do projeto Arte com Pixels!

Para realizar o projeto, atente-se a cada passo descrito a seguir, e se tiver qualquer dúvida, nos envie por Slack! #vqv :rocket:

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

# Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do [Código de Conduta e do Manual da Pessoa Estudante da Trybe](https://app.betrybe.com/manual-estudante/codigo-de-etica-e-conduta).

# Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

  Para entregar o seu projeto você deverá criar um *Pull Request* neste repositório.

  Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/4d67f5b4-34a6-489f-a205-b6c7dc50fc16/) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!
</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />


Neste projeto, você vai implementar um editor de arte com pixels em que a pessoa usuária poderá escolher uma cor em uma paleta de cores e poderá pintar o que quiser em um quadro branco 🎨 🧑‍🎨


💡 Veja o exemplo a seguir de como o projeto pode se parecer depois de pronto. 

![exemplo de arte com pixels](./art-with-pixels.gif)

Você pode ~~e deve~~ ir além para deixar o projeto com a sua cara e impressionar todas as pessoas, mas não deixe de cumprir os requisitos! 


</details>

<details>
  <summary><strong>🗓 Data de Entrega</strong></summary><br />
  
  * Este projeto é individual;
  * São `2` dias de projeto;
  * Data para entrega final do projeto: `06/06/2022 14:00`.

</details>

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

1. Clone o repositório
  * Use o comando: `git clone git@github.com:tryber/sd-023-b-project-pixels-art.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-023-b-project-pixels-art`

2. Instale as dependências
  * `npm install`

3. Crie uma branch a partir da branch `main`
  * Verifique que você está na branch `main`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `main`
    * Exemplo: `git checkout main`
  * Agora crie uma branch à qual você vai submeter os `commits` de seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-sobrenome-nome-do-projeto`
    * Exemplo: `git checkout -b mariazinha-project-pixels-art`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (devem aparecer listados os novos arquivos em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (devem aparecer listados os arquivos em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto pixels art'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin mariazinha-project-pixels-art`

6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-023-b-project-pixels-art/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Coloque um título para a sua Pull Request
    * Exemplo: "Cria tela de busca"
  * Clique no botão verde "Create pull request"
  * Adicione uma descrição para o _Pull Request_, e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-023-b-project-pixels-art/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary>

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_;
  2. `git add` _(para adicionar arquivos ao stage do Git)_;
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_;
  4. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_;
  5. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_.


</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

Para sinalizar que o seu projeto está pronto para o _"Code Review"_, faça o seguinte:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:
  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;
  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;
  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-023-b`.

Caso tenha alguma dúvida, veja este [video explicativo](https://vimeo.com/362189205).
  
</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

Use o conteúdo sobre [Code Review](https://app.betrybe.com/course/real-life-engineer/code-review) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
  <summary><strong>🏗 Como estruturar seu projeto</strong></summary>

- Implemente uma paleta de cores usando `javascript`, `css` e `html`;

- Crie os arquivos `index.html`, `style.css` e `script.js`, que conterão seu código HTML, CSS e JavaScript, respectivamente;

:warning: **É importante que seus arquivos tenham exatamente estes nomes!** :warning:

- Você pode adicionar outros arquivos se julgar necessário. Caso tenha alguma dúvida, poste no _Slack_;

 ⚠️ ** Recomenda-se que você desenvolva seu projeto com a resolução de tela  de `1366 x 768`, a mesma que será utilizada pelo avaliador. Para facilitar a configuração da resolução, use este [plugin do `Chrome`](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh?hl=en).** ⚠️

* Caso seu projeto contenha imagens, ⚠️ **Atenção**:
  * Não utilize arquivos maiores que _500Kb_;
  * Utilize uma ferramenta como [esta](https://picresize.com/pt) para redimensionar as imagens.

* Você tem liberdade para implementar novos comportamentos ao seu projeto, seja na forma de aperfeiçoamentos em requisitos propostos ou novas funcionalidades, mas atente-se para **não conflitar com os requisitos propostos**. 

</details>

<details>
  <summary><strong>👀 De olho nas dicas</strong></summary>

- Não recomenda-se a utilização de `table`, pois o sentido semântico de construir uma tabela no HTML não tem relação  com a construção de uma grade de pixels para serem coloridos. Nesse caso, fazer uso de `table` representa uma má prática;

- Que tal usar um [_loop_](https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/) para adicionar o mesmo evento em vários elementos? Ou então a técnica de [_event bubbling_](https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/) combinada com `classList`?

- Se precisar consultar os valores do _CSS_ de um elemento a partir do _JavaScript_, [dê uma olhada aqui](https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp);

- Para alterar alguma propriedade do _CSS_ de um elemento por meio do _JavaScript_, dê uma olhada no [atributo `style`](https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp) do elemento.
- Caso a avaliação falhe com alguma mensagem de erro do tipo `[409:0326/130838.878602:FATAL:memory.cc(22)] Out of memory. size=4194304` é provável que as imagens que está utilizando são muito grandes. Tente redimensioná-las para um tamanho menor.
</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

Para garantir a qualidade do código, vamos utilizar neste projeto os linters `ESLint` e `StyleLint`.
Desta forma, o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível e de fácil manutenção! 
  Para rodar o `ESLint` e o `StyleLint` localmente no projeto, execute os comandos abaixo:

  1. Para avaliar se os arquivos com a extensão `CSS` estão com o padrão correto

```bash
npm run lint:styles
```

  2. Para avaliar se os arquivos com a extensão `JS` estão com o padrão correto

```bash
npm run lint
```

⚠️ **Atenção** O `ESLint` e o `StyleLint` não serão avaliados neste projeto. Você pode rodar os testes localmente e fazer as correções se desejar. ⚠️

</details>

<details>
  <summary><strong>🛠 Testes e Cypress</strong></summary><br />

O Cypress é uma ferramenta de teste de front-end desenvolvida para a web. Antes de utilizá-lo, certifique-se de ter executado o comando `npm install` dentro do projeto.

Você pode rodar o Cypress localmente para verificar se seus requisitos estão passando, para isso execute um dos seguintes comandos:

1. Para executar os testes apenas no terminal:

```bash
npm test
```

2. Para executar os testes e vê-los rodando em uma janela de navegador:

```bash
npm run cypress:open
```

***ou***

```bash
npx cypress open
```

Após executar um dos comandos acima, uma janela de navegador será aberta e, então, você poderá escolher o teste a ser executado (project.spec.js) ou escolher `Run all specs` para executar todos os testes

Veja [este vídeo](https://vimeo.com/539240375/a116a166b9)  para ver como rodar o Cypress localmente 😉🎙


* Siga este passo a passo para verificar os **detalhes da execução do avaliador**:

  * Na página do seu _Pull Request_, acima do "botão de merge", procure por _**"Evaluator job"**_ e clique no link _**"Details"**_;

  * Na página que se abrirá, clique na linha _**"Cypress evaluator step"**_ ;

  * Analise os resultados a partir da mensagem _**"(Run Starting)"**_;

  * Caso tenha dúvidas, consulte [este vídeo](https://vimeo.com/420861252) ou poste a sua dúvida no _Slack_.

⚠️ **O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**

* Contudo, tenha em mente que **nada além do que for pedido nos requisitos será avaliado**. _Esta é uma oportunidade de você exercitar sua criatividade e experimentar com os conhecimentos adquiridos._

O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

</details>

<details>
  <summary><strong>🔗 Links auxiliares para o desenvolvimento
do projeto</strong></summary>

* Como pessoa desenvolvedora você deve fazer pesquisas para auxiliar o seu entendimento do assunto. Assim, para solucionar os requisitos do projeto é inevitável e estimulado que pesquisas sejam feitas nas mais variadas fontes (plataforma da Trybe, google, youtube, etc) sempre tomando cuidado para utilizar fontes "confiáveis" nas pesquisas da Internet, como por exemplo:

  * [Javascript.com](http://javascript.com/)

  * [W3Schools](https://www.w3schools.com/js/default.asp)

  * [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

  * [StackOverflow](https://pt.stackoverflow.com/questions/tagged/javascript)

</details>

<details>
  <summary><strong>🗣 Nos dê feedbacks sobre o projeto!</strong></summary><br />

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. **Leva menos de 3 minutos!**

Link: [Formulário de avaliação do projeto](https://be-trybe.typeform.com/to/ZTeR4IbH)

</details>

<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary><br />

Você sabia que o **LinkedIn** é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso?

Compartilhe esse projeto no seu **LinkedIn**, marque o perfil da Trybe (**@trybe**) e mostre para a sua rede toda a sua evolução.

</details>

# Requisitos Obrigatórios
:warning: **Leia todos os requisitos atentamente e siga à risca o que for pedido. Em particular, **atente-se para os nomes de _ids_  e _classes_ que alguns elementos de seu projeto devem possuir**. Não troque `ids` por `classes` ou vice-versa** :warning:

## 1 - Adicione à página o título "Paleta de Cores".

<details>
  <summary>Sua página deve conter o título "Paleta de Cores"</summary><br />

- O título deverá ficar dentro de uma tag `h1` com o `id` denominado `title`;

- O texto do título deve ser **exatamente** "Paleta de Cores".

**O que será verificado**

- Verifica se contém um elemento `h1`;
- Verifica se está com id  `title`;
- Verifica se existe o título `Paleta de Cores`.

</details>

## 2 - Adicione à página uma paleta contendo quatro cores distintas.

<details>
  <summary>Sua página deve conter uma paleta com quatro cores</summary>

- A paleta de cores deve ser um elemento com `id` denominado `color-palette`, e cada cor individual contida na paleta de cores deve possuir a `classe` chamada `color`;

- A cor de fundo de cada elemento da paleta deverá ser a cor que o elemento representa. **A única cor não permitida na paleta é a cor branca**;

- Cada elemento da paleta de cores deverá ter uma borda preta, sólida e com 1 pixel de largura;

- A paleta de cores deverá listar todas as cores disponíveis para utilização lado a lado, e deverá ser posicionada abaixo do título `Paleta de Cores`;

- A paleta de cores não deve conter cores repetidas.

**O que será verificado**

- A paleta de cores deve ser um elemento com `id` denominado `color-palette`;

- Cada cor individual da paleta de cores possui a `classe` chamada `color`;

- A cor de fundo de cada elemento da paleta é a cor que o elemento representa :warning: **A única cor não permitida na paleta é a cor branca** :warning:;

- Verifica se cada elemento da paleta de cores tem uma borda preta, sólida e com 1 pixel de largura;

- A paleta lista todas as cores disponíveis para utilização, lado a lado;

- A paleta de cores está posicionada abaixo do título `Paleta de Cores`;

- A paleta de cores não contém cores repetidas.

</details>

## 3 - Adicione a cor **preta** como a primeira cor da paleta de cores.

<details>
  <summary>A primeira cor na paleta criada no requisito 2 deve ser preta </summary><br />

**O que será verificado**

- Verifica se a primeira cor da paleta  tem `background-color ` preto;

- As demais cores podem ser escolhidas livremente.

</details>

## 4 - Adicione à página um quadro contendo 25 pixels.

<details>
  <summary>Sua página deve conter um quadro de pixels 5x5</summary>

- O quadro de "pixels" deve ter 5 elementos de largura e 5 elementos de comprimento;

- O quadro de "pixels" deve possuir o `id` denominado `pixel-board`, ao passo que cada "pixel" individual dentro do quadro deve possuir a `classe` denominada `pixel`;

-  Ao abrir a página, a cor inicial dos "pixels" que compõem o quadro de pixels deve ser branca;

-  O quadro de "pixels" deve aparecer abaixo da paleta de cores.

**O que será verificado**

- O quadro de "pixels" possui o `id` denominado `pixel-board`;

- Cada pixel individual dentro do quadro possui a `classe` denominada `pixel`;

- A cor inicial dos "pixels" dentro do quadro, ao abrir a página, é branca;

- O quadro de "pixels" aparece abaixo da paleta de cores.

</details>


## 5 - Faça com que cada pixel do quadro tenha largura e altura de 40 pixels e borda preta de 1 pixel de espessura.

<details>
  <summary>Cada <code>pixel</code> do quadro deve possuir 40px de largura e 40px de altura e uma borda preta solida de 1px de espessura</summary><br />

**O que será verificado**

- O quadro de "pixels" tem altura e comprimento de 5 elementos;

- Verifica se 40 pixels de altura e 40 pixels de largura é o tamanho total do elemento, incluindo seu conteúdo e excluindo a borda preta, que deve ser criada à parte.

</details>

## 6 - Defina a cor preta como cor inicial da paleta de cores

<details>
  <summary>Ao carregar a página, a cor preta já deve estar selecionada na paleta para pintar os pixels do quadro.</summary>

- O elemento da cor preta deve possuir inicialmente a classe `selected`;

- O elemento que deverá receber a classe `selected` deve ser um dos elementos que possuem a classe `color`, como especificado no **requisito 2**.

**O que será verificado**

- O elemento da cor preta possui, inicialmente, a classe `selected`;

- Nenhuma outra cor da paleta tem a classe `selected` ao carregar a página.

</details>

## 7 - Selecione uma cor na paleta de cores e preencha os pixels no quadro.

<details>
  <summary>Ao clicar em outras cores da paleta de cores, a cor deve ser selecionada e poderá ser utilizada para preencher os quadros</summary>

- A `classe` `selected` deve ser adicionada à cor selecionada na paleta, ao mesmo tempo em que é removida da cor anteriormente selecionada;

- Somente uma das cores da paleta deve ter a classe `selected` de cada vez;

- Os elementos que deverão receber a `classe` `selected` devem ser os mesmos elementos que possuem a classe `color`, como especificado no **requisito 2**.

**O que será verificado**

- Verifica se somente uma cor da paleta de cores tem a classe `selected` de cada vez;

- Verifica se os pixels dentro do quadro não têm a classe `selected` quando são clicados.

</details>

## 8 - Preencha um pixel do quadro com a cor selecionada na paleta de cores.

<details>
  <summary>Ao clicar em algum <code>pixel</code>  do quadro a sua cor deve ser alterada para a cor selecionada na paleta de cores</summary><br />

**O que será verificado**

- Ao carregar a página deve ser possível pintar os pixels do quadro de preto;

- Após selecionar outra cor na paleta de cores, é possível pintar os pixels do quadro com essa cor;

- Somente o pixel que foi clicado foi preenchido com a cor selecionada, sem influenciar na cor dos demais pixels.

</details>

## 9 - Crie um botão que retorne a cor do quadro para a cor inicial.

<details>
  <summary>Sua página deve ter um botão que, ao ser clicado, deixe todos os <code>pixels</code> do quadro com a cor branca</summary><br />

**O que será verificado**

- O botão tem o `id` denominado `clear-board`;

- O botão está posicionado entre a paleta de cores e o quadro de pixels;

- O texto do botão é `Limpar`;

- Ao clicar no botão, o quadro de pixels é totalmente preenchido de branco.

</details>

# Requisitos Bônus

## 10 - Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária.

<details>
  <summary>Sua página deve conter um input para que a pessoa usuária possa definir o tamanho do quadro de pixels</summary>

- Crie um input e um botão que permitam definir um quadro de pixels com tamanho entre 5 e 50. Ao clicar no botão, deve ser gerado um quadro de **N** pixels de largura e **N** pixels de altura, em que **N** é o número inserido no input. Ou seja, se o valor passado para o input for igual a 7, ao clicar no botão, será gerado um quadro de 49 pixels (7 pixels de largura x 7 pixels de altura);


- O input deve ter o `id` denominado `board-size` e o botão deve ter o `id` denominado `generate-board`;

- O input só deve aceitar número maiores que zero. Essa restrição **deve** ser feita usando os atributos do elemento `input`;

- O botão deve conter o texto "VQV";

- O input deve estar posicionado entre a paleta de cores e o quadro de pixels;

- O botão deve estar posicionado ao lado do input;

- Se nenhum valor for colocado no input ao clicar no botão, mostre um `alert` com o texto: "Board inválido!";

- O novo quadro deve ter todos os pixels preenchidos com a cor branca.

**O que será verificado**

- Existe um input com o id `board-size`;

- Existe um botão com o id `generate-board`;

- O input só aceita número maiores que zero. Essa restrição deve ser feita usando os atributos do elemento `input`;

- O botão contém o texto `VQV`;

- O input está posicionado entre a paleta de cores e o quadro de pixels;

- O botão está posicionado ao lado direito do input;

- Caso nenhum valor for colocado no input ao clicar no botão, um `alert` é exibido com o texto: `Board inválido!`;

- Ao clicar no botão com um valor preenchido, o tamanho do board muda;

- O novo quadro tem todos os pixels preenchidos com a cor branca.

</details>

## 11 - Limite o tamanho mínimo e máximo do quadro de pixels.

<details>
  <summary>A pessoa usuária não pode definir um quadro com menos que 5 e mais que 50 <code>pixels</code></summary>

- Caso o valor digitado no input `board-size` esteja fora do intervalo de 5 a 50, faça:

1. Se o valor de `board-size` for menor que 5, considere 5 `pixels` como padrão;

2. Se o valor de `board-size`  for maior que 50, considere 50 `pixels` como padrão.

**O que será verificado**

- A altura máxima do board é 50;

- A altura do board é 5 pixels quando um valor menor que 5 é colocado no input;

- A altura do board é 50 pixels quando um valor maior que 50 é colocado no input.

</details>

## 12 - Faça com que as cores da paleta sejam geradas aleatoriamente ao carregar a página.

<details>
  <summary>A cor preta ainda precisa estar presente e deve ser a primeira na sua paleta de cores.</summary><br />

**O que será verificado**

- As cores geradas na paleta são diferentes a cada carregamento da página;

- A cor preta ainda está presente e é a primeira na sua paleta de cores.

</details>
