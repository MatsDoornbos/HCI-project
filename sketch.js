// Global variable declarations
let europeMap;
let titleBanner;
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

let manIconRed;
let manIconBlue;
let manIconGreen;

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
  europeMap = loadImage('europe-map.jpg');
  titleBanner = loadImage('title-banner.png');

  // Load the man icon images for different death types
  manIconBlue = loadImage('man-icon-blue.png');   // Allied soldiers
  manIconRed = loadImage('man-icon-red.png');     // Axis soldiers
  manIconGreen = loadImage('man-icon-green.png'); // Civilians

  // Load battle images
  battleImages['Battle of Sedan'] = loadImage('battle-image-Sedan.jpg');
  battleImages['Battle of Arras'] = loadImage('battle-image-Arras.jpg');
  battleImages['Battle of Dunkirk'] = loadImage('battle-image-Dunkirk.jpg');
  battleImages['Battle of Belgium'] = loadImage('battle-image-Belgium.jpg');
  battleImages['Battle of the Netherlands'] = loadImage('battle-image-Netherlands.jpg');
  battleImages['Battle of Lille'] = loadImage('battle-image-Lille.jpg');
  battleImages['Battle of Abbeville'] = loadImage('battle-image-Abbeville.jpg');
  battleImages['Battle of Calais'] = loadImage('battle-image-Calais.jpg');
  battleImages['Battle of Le Havre'] = loadImage('battle-image-Le Havre.jpg');
  
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
  text('Click and Scroll to see more', boxWidth / 2, 20);

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
    x: 580,
    y: 1000,
    civilians: 7000,
    allied: 66000,
    axis: 14000,
    location: 'Poland',
    date: '1 September 1939',
    winner: 'Axis',
    summary: '',
    battleName: 'invasion of poland'
  });

  // Battle 2:
  // Date: 17 September 1939
  // Month index: 0
  dataPoints[0].push({
    x: 450,
    y: 360,
    civilians: 0,
    allied: 870,
    axis: 927,
    location: 'Poland',
    date: '17 September 1939',
    winner: 'Axis',
    summary: '',
    battleName: 'Battle of Tomaszów Lubelski'
  });

  // Battle 3:
  // Date: November 1939
  // Month index: 2
  dataPoints[2].push({
    x: 580,
    y: 200,
    civilians: 0,
    allied: 650,
    axis: 4000,
    location: 'Finland',
    date: 'November 1939',
    winner: 'Allied',
    summary: '',
    battleName: 'Battle of Salla'
  });

  // Battle 4:
  // Date: December 1939
  // Month index: 3
  dataPoints[3].push({
    x: 570,
    y: 180,
    civilians: 0,
    allied: 1000,
    axis: 4000,
    location: 'Finland',
    date: 'December 1939',
    winner: 'Allied',
    summary: '',
    battleName: 'battle of summa 1'
  });

  // Battle 5:
  // Date: January 1940
  // Month index: 4
  dataPoints[4].push({
    x: 560,
    y: 195,
    civilians: 0,
    allied: 2700,
    axis: 29000,
    location: 'Finland',
    date: 'January 1940',
    winner: 'Allied',
    summary: '',
    battleName: 'Battle of Suomussalmi'
  });

  // Battle 6:
  // Date: January 1940
  // Month index: 4
  dataPoints[4].push({
    x: 550,
    y: 170,
    civilians: 0,
    allied: 310,
    axis: 8000,
    location: 'Finland',
    date: 'January 1940',
    winner: 'Allied',
    summary: '',
    battleName: 'Battle of Raate Road'
  });

  // Battle 7:
  // Date: February 1940
  // Month index: 5
  dataPoints[5].push({
    x: 570,
    y: 180,
    civilians: 0,
    allied: 2000,
    axis: 2000,
    location: 'Finland',
    date: 'February 1940',
    winner: 'Axis',
    summary: '',
    battleName: 'battle of summa 2'
  });

  // Battle 8:
  // Date: March 1940
  // Month index: 6
  dataPoints[6].push({
    x: 560,
    y: 160,
    civilians: 0,
    allied: 1500,
    axis: 8000,
    location: 'Finland',
    date: 'March 1940',
    winner: 'Axis',
    summary: '',
    battleName: 'Battle of Kollaa'
  });

  // Battle 9:
  // Date: April 1940
  // Month index: 7
  dataPoints[7].push({
    x: 360,
    y: 300,
    civilians: 15,
    allied: 23,
    axis: 3,
    location: 'Denmark',
    date: 'April 1940',
    winner: 'Axis',
    summary: '',
    battleName: 'Invasion of Denmark'
  });

  // Battle 10:
  // Date: April 1940
  // Month index: 7
  dataPoints[7].push({
    x: 350,
    y: 250,
    civilians: 1700,
    allied: 4900,
    axis: 5300,
    location: 'Norway',
    date: 'April 1940',
    winner: 'Axis',
    summary: '',
    battleName: 'Invasion of Norway'
  });

  // Battles for the Blitzkrieg (May–June 1940)
  // May 1940 is index 8
  // June 1940 is index 9

  // Battle of Sedan
  dataPoints[8].push({
    x: 310,
    y: 420,
    civilians: 2000,
    allied: 65000,
    axis: 10000,
    location: 'Sedan, France',
    date: '12–15 May 1940',
    winner: 'Axis',
    summary: '',
    battleName: 'Battle of Sedan'
  });

  // Battle of Arras
  dataPoints[8].push({
    x: 290,
    y: 410,
    civilians: 1000,
    allied: 30000,
    axis: 3000,
    location: 'Arras, France',
    date: '21 May 1940',
    winner: 'Allies',
    summary: '',
    battleName: 'Battle of Arras'
  });

  // Battle of Belgium
  dataPoints[8].push({
    x: 310,
    y: 395,
    civilians: 4000,
    allied: 85000,
    axis: 10000,
    location: 'Belgium',
    date: '10–28 May 1940',
    winner: 'Axis',
    summary: '',
    battleName: 'Battle of Belgium'
  });

  // Battle of the Netherlands
  dataPoints[8].push({
    x: 310,
    y: 370,
    civilians: 10000,
    allied: 50000,
    axis: 7000,
    location: 'Netherlands',
    date: '10–14 May 1940',
    winner: 'Axis',
    summary: '',
    battleName: 'Battle of the Netherlands'
  });

  // Battle of Dunkirk
  dataPoints[8].push({
    x: 270,
    y: 400,
    civilians: 1000,
    allied: 80000,
    axis: 6000,
    location: 'Dunkirk, France',
    date: '26 May – 4 June 1940',
    winner: 'Axis',
    summary: '',
    battleName: 'Battle of Dunkirk'
  });

  // Battle of Lille
  dataPoints[8].push({
    x: 280,
    y: 405,
    civilians: 500,
    allied: 35000,
    axis: 3000,
    location: 'Lille, France',
    date: '28–31 May 1940',
    winner: 'Axis',
    summary: '',
    battleName: 'Battle of Lille'
  });

  // Battle of Calais
  dataPoints[8].push({
    x: 265,
    y: 395,
    civilians: 500,
    allied: 10000,
    axis: 1000,
    location: 'Calais, France',
    date: '22–26 May 1940',
    winner: 'Axis',
    summary: '',
    battleName: 'Battle of Calais'
  });

  // Battle of Abbeville
  dataPoints[8].push({
    x: 290,
    y: 415,
    civilians: 500,
    allied: 15000,
    axis: 2000,
    location: 'Abbeville, France',
    date: '27 May – 4 June 1940',
    winner: 'Allies',
    summary: '',
    battleName: 'Battle of Abbeville'
  });

  // Battle of Le Havre (June 1940)
  dataPoints[9].push({
    x: 270,
    y: 430,
    civilians: 500,
    allied: 5000,
    axis: 1000,
    location: 'Le Havre, France',
    date: '10–12 June 1940',
    winner: 'Axis',
    summary: '',
    battleName: 'Battle of Le Havre'
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
  let minRadius = 5;
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

