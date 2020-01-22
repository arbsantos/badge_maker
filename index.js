const  fs = require('fs')
  , gm = require('gm').subClass({imageMagick: true});;



function draw(w, h, title, bottomText, topText, rotation){

    let accentColor = "#4285f4";
    let background2 = "#ffffff";
    let background = "#fffffe";
    let alpha = "#FFffffff";

    let centerX = w/2;
    let centerY = h/2;
    let circle1 =  h*0.95;
    let circle2 =  h*0.9125;
    let circle3 =  h*0.8875;
    let circle4 =  h*0.875;

    let rectangleX1 = w * 0.07;
    let rectangleY1 = h * 0.375;
    let rectangleX2 = w * 0.93;
    let rectangleY2 = h * 0.625;

    let fontSizeNormal = h * 0.10;
    let fontSizeTitle = h * 0.12;

    let bottomTextSize = h * 0.230;

    let topTextSize = h * -0.220;

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
        .drawText(0, 0, title, "center")
        .font("Helvetica.ttf", fontSizeNormal)
        .fill(accentColor)
        .drawText(0, bottomTextSize, bottomText, "center")
        .fill(accentColor)
        .drawText(0, topTextSize, topText, "center")
        .rotate(alpha, rotation)
        .transparent(alpha)
        .write("s.png", function (err) {
            if(err)
              console.log(err);
        });
}

draw(1000, 1000, "Access Monitor", "8.6/10", "AAA 100%", 0);
