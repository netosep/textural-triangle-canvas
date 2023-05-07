/**
 * This class implements a Textural Triangle on Canvas for classifying soil 
 * texture from the percentages of Silt, Sand and Clay. Soil texture 
 * classification is an important step in agronomy and soil analysis 
 * for planting, cultivation and management purposes.
 * 
 * Author: Neto Sepulveda (clementesepulveda27@gmail.com)
 * License: MIT
 * Copyright (c) 2022
 * Unauthorized copying of this file, via any medium is strictly prohibited
 */
class TexturalTriangleCanvas {
    /**
     * Create the textural triangle in a canvas tag.
     * 
     * @param {String} canvasId HTML canvas element ID
     * 
     * @example 
     * <canvas id="myCanvas" width="400" height="400"></canvas>
     * let myTriangle = new TexturalTriangleCanvas('myCanvas');
     */
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.CANVAS_WIDTH = this.canvas.width;
        this.CANVAS_HEIGHT = this.canvas.height;
        this.PADDING = 0.1;
        this.LINE_GAP = ((this.CANVAS_WIDTH + this.CANVAS_HEIGHT) / 2) * 0.08;
        this.canvas.style.width = `${this.CANVAS_WIDTH}px`;
        this.canvas.style.height = `${this.CANVAS_HEIGHT}px`;
        this.siltColor = 'red';
        this.sandColor = 'orange';
        this.clayColor = 'blue';
        this.textColor = 'black';
        this.backgroundColor = 'white';
        this.triangleColor = 'black';
        this.dottedLineColor = 'gray';
        this.setLanguage();
    }

    /**
     * Draw the textural triangle in the canvas
     */
    draw() {
        this._drawBackground(this);
        this._drawPercentageLines(this);
        this._drawDividingLines(this);
        this._drawTexturalTextClasses(this);
        this._drawBackgroundOutside(this);
        this._drawPercentageTextValues(this);
        this._drawPercentText(this);

        return this;
    }

    /**
     * Draw the textural triangle with the given values.
     * 
     * @param {Number} siltPercent Percent of silt in the triangle
     * @param {Number} sandPercent Percent of sand in the triangle
     * @param {Number} clayPercent Percent of clay in the triangle
     */
    drawWithValues(siltPercent, sandPercent, clayPercent) {
        if (isNaN(siltPercent) || isNaN(sandPercent) || isNaN(clayPercent)) {
            throw new Error('Invalid parameters (Need to be numbers)');
        }

        this.siltPercent = parseFloat(siltPercent) / 10;
        this.sandPercent = parseFloat(sandPercent) / 10;
        this.clayPercent = parseFloat(clayPercent) / 10;

        if ((this.siltPercent * 10) + (this.sandPercent * 10) + (this.clayPercent * 10) !== 100) {
            throw new Error('Percentages must add up to 100');
        }

        this._drawBackground(this);
        this._drawPercentageLines(this);
        this._drawDividingLines(this);
        this._drawTexturalTextClasses(this);
        this._drawDottedLines(this);
        this._drawPercentageMeetingPoint(this);
        this._drawBackgroundOutside(this);
        this._drawPercentageTextValues(this);
        this._drawPercentText(this);
    }

    /**
     * Refresh triangle drawing
     */
    refresh() {
        return this.draw();
    }

    /**
     * Returns a json object with the list of supported languages
     * 
     * @return {Object} object
     */
    getLanguages() {
        return {
            "en": {
                veryClayeyText: 'Heavy Clay',
                clayText: 'Clay',
                sandyClayText: 'Sandy Clay',
                siltyClayText: 'Silty Clay',
                sandyClayLoamText: 'Sandy Clay Loam',
                clayLoamText: 'Clay Loam',
                siltyClayLoamText: 'Silty Clay Loam',
                sandText: 'Sand',
                loamySandText: 'Loamy Sand',
                sandyLoamText: 'Sandy Loam',
                loamText: 'Loam',
                siltLoamText: 'Silt Loam',
                siltText: 'Silt',
                percentClayText: '% Clay',
                percentSiltText: '% Silt',
                percentSandText: '% Sand'
            },
            "pt-br": {
                veryClayeyText: 'Muito Argiloso',
                clayText: 'Argila',
                sandyClayText: 'Argilo Arenoso',
                siltyClayText: 'Argilo Siltoso',
                sandyClayLoamText: 'Franco Argilo Arenoso',
                clayLoamText: 'Franco Argiloso',
                siltyClayLoamText: 'Franco Argilo Siltoso',
                sandText: 'Areia',
                loamySandText: 'Areia Franca',
                sandyLoamText: 'Franco Arenoso',
                loamText: 'Franco',
                siltLoamText: 'Franco Siltoso',
                siltText: 'Silte',
                percentClayText: '% Argila',
                percentSiltText: '% Silte',
                percentSandText: '% Areia'
            },
            "sp": {
                veryClayeyText: 'Muy Argiloso',
                clayText: 'Argila',
                sandyClayText: 'Argila Arena',
                siltyClayText: 'Argila Arena Silicada',
                sandyClayLoamText: 'Argila Arena Lomosa',
                clayLoamText: 'Argila Lomosa',
                siltyClayLoamText: 'Argila Silicada Lomosa',
                sandText: 'Arena',
                loamySandText: 'Arena Lomosa',
                sandyLoamText: 'Arena Lomosa',
                loamText: 'Lomosa',
                siltLoamText: 'Silicada Lomosa',
                siltText: 'Silicada',
                percentClayText: '% Argila',
                percentSiltText: '% Silicada',
                percentSandText: '% Arena'
            }
        }
    }

    /**
     * Change language of the Textural Triangle text
     * 
     * @param {String} language Language to be used
     * @param {Object} json Json object with chosen language
     * 
     * @example myTriangle.setLanguage('pt-br') // to uses the Portuguese language
     */
    setLanguage(language = 'en', json = this.getLanguages()) {
        this.veryClayeyText = json[language].veryClayeyText;
        this.clayText = json[language].clayText;
        this.sandyClayText = json[language].sandyClayText;
        this.siltyClayText = json[language].siltyClayText;
        this.sandyClayLoamText = json[language].sandyClayLoamText;
        this.clayLoamText = json[language].clayLoamText;
        this.siltyClayLoamText = json[language].siltyClayLoamText;
        this.sandText = json[language].sandText;
        this.loamySandText = json[language].loamySandText;
        this.sandyLoamText = json[language].sandyLoamText;
        this.loamText = json[language].loamText;
        this.siltLoamText = json[language].siltLoamText;
        this.siltText = json[language].siltText;
        this.percentClayText = json[language].percentClayText;
        this.percentSiltText = json[language].percentSiltText;
        this.percentSandText = json[language].percentSandText;
    }

    _drawTextLink($this) {
        const DEVELOPED_BY_TEXT = 'Developed with 🖤 by github.com/netosep';
        $this.ctx.font = `${($this.CANVAS_WIDTH * 0.014)}px Arial`;
        $this.ctx.textAlign = 'end';
        $this.ctx.fillStyle = 'gray';
        $this.ctx.fillText(DEVELOPED_BY_TEXT, $this.CANVAS_WIDTH - ($this.PADDING * 150), $this.CANVAS_HEIGHT - ($this.PADDING * 150));

        let clickableArea = {
            x: $this.CANVAS_WIDTH,
            y: $this.CANVAS_HEIGHT,
            width: $this.ctx.measureText(DEVELOPED_BY_TEXT).width,
            height: $this.CANVAS_WIDTH * 0.015
        };

        $this.canvas.addEventListener("mousemove", function (event) {
            if (isClickableArea(event, clickableArea)) {
                $this.canvas.style.cursor = "pointer";
            } else {
                $this.canvas.style.cursor = "default";
            }
        });

        $this.canvas.addEventListener("click", function (event) {
            if (isClickableArea(event, clickableArea)) {
                window.open("https://github.com/netosep/textural-triangle-canvas", "_blank");
            }
        });

        function isClickableArea(event, area) {
            return (
                event.offsetX >= (area.x - (area.width + ($this.PADDING * 150))) &&
                event.offsetX <= (area.x - ($this.PADDING * 150)) &&
                event.offsetY <= (area.y - area.height) &&
                event.offsetY >= (area.y - ($this.PADDING * 250))
            );
        }
    }

    /**
     * Canvas background color
     */
    _drawBackground(canvas) {
        canvas.ctx.fillStyle = canvas.backgroundColor;
        canvas.ctx.beginPath();
        canvas.ctx.moveTo(0, 0);
        canvas.ctx.lineTo(canvas.CANVAS_WIDTH, 0);
        canvas.ctx.lineTo(canvas.CANVAS_WIDTH, canvas.CANVAS_HEIGHT);
        canvas.ctx.lineTo(0, canvas.CANVAS_HEIGHT);
        canvas.ctx.closePath();
        canvas.ctx.fill();
    }

    /**
     * Percentage lines.
     */
    _drawPercentageLines(canvas) {
        canvas.ctx.lineWidth = 1;
        canvas.ctx.setLineDash([0, 0]);
        // Clay lines
        for (let i = (canvas.CANVAS_HEIGHT * canvas.PADDING); i <= (canvas.CANVAS_HEIGHT - (canvas.CANVAS_HEIGHT * canvas.PADDING)); i += canvas.LINE_GAP) {
            canvas.ctx.strokeStyle = canvas.clayColor;
            canvas.ctx.beginPath();
            canvas.ctx.moveTo((canvas.CANVAS_WIDTH * canvas.PADDING), i);
            canvas.ctx.lineTo(canvas.CANVAS_WIDTH - (canvas.CANVAS_WIDTH * canvas.PADDING), i);
            canvas.ctx.stroke();
        }
        // Sand lines
        let sandLineGap = 0
        for (let i = (canvas.CANVAS_WIDTH * canvas.PADDING); i < (canvas.CANVAS_WIDTH - (canvas.CANVAS_WIDTH * canvas.PADDING)); i += canvas.LINE_GAP) {
            canvas.ctx.strokeStyle = canvas.sandColor;
            canvas.ctx.beginPath();
            canvas.ctx.moveTo(canvas.CANVAS_WIDTH - i, canvas.CANVAS_HEIGHT - (canvas.CANVAS_HEIGHT * canvas.PADDING));
            canvas.ctx.lineTo((canvas.CANVAS_WIDTH / 2) - sandLineGap, (canvas.CANVAS_HEIGHT * canvas.PADDING));
            canvas.ctx.stroke();
            sandLineGap += canvas.LINE_GAP;
        }
        // Silt lines
        let siltLineGap = 0
        for (let i = (canvas.CANVAS_WIDTH * canvas.PADDING); i < (canvas.CANVAS_WIDTH - (canvas.CANVAS_WIDTH * canvas.PADDING)); i += canvas.LINE_GAP) {
            canvas.ctx.strokeStyle = canvas.siltColor;
            canvas.ctx.beginPath();
            canvas.ctx.moveTo(canvas.PADDING + i, canvas.CANVAS_HEIGHT - (canvas.CANVAS_HEIGHT * canvas.PADDING));
            canvas.ctx.lineTo(((canvas.CANVAS_WIDTH / 2) + siltLineGap), (canvas.CANVAS_HEIGHT * canvas.PADDING));
            canvas.ctx.stroke();
            siltLineGap += canvas.LINE_GAP;
        }
    }

    /**
     * Dividing lines of textural classes
     */
    _drawDividingLines(canvas) {
        canvas.ctx.lineWidth = (canvas.CANVAS_WIDTH * 0.003);
        canvas.ctx.strokeStyle = canvas.triangleColor;
        canvas.ctx.beginPath();
        canvas.ctx.moveTo((canvas.CANVAS_WIDTH * 0.34), (canvas.CANVAS_HEIGHT * 0.42));
        canvas.ctx.lineTo(canvas.CANVAS_WIDTH - (canvas.CANVAS_WIDTH * 0.34), (canvas.CANVAS_HEIGHT * 0.42));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH * 0.58), (canvas.CANVAS_HEIGHT * 0.58));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH * 0.74), (canvas.CANVAS_HEIGHT * 0.58));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH * 0.79), (canvas.CANVAS_HEIGHT * 0.68));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH * 0.63), (canvas.CANVAS_HEIGHT * 0.68));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH * 0.58), (canvas.CANVAS_HEIGHT * 0.58));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH * 0.38), (canvas.CANVAS_HEIGHT * 0.58));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH * 0.32), (canvas.CANVAS_HEIGHT * 0.46));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH * 0.24), (canvas.CANVAS_HEIGHT * 0.62));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH * 0.40), (canvas.CANVAS_HEIGHT * 0.62));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH * 0.38), (canvas.CANVAS_HEIGHT * 0.58));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH * 0.43), (canvas.CANVAS_HEIGHT * 0.68));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH * 0.79), (canvas.CANVAS_HEIGHT * 0.68));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH * 0.61), (canvas.CANVAS_HEIGHT * 0.68));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH * 0.50), (canvas.CANVAS_HEIGHT * 0.90));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH * 0.34), (canvas.CANVAS_HEIGHT * 0.90));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH * 0.16), (canvas.CANVAS_HEIGHT * 0.78));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH * 0.14), (canvas.CANVAS_HEIGHT * 0.82));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH * 0.23), (canvas.CANVAS_HEIGHT * 0.90));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH * 0.50), (canvas.CANVAS_HEIGHT * 0.90));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH * 0.52), (canvas.CANVAS_HEIGHT * 0.86));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH * 0.46), (canvas.CANVAS_HEIGHT * 0.86));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH * 0.40), (canvas.CANVAS_HEIGHT * 0.74));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH * 0.43), (canvas.CANVAS_HEIGHT * 0.68));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH * 0.40), (canvas.CANVAS_HEIGHT * 0.74));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH * 0.18), (canvas.CANVAS_HEIGHT * 0.74));
        canvas.ctx.moveTo((canvas.CANVAS_WIDTH * 0.74), (canvas.CANVAS_HEIGHT * 0.90));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH * 0.78), (canvas.CANVAS_HEIGHT * 0.82));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH * 0.86), (canvas.CANVAS_HEIGHT * 0.82));
        canvas.ctx.stroke();
    }

    /**
     * Texts of textural classes
     */
    _drawTexturalTextClasses(canvas) {
        canvas.ctx.font = `bold ${(canvas.CANVAS_WIDTH * 0.023)}px Arial`;
        canvas.ctx.fillStyle = canvas.textColor;
        canvas.ctx.textAlign = "center";
        // Very Clayey Text
        canvas.ctx.fillText(canvas.veryClayeyText.split(' ')[0], (canvas.CANVAS_WIDTH / 2), (canvas.CANVAS_HEIGHT * 0.31));
        canvas.ctx.fillText(canvas.veryClayeyText.split(' ')[1], (canvas.CANVAS_WIDTH / 2), (canvas.CANVAS_HEIGHT * 0.335));
        // Clay Text
        canvas.ctx.fillText(canvas.clayText, (canvas.CANVAS_WIDTH / 2), (canvas.CANVAS_HEIGHT * 0.51));
        // Sandy Clay Text
        canvas.ctx.fillText(canvas.sandyClayText.split(' ')[0], (canvas.CANVAS_WIDTH * 0.32), (canvas.CANVAS_HEIGHT * 0.57));
        canvas.ctx.fillText(canvas.sandyClayText.split(' ')[1], (canvas.CANVAS_WIDTH * 0.32), (canvas.CANVAS_HEIGHT * 0.595));
        // Silty Clay Text
        canvas.ctx.fillText(canvas.siltyClayText.split(' ')[0], (canvas.CANVAS_WIDTH * 0.66), (canvas.CANVAS_HEIGHT * 0.53));
        canvas.ctx.fillText(canvas.siltyClayText.split(' ')[1], (canvas.CANVAS_WIDTH * 0.66), (canvas.CANVAS_HEIGHT * 0.555));
        // Clay Loam Text
        canvas.ctx.fillText(canvas.clayLoamText, (canvas.CANVAS_WIDTH * 0.51), (canvas.CANVAS_HEIGHT * 0.64));
        // Silty Clay Loam Text
        canvas.ctx.fillText(canvas.siltyClayLoamText.split(' ')[0], (canvas.CANVAS_WIDTH * 0.68), (canvas.CANVAS_HEIGHT * 0.62));
        canvas.ctx.fillText(canvas.siltyClayLoamText.split(' ')[1], (canvas.CANVAS_WIDTH * 0.68), (canvas.CANVAS_HEIGHT * 0.645));
        canvas.ctx.fillText(canvas.siltyClayLoamText.split(' ')[2], (canvas.CANVAS_WIDTH * 0.68), (canvas.CANVAS_HEIGHT * 0.67));
        // Sand Clay Loam Text
        canvas.ctx.fillText(canvas.sandyClayLoamText.split(' ')[0], (canvas.CANVAS_WIDTH * 0.31), (canvas.CANVAS_HEIGHT * 0.67));
        canvas.ctx.fillText(canvas.sandyClayLoamText.split(' ')[1], (canvas.CANVAS_WIDTH * 0.31), (canvas.CANVAS_HEIGHT * 0.695));
        canvas.ctx.fillText(canvas.sandyClayLoamText.split(' ')[2], (canvas.CANVAS_WIDTH * 0.31), (canvas.CANVAS_HEIGHT * 0.72));
        // Sand Text
        canvas.ctx.fillText(canvas.sandText, (canvas.CANVAS_WIDTH * 0.155), (canvas.CANVAS_HEIGHT * 0.88));
        // Loamy Sand Text
        canvas.ctx.save();
        canvas.ctx.translate(canvas.CANVAS_WIDTH * 0.21, canvas.CANVAS_HEIGHT * 0.85);
        canvas.ctx.rotate(Math.PI / 5);
        canvas.ctx.fillText(canvas.loamySandText, 0, 0);
        canvas.ctx.restore();
        // Sandy Loam Text
        canvas.ctx.fillText(canvas.sandyLoamText, (canvas.CANVAS_WIDTH * 0.32), (canvas.CANVAS_HEIGHT * 0.815));
        // Loam Text
        canvas.ctx.fillText(canvas.loamText, (canvas.CANVAS_WIDTH * 0.50), (canvas.CANVAS_HEIGHT * 0.78));
        // Silt Loam Text
        canvas.ctx.fillText(canvas.siltLoamText, (canvas.CANVAS_WIDTH * 0.68), (canvas.CANVAS_HEIGHT * 0.8));
        // Silt Text
        canvas.ctx.fillText(canvas.siltText, (canvas.CANVAS_WIDTH * 0.815), (canvas.CANVAS_HEIGHT * 0.87));
    }

    /**
     * Background outside the triangle
     */
    _drawBackgroundOutside(canvas) {
        canvas.ctx.lineWidth = (canvas.CANVAS_WIDTH * 0.01);
        canvas.ctx.strokeStyle = canvas.triangleColor;
        canvas.ctx.fillStyle = canvas.backgroundColor;
        canvas.ctx.setLineDash([0, 0]);
        canvas.ctx.beginPath();
        canvas.ctx.moveTo(0, 0);
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH / 2), 0);
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH / 2), (canvas.CANVAS_HEIGHT * canvas.PADDING));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH * canvas.PADDING), canvas.CANVAS_HEIGHT - (canvas.CANVAS_HEIGHT * canvas.PADDING));
        canvas.ctx.lineTo(canvas.CANVAS_WIDTH - (canvas.CANVAS_WIDTH * canvas.PADDING), canvas.CANVAS_HEIGHT - (canvas.CANVAS_HEIGHT * canvas.PADDING));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH / 2), (canvas.CANVAS_HEIGHT * canvas.PADDING));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH / 2), 0);
        canvas.ctx.lineTo(canvas.CANVAS_WIDTH, 0);
        canvas.ctx.lineTo(canvas.CANVAS_WIDTH, canvas.CANVAS_HEIGHT);
        canvas.ctx.lineTo(0, canvas.CANVAS_HEIGHT);
        canvas.ctx.closePath();
        canvas.ctx.stroke();
        canvas.ctx.fill();

        this._drawTextLink(this);
    }

    /**
     * Percentage text values
     */
    _drawPercentageTextValues(canvas) {
        canvas.ctx.font = `bold ${(canvas.CANVAS_WIDTH * 0.025)}px Arial`;
        // Clay values
        let marginFontClay = 0;
        for (let percentClay = 0; percentClay <= 100; percentClay += 10) {
            canvas.ctx.fillStyle = canvas.clayColor;
            canvas.ctx.textAlign = "right";
            canvas.ctx.fillText(percentClay, ((canvas.CANVAS_WIDTH * canvas.PADDING) - 10) + (marginFontClay / 2), (canvas.CANVAS_HEIGHT - (canvas.CANVAS_HEIGHT * canvas.PADDING)) - marginFontClay);
            marginFontClay += canvas.LINE_GAP;
        }
        // Silt values
        let marginFontSilt = 0;
        for (let percentSilt = 0; percentSilt <= 100; percentSilt += 10) {
            canvas.ctx.fillStyle = canvas.siltColor;
            canvas.ctx.textAlign = "left";
            canvas.ctx.fillText(percentSilt, ((canvas.CANVAS_WIDTH / 2) + 10) + (marginFontSilt / 2), (canvas.CANVAS_HEIGHT * canvas.PADDING) + marginFontSilt);
            marginFontSilt += canvas.LINE_GAP;
        }
        // Sand values
        let marginFontSand = 0;
        for (let percentSand = 0; percentSand <= 100; percentSand += 10) {
            canvas.ctx.font = `bold ${(canvas.CANVAS_WIDTH * 0.025)}px Arial`;
            canvas.ctx.fillStyle = canvas.sandColor;
            canvas.ctx.textAlign = "center";
            canvas.ctx.fillText(percentSand, (canvas.CANVAS_WIDTH - ((canvas.CANVAS_WIDTH * canvas.PADDING) + marginFontSand)), canvas.CANVAS_HEIGHT - ((canvas.CANVAS_HEIGHT * (canvas.PADDING / 1.5))));
            marginFontSand += canvas.LINE_GAP;
        }
    }

    /**
     * Percentage text
     */
    _drawPercentText(canvas) {
        canvas.ctx.font = `bold ${canvas.CANVAS_WIDTH / 25}px Arial`;
        canvas.ctx.textAlign = 'center';
        // Clay Text
        canvas.ctx.fillStyle = canvas.clayColor;
        canvas.ctx.save();
        canvas.ctx.translate((canvas.CANVAS_WIDTH * 0.22), (canvas.CANVAS_HEIGHT / 2));
        canvas.ctx.rotate(-Math.PI / 3);
        canvas.ctx.fillText(canvas.percentClayText.toUpperCase(), 0, 0);
        canvas.ctx.restore();
        // Silt Text
        canvas.ctx.fillStyle = canvas.siltColor;
        canvas.ctx.save();
        canvas.ctx.translate((canvas.CANVAS_WIDTH * 0.78), (canvas.CANVAS_HEIGHT / 2));
        canvas.ctx.rotate(Math.PI / 3);
        canvas.ctx.fillText(canvas.percentSiltText.toUpperCase(), 0, 0);
        canvas.ctx.restore();
        // Sand Text
        canvas.ctx.fillStyle = canvas.sandColor;
        canvas.ctx.save();
        canvas.ctx.fillText(canvas.percentSandText.toUpperCase(), (canvas.CANVAS_WIDTH / 2.1), (canvas.CANVAS_HEIGHT * 0.98));
        canvas.ctx.restore();
    }

    /**
     * Percentage dotted lines
     */
    _drawDottedLines(canvas) {
        canvas.ctx.lineWidth = (canvas.CANVAS_WIDTH * 0.003);
        canvas.ctx.strokeStyle = canvas.dottedLineColor;
        canvas.ctx.setLineDash([5, 3]);
        canvas.ctx.beginPath();
        // Sand dotted line
        canvas.ctx.moveTo(canvas.CANVAS_WIDTH - (canvas.CANVAS_WIDTH * canvas.PADDING + ((canvas.LINE_GAP * canvas.sandPercent))), canvas.CANVAS_HEIGHT - (canvas.CANVAS_HEIGHT * canvas.PADDING));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH / 2) - (((canvas.sandPercent - canvas.siltPercent) * canvas.LINE_GAP) / 2), canvas.CANVAS_HEIGHT - ((canvas.CANVAS_HEIGHT * canvas.PADDING) + (canvas.LINE_GAP * canvas.clayPercent)));
        // Silt dotted line
        canvas.ctx.moveTo((canvas.CANVAS_WIDTH / 2) + (canvas.LINE_GAP * canvas.siltPercent), (canvas.CANVAS_HEIGHT * canvas.PADDING));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH / 2) - (((canvas.sandPercent - canvas.siltPercent) * canvas.LINE_GAP) / 2), canvas.CANVAS_HEIGHT - ((canvas.CANVAS_HEIGHT * canvas.PADDING) + (canvas.LINE_GAP * canvas.clayPercent)));
        // Clay dotted line
        canvas.ctx.moveTo((canvas.CANVAS_WIDTH * canvas.PADDING), canvas.CANVAS_HEIGHT - ((canvas.CANVAS_HEIGHT * canvas.PADDING) + (canvas.LINE_GAP * canvas.clayPercent)));
        canvas.ctx.lineTo((canvas.CANVAS_WIDTH / 2) - (((canvas.sandPercent - canvas.siltPercent) * canvas.LINE_GAP) / 2), canvas.CANVAS_HEIGHT - ((canvas.CANVAS_HEIGHT * canvas.PADDING) + (canvas.LINE_GAP * canvas.clayPercent)));
        canvas.ctx.stroke();
    }

    /**
     * Percentage meeting point
     */
    _drawPercentageMeetingPoint(canvas) {
        canvas.ctx.fillStyle = canvas.dottedLineColor;
        canvas.ctx.beginPath();
        let xPoint = (canvas.CANVAS_WIDTH / 2) - (((canvas.sandPercent - canvas.siltPercent) * canvas.LINE_GAP) / 2);
        let yPoint = canvas.CANVAS_HEIGHT - ((canvas.CANVAS_HEIGHT * canvas.PADDING) + (canvas.LINE_GAP * canvas.clayPercent));
        canvas.ctx.arc(xPoint, yPoint, canvas.CANVAS_WIDTH * 0.005, 0, 2 * Math.PI);
        canvas.ctx.fill();
    }
}