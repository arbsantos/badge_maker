const  fs = require('fs')
  , gm = require('gm').subClass({imageMagick: true});;



function draw(w, h, percentage, topMidText, bottomMidText, bottomText, rotation){

    let accentColor = "#4285f4";
    let background2 = "#ffffff";
    let background = "#fffffe";
    let alpha = "#FFffffff";
    let black = "#000000";
    let grey = "#616161";

    let centerX = w/2;
    let centerY = h/2;
    let circle1 =  h;
    let circle2 =  h*0.95;
    let circle3 =  h*0.8875;
    let circle4 =  h*0.875;

    let fontNormal = "Arial.ttf"

    let percentageSize = h * 0.15;
    let topMidTextSize = h * 0.15;
    let bottomMidTextSize = h * 0.05;
    let bottomTextSize = h * 0.05;

    let percentagePosition = h * - 0.13;
    let topMidTextPosition = h * 0.01;
    let bottomTextPosition = h * 0.25;
    let bottomMidTextPosition = h * 0.30;
    let progressXRightPie = 0;
    let progressYRightPie = 0;
    let progressXLeftPie = 0;
    let progressYLeftPie = 0;

    let badge = gm(w, h, background2)
    .antialias(true)
    .fill(grey)
    .drawCircle(centerX, centerY, circle1, centerY)
    .fill(accentColor);

    if(percentage < 50){

      let rads = (percentage * 180 / 50) * (Math.PI / 180);
      progressXRightPie = 500 + Math.sin(rads) * centerX // radius
      progressYRightPie = 500 - Math.cos(rads) * centerY // radius

      badge.draw("path 'M "+centerX+","+centerY+" L "+centerX+","+0+" A "+centerX+","+centerY+" 0 0,1 "+progressXRightPie+","+progressYRightPie+" Z'")

    }else{
      let half = percentage - 50
      let rads = (half * 180 / 50) * (Math.PI / 180);

      progressXRightPie = w / 2
      progressYRightPie = h
      progressXLeftPie = 500 - Math.sin(rads) * centerX // radius
      progressYLeftPie = 500 + Math.cos(rads) * centerY // radius

      badge.draw("path 'M "+centerX+","+centerY+" L "+centerX+","+0+" A "+centerX+","+centerY+" 0 0,1 "+progressXRightPie+","+progressYRightPie+" Z'")
      badge.draw("path 'M "+centerX+","+centerY+" L "+centerX+","+h+" A "+centerX+","+centerY+" 0 0,1 "+progressXLeftPie+","+progressYLeftPie+" Z'")
      console.log("path 'M "+centerX+","+centerY+" L "+centerX+","+h+" A "+centerX+","+centerY+" 0 0,1 "+progressXLeftPie+","+progressYLeftPie+" Z'");
    }

    badge.fill(background)
        .fill(background)
        .drawCircle(centerX, centerY, circle2, centerY)
        // TOP TEXT
        //.font(fontNormal, percentageSize)
        //.fill(black)
        //.drawText(0, percentagePosition, percentage+"%", "center")
        // // TOP MID TEXT
        // .font(fontNormal, topMidTextSize)
        // .fill(grey)
        // .drawText(0, topMidTextPosition, topMidText, "center")
        // // BOTTOM MID TEXT
        // .font(fontNormal, bottomMidTextSize)
        // .fill(black)
        // .drawText(0, bottomTextPosition, bottomMidText, "center")
        // // BOTTOM TEXT
        // .font(fontNormal, bottomTextSize)
        // .fill(black)
        // .drawText(0, bottomMidTextPosition, bottomText, "center")
        // ALPHA
        .transparent(alpha)
        // SAVE
        .write("s.png", function (err) {
            if(err)
              console.log(err);
        });
}

function svg(w, h, percentage, topMidText, bottomMidText, bottomText, rotation){
  let accentColor = "#4285f4";
    let background2 = "#ffffff";
    let background = "#fffffe";
    let alpha = "#FFffffff";
    let black = "#000000";
    let grey = "#616161";

    let centerX = w/2;
    let centerY = h/2;
    let circle1 =  h;
    let circle2 =  h*0.95;
    let circle3 =  h*0.8875;
    let circle4 =  h*0.875;

    let fontNormal = "Arial.ttf"

    let percentageSize = h * 0.15;
    let topMidTextSize = h * 0.15;
    let bottomMidTextSize = h * 0.05;
    let bottomTextSize = h * 0.05;

    let percentagePosition = h * - 0.13;
    let topMidTextPosition = h * 0.01;
    let bottomTextPosition = h * 0.25;
    let bottomMidTextPosition = h * 0.30;
    let progressXRightPie = 0;
    let progressYRightPie = 0;
    let progressXLeftPie = 0;
    let progressYLeftPie = 0;

  var svg = require('svg-builder')
        .width(w)
        .height(h);
 
    var badge = svg
        .circle({
            r: centerX,
            fill: grey,
            'stroke-width': 0,
            cx: centerX,
            cy: centerY
        });
        // .text({
        //     x: 10,
        //     y: 20,
        //     'font-family': 'helvetica',
        //     'font-size': 15,
        //     stroke : '#fff',
        //     fill: '#fff'
        // }, 'My logo');

        if(percentage < 50){

          let rads = (percentage * 180 / 50) * (Math.PI / 180);
          progressXRightPie = 500 + Math.sin(rads) * centerX // radius
          progressYRightPie = 500 - Math.cos(rads) * centerY // radius

          badge.path({fill: accentColor, d:"M "+centerX+","+centerY+" L "+centerX+","+0+" A "+centerX+","+centerY+" 0 0,1 "+progressXRightPie+","+progressYRightPie+" Z"});
    
        }else{
          let half = percentage - 50
          let rads = (half * 180 / 50) * (Math.PI / 180);
    
          progressXRightPie = w / 2
          progressYRightPie = h
          progressXLeftPie = 500 - Math.sin(rads) * centerX // radius
          progressYLeftPie = 500 + Math.cos(rads) * centerY // radius
    
          badge.path({fill: accentColor, d:"M "+centerX+","+centerY+" L "+centerX+","+0+" A "+centerX+","+centerY+" 0 0,1 "+progressXRightPie+","+progressYRightPie+" Z"});
          badge.path({fill: accentColor, d:"M "+centerX+","+centerY+" L "+centerX+","+h+" A "+centerX+","+centerY+" 0 0,1 "+progressXLeftPie+","+progressYLeftPie+" Z'"});

        }

        badge.circle({
          r: centerX*0.95,
          fill: background,
          'stroke-width': 0,
          cx: centerX,
          cy: centerY
        });

        badge.text({
          x: centerX,
          y: centerY,
          'font-family': 'verdana',
          'font-size': 70,
          'font-weight': 'bold',
          'text-anchor': 'middle',
          stroke : '#fff',
          fill: '#fff'
      }, percentage+"%")

        render = badge.render();

        console.log(render)

}

svg(1000, 1000, 71, "AAA", "indice: 8.6", "AccessMonitor", 0);
