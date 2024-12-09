// Global variable declarations
let europeMap, titleBanner;
let bannerHeight;
let dataPoints = [];
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

let manIconRed, manIconBlue, manIconGreen;

let battleImages = {}; // Object to store battle images

// Variables for month transition
let monthTransitionProgress = 1; // Transition progress (0 to 1)
let transitioningMonth = false;   // Flag to indicate if a month transition is happening

// Variables for the custom transition screen
let showTransitionScreen = false;
let transitionScreenProgress = 0;
let transitionScreenAlpha = 0;

// Variables for the scrolling box
let scrollBoxExpanded = false; // Indicates if the scroll box is expanded to the center
let scrollBoxTransitionProgress = 0; // For animating the transition
let scrollBoxTransitioning = false; // Flag to indicate if the box is transitioning

function preload() {
  // Load the Europe map image
  europeMap = loadImage('images/europe-map.jpg');
  titleBanner = loadImage('images/title-banner.png');

  // Load the man icon images for different death types
  manIconBlue = loadImage('images/man-icon-blue.png');   // Allied soldiers
  manIconRed = loadImage('images/man-icon-red.png');     // Axis soldiers
  manIconGreen = loadImage('images/man-icon-green.png'); // Civilians

  // Load battle images
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
  battleImages['Operation Eagle Kent'] = loadImage('images/battle-image-Kent.jpg');
  battleImages['Operation Eagle Southampton'] = loadImage('images/battle-image-Southampton.jpg');
  battleImages['Operation Eagle Plymouth'] = loadImage('images/battle-image-Plymouth.jpg');
  battleImages['The invasion of Poland'] = loadImage('images/battle-image-Poland.jpg');
  battleImages['The invasion of Denmark'] = loadImage('images/battle-image-Denmark.jpg');
  battleImages['The invasion of Norway'] = loadImage('images/battle-image-Norway.jpg');	
  battleImages['The invasion of Belgium'] = loadImage('images/battle-image-Belgium.jpg');

}

function setup() {
  // Calculate the banner height based on the desired canvas width
  let canvasWidth = europeMap.width; // Or any desired width
  bannerHeight = (titleBanner.height / titleBanner.width) * canvasWidth;
  // Create a canvas matching the size of the map image plus banner
  createCanvas(canvasWidth, bannerHeight + europeMap.height + 50); // Extra space for banner and slider

  // Create the time slider
  slider = createSlider(0, maxMonths - 1, 0, 1);
  slider.position(30, height - 60);
  slider.style('width', width - 50 + 'px');
  slider.class('customSlider'); // Add a custom class for advanced styling
  slider.input(updateMonth);

  // Create the glow layer
  glowLayer = createGraphics(width, height - 50 - bannerHeight); // Exclude the slider and banner area

  // Manually define data points for each month
  defineDataPoints();
}

function draw() {
  background(220);

  // Hide or show the slider based on the current state
  if (showDetail || transitioning) {
    slider.hide();
  } else {
    slider.show();
  }

  // Handle detail view transition
  if (transitioning) {
    transitionProgress += 0.02; // Adjust speed as needed
    if (transitionProgress >= 1) {
      transitionProgress = 1;
      transitioning = false;
      showDetail = true;
    }
  }

  // Handle month transition
  if (transitioningMonth) {
    monthTransitionProgress += deltaTime / 500; // deltaTime is in milliseconds
    if (monthTransitionProgress >= 1) {
      monthTransitionProgress = 1;
      transitioningMonth = false;
    }
  }

  // Map zoom and pan calculations
  let zoomLevel = transitioning || showDetail ? lerp(1, 2, transitionProgress) : 1;

  // Adjust zoomOffsetX to -100
  let zoomOffsetX = -100;
  let zoomX = transitioning || showDetail ? selectedBattle.x - zoomOffsetX : width / 2;
  let zoomY = transitioning || showDetail ? selectedBattle.y : (height - 50 - bannerHeight) / 2;

  push();
  // Move down by bannerHeight pixels
  translate(0, bannerHeight);

  push();
  // Apply zoom and pan
  translate(width / 2, (height - 50 - bannerHeight) / 2);
  scale(zoomLevel);
  translate(-zoomX, -zoomY);

  // Display the map image as the background
  image(europeMap, 0, 0);

  if (!showDetail && !transitioning) {
    // Clear the glowLayer
    glowLayer.clear();

    // Set blend mode to ADD for glow effect
    glowLayer.blendMode(ADD);

    if (transitioningMonth) {
      let fadeOutAlpha = map(monthTransitionProgress, 0, 1, 255, 0);
      let fadeInAlpha = map(monthTransitionProgress, 0, 1, 0, 255);

      // Draw previous month's glows
      if (dataPoints[previousMonth]) {
        for (let battle of dataPoints[previousMonth]) {
          drawGlow(glowLayer, battle.x, battle.y, battle.glowRadius, battle.color, fadeOutAlpha);
        }
      }

      // Draw current month's glows
      if (dataPoints[currentMonth]) {
        for (let battle of dataPoints[currentMonth]) {
          drawGlow(glowLayer, battle.x, battle.y, battle.glowRadius, battle.color, fadeInAlpha);
        }
      }
    } else {
      // Draw current month's glows normally
      if (dataPoints[currentMonth]) {
        for (let battle of dataPoints[currentMonth]) {
          drawGlow(glowLayer, battle.x, battle.y, battle.glowRadius, battle.color, 255);
        }
      }
    }

    // Reset blend mode to default before drawing on the main canvas
    glowLayer.blendMode(BLEND);

    // Draw the glowLayer onto the main canvas
    image(glowLayer, 0, 0);

    // Draw data points with fade effect
    if (transitioningMonth) {
      let fadeOutAlpha = map(monthTransitionProgress, 0, 1, 255, 0);
      let fadeInAlpha = map(monthTransitionProgress, 0, 1, 0, 255);

      // Draw previous month's data points
      if (dataPoints[previousMonth]) {
        for (let battle of dataPoints[previousMonth]) {
          let c = battle.color;
          fill(red(c), green(c), blue(c), fadeOutAlpha);
          noStroke();
          ellipse(battle.x, battle.y, 5 / zoomLevel);
        }
      }

      // Draw current month's data points
      if (dataPoints[currentMonth]) {
        for (let battle of dataPoints[currentMonth]) {
          let c = battle.color;
          fill(red(c), green(c), blue(c), fadeInAlpha);
          noStroke();
          ellipse(battle.x, battle.y, 5 / zoomLevel);
        }
      }
    } else {
      // Draw current month's data points normally
      if (dataPoints[currentMonth]) {
        for (let battle of dataPoints[currentMonth]) {
          fill(battle.color);
          noStroke();
          ellipse(battle.x, battle.y, 5 / zoomLevel);
        }
      }
    }
  } else {
    // During transition or detail view
    // Draw data point and glow for the selected battle only
    glowLayer.clear();
    glowLayer.blendMode(ADD);
    drawGlow(glowLayer, selectedBattle.x, selectedBattle.y, selectedBattle.glowRadius, selectedBattle.color, 255);
    glowLayer.blendMode(BLEND);
    image(glowLayer, 0, 0);

    fill(selectedBattle.color);
    noStroke();
    ellipse(selectedBattle.x, selectedBattle.y, 10 / zoomLevel);
  }

  pop();
  pop();
  // Draw the title banner at the top, scaled to fit the canvas width
  image(titleBanner, 0, 0, width, bannerHeight);

  // Draw the slider (only if not in detail view)
  if (!showDetail && !transitioning) {
    fill(200);
    rect(0, height - 100 , width, 100);
    fill(0);
    textSize(32);
    textAlign(LEFT, CENTER);
    text('Month: ' + (currentMonth + 1), 10, height - 15);
  }

  // Draw the death screen window
  if (showDetail || transitioning) {
    drawDeathScreen();
  }

  // Draw the custom transition screen
  if (showTransitionScreen) {
    drawTransitionScreen();
  }
}

function mousePressed() {
  if (!showDetail && !transitioning && mouseY > bannerHeight && mouseY < height - 50) {
    // Compute zoomLevel as in draw()
    let zoomLevel = transitioning || showDetail ? lerp(1, 2, transitionProgress) : 1;

    // Compute zoomX and zoomY as in draw()
    let zoomOffsetX = -100;
    let zoomX = transitioning || showDetail ? selectedBattle.x - zoomOffsetX : width / 2;
    let zoomY = transitioning || showDetail ? selectedBattle.y : (height - 50 - bannerHeight) / 2;

    // Map mouseX and mouseY into the coordinate system of the data points
    // First, adjust for the initial translate
    let adjustedMouseY = mouseY - bannerHeight;
    let adjustedMouseX = mouseX;

    // Then, adjust for the second translate
    adjustedMouseX -= width / 2;
    adjustedMouseY -= (height - 50 - bannerHeight) / 2;

    // Then, adjust for scaling
    adjustedMouseX /= zoomLevel;
    adjustedMouseY /= zoomLevel;

    // Then, adjust for the final translate
    adjustedMouseX += zoomX;
    adjustedMouseY += zoomY;

    if (dataPoints[currentMonth]) {
      for (let battle of dataPoints[currentMonth]) {
        let d = dist(adjustedMouseX, adjustedMouseY, battle.x, battle.y);
        if (d < 10) {
          // Data point was clicked
          selectedBattle = battle;
          scrollPosition = 0;
          transitioning = true;
          transitionProgress = 0;
          break;
        }
      }
    }
  } else if (showDetail && !transitioning) {
    // Retrieve box dimensions
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
      // Interpolate between small and large box
      let t = scrollBoxTransitionProgress;
      if (scrollBoxExpanded) {
        // Expanding
        boxWidth = lerp(smallBoxWidth, largeBoxWidth, t);
        boxHeight = lerp(smallBoxHeight, largeBoxHeight, t);
        boxX = lerp(smallBoxX, largeBoxX, t);
        boxY = lerp(smallBoxY, largeBoxY, t);
      } else {
        // Shrinking
        boxWidth = lerp(largeBoxWidth, smallBoxWidth, t);
        boxHeight = lerp(largeBoxHeight, smallBoxHeight, t);
        boxX = lerp(largeBoxX, smallBoxX, t);
        boxY = lerp(largeBoxY, smallBoxY, t);
      }
    } else {
      if (scrollBoxExpanded) {
        // Expanded state
        boxWidth = largeBoxWidth;
        boxHeight = largeBoxHeight;
        boxX = largeBoxX;
        boxY = largeBoxY;
      } else {
        // Default state
        boxWidth = smallBoxWidth;
        boxHeight = smallBoxHeight;
        boxX = smallBoxX;
        boxY = smallBoxY;
      }
    }

    if (mouseX >= boxX && mouseX <= boxX + boxWidth && mouseY >= boxY && mouseY <= boxY + boxHeight) {
      // Mouse is within the scrolling box
      // Start transition
      scrollBoxExpanded = !scrollBoxExpanded;
      scrollBoxTransitioning = true;
      scrollBoxTransitionProgress = 0;
    } else if (scrollBoxExpanded) {
      // If box is expanded and click is outside, shrink the box
      scrollBoxExpanded = false;
      scrollBoxTransitioning = true;
      scrollBoxTransitionProgress = 0;
    }
  }
}

function keyPressed() {
  if (keyCode === ESCAPE) {
    if (scrollBoxExpanded) {
      // Shrink the scroll box
      scrollBoxExpanded = false;
      scrollBoxTransitioning = true;
      scrollBoxTransitionProgress = 0;
    } else if (showDetail) {
      // Return to main screen
      showDetail = false;
      selectedBattle = null;
      scrollPosition = 0;
    }
  }
}

function mouseWheel(event) {
  if (showDetail) {
    // Retrieve box dimensions
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
      // Interpolate between small and large box
      let t = scrollBoxTransitionProgress;
      if (scrollBoxExpanded) {
        // Expanding
        boxWidth = lerp(smallBoxWidth, largeBoxWidth, t);
        boxHeight = lerp(smallBoxHeight, largeBoxHeight, t);
        boxX = lerp(smallBoxX, largeBoxX, t);
        boxY = lerp(smallBoxY, largeBoxY, t);
      } else {
        // Shrinking
        boxWidth = lerp(largeBoxWidth, smallBoxWidth, t);
        boxHeight = lerp(largeBoxHeight, smallBoxHeight, t);
        boxX = lerp(largeBoxX, smallBoxX, t);
        boxY = lerp(largeBoxY, smallBoxY, t);
      }
    } else {
      if (scrollBoxExpanded) {
        // Expanded state
        boxWidth = largeBoxWidth;
        boxHeight = largeBoxHeight;
        boxX = largeBoxX;
        boxY = largeBoxY;
      } else {
        // Default state
        boxWidth = smallBoxWidth;
        boxHeight = smallBoxHeight;
        boxX = smallBoxX;
        boxY = smallBoxY;
      }
    }

    if (mouseX >= boxX && mouseX <= boxX + boxWidth && mouseY >= boxY && mouseY <= boxY + boxHeight) {
      // Scroll to display more deaths
      scrollPosition += event.delta;
      let totalDeaths = selectedBattle.totalDeaths;
      let iconsPerRow = selectedBattle.iconsPerRow;
      let iconSize = selectedBattle.iconSize;
      let totalRows = selectedBattle.totalRows;
      let textLineHeight = 50; // Height for the total deaths text
      let totalContentHeight = totalRows * iconSize + textLineHeight;
      let windowHeight = boxHeight - 100; // Adjust for margins
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

      // Check for transition between month 8 and 9
      if ((previousMonth === 7 && currentMonth === 8) || (previousMonth === 8 && currentMonth === 7)) {
        showTransitionScreen = true;
        transitionScreenProgress = 0;
      }
    }
  }
}

function drawTransitionScreen() {
  transitionScreenProgress += deltaTime / 2000; // Adjust the speed as needed

  if (transitionScreenProgress <= 2) {
    // Keep the screen fully opaque for the first 0.5 seconds
    if (transitionScreenProgress <= 0.5) {
      transitionScreenAlpha = 255;
    } else {
      // Fade out over the next 1.5 seconds
      transitionScreenAlpha = lerp(255, 0, (transitionScreenProgress - 0.5) / 1.5);
    }
  } else {
    // End of transition
    showTransitionScreen = false;
    transitionScreenProgress = 0;
    return;
  }

  // Draw the overlay
  push();
  fill(50, transitionScreenAlpha); // Dark gray with variable alpha
  rect(0, 0, width, height);
  fill(255, transitionScreenAlpha); // White text with variable alpha
  textSize(64);
  textAlign(CENTER, CENTER);
  text('Western Campaign', width / 2, height / 2);
  pop();
}

function drawGlow(layer, x, y, radius, color, alpha) {
  let ctx = layer.drawingContext;

  // Extract RGB components from the p5.Color object
  let r = red(color);
  let g = green(color);
  let b = blue(color);

  // Adjust alpha
  let innerAlpha = alpha / 255;

  // Create radial gradient
  let gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);

  // Define the inner and outer colors with specified alpha values
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
  // Dimensions for the info box and image box
  let infoBoxX = 20;
  let infoBoxY = 250;
  let infoBoxWidth = 560;
  let infoBoxHeight = height - 800; // Adjusted height for info box

  let imageBoxX = 20;
  let imageBoxY = infoBoxY + infoBoxHeight + 20; // 20 pixels space between boxes
  let imageBoxWidth = infoBoxWidth;
  let imageBoxHeight = 560 * (3 / 4); // Adjust as needed

  // Draw a semi-transparent rectangle for the info box
  fill(255, 255, 255, 200);
  rect(infoBoxX, infoBoxY, infoBoxWidth, infoBoxHeight);

  // Display battle information inside the info box
  fill(0);
  textSize(32);
  textAlign(LEFT, TOP);
  let x = infoBoxX + 10;
  let y = infoBoxY + 10;
  let lineHeight = 40;

  // Battle Name
  textStyle(BOLD);
  text('Battle Name: ', x, y);
  let labelWidth = textWidth('Battle Name: ');
  textStyle(NORMAL);
  text(battle.battleName, x + labelWidth, y);
  y += lineHeight;

  // Location
  textStyle(BOLD);
  text('Location: ', x, y);
  labelWidth = textWidth('Location: ');
  textStyle(NORMAL);
  text(battle.location, x + labelWidth, y);
  y += lineHeight;

  // Date
  textStyle(BOLD);
  text('Date: ', x, y);
  labelWidth = textWidth('Date: ');
  textStyle(NORMAL);
  text(battle.date, x + labelWidth, y);
  y += lineHeight;

  // Winning Team
  textStyle(BOLD);
  text('Winning Team: ', x, y);
  labelWidth = textWidth('Winning Team: ');
  textStyle(NORMAL);
  text(battle.winner, x + labelWidth, y);
  y += lineHeight;

  // Summary
  textStyle(BOLD);
  text('Summary:', x, y);
  y += lineHeight;

  // Reset text style to NORMAL before the summary text
  textStyle(NORMAL);
  text(battle.summary, x, y, infoBoxWidth - 20, infoBoxHeight - y - 10); // Text wrapping

  // Draw the image in a separate box under the info box
  stroke(200);
  noFill();
  rect(imageBoxX, imageBoxY, imageBoxWidth, imageBoxHeight);

  // Load the battle image
  let img = battleImages[battle.battleName];

  // Draw the image
  if (img) {
    image(img, imageBoxX, imageBoxY, imageBoxWidth, imageBoxHeight);
  }
}

function drawDeathScreen() {
  // Calculate window sliding in from the right
  let windowWidth = width * 0.30;
  let offsetX = transitioning ? lerp(width, width - windowWidth, transitionProgress) : width - windowWidth;

  // Draw the window background
  fill(50);
  noStroke();
  rect(offsetX, bannerHeight, windowWidth, height);

  // Draw the info box within the window
  push();
  translate(offsetX, 0);
  drawInfoBox(selectedBattle);
  pop();

  // Handle scrolling box transition
  if (scrollBoxTransitioning) {
    scrollBoxTransitionProgress += deltaTime / 500; // Adjust speed as needed
    if (scrollBoxTransitionProgress >= 1) {
      scrollBoxTransitionProgress = 1;
      scrollBoxTransitioning = false;
    }
  }

  // Retrieve box dimensions
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
    // Interpolate between small and large box
    let t = scrollBoxTransitionProgress;
    if (scrollBoxExpanded) {
      // Expanding
      boxWidth = lerp(smallBoxWidth, largeBoxWidth, t);
      boxHeight = lerp(smallBoxHeight, largeBoxHeight, t);
      boxX = lerp(smallBoxX, largeBoxX, t);
      boxY = lerp(smallBoxY, largeBoxY, t);
    } else {
      // Shrinking
      boxWidth = lerp(largeBoxWidth, smallBoxWidth, t);
      boxHeight = lerp(largeBoxHeight, smallBoxHeight, t);
      boxX = lerp(largeBoxX, smallBoxX, t);
      boxY = lerp(largeBoxY, smallBoxY, t);
    }
  } else {
    if (scrollBoxExpanded) {
      // Expanded state
      boxWidth = largeBoxWidth;
      boxHeight = largeBoxHeight;
      boxX = largeBoxX;
      boxY = largeBoxY;
    } else {
      // Default state
      boxWidth = smallBoxWidth;
      boxHeight = smallBoxHeight;
      boxX = smallBoxX;
      boxY = smallBoxY;
    }
  }

  // Draw the scrolling death icons within the box
  push();
  // Move to the box position
  translate(boxX, boxY);

  // Draw the box background
  fill(30);
  noStroke();
  rect(0, 0, boxWidth, boxHeight);

  // Clip the drawing area to the box
  let ctx = drawingContext;
  ctx.save();
  ctx.beginPath();
  ctx.rect(0, 0, boxWidth, boxHeight);
  ctx.clip();

  // Adjust scrollPosition to stay within bounds
  let totalDeaths = selectedBattle.totalDeaths;
  let iconsPerRow = selectedBattle.iconsPerRow;
  let iconSize = selectedBattle.iconSize;

  let totalRows = selectedBattle.totalRows;
  let textLineHeight = 50; // Height for the total deaths text
  let totalContentHeight = totalRows * iconSize + textLineHeight;
  let windowHeight = boxHeight - 100; // Adjust for margins

  scrollPosition = constrain(scrollPosition, 0, totalContentHeight - windowHeight);

  // Calculate which rows are visible
  let firstRow = floor(scrollPosition / iconSize);
  let lastRow = ceil((scrollPosition + windowHeight) / iconSize);

  // Calculate starting x and y positions
  let startX = (boxWidth - iconsPerRow * iconSize) / 2;
  let startY = 50; // Adjust as needed

  for (let row = firstRow; row < lastRow; row++) {
    for (let col = 0; col < iconsPerRow; col++) {
      let i = row * iconsPerRow + col;
      if (i >= totalDeaths) {
        break;
      }
      let x = startX + col * iconSize;
      let y = startY + row * iconSize - scrollPosition;

      // Change the order and colors of deaths displayed
      let img;
      if (i < selectedBattle.allied) {
        img = manIconBlue; // Allied soldiers
      } else if (i < selectedBattle.allied + selectedBattle.axis) {
        img = manIconRed; // Axis soldiers
      } else {
        img = manIconGreen; // Civilians
      }

      image(img, x, y, iconSize, iconSize);
    }
  }

  // Draw the total deaths text after the icons
  let textY = startY + totalRows * iconSize - scrollPosition + 20; // Adjust spacing as needed

  if (textY > -50 && textY < boxHeight) {
    fill(255);
    textSize(20);
    textAlign(CENTER, TOP);
    text('Total (estimated) deaths: ' + selectedBattle.totalDeaths, boxWidth / 2, textY);
  }

  // Instruction to scroll
  fill(255);
  textSize(20);
  textAlign(CENTER, TOP);
  text('Click and scroll to see more', boxWidth / 2, 20);

  // Restore the drawing context
  ctx.restore();
  pop();

  // Draw instructions
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  if (scrollBoxExpanded) {
    text('Click outside the box or press ESC to return', width / 2, height - 30);
  } else {
    text('Press ESC to return', width / 2, height - 50);
  }
}

function getScrollBoxDimensions() {
  // Calculate dimensions and positions
  let dimensions = {
    smallBoxWidth: 400,
    smallBoxHeight: 500,
    smallBoxX: 20,
    smallBoxY: bannerHeight + 20,
    largeBoxWidth: 400,
    largeBoxHeight: 1200,
    largeBoxX: 20,
    largeBoxY: bannerHeight + 20,
  };
  return dimensions;
}

function defineDataPoints() {
  // Initialize dataPoints as an array of 72 empty arrays
  dataPoints = [];
  for (let i = 0; i < 72; i++) {
    dataPoints.push([]);
  }

  // Battle 1:
  // Date: 1 September 1939
  // Month index: (1939 - 1939)*12 + (9 - 9) = 0
  dataPoints[0].push({
    x: 1005, 
    y: 825, 
    civilians: 7000,
    allied: 66000,
    axis: 14000,
    location: 'Poland',
    date: '1 September 1939',
    winner: 'Axis',
    summary: 'World War II began with the German invasion of Poland. Germany attacked Poland using the Blitzkrieg tactic, a fast and coordinated assault. This surprise attack quickly broke through the Polish defense lines, allowing the Germans to capture large parts of Poland within a few weeks.',
    battleName: 'The invasion of Poland'
  });

  // Battle 2:
  // Date: 17 September 1939
  // Month index: 0
  dataPoints[0].push({
    x: 1150,
    y: 875,
    civilians: 0,
    allied: 870,
    axis: 927,
    location: 'Poland',
    date: '17 September 1939',
    winner: 'Axis',
    summary: 'The battle was a significant engagement in Poland, where Polish forces attempted to break through German lines to reach the Romanian Bridgehead. Despite initial successes, the Polish forces were overwhelmed by superior German reinforcements and forced to surrender after heavy fighting.',
    battleName: 'Battle of Tomaszów Lubelski'
  });

  // Battle 3:
  // Date: November 1939
  // Month index: 2
  dataPoints[2].push({
    x: 1270,
    y: 475,
    civilians: 0,
    allied: 650,
    axis: 4000,
    location: 'Finland',
    date: 'November 1939',
    winner: 'Allied',
    summary: 'The battle of Salla was part of the Winter War between Finland and the Soviet Union, occurring near the Finnish town of Salla. Finnish forces successfully repelled Soviet advances. The extreme cold, often dropping below -30°C, with Finnish troops using the harsh winter conditions to their advantage.',
    battleName: 'Battle of Salla'
  });

  // Battle 4:
  // Date: December 1939
  // Month index: 3
  dataPoints[3].push({
    x: 1295,
    y: 628,
    civilians: 0,
    allied: 1000,
    axis: 4000,
    location: 'Finland',
    date: 'December 1939',
    winner: 'Allied',
    summary: 'The first phase of the Battle of Summa saw Finnish forces defending strong positions against intense Soviet attacks. Despite being outnumbered, the Finns used the terrain to their advantage, inflicting heavy casualties on the advancing Soviet troops.',
    battleName: 'Battle of Summa 1'
  });

  // Battle 5:
  // Date: January 1940
  // Month index: 4
  dataPoints[4].push({
    x: 1280,
    y: 515,
    civilians: 0,
    allied: 2700,
    axis: 29000,
    location: 'Finland',
    date: 'January 1940',
    winner: 'Allied',
    summary: 'The Battle of Suomussalmi saw Finnish forces effectively encircle and destroy a large Soviet division. Using superior tactics and knowledge of the terrain, the Finns inflicted heavy casualties on the Soviet forces, leading to a significant victory. It is the most remarkable Finnish successes in the Winter War.',
    battleName: 'Battle of Suomussalmi'
  });

  // Battle 6:
  // Date: January 1940
  // Month index: 4
  dataPoints[4].push({
    x: 1295,
    y: 510,
    civilians: 0,
    allied: 310,
    axis: 8000,
    location: 'Finland',
    date: 'January 1940',
    winner: 'Allied',
    summary: 'The Battle of Raate Road was a decisive Finnish victory during the Winter War, where Finnish forces ambushed and encircled a Soviet division. Using hit-and-run tactics and the harsh winter terrain, the Finns inflicted heavy losses, forcing the Soviets to retreat.',
    battleName: 'Battle of Raate Road'
  });

  // Battle 7:
  // Date: February 1940
  // Month index: 5
  dataPoints[5].push({
    x: 1295,
    y: 628,
    civilians: 0,
    allied: 2000,
    axis: 2000,
    location: 'Finland',
    date: 'February 1940',
    winner: 'Axis',
    summary: 'In the second phase of the Battle of Summa, Soviet forces launched a more concentrated assault, gradually breaking through Finnish defenses. Despite fierce resistance, the Finns were eventually forced to retreat as Soviet reinforcements and artillery overwhelmed their positions.',
    battleName: 'Battle of Summa 2'
  });

  // Battle 8:
  // Date: March 1940
  // Month index: 6
  dataPoints[6].push({
    x: 1338,
    y: 585,
    civilians: 0,
    allied: 1500,
    axis: 8000,
    location: 'Finland',
    date: 'March 1940',
    winner: 'Axis',
    summary: 'The Battle of Kollaa was a key battle in the Winter War, where Finnish forces held strong defensive positions against repeated Soviet offensives. Despite being outnumbered, the Finns successfully repelled Soviet attacks, inflicting heavy casualties and maintaining control of the area.',
    battleName: 'Battle of Kollaa'
  });

  // Battle 9:
  // Date: April 1940
  // Month index: 7
  dataPoints[7].push({
    x: 883, 
    y: 767,
    civilians: 15,
    allied: 23,
    axis: 3,
    location: 'Denmark',
    date: 'April 1940',
    winner: 'Axis',
    summary: 'The invasion of Denmark saw German forces quickly occupy the country to secure a strategic position for their campaign in Norway. Despite heavy German air and naval superiority, Denmark surrendered with minimal resistance to avoid further destruction.',
    battleName: 'The invasion of Denmark'
  });

  // Battle 10:
  // Date: April 1940
  // Month index: 7
  // Oslo
  dataPoints[7].push({
    x: 920,
    y: 642,
    civilians: 1700,
    allied: 4900,
    axis: 5300,
    location: 'Norway',
    date: 'April 1940',
    winner: 'Axis',
    summary: 'The Invasion of Norway, also known as Operation Weserübung, involved German forces attacking multiple points along the Norwegian coast simultaneously. The Germans aimed to secure key ports and deny them to the Allies, leading to a swift occupation despite Norwegian resistance.',
    battleName: 'The invasion of Norway'
  });

    // Additional points for the same battle
    // South
    dataPoints[7].push({
      x: 835,
      y: 688,
      civilians: 1700,
      allied: 4900,
      axis: 5300,
      location: 'Norway',
      date: 'April 1940',
      winner: 'Axis',
      summary: 'The Invasion of Norway, also known as Operation Weserübung, involved German forces attacking multiple points along the Norwegian coast simultaneously. The Germans aimed to secure key ports and deny them to the Allies, leading to a swift occupation despite Norwegian resistance.',
      battleName: 'The invasion of Norway'
    });
  
    // West
    dataPoints[7].push({
      x: 810,
      y: 610,
      civilians: 1700,
      allied: 4900,
      axis: 5300,
      location: 'Norway',
      date: 'April 1940',
      winner: 'Axis',
      summary: 'The Invasion of Norway, also known as Operation Weserübung, involved German forces attacking multiple points along the Norwegian coast simultaneously. The Germans aimed to secure key ports and deny them to the Allies, leading to a swift occupation despite Norwegian resistance.',
      battleName: 'The invasion of Norway'
    });

    // North
    dataPoints[7].push({
      x: 1000,
      y: 455,
      civilians: 1700,
      allied: 4900,
      axis: 5300,
      location: 'Norway',
      date: 'April 1940',
      winner: 'Axis',
      summary: 'The Invasion of Norway, also known as Operation Weserübung, involved German forces attacking multiple points along the Norwegian coast simultaneously. The Germans aimed to secure key ports and deny them to the Allies, leading to a swift occupation despite Norwegian resistance.',
      battleName: 'The invasion of Norway'
    });
  
  // Battles for the Blitzkrieg (May–June 1940)
  // May 1940 is index 8
  // June 1940 is index 9

  // Battle of Sedan
  dataPoints[8].push({
    x: 795, 
    y: 900, 
    civilians: 2000,
    allied: 65000,
    axis: 10000,
    location: 'Sedan, France',
    date: '12-15 May 1940',
    winner: 'Axis',
    summary: 'The Battle of Sedan was a pivotal conflict where German forces used blitzkrieg tactics to break through the French defenses along the Meuse River. The rapid advance of German tanks and infantry led to the encirclement of French forces, contributing to the swift collapse of France.',
    battleName: 'Battle of Sedan'
  });

  // Battle of Arras
  dataPoints[8].push({
    x: 757, 
    y: 890, 
    civilians: 1000,
    allied: 30000,
    axis: 3000,
    location: 'Arras, France',
    date: '21 May 1940',
    winner: 'Allies',
    summary: 'The Battle of Arras was a counterattack by British and French forces aimed at halting the German advance. Despite initial successes, including the use of tanks, the attack ultimately failed as German forces quickly reinforced their positions, allowing them to continue their advance.',
    battleName: 'Battle of Arras'
  });

  // Battle of Belgium
  dataPoints[8].push({
    x: 780, 
    y: 870, 
    civilians: 4000,
    allied: 85000,
    axis: 10000,
    location: 'Belgium',
    date: '10–28 May 1940',
    winner: 'Axis',
    summary: 'The invasion of Belgium saw German forces launch a rapid attack through the Ardennes, bypassing the heavily fortified Maginot Line. Belgian and Allied forces were quickly overwhelmed, and the country was occupied, facilitating the German advance into France.',
    battleName: 'The invasion of Belgium'
  });

  // Battle of the Netherlands
  dataPoints[8].push({
    x: 815, 
    y: 836, 
    civilians: 10000,
    allied: 50000,
    axis: 7000,
    location: 'Netherlands',
    date: '10–14 May 1940',
    winner: 'Axis',
    summary: 'The invasion of the Netherlands involved a swift German attack using airborne troops to capture key bridges and airfields. Despite fierce resistance, the Netherlands surrendered after the devastating bombing of Rotterdam, allowing Germany to continue its advance into Western Europe.',
    battleName: 'Battle of the Netherlands'
  });

  // Battle of Dunkirk
  dataPoints[8].push({
    x: 736, 
    y: 872,
    civilians: 1000,
    allied: 80000,
    axis: 6000,
    location: 'Dunkirk, France',
    date: '26 May – 4 June 1940',
    winner: 'Axis',
    summary: 'The Battle of Dunkirk was a critical engagement where Allied forces were surrounded by advancing German troops. Despite heavy attacks, the successful evacuation of over 300,000 soldiers across the English Channel, known as the "Miracle of Dunkirk," preserved much of the Allied army.',
    battleName: 'Battle of Dunkirk'
  });

  // Battle of Lille
  dataPoints[8].push({
    x: 764, 
    y: 885,
    civilians: 500,
    allied: 35000,
    axis: 3000,
    location: 'Lille, France',
    date: '28–31 May 1940',
    winner: 'Axis',
    summary: 'The Battle of Lille saw French forces valiantly defend against encircling German troops to delay their advance. This allowed a significant number of Allied forces to retreat toward Dunkirk, but the French defenders were ultimately forced to surrender after intense fighting.',
    battleName: 'Battle of Lille'
  });

  // Battle of Calais
  dataPoints[8].push({
    x: 727, 
    y: 882,
    civilians: 500,
    allied: 10000,
    axis: 1000,
    location: 'Calais, France',
    date: '22–26 May 1940',
    winner: 'Axis',
    summary: 'The Battle of Calais involved a desperate Allied defense to hold the port against advancing German forces. Although the defenders were eventually overwhelmed, their resistance delayed the German advance, aiding the evacuation of Allied troops from Dunkirk.',
    battleName: 'Battle of Calais'
  });

  // Battle of Abbeville
  dataPoints[8].push({
    x: 727, 
    y: 905,
    civilians: 500,
    allied: 15000,
    axis: 2000,
    location: 'Abbeville, France',
    date: '27 May – 4 June 1940',
    winner: 'Allies',
    summary: 'The Battle of Abbeville was a fierce Allied counterattack aimed at breaking German control over the Somme bridges. Despite initial successes, the Allies were unable to dislodge the Germans, who maintained their strategic position and continued their advance into France.',
    battleName: 'Battle of Abbeville'
  });

  // Battle of Le Havre (June 1940)
  dataPoints[9].push({
    x: 705, 
    y: 907,
    civilians: 500,
    allied: 5000,
    axis: 1000,
    location: 'Le Havre, France',
    date: '10–12 June 1940',
    winner: 'Axis',
    summary: 'The Battle of Le Havre was part of the Allied campaign to liberate France, where British forces launched a major assault to capture the port city from German defenders. After intense fighting and heavy bombardments, the Allies secured Le Havre, ensuring a vital supply route.',
    battleName: 'Battle of Le Havre'
  });

  // Battle of England (July - october 1940)

  // Battle of the Channel (july 1940)
  dataPoints[10].push({
    x: 725, 
    y: 870,
    civilians: 0, // total
    allied: 250, // total
    axis: 600, // total
    location: 'The Channel',
    date: '10 July - 12 August 1940',
    winner: 'Axis',
    summary: 'The Battle of the Channel marked the beginning of the air war against England. Germany aimed to weaken British shipping and ports, leading to intense air battles as a prelude to the broader Battle of Britain.',
    battleName: 'Battle of the Channel'
  });

  // Battle of the Channel (august 1940)
  dataPoints[11].push({
    x: 725, 
    y: 870,
    civilians: 0, // total 43000, dit aantal moet worden onder verdeeld over alle dots van de battle of engeland
    allied: 250, // total 1542
    axis: 600, // total 3510
    location: 'The Channel',
    date: '10 July - 12 August 1940',
    winner: 'Axis', // moet voor alles nog worden uitgezocht
    summary: 'The Battle of the Channel marked the beginning of the air war against England. Germany aimed to weaken British shipping and ports, leading to intense air battles as a prelude to the broader Battle of Britain.',
    battleName: 'Battle of the Channel'
  });

  // Operation Eagle (august 1940)

  // Operation Eagle Plymouth
  dataPoints[11].push({
    x: 630, 
    y: 875,
    civilians: 1400,
    allied: 120,
    axis: 580,
    location: 'Plymouth, England',
    date: '13-18 August 1940',
    winner: 'Axis',
    summary: 'Operation Eagle’s airstrikes targeted Plymouth, a key British naval base, aiming to cripple naval and industrial capabilities. Intense German bombing caused significant destruction and civilian casualties, but failed to weaken Britain’s resolve or achieve decisive strategic advantages.', 
    battleName: 'Operation Eagle Plymouth'
  });

   // Operation Eagle Southampton
   dataPoints[11].push({
    x: 670, 
    y: 865,
    civilians: 1500,
    allied: 150,
    axis: 600,
    location: 'Southampton, England',
    date: '13-18 August 1940',
    winner: 'Axis',
    summary: 'During Operation Eagle, Southampton was heavily bombed by the Luftwaffe as part of Germany’s effort to destroy British infrastructure and morale. The attacks caused significant civilian casualties, extensive damage to the city, and marked a key phase in the Blitz.',
    battleName: 'Operation Eagle Southampton'
  });

   // Operation Eagle Kent
   dataPoints[11].push({
    x: 715, 
    y: 865,
    civilians: 2000,
    allied: 250,
    axis: 700,
    location: 'Kent, England',
    date: '13-18 August 1940',
    winner: 'Axis',
    summary: 'During World War II, airfields in Kent were heavily bombed by the German Luftwaffe. These air raids targeted strategic sites, including RAF Manston and RAF Lympne, in support of the air war against Great Britain.', 
    battleName: 'Operation Eagle Kent'
  });

  // Bombardementen London
  dataPoints[11].push({
    x: 688, 
    y: 850,
    civilians: 3000,
    allied: 200,
    axis: 150,
    location: 'London, England',
    date: '24 August - 30 september 1940',
    winner: 'Axis',
    summary: 'In 1940, London was heavily bombed by the German Luftwaffe, with targets including industrial areas, airfields, and military installations. These attacks, part of the Blitz, caused significant damage and civilian casualties as the city prepared for further raids.',
    battleName: 'Battle of London'
  });

  // Bombardementen London
  dataPoints[12].push({
    x: 688, 
    y: 850,
    civilians: 3000,
    allied: 200,
    axis: 150,
    location: 'London, England',
    date: '24 August - 30 september 1940',
    winner: 'Axis',
    summary: 'In 1940, London was heavily bombed by the German Luftwaffe, with targets including industrial areas, airfields, and military installations. These attacks, part of the Blitz, caused significant damage and civilian casualties as the city prepared for further raids.',
    battleName: 'Battle of London'
  });

  

  // Compute minDeaths and maxDeaths
  let minDeaths = Infinity;
  let maxDeaths = -Infinity;

  for (let month of dataPoints) {
    for (let battle of month) {
      // Ensure total deaths match sum of categories
      battle.deaths = battle.allied + battle.axis + battle.civilians;

      if (battle.deaths < minDeaths) {
        minDeaths = battle.deaths;
      }
      if (battle.deaths > maxDeaths) {
        maxDeaths = battle.deaths;
      }

      // Set color based on winner
      if (battle.winner.toLowerCase() === 'allied' || battle.winner.toLowerCase() === 'allies') {
        battle.color = color(0, 0, 255); // Blue for Allies
      } else if (battle.winner.toLowerCase() === 'axis') {
        battle.color = color(255, 0, 0); // Red for Axis
      } else {
        battle.color = color(0, 255, 0); // Green for others or neutral
      }
    }
  }

  // Define min and max glow radius
  let minRadius = 8;
  let maxRadius = 30;

  // Update glowRadius based on deaths for each battle
  for (let month of dataPoints) {
    for (let battle of month) {
      battle.glowRadius = map(battle.deaths, minDeaths, maxDeaths, minRadius, maxRadius);

      // Calculate total deaths and total rows for scrolling
      battle.totalDeaths = battle.deaths;
      battle.iconsPerRow = 10; // Adjust as needed
      battle.iconSize = 20;
      battle.totalRows = ceil(battle.totalDeaths / battle.iconsPerRow);
    }
  }
}

