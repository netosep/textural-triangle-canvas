/**
 * @description Textured Triangle on Canvas for classifying soil 
 * texture from the percentages of Silt, Sand and Clay
 * @author Neto Sepulveda - https://github.com/netosep
 * @version 1.0.0
 * @license MIT
 */
class TexturalTriangleCanvas {
    /**
     * Create the textural triangle in a canvas tag.
     * @param {string} canvasId HTML canvas element ID
     * @example 
     * <canvas id="myCanvas" width="400" height="400"></canvas>
     * var t = new TexturalTriangleCanvas('myCanvas');
     */
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.siltColor = 'red';
        this.sandColor = 'orange';
        this.clayColor = 'blue';
        this.textColor = 'black';
        this.backgroundColor = 'white';
        this.triangleColor = 'black';
        this.dottedLineColor = 'gray';
        this.setLanguage('en');
    }

    /**
     * Draw the textural triangle in the canvas
     */
    draw() {
        return this.drawWithValues(1, 0, 0);
    }

    /**
     * Draw the textural triangle with the given values.
     * @param {number} siltPercent Percent of silt in the triangle
     * @param {number} sandPercent Percent of sand in the triangle
     * @param {number} clayPercent Percent of clay in the triangle
     */
    drawWithValues(siltPercent, sandPercent, clayPercent) {
        this.siltPercent = siltPercent * 10;
        this.sandPercent = sandPercent * 10;
        this.clayPercent = clayPercent * 10;

        if ((this.siltPercent * 10) + (this.sandPercent * 10) + (this.clayPercent * 10) !== 100) {
            throw new Error('Percentages must add up to 100');
        }

        const ctx = this.canvas.getContext('2d');
        const CANVAS_WIDTH = this.canvas.width;
        const CANVAS_HEIGTH = this.canvas.height;
        const PADDING = 0.1;
        const LINE_GAP = ((CANVAS_WIDTH + CANVAS_HEIGTH) / 2) * 0.08;

        // Canvas background color
        ctx.fillStyle  = this.backgroundColor;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(CANVAS_WIDTH, 0);
        ctx.lineTo(CANVAS_WIDTH, CANVAS_HEIGTH);
        ctx.lineTo(0, CANVAS_HEIGTH);
        ctx.closePath();
        ctx.fill();

        // Triangle percentage lines
        ctx.lineWidth = 1;
        ctx.setLineDash([0, 0]);
        // Clay lines
        for (let i = (CANVAS_HEIGTH * PADDING); i <= (CANVAS_HEIGTH - (CANVAS_HEIGTH * PADDING)); i += LINE_GAP) {
            ctx.strokeStyle = this.clayColor;
            ctx.beginPath();
            ctx.moveTo((CANVAS_WIDTH * PADDING), i);
            ctx.lineTo(CANVAS_WIDTH - (CANVAS_WIDTH * PADDING), i);
            ctx.stroke(); 
        }
        // Sand lines
        var sandLineGap = 0
        for (let i = (CANVAS_WIDTH * PADDING); i < (CANVAS_WIDTH - (CANVAS_WIDTH * PADDING)); i += LINE_GAP) {
            ctx.strokeStyle = this.sandColor;
            ctx.beginPath();
            ctx.moveTo(CANVAS_WIDTH - i, CANVAS_HEIGTH - (CANVAS_HEIGTH * PADDING));
            ctx.lineTo((CANVAS_WIDTH / 2) - sandLineGap, (CANVAS_HEIGTH * PADDING));
            ctx.stroke(); 
            sandLineGap += LINE_GAP;
        }
        // Silt lines
        var siltLineGap = 0
        for (let i = (CANVAS_WIDTH * PADDING); i < (CANVAS_WIDTH - (CANVAS_WIDTH * PADDING)); i += LINE_GAP) {
            ctx.strokeStyle = this.siltColor;
            ctx.beginPath();
            ctx.moveTo(PADDING + i, CANVAS_HEIGTH - (CANVAS_HEIGTH * PADDING));
            ctx.lineTo(((CANVAS_WIDTH / 2) + siltLineGap), (CANVAS_HEIGTH * PADDING));
            ctx.stroke(); 
            siltLineGap += LINE_GAP;
        }

        // Dividing lines of textural classes
        ctx.lineWidth = (CANVAS_WIDTH * 0.003);
        ctx.strokeStyle = this.triangleColor;
        ctx.beginPath();
        ctx.moveTo((CANVAS_WIDTH * 0.34), (CANVAS_HEIGTH * 0.42));
        ctx.lineTo(CANVAS_WIDTH - (CANVAS_WIDTH * 0.34), (CANVAS_HEIGTH * 0.42));
        ctx.lineTo((CANVAS_WIDTH * 0.58), (CANVAS_HEIGTH * 0.58));
        ctx.lineTo((CANVAS_WIDTH * 0.74), (CANVAS_HEIGTH * 0.58));
        ctx.lineTo((CANVAS_WIDTH * 0.79), (CANVAS_HEIGTH * 0.68));
        ctx.lineTo((CANVAS_WIDTH * 0.63), (CANVAS_HEIGTH * 0.68));
        ctx.lineTo((CANVAS_WIDTH * 0.58), (CANVAS_HEIGTH * 0.58));
        ctx.lineTo((CANVAS_WIDTH * 0.38), (CANVAS_HEIGTH * 0.58));
        ctx.lineTo((CANVAS_WIDTH * 0.32), (CANVAS_HEIGTH * 0.46));
        ctx.lineTo((CANVAS_WIDTH * 0.24), (CANVAS_HEIGTH * 0.62));
        ctx.lineTo((CANVAS_WIDTH * 0.40), (CANVAS_HEIGTH * 0.62));
        ctx.lineTo((CANVAS_WIDTH * 0.38), (CANVAS_HEIGTH * 0.58));
        ctx.lineTo((CANVAS_WIDTH * 0.43), (CANVAS_HEIGTH * 0.68));
        ctx.lineTo((CANVAS_WIDTH * 0.79), (CANVAS_HEIGTH * 0.68));
        ctx.lineTo((CANVAS_WIDTH * 0.61), (CANVAS_HEIGTH * 0.68));
        ctx.lineTo((CANVAS_WIDTH * 0.50), (CANVAS_HEIGTH * 0.90));
        ctx.lineTo((CANVAS_WIDTH * 0.34), (CANVAS_HEIGTH * 0.90));
        ctx.lineTo((CANVAS_WIDTH * 0.16), (CANVAS_HEIGTH * 0.78));
        ctx.lineTo((CANVAS_WIDTH * 0.14), (CANVAS_HEIGTH * 0.82));
        ctx.lineTo((CANVAS_WIDTH * 0.23), (CANVAS_HEIGTH * 0.90));
        ctx.lineTo((CANVAS_WIDTH * 0.50), (CANVAS_HEIGTH * 0.90));
        ctx.lineTo((CANVAS_WIDTH * 0.52), (CANVAS_HEIGTH * 0.86));
        ctx.lineTo((CANVAS_WIDTH * 0.46), (CANVAS_HEIGTH * 0.86));
        ctx.lineTo((CANVAS_WIDTH * 0.40), (CANVAS_HEIGTH * 0.74));
        ctx.lineTo((CANVAS_WIDTH * 0.43), (CANVAS_HEIGTH * 0.68));
        ctx.lineTo((CANVAS_WIDTH * 0.40), (CANVAS_HEIGTH * 0.74));
        ctx.lineTo((CANVAS_WIDTH * 0.18), (CANVAS_HEIGTH * 0.74));
        ctx.moveTo((CANVAS_WIDTH * 0.74), (CANVAS_HEIGTH * 0.90));
        ctx.lineTo((CANVAS_WIDTH * 0.78), (CANVAS_HEIGTH * 0.82));
        ctx.lineTo((CANVAS_WIDTH * 0.86), (CANVAS_HEIGTH * 0.82));
        ctx.stroke();

        // Percentage dotted lines
        ctx.lineWidth = (CANVAS_WIDTH * 0.003);
        ctx.strokeStyle = this.dottedLineColor;
        ctx.setLineDash([5, 3]);
        ctx.beginPath();
        // Sand dotted line
        ctx.moveTo(CANVAS_WIDTH - (CANVAS_WIDTH * PADDING + ((LINE_GAP * this.sandPercent))), CANVAS_HEIGTH - (CANVAS_HEIGTH * PADDING));
        ctx.lineTo((CANVAS_WIDTH / 2) - (((this.sandPercent - this.siltPercent) * LINE_GAP) / 2), CANVAS_HEIGTH - ((CANVAS_HEIGTH * PADDING) + (LINE_GAP * this.clayPercent)));
        // Silt dotted line
        ctx.moveTo((CANVAS_WIDTH / 2) + (LINE_GAP * this.siltPercent), (CANVAS_HEIGTH * PADDING));
        ctx.lineTo((CANVAS_WIDTH / 2) - (((this.sandPercent - this.siltPercent) * LINE_GAP) / 2), CANVAS_HEIGTH - ((CANVAS_HEIGTH * PADDING) + (LINE_GAP * this.clayPercent)));
        // Clay dotted line
        ctx.moveTo((CANVAS_WIDTH * PADDING), CANVAS_HEIGTH - ((CANVAS_HEIGTH * PADDING) + (LINE_GAP * this.clayPercent)));
        ctx.lineTo((CANVAS_WIDTH / 2) - (((this.sandPercent - this.siltPercent) * LINE_GAP) / 2), CANVAS_HEIGTH - ((CANVAS_HEIGTH * PADDING) + (LINE_GAP * this.clayPercent)));
        ctx.stroke();

        // Percentage meeting point
        ctx.fillStyle = this.dottedLineColor;
        ctx.beginPath();
        var xPoint = (CANVAS_WIDTH / 2) - (((this.sandPercent - this.siltPercent) * LINE_GAP) / 2);
        var yPoint = CANVAS_HEIGTH - ((CANVAS_HEIGTH * PADDING) + (LINE_GAP * this.clayPercent));
        ctx.arc(xPoint, yPoint, CANVAS_WIDTH * 0.005, 0, 2 * Math.PI);
        ctx.fill();

        // Texts of textural classes
        ctx.font = `bold ${(CANVAS_WIDTH * 0.023)}px Arial`;
        ctx.fillStyle  = this.textColor;
        ctx.textAlign = "center";
        // Very Clayey Text
        ctx.fillText(this.veryClayeyText.split(' ')[0], (CANVAS_WIDTH / 2), (CANVAS_HEIGTH * 0.31));
        ctx.fillText(this.veryClayeyText.split(' ')[1], (CANVAS_WIDTH / 2), (CANVAS_HEIGTH * 0.335));
        // Clay Text
        ctx.fillText(this.clayText, (CANVAS_WIDTH / 2), (CANVAS_HEIGTH * 0.51));
        // Sandy Clay Text
        ctx.fillText(this.sandyClayText.split(' ')[0], (CANVAS_WIDTH * 0.32), (CANVAS_HEIGTH * 0.57));
        ctx.fillText(this.sandyClayText.split(' ')[1], (CANVAS_WIDTH * 0.32), (CANVAS_HEIGTH * 0.595));
        // Silty Clay Text
        ctx.fillText(this.siltyClayText.split(' ')[0], (CANVAS_WIDTH * 0.66), (CANVAS_HEIGTH * 0.53));
        ctx.fillText(this.siltyClayText.split(' ')[1], (CANVAS_WIDTH * 0.66), (CANVAS_HEIGTH * 0.555));
        // Clay Loam Text
        ctx.fillText(this.clayLoamText, (CANVAS_WIDTH * 0.51), (CANVAS_HEIGTH * 0.64));
        // Silty Clay Loam Text
        ctx.fillText(this.siltyClayLoamText.split(' ')[0], (CANVAS_WIDTH * 0.68), (CANVAS_HEIGTH * 0.62));
        ctx.fillText(this.siltyClayLoamText.split(' ')[1], (CANVAS_WIDTH * 0.68), (CANVAS_HEIGTH * 0.645));
        ctx.fillText(this.siltyClayLoamText.split(' ')[2], (CANVAS_WIDTH * 0.68), (CANVAS_HEIGTH * 0.67));
        // Sand Clay Loam Text
        ctx.fillText(this.sandyClayLoamText.split(' ')[0], (CANVAS_WIDTH * 0.31), (CANVAS_HEIGTH * 0.67));
        ctx.fillText(this.sandyClayLoamText.split(' ')[1], (CANVAS_WIDTH * 0.31), (CANVAS_HEIGTH * 0.695));
        ctx.fillText(this.sandyClayLoamText.split(' ')[2], (CANVAS_WIDTH * 0.31), (CANVAS_HEIGTH * 0.72));
        // Sand Text
        ctx.fillText(this.sandText, (CANVAS_WIDTH * 0.155), (CANVAS_HEIGTH * 0.88));
        // Loamy Sand Text
        ctx.save();
        ctx.translate(CANVAS_WIDTH * 0.21, CANVAS_HEIGTH * 0.85);
        ctx.rotate(Math.PI / 5);
        ctx.fillText(this.loamySandText, 0, 0);
        ctx.restore();
        // Sandy Loam Text
        ctx.fillText(this.sandyLoamText, (CANVAS_WIDTH * 0.32), (CANVAS_HEIGTH * 0.815));
        // Loam Text
        ctx.fillText(this.loamText, (CANVAS_WIDTH * 0.50), (CANVAS_HEIGTH * 0.78));
        // Silt Loam Text
        ctx.fillText(this.siltLoamText, (CANVAS_WIDTH * 0.68), (CANVAS_HEIGTH * 0.8));
        // Silt Text
        ctx.fillText(this.siltText, (CANVAS_WIDTH * 0.815), (CANVAS_HEIGTH * 0.87));

        // Background outside the triangle
        ctx.lineWidth = (CANVAS_WIDTH * 0.01);
        ctx.strokeStyle = this.triangleColor;
        ctx.fillStyle  = this.backgroundColor;
        ctx.setLineDash([0, 0]);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo((CANVAS_WIDTH / 2), 0);
        ctx.lineTo((CANVAS_WIDTH / 2), (CANVAS_HEIGTH * PADDING));
        ctx.lineTo((CANVAS_WIDTH * PADDING), CANVAS_HEIGTH - (CANVAS_HEIGTH * PADDING));
        ctx.lineTo(CANVAS_WIDTH - (CANVAS_WIDTH * PADDING), CANVAS_HEIGTH - (CANVAS_HEIGTH* PADDING));
        ctx.lineTo((CANVAS_WIDTH / 2), (CANVAS_HEIGTH * PADDING));
        ctx.lineTo((CANVAS_WIDTH / 2), 0);
        ctx.lineTo(CANVAS_WIDTH, 0);
        ctx.lineTo(CANVAS_WIDTH, CANVAS_HEIGTH);
        ctx.lineTo(0, CANVAS_HEIGTH);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        // Percentage text values
        ctx.font = `bold ${(CANVAS_WIDTH * 0.025)}px Arial`;
        // Clay values
        var marginFontClay = 0;
        for (let percentClay = 0; percentClay <= 100; percentClay += 10) {
            ctx.fillStyle  = this.clayColor;
            ctx.textAlign = "right";
            ctx.fillText(percentClay, ((CANVAS_WIDTH * PADDING) - 10) + (marginFontClay / 2), (CANVAS_HEIGTH - (CANVAS_HEIGTH * PADDING)) - marginFontClay);
            marginFontClay += LINE_GAP;
        }
        // Silt values
        var marginFontSilt = 0;
        for (let percentSilt = 0; percentSilt <= 100; percentSilt += 10) {
            ctx.fillStyle  = this.siltColor;
            ctx.textAlign = "left";
            ctx.fillText(percentSilt, ((CANVAS_WIDTH / 2) + 10) + (marginFontSilt / 2), (CANVAS_HEIGTH * PADDING) + marginFontSilt);
            marginFontSilt += LINE_GAP;
        }
        // Sand values
        var marginFontSand = 0;
        for (let percentSand = 0; percentSand <= 100; percentSand += 10) {
            ctx.font = `bold ${(CANVAS_WIDTH * 0.025)}px Arial`;
            ctx.fillStyle  = this.sandColor;
            ctx.textAlign = "center";
            ctx.fillText(percentSand, (CANVAS_WIDTH - ((CANVAS_WIDTH * PADDING) + marginFontSand)), CANVAS_HEIGTH - ((CANVAS_HEIGTH * (PADDING / 1.5))));
            marginFontSand += LINE_GAP;
        }

        // Percentage text
        ctx.font = `bold ${CANVAS_WIDTH / 25}px Arial`;
        ctx.textAlign = 'center';
        // Clay Text
        ctx.fillStyle  = this.clayColor;
        ctx.save();
        ctx.translate((CANVAS_WIDTH * 0.22), (CANVAS_HEIGTH / 2));
        ctx.rotate(-Math.PI / 3);
        ctx.fillText(this.percentClayText.toUpperCase(), 0, 0);
        ctx.restore();
        // Silt Text
        ctx.fillStyle  = this.siltColor;
        ctx.save();
        ctx.translate((CANVAS_WIDTH * 0.78), (CANVAS_HEIGTH / 2));
        ctx.rotate(Math.PI / 3);
        ctx.fillText(this.percentSiltText.toUpperCase(), 0, 0);
        ctx.restore();
        // Sand Text
        ctx.fillStyle  = this.sandColor;
        ctx.save();
        ctx.fillText(this.percentSandText.toUpperCase(), (CANVAS_WIDTH / 2.1), (CANVAS_HEIGTH * 0.98));
        ctx.restore();
    }

    /**
     * Change language of the Textural Triangle text
     * @param {string} language Language to be used
     * @example triangle.setLanguage('pt-BR') // to uses the Portuguese language
     * @suportedLanguages [pt - Portuguese, en - English, sp - Spanish]
     * @defaultValue English - en
     */
    setLanguage(language) {
        switch (language.toLowerCase()) {
            case 'en': // english
                this.veryClayeyText = 'Very Clayey';
                this.clayText = 'Clay';
                this.sandyClayText = 'Sandy Clay';
                this.siltyClayText = 'Silty Clay';
                this.sandyClayLoamText = 'Sandy Clay Loam';
                this.clayLoamText = 'Clay Loam';
                this.siltyClayLoamText = 'Silty Clay Loam';
                this.sandText = 'Sand';
                this.loamySandText = 'Loamy Sand';
                this.sandyLoamText = 'Sandy Loam';
                this.loamText = 'Loam';
                this.siltLoamText = 'Silt Loam';
                this.siltText = 'Silt';

                this.percentClayText = '% Clay';
                this.percentSiltText = '% Silt';
                this.percentSandText = '% Sand';
                break;
            case 'sp': // spanish
                this.veryClayeyText = 'Muy Argiloso';
                this.clayText = 'Argila';
                this.sandyClayText = 'Argila Arena';
                this.siltyClayText = 'Argila Arena Silicada';
                this.sandyClayLoamText = 'Argila Arena Lomosa';
                this.clayLoamText = 'Argila Lomosa';
                this.siltyClayLoamText = 'Argila Silicada Lomosa';
                this.sandText = 'Arena';
                this.loamySandText = 'Arena Lomosa';
                this.sandyLoamText = 'Arena Lomosa';
                this.loamText = 'Lomosa';
                this.siltLoamText = 'Silicada Lomosa';
                this.siltText = 'Silicada';

                this.percentClayText = '% Argila';
                this.percentSiltText = '% Silicada';
                this.percentSandText =  '% Arena';
                break;
            case 'pt-br': // portuguese
                this.veryClayeyText = 'Muito Argiloso';
                this.clayText = 'Argila';
                this.sandyClayText = 'Argilo Arenoso';
                this.siltyClayText = 'Argilo Siltoso';
                this.sandyClayLoamText = 'Franco Argilo Arenoso';
                this.clayLoamText = 'Franco Argiloso';
                this.siltyClayLoamText = 'Franco Argilo Siltoso';
                this.sandText = 'Areia';
                this.loamySandText = 'Areia Franca';
                this.sandyLoamText = 'Franco Arenoso';
                this.loamText = 'Franco';
                this.siltLoamText = 'Franco Siltoso';
                this.siltText = 'Silte';

                this.percentClayText = '% Argila';
                this.percentSiltText = '% Silte';
                this.percentSandText = '% Areia';
                break;
            default:
                this.language = 'en';
                break;
        }
    }
}