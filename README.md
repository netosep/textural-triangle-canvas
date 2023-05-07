<h1 align="center">
  <p>Textural Triangle Canvas</p>
</h1>

<div align="center">
  <p>Triângulo Textural para classificação do solo desenvolvido com o <a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Canvas_API"><i>HTML Canvas</i></a>. <a href="https://netosep.github.io/textural-triangle-canvas/">Ver demonstração</a>.</p>
  <img alt="License" src="https://img.shields.io/github/license/netosep/textural-triangle-canvas?color=blue&logo=apache&logoColor=white">
  <img alt="Stars" src="https://img.shields.io/github/stars/netosep/textural-triangle-canvas?logo=github&color=blue">
</div>

#

### 💡 Como utilizar
Faça o <a href="https://github.com/netosep/textural-triangle-canvas/releases/latest">download</a> do projeto ou use pelo <a href="https://www.jsdelivr.com/">cdn.jsdelivr.net<a> copiando um dos scripts abaixo:
```html
<script src="https://cdn.jsdelivr.net/gh/netosep/textural-triangle-canvas/TexturalTriangleCanvas.js"></script>
// ou
<script src="https://cdn.jsdelivr.net/gh/netosep/textural-triangle-canvas/TexturalTriangleCanvas.min.js"></script>
```

Em seu _HTML_, crie sua tag canvas com um ID:
```html
<canvas id="myCanvas" width="700" height="700"></canvas>
```
> **Note**
> — Use as medidas de `width` e `height` do canvas iguais! Quanto maior o tamanho melhor a resolução da imagem gerada.

Em seu código _JavaScript_, use:
```html
<script>
    // passando como parâmetro (string), o id do seu Canvas
    let myTriangle = new TexturalTriangleCanvas('myCanvas');
</script>
```

Para somente desenhar o triângulo sem os valores, use:
```js
myTriangle.draw();
// ou diretamente
new TexturalTriangleCanvas('myCanvas').draw();
```
**🖼 Preview:**
<div align="left">
  <img src="https://i.imgur.com/XqNrB9W.png" width="450">
</div>

#

Para desenhar com valores, use:
```js
let siltPercent = 15;
let sandPercent = 60;
let clayPercent = 25;

triangle.drawWithValues(siltPercent, sandPercent, clayPercent);
// ou também diretamente
new TexturalTriangleCanvas('myCanvas').drawWithValues(siltPercent, sandPercent, clayPercent);
```

> **Note**
> A sequencia dos parâmetros da função devem ser respectivamente: silte, areia e argila

> **Warning**
> A soma dos três valores deve **resultar 100**, caso contrário retornará um erro no console.
  
**🖼 Preview:**
<div align="left">
  <img src="https://i.imgur.com/6a8U0UZ.png" width="450">
</div>

#

### 🌟 Extras

Idiomas suportados: **Inglês**, **Português Brasileiro** e **Espanhol** (fique a vontade para utilizar o seu 😉).
```js
myTriangle.setLanguage('pt-br'); // para usar o idioma português brasileiro (nativo)
```
> **Note**
> Caso queira utilizar um idioma diferente dos três citados, você pode passar um objeto json como segundo parâmetro da função. Para mais informações e padrões, <a href="https://github.com/netosep/textural-triangle-canvas/blob/main/TexturalTriangleCanvas.js#L99">veja o código fonte</a>.

Utilize também o método `refresh()` para aplicar alterações de texto na imagem do triângulo:
```js
myTriangle.refresh();
```

#

### 📌 Contribuições
Sinta-se à vontade para abrir _issues_ e realizar _pull requests_. Contribuições são bem-vindas 😉.

#

### 📜 Licença
[MIT](https://github.com/netosep/textural-triangle-canvas/blob/main/LICENSE.md)

#

<p align="center">
  <i>Developed with 🖤 by <a href="https://github.com/netosep">Neto Sepulveda</a></i>
</p>
