// Global variable declarations
let europeMap;
let titleBanner;
let bannerHeight;
let currentMonth = 0;
let previousMonth = 0;  // Keep track of the previous month
let maxMonths = 72;
let slider;

let showDetail = false;
let selectedBattle = null;
let scrollPosition = 0;
let transitionProgress = 0;
let transitioning = false;

let glowLayer;

let manIconRed;
let manIconBlue;
let manIconGreen;

let battleImages = {}; // Object to store battle images

// Variables for month transition
let monthTransitionProgress = 1; // Transition progress (0 to 1)
let transitioningMonth = false;   // Flag to indicate if a month transition is happening

// Variables for the scrolling box
let scrollBoxExpanded = false; // Indicates if the scroll box is expanded to the center
let scrollBoxTransitionProgress = 0; // For animating the transition
let scrollBoxTransitioning = false; // Flag to indicate if the box is transitioning

// Global variable for current language
let currentLanguage = 'en';

// Translation dictionary
const translations = {
  en: {
    monthLabel: 'Month: ',
    pressEsc: 'Press ESC to return',
    clickAndScroll: 'Click and Scroll to see more',
    totalEstimatedDeaths: 'Total (estimated) deaths:',
    battlesWonBy: 'Battles won by:',
    deaths: 'Deaths:',
    allied: 'Allied',
    axis: 'Axis',
    civilians: 'Civilians',
    westernCampaign: 'Western Campaign',
    battleName: 'Battle Name: ',
    location: 'Location: ',
    date: 'Date: ',
    winningTeam: 'Winning Team: ',
    summary: 'Summary:',
    instructions: 'Press ESC to return',
    operationBarbarossa: 'Operation Barbarossa',
    stalingrad: 'Battle of Stalingrad',
  },
  nl: {
    monthLabel: 'Maand: ',
    pressEsc: 'Druk op ESC om terug te gaan',
    clickAndScroll: 'Klik en scroll om meer te zien',
    totalEstimatedDeaths: 'Totaal (geschatte) doden:',
    battlesWonBy: 'Slagen gewonnen door:',
    deaths: 'Doden:',
    allied: 'Geallieerden',
    axis: 'Asmogendheden',
    civilians: 'Burgers',
    westernCampaign: 'Westelijke Campagne',
    battleName: 'Slag Naam: ',
    location: 'Locatie: ',
    date: 'Datum: ',
    winningTeam: 'Winnend team: ',
    summary: 'Samenvatting:',
    instructions: 'Druk op ESC om terug te gaan',
    operationBarbarossa: 'Operatie Barbarossa',
    stalingrad: 'Slag om Stalingrad',
  }
};

let flagEN, flagNL;

// Define transition screens for certain months
let transitionScreens = {
  9: { 
    titleKey: 'westernCampaign',
    text: 'This period marked the rapid advance of German forces through Western Europe, overwhelming defenses and reshaping the strategic situation.',
    bgAlpha: 200 
  },
  15: { 
    titleKey: 'operationBarbarossa', 
    text: 'The massive German invasion of the Soviet Union, codenamed Operation Barbarossa, would become a turning point in the war despite initial Axis successes.', 
    bgAlpha: 200 
  },
  30: { 
    titleKey: 'stalingrad', 
    text: 'One of the deadliest and most brutal battles, the struggle for Stalingrad marked a decisive Soviet victory, halting the Axis advance.', 
    bgAlpha: 200 
  }
};

function preload() {
  europeMap = loadImage('europe-map.jpg');
  titleBanner = loadImage('title-banner.png');

  manIconBlue = loadImage('man-icon-blue.png');
  manIconRed = loadImage('man-icon-red.png');
  manIconGreen = loadImage('man-icon-green.png');

  battleImages['Battle of Sedan'] = loadImage('images/battle-image-Sedan.jpg');
  battleImages['Battle of Arras'] = loadImage('images/battle-image-Arras.jpg');
  battleImages['Battle of Dunkirk'] = loadImage('images/battle-image-Dunkirk.jpg');
  battleImages['Battle of the Netherlands'] = loadImage('images/battle-image-Netherlands.jpg');
  battleImages['Battle of Lille'] = loadImage('images/battle-image-Lille.jpg');
  battleImages['Battle of Abbeville'] = loadImage('images/battle-image-Abbeville.jpg');
  battleImages['Battle of Calais'] = loadImage('images/battle-image-Calais.jpg');
  battleImages['Battle of Le Havre'] = loadImage('images/battle-image-Le Havre.jpg');
  battleImages['Battle of Tomaszów Lubelski'] = loadImage('images/battle-image-Tomaszow.jpg');
  battleImages['Battle of Salla'] = loadImage('images/battle-image-Salla.jpg');
  battleImages['Battle of Summa 1'] = loadImage('images/battle-image-Summa1.jpg');
  battleImages['Battle of Summa 2'] = loadImage('images/battle-image-Summa2.jpg');
  battleImages['Battle of Suomussalmi'] = loadImage('images/battle-image-Suomussalmi.jpg');
  battleImages['Battle of Raate Road'] = loadImage('images/battle-image-RaateRoad.jpg');
  battleImages['Battle of Kollaa'] = loadImage('images/battle-image-Kollaa.jpg');
  battleImages['Battle of the Channel'] = loadImage('images/battle-image-Channel.jpg');
  battleImages['Battle of London'] = loadImage('images/battle-image-London.jpg');
  battleImages['Battle of Crete'] = loadImage('images/battle-image-Crete.jpg');
  battleImages['Operation Eagle Kent'] = loadImage('images/battle-image-Kent.jpg');
  battleImages['Operation Eagle Southampton'] = loadImage('images/battle-image-Southampton.jpg');
  battleImages['Operation Eagle Plymouth'] = loadImage('images/battle-image-Plymouth.jpg');
  battleImages['Operation Barbarossa'] = loadImage('images/battle-image-Barbarossa.jpg');
  battleImages['The invasion of Poland'] = loadImage('images/battle-image-Poland.jpg');
  battleImages['The invasion of Denmark'] = loadImage('images/battle-image-Denmark.jpg');
  battleImages['The invasion of Norway'] = loadImage('images/battle-image-Norway.jpg');	
  battleImages['The invasion of Belgium'] = loadImage('images/battle-image-Belgium.jpg');
  battleImages['The invasion of Greece'] = loadImage('images/battle-image-Greece.jpg');
  battleImages['The invasion of Yugoslavia'] = loadImage('images/battle-image-Yugoslavia.jpg');

  flagEN = loadImage('flag-en.png');
  flagNL = loadImage('flag-nl.png');
}

function setup() {
  let canvasWidth = europeMap.width; 
  bannerHeight = (titleBanner.height / titleBanner.width) * canvasWidth;
  createCanvas(canvasWidth, bannerHeight + europeMap.height + 50);

  slider = createSlider(0, maxMonths - 1, 0, 1);
  slider.position(30, height - 60);
  slider.style('width', width - 50 + 'px');
  slider.class('customSlider');
  slider.input(updateMonth);

  glowLayer = createGraphics(width, height - 50 - bannerHeight);

  defineDataPoints();
  console.log(dataPoints);
}

function draw() {
  background(220);

  if (showDetail || transitioning) {
    slider.hide();
  } else {
    slider.show();
  }

  if (transitioning) {
    transitionProgress += 0.02;
    if (transitionProgress >= 1) {
      transitionProgress = 1;
      transitioning = false;
      showDetail = true;
    }
  }

  if (transitioningMonth) {
    monthTransitionProgress += deltaTime / 500;
    if (monthTransitionProgress >= 1) {
      monthTransitionProgress = 1;
      transitioningMonth = false;
    }
  }

  if (transitionScreens[currentMonth]) {
    image(titleBanner, 0, 0, width, bannerHeight);
    let flagSize = 40;
    image(flagEN, width - (flagSize * 2 + 20), 10, flagSize, flagSize);
    image(flagNL, width - (flagSize + 10), 10, flagSize, flagSize);

    fill(200);
    rect(0, height - 100 , width, 100);
    fill(0);
    textSize(32);
    textAlign(LEFT, CENTER);
    
    // Show the previous month's displayed month
    let displayedMonth = getDisplayedMonth(previousMonth, transitionScreens);
    text(translations[currentLanguage].monthLabel + displayedMonth, 10, height - 15);

    drawTransitionScreen(currentMonth);
    return;
  }

  let zoomLevel = transitioning || showDetail ? lerp(1, 2, transitionProgress) : 1;
  let zoomOffsetX = -100;
  let zoomX = transitioning || showDetail ? selectedBattle.x - zoomOffsetX : width / 2;
  let zoomY = transitioning || showDetail ? selectedBattle.y : (height - 50 - bannerHeight) / 2;

  push();
  translate(0, bannerHeight);

  push();
  translate(width / 2, (height - 50 - bannerHeight) / 2);
  scale(zoomLevel);
  translate(-zoomX, -zoomY);

  image(europeMap, 0, 0);

  if (!showDetail && !transitioning) {
    glowLayer.clear();
    glowLayer.blendMode(ADD);

    if (transitioningMonth) {
      let fadeOutAlpha = map(monthTransitionProgress, 0, 1, 255, 0);
      let fadeInAlpha = map(monthTransitionProgress, 0, 1, 0, 255);

      if (dataPoints[previousMonth]) {
        for (let battle of dataPoints[previousMonth]) {
          drawGlow(glowLayer, battle.x, battle.y, battle.glowRadius, battle.color, fadeOutAlpha);
        }
      }

      if (dataPoints[currentMonth]) {
        for (let battle of dataPoints[currentMonth]) {
          drawGlow(glowLayer, battle.x, battle.y, battle.glowRadius, battle.color, fadeInAlpha);
        }
      }
    } else {
      if (dataPoints[currentMonth]) {
        for (let battle of dataPoints[currentMonth]) {
          drawGlow(glowLayer, battle.x, battle.y, battle.glowRadius, battle.color, 255);
        }
      }
    }

    glowLayer.blendMode(BLEND);
    image(glowLayer, 0, 0);

    if (transitioningMonth) {
      let fadeOutAlpha = map(monthTransitionProgress, 0, 1, 255, 0);
      let fadeInAlpha = map(monthTransitionProgress, 0, 1, 0, 255);

      if (dataPoints[previousMonth]) {
        for (let battle of dataPoints[previousMonth]) {
          let c = battle.color;
          fill(red(c), green(c), blue(c), fadeOutAlpha);
          noStroke();
          ellipse(battle.x, battle.y, 5 / zoomLevel);
        }
      }

      if (dataPoints[currentMonth]) {
        for (let battle of dataPoints[currentMonth]) {
          let c = battle.color;
          fill(red(c), green(c), blue(c), fadeInAlpha);
          noStroke();
          ellipse(battle.x, battle.y, 5 / zoomLevel);
        }
      }
    } else {
      if (dataPoints[currentMonth]) {
        for (let battle of dataPoints[currentMonth]) {
          fill(battle.color);
          noStroke();
          ellipse(battle.x, battle.y, 5 / zoomLevel);
        }
      }
    }
  } else {
    glowLayer.clear();
    glowLayer.blendMode(ADD);
    if (selectedBattle) {
      drawGlow(glowLayer, selectedBattle.x, selectedBattle.y, selectedBattle.glowRadius, selectedBattle.color, 255);
    }
    glowLayer.blendMode(BLEND);
    image(glowLayer, 0, 0);

    if (selectedBattle) {
      fill(selectedBattle.color);
      noStroke();
      ellipse(selectedBattle.x, selectedBattle.y, 10 / zoomLevel);
    }
  }

  pop();
  pop();

  image(titleBanner, 0, 0, width, bannerHeight);

  // Calculate the displayed month
  let displayedMonth;
  if (transitionScreens[currentMonth]) {
    displayedMonth = getDisplayedMonth(previousMonth, transitionScreens);
  } else {
    displayedMonth = getDisplayedMonth(currentMonth, transitionScreens);
  }

  if (!showDetail && !transitioning) {
    fill(200);
    rect(0, height - 100 , width, 100);
    fill(0);
    textSize(32);
    textAlign(LEFT, CENTER);
    text(translations[currentLanguage].monthLabel + displayedMonth, 10, height - 15);
  }

  if (showDetail || transitioning) {
    drawDeathScreen();
  }

  drawLegend();

  let flagSize = 40;
  image(flagEN, width - (flagSize * 2 + 20), 10, flagSize, flagSize);
  image(flagNL, width - (flagSize + 10), 10, flagSize, flagSize);
}

function mousePressed() {
  let flagSize = 40;
  let enX = width - (flagSize * 2 + 20);
  let enY = 10;
  let nlX = width - (flagSize + 10);
  let nlY = 10;

  if (mouseX >= enX && mouseX <= enX + flagSize && mouseY >= enY && mouseY <= enY + flagSize) {
    currentLanguage = 'en';
    return;
  }

  if (mouseX >= nlX && mouseX <= nlX + flagSize && mouseY >= nlY && mouseY <= nlY + flagSize) {
    currentLanguage = 'nl';
    return;
  }

  if (transitionScreens[currentMonth]) {
    return; 
  }

  if (!showDetail && !transitioning && mouseY > bannerHeight && mouseY < height - 50) {
    let zoomLevel = transitioning || showDetail ? lerp(1, 2, transitionProgress) : 1;
    let zoomOffsetX = -100;
    let zoomX = transitioning || showDetail ? (selectedBattle ? selectedBattle.x - zoomOffsetX : width/2) : width / 2;
    let zoomY = transitioning || showDetail ? (selectedBattle ? selectedBattle.y : (height - 50 - bannerHeight) / 2) : (height - 50 - bannerHeight) / 2;

    let adjustedMouseY = mouseY - bannerHeight;
    let adjustedMouseX = mouseX;

    adjustedMouseX -= width / 2;
    adjustedMouseY -= (height - 50 - bannerHeight) / 2;

    adjustedMouseX /= zoomLevel;
    adjustedMouseY /= zoomLevel;

    adjustedMouseX += zoomX;
    adjustedMouseY += zoomY;

    if (dataPoints[currentMonth]) {
      for (let battle of dataPoints[currentMonth]) {
        let d = dist(adjustedMouseX, adjustedMouseY, battle.x, battle.y);
        if (d < 10) {
          selectedBattle = battle;
          scrollPosition = 0;
          transitioning = true;
          transitionProgress = 0;
          break;
        }
      }
    }
  } else if (showDetail && !transitioning) {
    let {
      smallBoxWidth,
      smallBoxHeight,
      smallBoxX,
      smallBoxY,
      largeBoxWidth,
      largeBoxHeight,
      largeBoxX,
      largeBoxY,
    } = getScrollBoxDimensions();

    let boxWidth, boxHeight, boxX, boxY;

    if (scrollBoxTransitioning) {
      let t = scrollBoxTransitionProgress;
      if (scrollBoxExpanded) {
        boxWidth = lerp(smallBoxWidth, largeBoxWidth, t);
        boxHeight = lerp(smallBoxHeight, largeBoxHeight, t);
        boxX = lerp(smallBoxX, largeBoxX, t);
        boxY = lerp(smallBoxY, largeBoxY, t);
      } else {
        boxWidth = lerp(largeBoxWidth, smallBoxWidth, t);
        boxHeight = lerp(largeBoxHeight, smallBoxHeight, t);
        boxX = lerp(largeBoxX, smallBoxX, t);
        boxY = lerp(largeBoxY, smallBoxY, t);
      }
    } else {
      if (scrollBoxExpanded) {
        boxWidth = largeBoxWidth;
        boxHeight = largeBoxHeight;
        boxX = largeBoxX;
        boxY = largeBoxY;
      } else {
        boxWidth = smallBoxWidth;
        boxHeight = smallBoxHeight;
        boxX = smallBoxX;
        boxY = smallBoxY;
      }
    }

    if (mouseX >= boxX && mouseX <= boxX + boxWidth && mouseY >= boxY && mouseY <= boxY + boxHeight) {
      scrollBoxExpanded = !scrollBoxExpanded;
      scrollBoxTransitioning = true;
      scrollBoxTransitionProgress = 0;
    } else if (scrollBoxExpanded) {
      scrollBoxExpanded = false;
      scrollBoxTransitioning = true;
      scrollBoxTransitionProgress = 0;
    }
  }
}

function keyPressed() {
  if (keyCode === ESCAPE) {
    if (scrollBoxExpanded) {
      scrollBoxExpanded = false;
      scrollBoxTransitioning = true;
      scrollBoxTransitionProgress = 0;
    } else if (showDetail) {
      showDetail = false;
      selectedBattle = null;
      scrollPosition = 0;
    }
  }
}

function mouseWheel(event) {
  if (showDetail) {
    let {
      smallBoxWidth,
      smallBoxHeight,
      smallBoxX,
      smallBoxY,
      largeBoxWidth,
      largeBoxHeight,
      largeBoxX,
      largeBoxY,
    } = getScrollBoxDimensions();

    let boxWidth, boxHeight, boxX, boxY;

    if (scrollBoxTransitioning) {
      let t = scrollBoxTransitionProgress;
      if (scrollBoxExpanded) {
        boxWidth = lerp(smallBoxWidth, largeBoxWidth, t);
        boxHeight = lerp(smallBoxHeight, largeBoxHeight, t);
        boxX = lerp(smallBoxX, largeBoxX, t);
        boxY = lerp(smallBoxY, largeBoxY, t);
      } else {
        boxWidth = lerp(largeBoxWidth, smallBoxWidth, t);
        boxHeight = lerp(largeBoxHeight, smallBoxHeight, t);
        boxX = lerp(largeBoxX, smallBoxX, t);
        boxY = lerp(largeBoxY, smallBoxY, t);
      }
    } else {
      if (scrollBoxExpanded) {
        boxWidth = largeBoxWidth;
        boxHeight = largeBoxHeight;
        boxX = largeBoxX;
        boxY = largeBoxY;
      } else {
        boxWidth = smallBoxWidth;
        boxHeight = smallBoxHeight;
        boxX = smallBoxX;
        boxY = smallBoxY;
      }
    }

    if (mouseX >= boxX && mouseX <= boxX + boxWidth && mouseY >= boxY && mouseY <= boxY + boxHeight) {
      scrollPosition += event.delta;
      let totalDeaths = selectedBattle.totalDeaths;
      let iconsPerRow = selectedBattle.iconsPerRow;
      let iconSize = selectedBattle.iconSize;
      let totalRows = selectedBattle.totalRows;
      let textLineHeight = 50; 
      let totalContentHeight = totalRows * iconSize + textLineHeight;
      let windowHeight = boxHeight - 100;
      scrollPosition = constrain(scrollPosition, 0, totalContentHeight - windowHeight);
    }
  }
}

function updateMonth() {
  if (!showDetail && !transitioning) {
    let newMonth = slider.value();
    if (newMonth !== currentMonth) {
      previousMonth = currentMonth;
      currentMonth = newMonth;
      monthTransitionProgress = 0;
      transitioningMonth = true;
    }
  }
}

function drawTransitionScreen(monthIndex) {
  let screenData = transitionScreens[monthIndex];
  push();
  fill(50, screenData.bgAlpha); 
  rect(0, 0, width, height);
  fill(255);
  textSize(64);
  textAlign(CENTER, CENTER);
  text(translations[currentLanguage][screenData.titleKey], width / 2, height / 2);

  let boxWidth = width * 0.6;
  let boxHeight = 150;
  let boxX = (width - boxWidth) / 2;
  let boxY = height / 2 + 100;

  fill(255, 230);
  noStroke();
  rect(boxX, boxY, boxWidth, boxHeight, 10);

  fill(0);
  textSize(20);
  textAlign(LEFT, TOP);
  text(screenData.text, boxX + 20, boxY + 20, boxWidth - 40, boxHeight - 40);
  pop();
}

function drawGlow(layer, x, y, radius, color, alpha) {
  let ctx = layer.drawingContext;

  let r = red(color);
  let g = green(color);
  let b = blue(color);

  let innerAlpha = alpha / 255;

  let gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
  let innerColor = 'rgba(' + r + ',' + g + ',' + b + ',' + innerAlpha + ')';
  let outerColor = 'rgba(' + r + ',' + g + ',' + b + ',0)';

  gradient.addColorStop(0, innerColor);
  gradient.addColorStop(1, outerColor);

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, TWO_PI);
  ctx.fill();
}

function drawInfoBox(battle) {
  let infoBoxX = 20;
  let infoBoxY = 250;
  let infoBoxWidth = 560;
  let infoBoxHeight = height - 800;

  let imageBoxX = 20;
  let imageBoxY = infoBoxY + infoBoxHeight + 20; 
  let imageBoxWidth = infoBoxWidth;
  let imageBoxHeight = 560 * (3 / 4); 

  fill(255, 255, 255, 200);
  rect(infoBoxX, infoBoxY, infoBoxWidth, infoBoxHeight);

  fill(0);
  textSize(32);
  textAlign(LEFT, TOP);
  let x = infoBoxX + 10;
  let y = infoBoxY + 10;
  let lineHeight = 40;

  textStyle(BOLD);
  text(translations[currentLanguage].battleName, x, y);
  let labelWidth = textWidth(translations[currentLanguage].battleName);
  textStyle(NORMAL);
  text(battle.battleName, x + labelWidth, y);
  y += lineHeight;

  textStyle(BOLD);
  text(translations[currentLanguage].location, x, y);
  labelWidth = textWidth(translations[currentLanguage].location);
  textStyle(NORMAL);
  text(battle.location, x + labelWidth, y);
  y += lineHeight;

  textStyle(BOLD);
  text(translations[currentLanguage].date, x, y);
  labelWidth = textWidth(translations[currentLanguage].date);
  textStyle(NORMAL);
  text(battle.date, x + labelWidth, y);
  y += lineHeight;

  textStyle(BOLD);
  text(translations[currentLanguage].winningTeam, x, y);
  labelWidth = textWidth(translations[currentLanguage].winningTeam);
  textStyle(NORMAL);
  text(battle.winner, x + labelWidth, y);
  y += lineHeight;

  textStyle(BOLD);
  text(translations[currentLanguage].summary, x, y);
  y += lineHeight;
  textStyle(NORMAL);
  text(battle.summary, x, y, infoBoxWidth - 20, infoBoxHeight - y - 10);

  stroke(200);
  noFill();
  rect(imageBoxX, imageBoxY, imageBoxWidth, imageBoxHeight);

  let img = battleImages[battle.battleName];
  if (img) {
    image(img, imageBoxX, imageBoxY, imageBoxWidth, imageBoxHeight);
  }
}

function drawDeathScreen() {
  let windowWidth = width * 0.30;
  let offsetX = transitioning ? lerp(width, width - windowWidth, transitionProgress) : width - windowWidth;

  fill(50);
  noStroke();
  rect(offsetX, bannerHeight, windowWidth, height);

  push();
  translate(offsetX, 0);
  if (selectedBattle) {
    drawInfoBox(selectedBattle);
  }
  pop();

  if (scrollBoxTransitioning) {
    scrollBoxTransitionProgress += deltaTime / 500; 
    if (scrollBoxTransitionProgress >= 1) {
      scrollBoxTransitionProgress = 1;
      scrollBoxTransitioning = false;
    }
  }

  let {
    smallBoxWidth,
    smallBoxHeight,
    smallBoxX,
    smallBoxY,
    largeBoxWidth,
    largeBoxHeight,
    largeBoxX,
    largeBoxY,
  } = getScrollBoxDimensions();

  let boxWidth, boxHeight, boxX, boxY;

  if (scrollBoxTransitioning) {
    let t = scrollBoxTransitionProgress;
    if (scrollBoxExpanded) {
      boxWidth = lerp(smallBoxWidth, largeBoxWidth, t);
      boxHeight = lerp(smallBoxHeight, largeBoxHeight, t);
      boxX = lerp(smallBoxX, largeBoxX, t);
      boxY = lerp(smallBoxY, largeBoxY, t);
    } else {
      boxWidth = lerp(largeBoxWidth, smallBoxWidth, t);
      boxHeight = lerp(largeBoxHeight, smallBoxHeight, t);
      boxX = lerp(largeBoxX, smallBoxX, t);
      boxY = lerp(largeBoxY, smallBoxY, t);
    }
  } else {
    if (scrollBoxExpanded) {
      boxWidth = largeBoxWidth;
      boxHeight = largeBoxHeight;
      boxX = largeBoxX;
      boxY = largeBoxY;
    } else {
      boxWidth = smallBoxWidth;
      boxHeight = smallBoxHeight;
      boxX = smallBoxX;
      boxY = smallBoxY;
    }
  }

  push();
  translate(boxX, boxY);

  fill(30);
  noStroke();
  rect(0, 0, boxWidth, boxHeight);

  let ctx = drawingContext;
  ctx.save();
  ctx.beginPath();
  ctx.rect(0, 0, boxWidth, boxHeight);
  ctx.clip();

  if (selectedBattle) {
    let totalDeaths = selectedBattle.totalDeaths;
    let iconsPerRow = selectedBattle.iconsPerRow;
    let iconSize = selectedBattle.iconSize;

    let totalRows = selectedBattle.totalRows;
    let textLineHeight = 50; 
    let totalContentHeight = totalRows * iconSize + textLineHeight;
    let windowHeight = boxHeight - 100; 

    scrollPosition = constrain(scrollPosition, 0, totalContentHeight - windowHeight);

    let firstRow = floor(scrollPosition / iconSize);
    let lastRow = ceil((scrollPosition + windowHeight) / iconSize);

    let startX = (boxWidth - iconsPerRow * iconSize) / 2;
    let startY = 50; 

    for (let row = firstRow; row < lastRow; row++) {
      for (let col = 0; col < iconsPerRow; col++) {
        let i = row * iconsPerRow + col;
        if (i >= totalDeaths) {
          break;
        }
        let x = startX + col * iconSize;
        let y = startY + row * iconSize - scrollPosition;

        let img;
        if (i < selectedBattle.allied) {
          img = manIconBlue; 
        } else if (i < selectedBattle.allied + selectedBattle.axis) {
          img = manIconRed; 
        } else {
          img = manIconGreen; 
        }

        image(img, x, y, iconSize, iconSize);
      }
    }

    let textY = startY + totalRows * iconSize - scrollPosition + 20; 
    if (textY > -50 && textY < boxHeight) {
      fill(255);
      textSize(20);
      textAlign(CENTER, TOP);
      text(translations[currentLanguage].totalEstimatedDeaths + ' ' + selectedBattle.totalDeaths, boxWidth / 2, textY);
    }

    fill(255);
    textSize(20);
    textAlign(CENTER, TOP);
    text(translations[currentLanguage].clickAndScroll, boxWidth / 2, 20);
  }

  ctx.restore();
  pop();

  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(translations[currentLanguage].instructions, width / 1.19, height - 50);
}

function drawLegend() {
  let legendX = 20;
  let legendY = height - (showDetail ? 200 : 250);
  let legendWidth = 200;
  let legendHeight = showDetail ? 150 : 110; 

  fill(255, 255, 255, 200);
  noStroke();
  rect(legendX, legendY, legendWidth, legendHeight);

  fill(0);
  textSize(16);
  textAlign(LEFT, TOP);
  let x = legendX + 10;
  let y = legendY + 10;

  text(showDetail ? translations[currentLanguage].deaths : translations[currentLanguage].battlesWonBy, x, y);

  y += 30;

  fill(0, 0, 255);
  rect(x, y, 20, 20);
  fill(0);
  text(translations[currentLanguage].allied, x + 30, y + 2);

  y += 30;

  fill(255, 0, 0);
  rect(x, y, 20, 20);
  fill(0);
  text(translations[currentLanguage].axis, x + 30, y + 2);

  if (showDetail) {
    y += 30;
    fill(0, 255, 0);
    rect(x, y, 20, 20);
    fill(0);
    text(translations[currentLanguage].civilians, x + 30, y + 2);
  }
}

function getScrollBoxDimensions() {
  return {
    smallBoxWidth: 400,
    smallBoxHeight: 500,
    smallBoxX: 20,
    smallBoxY: bannerHeight + 20,
    largeBoxWidth: 400,
    largeBoxHeight: 1200,
    largeBoxX: 20,
    largeBoxY: bannerHeight + 20,
  };
}

// Helper function to count how many transitions occur before a given month index
function getTransitionsBefore(monthIndex, transitionScreens) {
  let count = 0;
  for (let t in transitionScreens) {
    if (parseInt(t) < monthIndex) {
      count++;
    }
  }
  return count;
}

// Helper function to get the displayed month number, subtracting the number of transitions passed
function getDisplayedMonth(currentMonth, transitionScreens) {
  let transitionsPassed = getTransitionsBefore(currentMonth, transitionScreens);
  return currentMonth + 1 - transitionsPassed;
}

 function defineDataPoints() {
  

  let minDeaths = Infinity;
  let maxDeaths = -Infinity;

  for (let month of dataPoints) {
    for (let battle of month) {
      battle.deaths = battle.allied + battle.axis + battle.civilians;
      if (battle.deaths < minDeaths) minDeaths = battle.deaths;
      if (battle.deaths > maxDeaths) maxDeaths = battle.deaths;

      if (battle.winner.toLowerCase() === 'allied' || battle.winner.toLowerCase() === 'allies') {
        battle.color = color(0, 0, 255); // Blue
      } else if (battle.winner.toLowerCase() === 'axis') {
        battle.color = color(255, 0, 0); // Red
      } else {
        battle.color = color(0, 255, 0); // Green
      }
    }
  }

  let minRadius = 10;
  let maxRadius = 80;

  for (let month of dataPoints) {
    for (let battle of month) {
      battle.glowRadius = map(battle.deaths, minDeaths, maxDeaths, minRadius, maxRadius);
      battle.totalDeaths = battle.deaths;
      battle.iconsPerRow = 10; 
      battle.iconSize = 20;
      battle.totalRows = ceil(battle.totalDeaths / battle.iconsPerRow);
    }
  }
}





