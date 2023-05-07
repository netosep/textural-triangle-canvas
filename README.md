<h1 align="center">
  <p>Textural Triangle Canvas</p>
</h1>

<div align="center">
  <p>Triângulo Textural para classificação do solo desenvolvido com o <a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Canvas_API"><i>HTML Canvas</i></a></p>
  <img alt="License" src="https://img.shields.io/github/license/netosep/textural-triangle-canvas?color=blue&logo=apache&logoColor=blue">
  <img alt="Stars" src="https://img.shields.io/github/stars/netosep/textural-triangle-canvas?logo=github">
</div>

#

### Como utilizar:
<li>Faça o <a href="">download</a> do projeto ou use pelo <a href="https://www.jsdelivr.com/">cdn.jsdelivr.net<a> copiando o script abaixo:</li>
  
```html
<script src="https://cdn.jsdelivr.net/gh/netosep/textural-triangle-canvas/TexturalTriangleCanvas.js"></script>
```
<li>Ou:</li>
  
```html
<script src="https://cdn.jsdelivr.net/gh/netosep/textural-triangle-canvas/TexturalTriangleCanvas.min.js"></script>
```
<li>Em seu HTML, crie sua tag canvas com um ID:</li>
  
```html
<canvas id="myCanvas" width="600" height="600"></canvas>
```
#### — Nota: Use as medidas do `width` e `height` iguais! Quanto maior o tamanho melhor a resolução da imagem gerada.
#### — Extra: O tamanho (width), do canvas pode ser redimensionado pelo css.
  
<li>Em seu código <i>JavaScript</i>, use:</li>
  
```html
<script>
    // Declarando a nova classe TexturalTriangleCanvas
    // passando como parâmetro (string), o id do seu Canvas
    var triangle = new TexturalTriangleCanvas('myCanvas');
    // ...
</script>
```

<li>Para somente dezenhar o triângulo sem os valores, use:</li>

```js
triangle.draw();
```
<li>Preview:</li>
<div align="left">
  <img src="https://i.imgur.com/XqNrB9W.png" width="450">
</div>

<li>E com os valores, use:</li>
  
```js
var siltPercent = 15;
var sandPercent = 60;
var clayPercent = 25;
// A sequencia dos parâmetros da função devem
// ser respectivamente: silte, areia e argila
triangle.drawWithValues(siltPercent, sandPercent, clayPercent);
```

#### — Nota: A soma dos três valores deve <b>resultar 100</b>, caso contrário retornará um erro no console.
  
<li>Preview:</li>
<div align="left">
  <img src="https://i.imgur.com/XqNrB9W.png" width="450">
</div>
  
#
  
 
  
  
  
  
  
