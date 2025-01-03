// ==================================================
// ============== Global Variables ==================
// ==================================================

let europeMap;
let titleBanner;
let bannerHeight;
let currentMonth = 0;
let previousMonth = 0;
let maxMonths = 69;
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

let battleImages = {};
let monthTransitionProgress = 1;
let transitioningMonth = false;

let scrollBoxExpanded = false;
let scrollBoxTransitionProgress = 0;
let scrollBoxTransitioning = false;

let currentLanguage = 'en';

// Additional global variables for final summary
let showFinalSummary = false;
let resetBtnX, resetBtnY, resetBtnW, resetBtnH; // We'll use these globally

// Placeholder totals
let totalAlliedDeaths = 20000000; // 20 million
let totalAxisDeaths = 10000000;   // 10 million
let totalCivDeaths = 40000000;    // 40 million
let totalDeaths = 70000000;       // 70 million

// Variables for the go-back button in detail view
let goBackBtnX, goBackBtnY, goBackBtnW, goBackBtnH;

// Variables for dragging to scroll
let draggingScroll = false;
let lastMouseY = 0;

// ========= Variables for the leaderboard ==========
let leaderboardItems = []; 
let selectedLeaderboardBattle = null;

// =========== Momentum Scrolling ============
let scrollVelocity = 0;   // Store vertical scrolling velocity
let scrollFriction = 0.95; // Damping factor for momentum

// ============== Translations (Expanded) =============
// (Unchanged, included as-is)
const translations = {
  en: {
    monthLabel: 'Month: ',
    clickAndScroll: 'Drag to scroll through deaths',
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
    operationBarbarossa: 'Operation Barbarossa',
    stalingrad: 'Battle of Stalingrad',
    Liberation: 'Liberation of Europe',
    LiberationText: 'The Allies launched large-scale offensives, including the Normandy landing, to liberate Western Europe step by step from German occupation. This ultimately led to the fall of Berlin in 1945.',
    westernCampaign: 'Western Campaign',
    westernCampaignText: 'This period marked the rapid advance of German forces through Western Europe, overwhelming defenses and reshaping the strategic situation.',
    operationBarbarossa: 'Operation Barbarossa',
    operationBarbarossaText: 'The massive German invasion of the Soviet Union, codenamed Operation Barbarossa, would become a turning point in the war despite initial Axis successes.',
    stalingrad: 'Battle of Stalingrad',
    stalingradText: 'One of the deadliest and most brutal battles, the struggle for Stalingrad marked a decisive Soviet victory, halting the Axis advance.',
    goBack: 'Go Back',
    whyDeaths: "Why was it so deadly?",

    // Final Summary
    finalSummaryTitle: "Final Summary of WW2 Casualties",
    finalSummaryText: "Between 1939 and 1945, these battles and other brutalities accounted for a total of 70,000,000 deaths.",
    finalInstructionText: "Click to find out more",
    resetSlider: "Reset Slider",

    // NEW: Leaderboard translations
    leaderboardTitle: "Deadliest battles:",
    battleStalingrad: "Battle of Stalingrad",
    battleKursk: "Battle of Kursk",
    battleRzhev: "Battle of Rzhev",
  },
  nl: {
    monthLabel: 'Maand: ',
    clickAndScroll: 'Sleep om door de doden te bladeren',
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
    operationBarbarossa: 'Operatie Barbarossa',
    stalingrad: 'Slag om Stalingrad',
    Liberation: 'Bevrijding van Europa',
    LiberationText: 'De geallieerden startten grootschalige offensieven, waaronder de landing in Normandië, om West-Europa stap voor stap te bevrijden van de Duitse bezetting. Dit leidde uiteindelijk, met de val van Berlijn in 1945.',
    westernCampaign: 'Westelijke Campagne',
    westernCampaignText: 'Deze periode markeerde de snelle opmars van Duitse troepen door West-Europa, waarbij verdedigingen werden overweldigd en de strategische situatie werd herschikt.',
    operationBarbarossa: 'Operatie Barbarossa',
    operationBarbarossaText: 'De grootschalige Duitse invasie van de Sovjet-Unie, met de codenaam Operatie Barbarossa, zou ondanks aanvankelijke successen van de asmogendheden een keerpunt in de oorlog worden.',
    stalingrad: 'Slag om Stalingrad',
    stalingradText: 'Een van de dodelijkste en meest brute veldslagen, de strijd om Stalingrad markeerde een beslissende Sovjetoverwinning en stopte de opmars van de asmogendheden.',
    goBack: 'Terug',
    whyDeaths: "Waarom was het zo dodelijk?",

    // Final Summary
    finalSummaryTitle: "Eindsamenvatting van WO2 Slachtoffers",
    finalSummaryText: "Tussen 1939 en 1945 vielen er in Deze veldslagen en andere wreedheden in totaal 70.000.000 doden.",
    finalInstructionText: "Klik om meer te ontdekken",
    resetSlider: "Herstart Schuifbalk",

    // NEW: Leaderboard translations
    leaderboardTitle: "Dodelijkste veldslagen:",
    battleStalingrad: "Slag om Stalingrad",
    battleKursk: "Slag om Koersk",
    battleRzhev: "Slag om Rzhev",
  }
};

let flagEN, flagNL;

let transitionScreens = {
  8: {
    titleKey: 'westernCampaign',
    textKey: 'westernCampaignText',
    bgAlpha: 200
  },
  21: {
    titleKey: 'operationBarbarossa',
    textKey: 'operationBarbarossaText',
    bgAlpha: 200
  },
  35: {
    titleKey: 'stalingrad',
    textKey: 'stalingradText',
    bgAlpha: 200
  },
  57: {
    titleKey: 'Liberation',
    textKey: 'LiberationText',
    bgAlpha: 200
  }
};

let startYear = 1939;
let startMonth = 8;

let monthNames = {
  en: ["January","February","March","April","May","June","July","August","September","October","November","December"],
  nl: ["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December"]
};

// We'll need references to the actual data for these 3 big battles.
let stalingradBattle = null;
let kurskBattle = null;
let rzhevBattle = null;


// =======================================
// =============== Preload ===============
// =======================================
function preload() {
  europeMap = loadImage('europe-map.jpg');
  titleBanner = loadImage('title-banner.png');

  manIconBlue = loadImage('man-icon-blue.png');
  manIconRed = loadImage('man-icon-red.png');
  manIconGreen = loadImage('man-icon-green.png');

  // Example battle images
  battleImages['Battle of Abbeville'] = loadImage('battle-image-Abbeville.jpg');
  // If you have a specific image for Stalingrad, Kursk, or Rzhev, load them here:
  // battleImages['Battle of Stalingrad'] = loadImage('somePath.jpg');

  flagEN = loadImage('flag-en.png');
  flagNL = loadImage('flag-nl.png');
}


// =======================================
// ================ Setup ================
// =======================================
function setup() {
  let canvasWidth = europeMap.width;
  bannerHeight = (titleBanner.height / titleBanner.width) * canvasWidth;
  createCanvas(canvasWidth, bannerHeight + europeMap.height + 50);

  slider = createSlider(0, maxMonths, 0, 1); 
  slider.position(30, height - 60);
  slider.style('width', width - 50 + 'px');
  slider.class('customSlider');
  slider.input(updateMonth);

  glowLayer = createGraphics(width, height - 50 - bannerHeight);

  defineDataPoints();

  // Now that dataPoints is defined, pick the battles from index 69
  if (dataPoints[69]) {
    stalingradBattle = dataPoints[69].find(b => b.en.battleName === "Battle of Stalingrad");
    kurskBattle      = dataPoints[69].find(b => b.en.battleName === "Battle of Kursk");
    rzhevBattle      = dataPoints[69].find(b => b.en.battleName === "Battle of Rzhev");
  } else {
    console.warn("dataPoints[69] is undefined. Make sure your data covers index 69.");
  }

  console.log("DataPoints loaded:", dataPoints);
}

function findBattleByName(name) {
  for (let month of dataPoints) {
    for (let b of month) {
      if (b.en.battleName === name) {
        return b;
      }
    }
  }
  return null;
}


// =======================================
// ================ Draw =================
// =======================================
function draw() {
  background(220);

  // Decide if we show final summary screen
  if (slider.value() === maxMonths) {
    showFinalSummary = true;
  } else {
    showFinalSummary = false;
  }

  // Hide slider if in detail view, transitioning, OR final summary
  if (showDetail || transitioning || showFinalSummary) {
    slider.hide();
  } else {
    slider.show();
  }

  // If final summary is active, skip drawing the map, etc.
  if (showFinalSummary) {
    drawFinalSummary();
    return; // skip the rest
  }

  // Handle detail transition
  if (transitioning) {
    transitionProgress += 0.02;
    if (transitionProgress >= 1) {
      transitionProgress = 1;
      transitioning = false;
      showDetail = true;
    }
  }

  // Handle month transition fade logic
  if (transitioningMonth) {
    monthTransitionProgress += deltaTime / 500;
    if (monthTransitionProgress >= 1) {
      monthTransitionProgress = 1;
      transitioningMonth = false;
    }
  }

  // Zoom logic (if detail or transitioning to detail)
  let zoomLevel = transitioning || showDetail ? lerp(1, 2, transitionProgress) : 1;
  let zoomOffsetX = -100;
  let zoomX = transitioning || showDetail ? selectedBattle?.x - zoomOffsetX : width / 2;
  let zoomY = transitioning || showDetail ? selectedBattle?.y : (height - 50 - bannerHeight) / 2;

  // ================== Draw Map ====================
  push();
  translate(0, bannerHeight);
  push();
    translate(width / 2, (height - 50 - bannerHeight) / 2);
    scale(zoomLevel);
    translate(-zoomX, -zoomY);

    image(europeMap, 0, 0);

    // If not in detail, show points with glow
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

      // Draw small circles
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
    }
    else {
      // If in detail, highlight only selected battle
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

  // ============= Display Current Month =============
  let displayedDate;
  if (transitionScreens[currentMonth]) {
    displayedDate = getMonthYearString(previousMonth);
  } else {
    displayedDate = getMonthYearString(currentMonth);
  }

  if (!showDetail && !transitioning) {
    fill(200);
    rect(0, height - 100, width, 100);
    fill(0);
    textSize(32);
    textAlign(LEFT, CENTER);
    text(translations[currentLanguage].monthLabel + displayedDate, 10, height - 15);
  }

  // =========== If in detail mode, draw death screen
  if (showDetail || transitioning) {
    drawDeathScreen();
  }

  // =============== Draw Legend ====================
  drawLegend();

  // ============ Draw Banner at top ===============
  image(titleBanner, 0, 0, width, bannerHeight);

  // ============ Draw Language Flags ==============
  let flagSize = 60;
  image(flagEN, width - 90, 35, flagSize, flagSize);
  image(flagNL, width - 90, 115, flagSize, flagSize);

  // ========== Transition Screen if any ============ 
if (transitionScreens[currentMonth] && !showDetail) {
  let screenData = transitionScreens[currentMonth];
  
  // 1) Grab the translated title (e.g. translations.en.westernCampaign)
  //    store it in screenData.title (or just use it directly in drawTransitionScreen).
  if (screenData.titleKey && translations[currentLanguage][screenData.titleKey]) {
    screenData.title = translations[currentLanguage][screenData.titleKey];
  }

  // 2) Grab the translated text (e.g. translations.en.westernCampaignText)
  //    override the 'text' property in screenData with the correct translation.
  if (screenData.textKey && translations[currentLanguage][screenData.textKey]) {
    screenData.text = translations[currentLanguage][screenData.textKey];
  }

   drawTransitionScreen(currentMonth);
  }
}


// =======================================
// ============ Mouse Pressed ============
// =======================================
function mousePressed() {
  let flagSize = 60;
  let enX = width - 90;
  let enY = 35;
  let nlX = width - 90;
  let nlY = 115;

  // Check if clicked English flag
  if (mouseX >= enX && mouseX <= enX + flagSize &&
      mouseY >= enY && mouseY <= enY + flagSize) {
    currentLanguage = 'en';
    return;
  }

  // Check if clicked Dutch flag
  if (mouseX >= nlX && mouseX <= nlX + flagSize &&
      mouseY >= nlY && mouseY <= nlY + flagSize) {
    currentLanguage = 'nl';
    return;
  }

  // If final summary is showing, check for "Reset Slider" or leaderboard
  if (showFinalSummary) {
    // Check "Reset Slider"
    if (mouseX >= resetBtnX && mouseX <= resetBtnX + resetBtnW &&
        mouseY >= resetBtnY && mouseY <= resetBtnY + resetBtnH) {
      slider.value(0);
      showFinalSummary = false;
      selectedLeaderboardBattle = null;
      
      currentMonth = 0;
      previousMonth = 0;
      monthTransitionProgress = 1;
      transitioningMonth = false;
      return;
    }

    // Check leaderboard items
    for (let item of leaderboardItems) {
      if (
        mouseX >= item.x && mouseX <= item.x + item.w &&
        mouseY >= item.y && mouseY <= item.y + item.h
      ) {
        if (selectedLeaderboardBattle === item.battle) {
          selectedLeaderboardBattle = null;
        } else {
          selectedLeaderboardBattle = item.battle;
        }
        return;
      }
    }
  }

  // If in detail mode, check if we clicked "Go Back"
  let windowWidth = width * 0.30;
  let offsetX = transitioning ? lerp(width, width - windowWidth, transitionProgress) : width - windowWidth;

  if (showDetail && !transitioning) {
    let localMouseX = mouseX - offsetX;
    let localMouseY = mouseY - bannerHeight;

    // Check "Go Back"
    if (goBackBtnX && localMouseX >= goBackBtnX && localMouseX <= goBackBtnX + goBackBtnW &&
        localMouseY >= goBackBtnY && localMouseY <= goBackBtnY + goBackBtnH) {
      showDetail = false;
      selectedBattle = null;
      scrollPosition = 0;
      return;
    }

    // Scroll box click detection
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

    let mx = localMouseX;
    let my = localMouseY;

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

    if (mx >= boxX && mx <= boxX + boxWidth && my >= boxY && my <= boxY + boxHeight) {
      if (!scrollBoxExpanded) {
        scrollBoxExpanded = true;
        scrollBoxTransitioning = true;
        scrollBoxTransitionProgress = 0;
      } else {
        draggingScroll = true;
        lastMouseY = mouseY;
      }
    }
  }
  else if (!showDetail && !transitioning && mouseY > bannerHeight && mouseY < height - 50) {
    // Selecting a battle from the map
    let zoomLevel = transitioning || showDetail ? lerp(1, 2, transitionProgress) : 1;
    let zoomOffsetX = -100;
    let zoomX = transitioning || showDetail 
      ? (selectedBattle ? selectedBattle.x - zoomOffsetX : width/2) 
      : width / 2;
    let zoomY = transitioning || showDetail 
      ? (selectedBattle ? selectedBattle.y : (height - 50 - bannerHeight) / 2) 
      : (height - 50 - bannerHeight) / 2;

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

          // ------------------------------
          // 1) AUTO-COLLAPSE SCROLL BOX
          // ------------------------------
          scrollBoxExpanded = false;
          scrollBoxTransitioning = false; 
          scrollBoxTransitionProgress = 0;

          break;
        }
      }
    }
  }
}

function mouseDragged() {
  // -----------------------
  // 2) MOMENTUM SCROLLING
  // -----------------------
  if (showDetail && draggingScroll && !transitioning && scrollBoxExpanded) {
    let dy = mouseY - lastMouseY;
    // Store the "instant" velocity
    scrollVelocity = dy;
    // Move the scroll position
    scrollPosition -= scrollVelocity;
    lastMouseY = mouseY;
  }
}

function mouseReleased() {
  draggingScroll = false;
}


// =======================================
// =========== Slider Update =============
// =======================================
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


// =======================================
// ========== Draw Transition Screen =====
// =======================================
function drawTransitionScreen(monthIndex) {
  let screenData = transitionScreens[monthIndex];
  let transitionY = bannerHeight;
  let transitionH = 300;

  push();
  fill(50, screenData.bgAlpha);
  rect(0, transitionY, width, transitionH);

  fill(255);
  textSize(64);
  textAlign(CENTER, CENTER);

  let titleY = transitionY + transitionH / 2 - 50;
  text(screenData.title, width / 2, titleY);

  let boxWidth = width * 0.6;
  let boxHeight = 100;
  let boxX = (width - boxWidth) / 2;
  let boxY = transitionY + transitionH / 2;

  fill(255, 230);
  noStroke();
  rect(boxX, boxY, boxWidth, boxHeight, 10);

  fill(0);
  textSize(20);
  textAlign(LEFT, TOP);
  text(screenData.text, boxX + 20, boxY + 20, boxWidth - 40, boxHeight - 40);
  pop();
}


// =======================================
// =========== Drawing Glow ==============
// =======================================
function drawGlow(layer, x, y, radius, color, alpha) {
  let ctx = layer.drawingContext;

  let r = red(color);
  let g = green(color);
  let b = blue(color);

  let innerAlpha = alpha / 255;

  let gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
  let innerColor = `rgba(${r},${g},${b},${innerAlpha})`;
  let outerColor = `rgba(${r},${g},${b},0)`;

  gradient.addColorStop(0, innerColor);
  gradient.addColorStop(1, outerColor);

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, TWO_PI);
  ctx.fill();
}


// =======================================
// =========== Info Box (Detail) =========
// =======================================
function drawInfoBox(battle) {
  let infoBoxX = 20;
  let infoBoxY = 30;
  let infoBoxWidth = 650;
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
  text(battle[currentLanguage].battleName, x + labelWidth, y);
  y += lineHeight;

  textStyle(BOLD);
  text(translations[currentLanguage].location, x, y);
  labelWidth = textWidth(translations[currentLanguage].location);
  textStyle(NORMAL);
  text(battle[currentLanguage].location, x + labelWidth, y);
  y += lineHeight;

  textStyle(BOLD);
  text(translations[currentLanguage].date, x, y);
  labelWidth = textWidth(translations[currentLanguage].date);
  textStyle(NORMAL);
  text(battle[currentLanguage].date, x + labelWidth, y);
  y += lineHeight;

  textStyle(BOLD);
  text(translations[currentLanguage].winningTeam, x, y);
  labelWidth = textWidth(translations[currentLanguage].winningTeam);
  textStyle(NORMAL);
  text(battle[currentLanguage].winner, x + labelWidth, y);
  y += lineHeight;

  textStyle(BOLD);
  text(translations[currentLanguage].summary, x, y);
  y += lineHeight;
  textStyle(NORMAL);
  text(battle[currentLanguage].summary, x, y, infoBoxWidth - 20, infoBoxHeight - y - 10);

  stroke(200);
  noFill();
  rect(imageBoxX, imageBoxY, imageBoxWidth, imageBoxHeight);

  let img = battleImages[battle.en.battleName];
  if (img) {
    image(img, imageBoxX, imageBoxY, imageBoxWidth, imageBoxHeight);
  }

  goBackBtnW = imageBoxWidth;
  goBackBtnH = 80;
  goBackBtnX = imageBoxX;
  goBackBtnY = imageBoxY + imageBoxHeight + 20;

  fill(255, 0, 0, 200);
  rect(goBackBtnX, goBackBtnY, goBackBtnW, goBackBtnH, 10);
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(translations[currentLanguage].goBack, goBackBtnX + goBackBtnW / 2, goBackBtnY + goBackBtnH / 2);
}


// =======================================
// =========== Draw Death Screen =========
// =======================================
function drawDeathScreen() {
  let windowWidth = width * 0.35;
  let offsetX = transitioning 
    ? lerp(width, width - windowWidth, transitionProgress) 
    : width - windowWidth;

  push();
  translate(offsetX, bannerHeight);

  fill(50);
  noStroke();
  rect(0, 0, windowWidth, height);

  if (selectedBattle) {
    drawInfoBox(selectedBattle);
  }

  // Animate scroll box transitions
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

  // Draw the scrolling box
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

    // Clamp scrollPosition
    scrollPosition = constrain(scrollPosition, 0, totalContentHeight - windowHeight);

    // Determine which rows to draw
    let firstRow = floor(scrollPosition / iconSize);
    let lastRow = ceil((scrollPosition + windowHeight) / iconSize);

    let startX = (boxWidth - iconsPerRow * iconSize) / 2;
    let startY = 50;

    for (let row = firstRow; row < lastRow; row++) {
      for (let col = 0; col < iconsPerRow; col++) {
        let i = row * iconsPerRow + col;
        if (i >= totalDeaths) break;

        let img;
        if (i < selectedBattle.allied) {
          img = manIconBlue; 
        } else if (i < selectedBattle.allied + selectedBattle.axis) {
          img = manIconRed; 
        } else {
          img = manIconGreen;
        }

        let x = startX + col * iconSize;
        let y = startY + row * iconSize - scrollPosition;
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

    if (selectedBattle.totalDeaths > 5000) {
      stroke(255);
      strokeWeight(10);

      let percentages = [0.25, 0.5, 0.75];
      for (let p of percentages) {
        let markerY = startY + totalContentHeight * p - scrollPosition;
        if (markerY > 0 && markerY < boxHeight) {
          line(boxWidth - 70, markerY, boxWidth - 10, markerY);

          noStroke();
          fill(255);
          textSize(20);
          textAlign(RIGHT, BOTTOM);
          text(int(p * 100) + "%", boxWidth - 20, markerY - 20);
        }
      }
    }
  }
  ctx.restore();
  pop();

  // -------------------------------
  // 2) MOMENTUM SCROLLING (apply)
  // -------------------------------
  if (showDetail && scrollBoxExpanded && !draggingScroll) {
    // Apply friction
    scrollVelocity *= scrollFriction;
    // If velocity is very small, stop it
    if (abs(scrollVelocity) < 0.1) {
      scrollVelocity = 0;
    }
    // Move scroll content by velocity
    scrollPosition -= scrollVelocity;

    // Clamp again
    if (selectedBattle) {
      let totalContentHeight = selectedBattle.totalRows * selectedBattle.iconSize + 50;
      let windowHeight = (boxHeight - 100);
      let maxScroll = totalContentHeight - windowHeight;
      scrollPosition = constrain(scrollPosition, 0, maxScroll);
    }
  }

  pop(); // pop the translate for death screen
}


// =======================================
// =========== Draw Final Summary ========
// =======================================
function drawFinalSummary() {
  background(0, 180);

  fill(255);
  textAlign(CENTER, TOP);
  textSize(106);
  text(translations[currentLanguage].finalSummaryTitle, width / 2, 100);

  textSize(40);
  let summaryText = translations[currentLanguage].finalSummaryText;
  let textBoxWidth = width * 0.6;
  let textBoxX = (width - textBoxWidth) / 2;
  let textBoxY = 250;
  fill(255);
  text(summaryText, textBoxX, textBoxY, textBoxWidth, 200);

  let centerX = width / 2;
  let centerY = 700;
  let leaderboardX = centerX - 600; 
  let leaderboardY = centerY - 100; 

  fill(255);
  textSize(34);
  textAlign(LEFT, TOP);
  text(translations[currentLanguage].leaderboardTitle, leaderboardX, leaderboardY);

  leaderboardItems = []; 
  textSize(28);
  let lineSpacing = 60;
  let startListY = leaderboardY + 50; 

  function drawLeaderboardItem(label, bx, by, whichBattle) {
    fill(255);
    textAlign(LEFT, TOP);
    text(label, bx, by);
    let w = textWidth(label);
    let h = 50; 
    leaderboardItems.push({ x: bx, y: by, w, h, battle: whichBattle });
  }

  let stalingradLabel = "1. " + translations[currentLanguage].battleStalingrad;
  let kurskLabel      = "2. " + translations[currentLanguage].battleKursk;
  let rzhevLabel      = "3. " + translations[currentLanguage].battleRzhev;

  drawLeaderboardItem(stalingradLabel, leaderboardX, startListY, stalingradBattle);
  drawLeaderboardItem(kurskLabel, leaderboardX, startListY + lineSpacing, kurskBattle);
  drawLeaderboardItem(rzhevLabel, leaderboardX, startListY + lineSpacing*2, rzhevBattle);

  if (selectedLeaderboardBattle) {
    drawLeaderboardBattleInfo(selectedLeaderboardBattle, leaderboardX, startListY + lineSpacing * 3 + 20);
  }

  let radius = 300;
  if (totalDeaths === 0) {
    fill(255, 0, 0);
    text("No data to display", centerX, centerY);
    drawResetButton();
    return;
  }

  let angleAllies = TWO_PI * (totalAlliedDeaths / totalDeaths);
  let angleAxis   = TWO_PI * (totalAxisDeaths / totalDeaths);
  let angleCiv    = TWO_PI * (totalCivDeaths / totalDeaths);

  fill(0, 0, 230);
  arc(centerX + 200, centerY, radius*2, radius*2, 0, angleAllies);

  fill(190, 0, 0);
  arc(centerX + 200, centerY, radius*2, radius*2, angleAllies, angleAllies + angleAxis);

  fill(0, 100, 0);
  arc(centerX + 200, centerY, radius*2, radius*2, angleAllies + angleAxis, angleAllies + angleAxis + angleCiv);

  textSize(32);
  fill(255);
  textAlign(CENTER, CENTER);

  let alliesPercent = (totalAlliedDeaths / totalDeaths) * 100;
  let midAlliesAngle = angleAllies / 2;
  let alliesTextX = centerX + 200 + cos(midAlliesAngle) * (radius * 0.5);
  let alliesTextY = centerY + sin(midAlliesAngle) * (radius * 0.5);
  text(nf(alliesPercent, 1, 2) + "%", alliesTextX, alliesTextY);

  let axisPercent = (totalAxisDeaths / totalDeaths) * 100;
  let midAxisAngle = angleAllies + angleAxis / 2;
  let axisTextX = centerX + 200 + cos(midAxisAngle) * (radius * 0.5);
  let axisTextY = centerY + sin(midAxisAngle) * (radius * 0.5);
  text(nf(axisPercent, 1, 2) + "%", axisTextX, axisTextY);

  let civPercent = (totalCivDeaths / totalDeaths) * 100;
  let midCivAngle = (angleAllies + angleAxis) + angleCiv / 2;
  let civTextX = centerX + 200 + cos(midCivAngle) * (radius * 0.5);
  let civTextY = centerY + sin(midCivAngle) * (radius * 0.5);
  text(nf(civPercent, 1, 2) + "%", civTextX, civTextY);

  let legendSize = 30;
  let legendX = centerX + 600;
  let legendY = centerY - 80;

  fill(0, 0, 255);
  rect(legendX, legendY, legendSize, legendSize);
  fill(255);
  textAlign(LEFT, CENTER);
  textSize(24);
  text(translations[currentLanguage].allied, legendX + 40, legendY + legendSize / 2);

  fill(255, 0, 0);
  rect(legendX, legendY + 50, legendSize, legendSize);
  fill(255);
  text(translations[currentLanguage].axis, legendX + 40, legendY + 50 + legendSize / 2);

  fill(0, 255, 0);
  rect(legendX, legendY + 100, legendSize, legendSize);
  fill(255);
  text(translations[currentLanguage].civilians, legendX + 40, legendY + 100 + legendSize / 2);

  drawResetButton();

  textSize(20);
  let instructionText = translations[currentLanguage].finalInstructionText;
  let instructionBoxWidth = width * 0.6;
  let instructionBoxX = -80;
  let instructionBoxY = 760;
  fill(255);
  text(instructionText, instructionBoxX, instructionBoxY, instructionBoxWidth, 200);
}


// =======================================
// =========== Draw Reset Button =========
// =======================================
function drawResetButton() {
  resetBtnW = 230;
  resetBtnH = 50;
  resetBtnX = (width - resetBtnW) / 2;
  resetBtnY = height - 150;

  fill(255, 0, 0);
  rect(resetBtnX, resetBtnY, resetBtnW, resetBtnH, 10);

  fill(255);
  textSize(24);
  textAlign(CENTER, CENTER);
  text(translations[currentLanguage].resetSlider, resetBtnX + resetBtnW / 2, resetBtnY + resetBtnH / 2);
}


// =======================================
// ====== Leaderboard Battle Info ========
// =======================================
function drawLeaderboardBattleInfo(battle, boxX, boxY) {
  let w = 420;
  let h = 380;

  fill(255, 255, 255);
  noStroke();
  rect(boxX, boxY, w, h, 30);

  fill(0);
  textAlign(LEFT, TOP);
  textSize(20);

  let margin = 20;
  let x = boxX + margin;
  let y = boxY + margin;
  let lineH = 30;

  textStyle(BOLD);
  text(translations[currentLanguage].battleName, x, y);
  let labelW = textWidth(translations[currentLanguage].battleName);
  textStyle(NORMAL);
  text(battle[currentLanguage].battleName, x + labelW, y);
  y += lineH;

  textStyle(BOLD);
  text(translations[currentLanguage].date, x, y);
  labelW = textWidth(translations[currentLanguage].date);
  textStyle(NORMAL);
  text(battle[currentLanguage].date, x + labelW, y);
  y += lineH;

  textStyle(BOLD);
  text(translations[currentLanguage].whyDeaths, x, y);
  labelW = textWidth(translations[currentLanguage].whyDeaths);
  textStyle(NORMAL);
  text(battle[currentLanguage].summary, x, y + lineH, w - margin, h - (y - boxY) - margin*2);
}


// =======================================
// =========== Draw Legend Box ===========
// =======================================
function drawLegend() {
  let legendX = 20;
  let legendY = height - (showDetail ? 180 : 220);
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


// =======================================
// ======= Scroll Box Dimensions =========
// =======================================
function getScrollBoxDimensions() {
  return {
    smallBoxWidth: 400,
    smallBoxHeight: 500,
    smallBoxX: -1280,
    smallBoxY: 20,
    largeBoxWidth: 400,
    largeBoxHeight: 1200,
    largeBoxX: -1280,
    largeBoxY: 20,
  };
}


// =======================================
// =========== Define Data Points ========
// =======================================
function defineDataPoints() {
  // dataPoints is assumed to be a global array-of-arrays
  // Make sure it’s loaded or defined in your project.
  let minDeaths = Infinity;
  let maxDeaths = -Infinity;

  // Find min and max for glow
  for (let month of dataPoints) {
    for (let battle of month) {
      battle.deaths = battle.allied + battle.axis + battle.civilians;
      if (battle.deaths < minDeaths) minDeaths = battle.deaths;
      if (battle.deaths > maxDeaths) maxDeaths = battle.deaths;

      let winner = battle.en.winner.toLowerCase();
      if (winner === 'allied' || winner === 'allies') {
        battle.color = color(0, 0, 255); // Blue
      } else if (winner === 'axis') {
        battle.color = color(255, 0, 0); // Red
      } else {
        battle.color = color(0, 255, 0); // Green
      }
    }
  }

  let minRadius = 15;
  let maxRadius = 200;

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


// =======================================
// ====== Convert Month Index to String ==
// =======================================
function getMonthYearString(index) {
  let totalMonthsFromStart = index;
  let year = startYear + Math.floor((startMonth + totalMonthsFromStart) / 12);
  let month = (startMonth + totalMonthsFromStart) % 12;
  return monthNames[currentLanguage][month] + " " + year;
}
