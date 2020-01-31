
function addText(badge, x, y, fontFamily, fontStyle, fontSize, fontWeight, textAnchor, stroke, fill, text){
  badge.text({
    x: x,
    y: y,
    'font-family': fontFamily,
    'font-style': fontStyle,
    'font-size': fontSize,
    'font-weight': fontWeight,
    'text-anchor': textAnchor,
    stroke: stroke,
    fill: fill
  }, text)
}

function addCircle(badge, radius, cx, cy, fill){
  badge.circle({
      r: radius,
      fill: fill,
      'stroke-width': 0,
      cx: cx,
      cy: cy
    });
}

function addPath(badge, path, fill){
  badge.path({
    fill: fill,
    d: path
  });
}

function generateSVG(w, h, percentage, conformance, index) {

  const accent = "#4285f4";
  const background = "#ffffff";
  const black = "#000000";
  const grey = "#616161";

  const centerX = w / 2;
  const centerY = h / 2;

  const fontFamily = "verdana";
  const percentageFontSize = 90*h/500;
  const conformanceFontSize = 70*h/500;
  const indexFontSize = 30*h/500;
  const brandFontSize = 30*h/500;

  let progressXRightPie = 0;
  let progressYRightPie = 0;
  let progressXLeftPie = 0;
  let progressYLeftPie = 0;

  var badge = require('svg-builder')
    .width(w)
    .height(h);

  addCircle(badge, centerX, centerX, centerY, grey);

  if (percentage < 50) {

    let rads = (percentage * 180 / 50) * (Math.PI / 180);
    progressXRightPie = centerX + Math.sin(rads) * centerX // radius
    progressYRightPie = centerY - Math.cos(rads) * centerY // radius

    addPath(badge, "M " + centerX + "," + centerY + " L " + centerX + "," + 0 + " A " + centerX + "," + centerY + " 0 0,1 " + progressXRightPie + "," + progressYRightPie + " Z", accent);

  } else {
    let half = percentage - 50
    let rads = (half * 180 / 50) * (Math.PI / 180);

    progressXRightPie = w / 2
    progressYRightPie = h
    progressXLeftPie = centerX - Math.sin(rads) * centerX // radius
    progressYLeftPie = centerY + Math.cos(rads) * centerY // radius

 
    addPath(badge, "M " + centerX + "," + centerY + " L " + centerX + "," + 0 + " A " + centerX + "," + centerY + " 0 0,1 " + progressXRightPie + "," + progressYRightPie + " Z", accent);
    addPath(badge, "M " + centerX + "," + centerY + " L " + centerX + "," + h + " A " + centerX + "," + centerY + " 0 0,1 " + progressXLeftPie  + "," + progressYLeftPie  + " Z", accent);

  }

  addCircle(badge, centerX * 0.85, centerX, centerY, background);

  addText(badge, centerX,          centerY*(1-0.15), fontFamily, 'normal', percentageFontSize,  'bold',   'middle', black, black, percentage + "%")
  addText(badge, centerX,          centerY*(1+0.20), fontFamily, 'normal', conformanceFontSize, 'normal', 'middle', grey,  grey,  conformance)
  addText(badge, centerX,          centerY*(1+0.45), fontFamily, 'normal', indexFontSize,       'normal', 'middle', black, black, index)
  addText(badge, centerX*(1-0.24), centerY*(1+0.64), fontFamily, 'italic', brandFontSize,       'normal', 'middle', black, black, "Access")
  addText(badge, centerX*(1+0.24), centerY*(1+0.64), fontFamily, 'normal', brandFontSize,       'bold',   'middle', black, black, "Monitor")

  render = badge.render();

  console.log(render)

}

generateSVG(1000, 1000, 35, "AA", "índice: 3.2");