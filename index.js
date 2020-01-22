var fs = require('fs')
  , gm = require('gm').subClass({imageMagick: true});;



function draw(w, h, accentColor, score, text, rotation){

    let background2 = "#ffffff";
    let background = "#fffffe";
    let alpha = "#FFffffff";

    let centerX = w/2;
    let centerY = h/2;
    let circle1 =  h*0.95;
    let circle2 =  h*0.9125;
    let circle3 =  h*0.8875;
    let circle4 =  h*0.875;

    let rectangleX1 = 0
    let rectangleY1 = h*0.375;
    let rectangleX2 = h*1.1;
    let rectangleY2 = h*0.625;

    let fontSizeNormal = h * 0.10;
    let fontSizeTitle = h * 0.12;

    let bottomText = h * 0.230;

    let topText = h * -0.220;

    gm(w, h, background2)
        .antialias(true)
        .fill(accentColor)
        .drawCircle(centerX, centerY, circle1, centerY)
        .fill(background)
        .drawCircle(centerX, centerY, circle2, centerY)
        .fill(accentColor)
        .drawCircle(centerX, centerY, circle3, centerY)
        .fill(background)
        .drawCircle(centerX, centerY, circle4, centerY)
        .fill(accentColor)
        .drawRectangle(rectangleX1, rectangleY1, rectangleX2, rectangleY2)
        .font("Helvetica.ttf", fontSizeTitle)
        .fill(background)
        .drawText(0, 0, "Access Monitor", "center")
        .font("Helvetica.ttf", fontSizeNormal)
        .fill(accentColor)
        .drawText(0, bottomText, score, "center")
        .fill(accentColor)
        .drawText(0, topText, text, "center")
        .rotate(alpha, rotation)
        .transparent(alpha)
        .write("s.png", function (err) {
            console.log(err);
        });
}

draw(1000, 1000, "#ff5c57", "8.6/10", "AAA 100%", -25);
