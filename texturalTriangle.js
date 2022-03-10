class TexturalTriangle {
    /**
     * @param {number} siltPercent Percent of silt in the triangle
     * @param {number} sandPercent Percent of sand in the triangle
     * @param {number} clayPercent Percent of clay in the triangle
     */
    constructor(siltPercent, sandPercent, clayPercent) {
        this.siltPercent = siltPercent;
        this.sandPercent = sandPercent;
        this.clayPercent = clayPercent;

        this.siltColor = 'red';
        this.sandColor = 'orange';
        this.clayColor = 'blue';

        this.textColor = 'black';
        this.backgroundColor = 'white';
        this.triangleColor = 'black';
        
        this.setLanguage('en');

        if (this.siltPercent + this.sandPercent + this.clayPercent !== 100) {
            throw new Error('Percentages must add up to 100');
        }
    }

    /**
     * Create the textural triangle in a canvas tag.
     * @param {string} canvasId HTML canvas element ID
     * @example 
     * <canvas id="myCanvas" width="400" height="400"></canvas>
     * TexturalTriangle.draw('myCanvas');
     */
    draw(canvasId) {
        const canvas = document.getElementById(canvasId);
        const ctx = canvas.getContext('2d');
        const CANVAS_WIDTH = canvas.width;
        const CANVAS_HEIGTH = canvas.height;
        const PADDING = 0.1;
        const LINE_GAP = ((CANVAS_WIDTH + CANVAS_HEIGTH) / 2) * 0.08;

        // background branco
        ctx.fillStyle  = this.backgroundColor;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(CANVAS_WIDTH, 0);
        ctx.lineTo(CANVAS_WIDTH, CANVAS_HEIGTH);
        ctx.lineTo(0, CANVAS_HEIGTH);
        ctx.closePath();
        ctx.fill();

        // clay lines
        for (let i = (CANVAS_HEIGTH * PADDING); i <= (CANVAS_HEIGTH - (CANVAS_HEIGTH * PADDING)); i += LINE_GAP) {
            ctx.lineWidth = 1;
            ctx.setLineDash([0, 0]);
            ctx.strokeStyle = this.clayColor;

            ctx.beginPath();
            ctx.moveTo((CANVAS_WIDTH * PADDING), i);
            ctx.lineTo(CANVAS_WIDTH - (CANVAS_WIDTH * PADDING), i);
            ctx.stroke(); 
        }

        // sand lines
        var sandLineGap = 0
        for (let i = (CANVAS_WIDTH * PADDING); i < (CANVAS_WIDTH - (CANVAS_WIDTH * PADDING)); i += LINE_GAP) {
            ctx.lineWidth = 1;
            ctx.strokeStyle = this.sandColor;
            ctx.setLineDash([0, 0]);

            ctx.beginPath();
            ctx.moveTo(CANVAS_WIDTH - i, CANVAS_HEIGTH - (CANVAS_HEIGTH * PADDING));
            ctx.lineTo((CANVAS_WIDTH / 2) - sandLineGap, (CANVAS_HEIGTH * PADDING));
            ctx.stroke(); 
            sandLineGap += LINE_GAP;
        }

        // silt lines
        var siltLineGap = 0
        for (let i = (CANVAS_WIDTH * PADDING); i < (CANVAS_WIDTH - (CANVAS_WIDTH * PADDING)); i += LINE_GAP) {
            ctx.lineWidth = 1;
            ctx.strokeStyle = this.siltColor;
            ctx.setLineDash([0, 0]);

            ctx.beginPath();
            ctx.moveTo(PADDING + i, CANVAS_HEIGTH - (CANVAS_HEIGTH * PADDING));
            ctx.lineTo(((CANVAS_WIDTH / 2) + siltLineGap), (CANVAS_HEIGTH * PADDING));
            ctx.stroke(); 
            siltLineGap += LINE_GAP;
        }

        //
        // aqui vai as porcentagens
        //
        // ctx.lineWidth = 1;
        // ctx.strokeStyle = '#000000';
        // ctx.setLineDash([0, 0]);
        // ctx.beginPath();
        // ctx.moveTo(CANVAS_WIDTH - (CANVAS_WIDTH * PADDING + ((LINE_GAP * sandPercent))), CANVAS_HEIGTH - (CANVAS_HEIGTH * PADDING));
        // ctx.lineTo((CANVAS_WIDTH / 2) - ((LINE_GAP * sandPercent)), (CANVAS_HEIGTH * PADDING));
        // ctx.stroke();

        // linha tipos de solo
        ctx.lineWidth = (CANVAS_WIDTH * 0.004);
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

        // Very Clayey Text
        ctx.font = `bold ${(CANVAS_WIDTH * 0.023)}px Arial`;
        ctx.fillStyle  = this.textColor;
        ctx.textAlign = "center";
        ctx.fillText(this.veryClayeyText.split(' ')[0], (CANVAS_WIDTH / 2), (CANVAS_HEIGTH * 0.31));
        ctx.fillText(this.veryClayeyText.split(' ')[1], (CANVAS_WIDTH / 2), (CANVAS_HEIGTH * 0.33));

        // Clay Text
        ctx.font = `bold ${(CANVAS_WIDTH * 0.023)}px Arial`;
        ctx.fillStyle  = this.textColor;
        ctx.textAlign = "center";
        ctx.fillText(this.clayText, (CANVAS_WIDTH / 2), (CANVAS_HEIGTH * 0.51));

        // texto Argilo Siltosa
        ctx.font = `bold ${(CANVAS_WIDTH * 0.022)}px Arial`;
        ctx.fillStyle  = this.textColor;
        ctx.textAlign = "center";
        ctx.fillText('ARGILO', (CANVAS_WIDTH * 0.66), (CANVAS_HEIGTH * 0.53));
        ctx.fillText('SILTOSA', (CANVAS_WIDTH * 0.66), (CANVAS_HEIGTH * 0.55));

        // texto Argilo Arenosa
        ctx.font = `bold ${(CANVAS_WIDTH * 0.022)}px Arial`;
        ctx.fillStyle  = this.textColor;
        ctx.textAlign = "center";
        ctx.fillText('ARGILO', (CANVAS_WIDTH * 0.32), (CANVAS_HEIGTH * 0.57));
        ctx.fillText('ARENOSA', (CANVAS_WIDTH * 0.32), (CANVAS_HEIGTH * 0.59));

        // texto Franco Argilosa
        ctx.font = `bold ${(CANVAS_WIDTH * 0.022)}px Arial`;
        ctx.fillStyle  = this.textColor;
        ctx.textAlign = "center";
        ctx.fillText('FRANCO', (CANVAS_WIDTH * 0.50), (CANVAS_HEIGTH * 0.63));
        ctx.fillText('ARGILOSA', (CANVAS_WIDTH * 0.50), (CANVAS_HEIGTH * 0.65));

        // texto Franco Argilo Siltosa
        ctx.font = `bold ${(CANVAS_WIDTH * 0.022)}px Arial`;
        ctx.fillStyle  = this.textColor;
        ctx.textAlign = "center";
        ctx.fillText('FRANCO', (CANVAS_WIDTH * 0.68), (CANVAS_HEIGTH * 0.62));
        ctx.fillText('ARGILO', (CANVAS_WIDTH * 0.68), (CANVAS_HEIGTH * 0.64));
        ctx.fillText('SILTOSA', (CANVAS_WIDTH * 0.68), (CANVAS_HEIGTH * 0.66));

        // texto Franco Argiloso Arenosa
        ctx.font = `bold ${(CANVAS_WIDTH * 0.022)}px Arial`;
        ctx.fillStyle  = this.textColor;
        ctx.textAlign = "center";
        ctx.fillText('FRANCO', (CANVAS_WIDTH * 0.31), (CANVAS_HEIGTH * 0.67));
        ctx.fillText('ARGILOSO', (CANVAS_WIDTH * 0.31), (CANVAS_HEIGTH * 0.69));
        ctx.fillText('ARENOSA', (CANVAS_WIDTH * 0.31), (CANVAS_HEIGTH * 0.71));

        // fundo branco mascara
        ctx.lineWidth = 7;
        ctx.strokeStyle = this.triangleColor;
        ctx.fillStyle  = this.backgroundColor;
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

        var marginFontClay = 0;
        for (let percentClay = 0; percentClay <= 100; percentClay += 10) {
            ctx.font = `bold ${(CANVAS_WIDTH * 0.025)}px Arial`;
            ctx.fillStyle  = this.clayColor;
            ctx.textAlign = "right";
            ctx.fillText(percentClay, ((CANVAS_WIDTH * PADDING) - 10) + (marginFontClay / 2), (CANVAS_HEIGTH - (CANVAS_HEIGTH * PADDING)) - marginFontClay);
            marginFontClay += LINE_GAP;
        }
        ctx.font = `bold ${CANVAS_WIDTH / 25}px Arial`;
        ctx.fillStyle  = this.clayColor;
        ctx.textAlign = 'center';
        ctx.save();
        ctx.translate(0, CANVAS_HEIGTH);
        ctx.rotate(-Math.PI / 2.9);
        ctx.fillText('% ARGILA', CANVAS_WIDTH, (CANVAS_HEIGTH / 2));
        ctx.restore();

        var marginFontSand = 0;
        for (let percentSand = 0; percentSand <= 100; percentSand+=10) {
            ctx.font = `bold ${(CANVAS_WIDTH * 0.025)}px Arial`;
            ctx.fillStyle  = this.sandColor;
            ctx.textAlign = "center";
            ctx.fillText(percentSand, (CANVAS_WIDTH - ((CANVAS_WIDTH * PADDING) + marginFontSand)), CANVAS_HEIGTH - ((CANVAS_HEIGTH * (PADDING / 1.5))));
            marginFontSand += LINE_GAP;
        }
        ctx.font = `bold ${CANVAS_WIDTH / 25}px Arial`;
        ctx.fillStyle  = this.sandColor;
        ctx.textAlign = 'center';
        ctx.save();
        ctx.fillText('% AREIA', (CANVAS_WIDTH / 2.1), CANVAS_HEIGTH - (CANVAS_HEIGTH * (PADDING / 4)));
        ctx.restore();

        var marginFontSilt = 0;
        for (let percentSilt = 0; percentSilt <= 100; percentSilt+=10) {
            ctx.font = `bold ${(CANVAS_WIDTH * 0.025)}px Arial`;
            ctx.fillStyle  = this.siltColor;
            ctx.textAlign = "left";
            ctx.fillText(percentSilt, ((CANVAS_WIDTH / 2) + 10) + (marginFontSilt / 2), (CANVAS_HEIGTH * PADDING) + marginFontSilt);
            marginFontSilt += LINE_GAP;
        }
        ctx.font = `bold ${CANVAS_WIDTH / 25}px Arial`;
        ctx.fillStyle  = this.siltColor;
        ctx.textAlign = 'center';
        ctx.save();
        ctx.translate(CANVAS_WIDTH, 0);
        ctx.rotate(Math.PI / 2.9);
        ctx.fillText('% SILTE', (CANVAS_WIDTH / 3.3), (CANVAS_HEIGTH / 2.25));
        ctx.restore();
    }

    /**
     * Change language of the Textural Triangle
     * @param {string} language Language to be used
     * @example triangle.setLanguage('pt') // to uses the Portuguese language
     * @suportedLanguages [pt - Portuguese, en - English, sp - Spanish]
     * @default English - en
     */
    setLanguage(language) {
        switch (language.toLocaleLowerCase()) {
            case 'en': // english
                this.veryClayeyText = 'Very Clayey';
                this.clayText = 'Clay';
                this.sandClayText = 'Sandy Clay';
                this.siltClayText = 'Silty Clay';
                this.sandClayLoamText = 'Sandy Clay Loam';
                this.clayLoamText = 'Clay Loam';
                this.siltClayLoamText = 'Silty Clay Loam';
                this.sandText = 'Sand';
                this.loamySandText = 'Loamy Sand';
                this.sandLoamText = 'Sand Loam';
                this.loamText = 'Loam';
                this.siltLoamText = 'Silt Loam';
                this.siltText = 'Silt';
                break;
            case 'sp': // spanish

                break;
            case 'pt': // portuguese
                this.veryClayeyText = 'Muito Argiloso';
                this.clayText = 'Argila';
                this.sandClayText = 'Argilo Arenoso';
                this.siltClayText = 'Argilo Siltoso';
                this.sandClayLoamText = 'Franco Argilo Arenoso';
                this.clayLoamText = 'Franco Argiloso';
                this.siltClayLoamText = 'Franco Argilo Siltoso';
                this.sandText = 'Areia';
                this.loamySandText = 'Areia Franca';
                this.sandLoamText = 'Franco Arenoso';
                this.loamText = 'Franco';
                this.siltLoamText = 'Franco Siltoso';
                this.siltText = 'Sílte';
                break;
            default:
                this.language = 'en';
                break;
        }
    }
}