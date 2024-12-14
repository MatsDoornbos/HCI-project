window.dataPoints = [];
for (let i = 0; i < 72; i++) {
  dataPoints.push([]);
}

dataPoints[0].push({
  x: 1005, 
  y: 825, 
  civilians: 7000,
  allied: 66000,
  axis: 14000,
  en: {
    location: 'Poland',
    date: '1 September 1939',
    winner: 'Axis',
    summary: 'World War II began with the German invasion of Poland. Germany attacked Poland using the Blitzkrieg tactic, a fast and coordinated assault. This surprise attack quickly broke through the Polish defense lines, allowing the Germans to capture large parts of Poland within a few weeks.',
    battleName: 'Invasion of Poland'
  },
  nl: {
    location: 'Polen',
    date: '1 September 1939',
    winner: 'Asmogendheden',
    summary: 'De Tweede Wereldoorlog begon met de Duitse invasie van Polen. Duitsland viel Polen aan met de Blitzkrieg-tactiek, een snelle en gecoördineerde aanval. Deze verrassingsaanval doorbrak snel de Poolse verdedigingslinies, waardoor de Duitsers binnen enkele weken grote delen van Polen konden veroveren.',
    battleName: 'Invasie van Polen'
  }
});

dataPoints[0].push({
  x: 1150,
  y: 875,
  civilians: 0,
  allied: 870,
  axis: 927,
  en: {
    location: 'Poland',
    date: '17 September 1939',
    winner: 'Axis',
    summary: 'The battle was a significant engagement in Poland, where Polish forces attempted to break through German lines to reach the Romanian Bridgehead. Despite initial successes, the Polish forces were overwhelmed by superior German reinforcements and forced to surrender after heavy fighting.',
    battleName: 'Battle of Tomaszów Lubelski'
  },
  nl: {
    location: 'Polen',
    date: '17 September 1939',
    winner: 'Asmogendheden',
    summary: 'De slag was een belangrijke confrontatie in Polen, waar Poolse troepen probeerden door Duitse linies te breken om de Roemeense Bruggenhoofd te bereiken. Ondanks aanvankelijke successen werden de Poolse troepen overweldigd door superieure Duitse versterkingen en gedwongen zich over te geven na zware gevechten.',
    battleName: 'Slag om Tomaszów Lubelski'
  }
});

dataPoints[2].push({
  x: 1270,
  y: 475,
  civilians: 0,
  allied: 650,
  axis: 4000,
  en: {
    location: 'Finland',
    date: 'November 1939',
    winner: 'Allied',
    summary: 'The battle of Salla was part of the Winter War between Finland and the Soviet Union, occurring near the Finnish town of Salla. Finnish forces successfully repelled Soviet advances. The extreme cold, often dropping below -30°C, with Finnish troops using the harsh winter conditions to their advantage.',
    battleName: 'Battle of Salla'
  },
  nl: {
    location: 'Finland',
    date: 'November 1939',
    winner: 'Geallieerden',
    summary: 'De slag om Salla was onderdeel van de Winteroorlog tussen Finland en de Sovjet-Unie, nabij de Finse stad Salla. Finse troepen slaagden erin Sovjetaanvallen succesvol af te weren. De extreme kou, die vaak onder -30°C daalde, werd door de Finse troepen gebruikt in hun voordeel.',
    battleName: 'Slag om Salla'
  }
});

dataPoints[3].push({
  x: 1295,
  y: 628,
  civilians: 0,
  allied: 1000,
  axis: 4000,
  en: {
    location: 'Finland',
    date: 'December 1939',
    winner: 'Allied',
    summary: 'The first phase of the Battle of Summa saw Finnish forces defending strong positions against intense Soviet attacks. Despite being outnumbered, the Finns used the terrain to their advantage, inflicting heavy casualties on the advancing Soviet troops.',
    battleName: 'Battle of Summa 1'
  },
  nl: {
    location: 'Finland',
    date: 'December 1939',
    winner: 'Geallieerden',
    summary: 'De eerste fase van de Slag om Summa zag Finse troepen sterke posities verdedigen tegen intense Sovjetaanvallen. Ondanks hun numerieke minderheid gebruikten de Finnen het terrein in hun voordeel, wat leidde tot zware verliezen onder de oprukkende Sovjettroepen.',
    battleName: 'Slag om Summa 1'
  }
});

dataPoints[4].push({
  x: 1280,
  y: 515,
  civilians: 0,
  allied: 2700,
  axis: 29000,
  en: {
    location: 'Finland',
    date: 'January 1940',
    winner: 'Allied',
    summary: 'The Battle of Suomussalmi saw Finnish forces effectively encircle and destroy a large Soviet division. Using superior tactics and knowledge of the terrain, the Finns inflicted heavy casualties on the Soviet forces, leading to a significant victory. It is the most remarkable Finnish successes in the Winter War.',
    battleName: 'Battle of Suomussalmi'
  },
  nl: {
    location: 'Finland',
    date: 'Januari 1940',
    winner: 'Geallieerden',
    summary: 'De Slag om Suomussalmi zag Finse troepen een grote Sovjetdivisie effectief omsingelen en vernietigen. Door superieure tactieken en terreinkennis wisten de Finnen zware verliezen toe te brengen aan de Sovjettroepen, wat leidde tot een significante overwinning. Het is een van de meest opmerkelijke Finse successen in de Winteroorlog.',
    battleName: 'Slag om Suomussalmi'
  }
});

dataPoints[4].push({
  x: 1295,
  y: 510,
  civilians: 0,
  allied: 310,
  axis: 8000,
  en: {
    location: 'Finland',
    date: 'January 1940',
    winner: 'Allied',
    summary: 'The Battle of Raate Road was a decisive Finnish victory during the Winter War, where Finnish forces ambushed and encircled a Soviet division. Using hit-and-run tactics and the harsh winter terrain, the Finns inflicted heavy losses, forcing the Soviets to retreat.',
    battleName: 'Battle of Raate Road'
  },
  nl: {
    location: 'Finland',
    date: 'Januari 1940',
    winner: 'Geallieerden',
    summary: 'De Slag om de Raateweg was een beslissende Finse overwinning tijdens de Winteroorlog, waar Finse troepen een Sovjetdivisie in een hinderlaag lokten en omsingelden. Met gebruik van hit-en-run tactieken en het zware winterterrein brachten de Finnen zware verliezen toe en dwongen de Sovjets zich terug te trekken.',
    battleName: 'Slag om de Raateweg'
  }
});

dataPoints[5].push({
  x: 1295,
  y: 628,
  civilians: 0,
  allied: 2000,
  axis: 2000,
  en: {
    location: 'Finland',
    date: 'February 1940',
    winner: 'Axis',
    summary: 'In the second phase of the Battle of Summa, Soviet forces launched a more concentrated assault, gradually breaking through Finnish defenses. Despite fierce resistance, the Finns were eventually forced to retreat as Soviet reinforcements and artillery overwhelmed their positions.',
    battleName: 'Battle of Summa 2'
  },
  nl: {
    location: 'Finland',
    date: 'Februari 1940',
    winner: 'Asmogendheden',
    summary: 'In de tweede fase van de Slag om Summa lanceerden Sovjettroepen een meer geconcentreerde aanval en doorbraken geleidelijk de Finse verdedigingslinies. Ondanks hevig verzet werden de Finnen uiteindelijk gedwongen zich terug te trekken toen Sovjetversterkingen en artillerie hun posities overweldigden.',
    battleName: 'Slag om Summa 2'
  }
});

dataPoints[6].push({
  x: 1338,
  y: 585,
  civilians: 0,
  allied: 1500,
  axis: 8000,
  en: {
    location: 'Finland',
    date: 'March 1940',
    winner: 'Axis',
    summary: 'The Battle of Kollaa was a key battle in the Winter War, where Finnish forces held strong defensive positions against repeated Soviet offensives. Despite being outnumbered, the Finns successfully repelled Soviet attacks, inflicting heavy casualties and maintaining control of the area.',
    battleName: 'Battle of Kollaa'
  },
  nl: {
    location: 'Finland',
    date: 'Maart 1940',
    winner: 'Asmogendheden',
    summary: 'De Slag om Kollaa was een belangrijke slag in de Winteroorlog, waar Finse troepen sterke verdedigingsposities innamen tegen herhaalde Sovjetoffensieven. Ondanks hun numerieke minderheid wisten de Finnen de Sovjetaanvallen succesvol af te slaan, zware verliezen toe te brengen en de controle over het gebied te behouden.',
    battleName: 'Slag om Kollaa'
  }
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
  en: {
    location: 'Denmark',
    date: 'April 1940',
    winner: 'Axis',
    summary: 'The invasion of Denmark saw German forces quickly occupy the country to secure a strategic position for their campaign in Norway. Despite heavy German air and naval superiority, Denmark surrendered with minimal resistance to avoid further destruction.',
    battleName: 'The invasion of Denmark'
  },
  nl: {
    location: 'Denemarken',
    date: 'April 1940',
    winner: 'Asmogendheden',
    summary: 'De invasie van Denemarken zag Duitse troepen het land snel bezetten om een strategische positie voor hun campagne in Noorwegen veilig te stellen. Ondanks zware Duitse lucht- en zeemacht gaf Denemarken met minimale weerstand over om verdere vernietiging te voorkomen.',
    battleName: 'De invasie van Denemarken'
  }
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
  en: {
    location: 'Norway',
    date: 'April 1940',
    winner: 'Axis',
    summary: 'The Invasion of Norway, also known as Operation Weserübung, involved German forces attacking multiple points along the Norwegian coast simultaneously. The Germans aimed to secure key ports and deny them to the Allies, leading to a swift occupation despite Norwegian resistance.',
    battleName: 'The invasion of Norway'
  },
  nl: {
    location: 'Noorwegen',
    date: 'April 1940',
    winner: 'Asmogendheden',
    summary: 'De invasie van Noorwegen, ook bekend als Operatie Weserübung, omvatte Duitse troepen die tegelijkertijd meerdere punten langs de Noorse kust aanvielen. De Duitsers probeerden belangrijke havens veilig te stellen en deze te ontzeggen aan de geallieerden, wat leidde tot een snelle bezetting ondanks Noors verzet.',
    battleName: 'De invasie van Noorwegen'
  }
});

// Additional points for the same battle
// South
dataPoints[7].push({
  x: 835,
  y: 688,
  civilians: 1700,
  allied: 4900,
  axis: 5300,
  en: {
    location: 'Norway',
    date: 'April 1940',
    winner: 'Axis',
    summary: 'The Invasion of Norway, also known as Operation Weserübung, involved German forces attacking multiple points along the Norwegian coast simultaneously. The Germans aimed to secure key ports and deny them to the Allies, leading to a swift occupation despite Norwegian resistance.',
    battleName: 'The invasion of Norway'
  },
  nl: {
    location: 'Noorwegen',
    date: 'April 1940',
    winner: 'Asmogendheden',
    summary: 'De invasie van Noorwegen, ook bekend als Operatie Weserübung, omvatte Duitse troepen die tegelijkertijd meerdere punten langs de Noorse kust aanvielen. De Duitsers probeerden belangrijke havens veilig te stellen en deze te ontzeggen aan de geallieerden, wat leidde tot een snelle bezetting ondanks Noors verzet.',
    battleName: 'De invasie van Noorwegen'
  }
});

// North
dataPoints[7].push({
  x: 1000,
  y: 455,
  civilians: 1700,
  allied: 4900,
  axis: 5300,
  en: {
    location: 'Norway',
    date: 'April 1940',
    winner: 'Axis',
    summary: 'The Invasion of Norway, also known as Operation Weserübung, involved German forces attacking multiple points along the Norwegian coast simultaneously. The Germans aimed to secure key ports and deny them to the Allies, leading to a swift occupation despite Norwegian resistance.',
    battleName: 'The invasion of Norway'
  },
  nl: {
    location: 'Noorwegen',
    date: 'April 1940',
    winner: 'Asmogendheden',
    summary: 'De invasie van Noorwegen, ook bekend als Operatie Weserübung, omvatte Duitse troepen die tegelijkertijd meerdere punten langs de Noorse kust aanvielen. De Duitsers probeerden belangrijke havens veilig te stellen en deze te ontzeggen aan de geallieerden, wat leidde tot een snelle bezetting ondanks Noors verzet.',
    battleName: 'De invasie van Noorwegen'
  }
});

// West
dataPoints[7].push({
    x: 810,
    y: 610,
    civilians: 1700,
    allied: 4900,
    axis: 5300,
    en: {
      location: 'Norway',
      date: 'April 1940',
      winner: 'Axis',
      summary: 'The Invasion of Norway, also known as Operation Weserübung, involved German forces attacking multiple points along the Norwegian coast simultaneously. The Germans aimed to secure key ports and deny them to the Allies, leading to a swift occupation despite Norwegian resistance.',
      battleName: 'The invasion of Norway'
    },
    nl: {
      location: 'Noorwegen',
      date: 'April 1940',
      winner: 'Asmogendheden',
      summary: 'De invasie van Noorwegen, ook bekend als Operatie Weserübung, omvatte Duitse troepen die tegelijkertijd meerdere punten langs de Noorse kust aanvielen. De Duitsers probeerden belangrijke havens veilig te stellen en deze te ontzeggen aan de geallieerden, wat leidde tot een snelle bezetting ondanks Noors verzet.',
      battleName: 'De invasie van Noorwegen'
    }
  });
  
  // Battle of Sedan
  dataPoints[8].push({
    x: 795,
    y: 900,
    civilians: 2000,
    allied: 65000,
    axis: 10000,
    en: {
      location: 'Sedan, France',
      date: '12-15 May 1940',
      winner: 'Axis',
      summary: 'The Battle of Sedan was a pivotal conflict where German forces used blitzkrieg tactics to break through the French defenses along the Meuse River. The rapid advance of German tanks and infantry led to the encirclement of French forces, contributing to the swift collapse of France.',
      battleName: 'Battle of Sedan'
    },
    nl: {
      location: 'Sedan, Frankrijk',
      date: '12-15 mei 1940',
      winner: 'Asmogendheden',
      summary: 'De Slag om Sedan was een cruciale confrontatie waarin Duitse troepen blitzkrieg-tactieken gebruikten om door de Franse verdediging langs de Maas te breken. De snelle opmars van Duitse tanks en infanterie leidde tot de omsingeling van Franse troepen, wat bijdroeg aan de snelle val van Frankrijk.',
      battleName: 'Slag om Sedan'
    }
  });
  
  // Battle of Arras
  dataPoints[8].push({
    x: 757,
    y: 890,
    civilians: 1000,
    allied: 30000,
    axis: 3000,
    en: {
      location: 'Arras, France',
      date: '21 May 1940',
      winner: 'Allies',
      summary: 'The Battle of Arras was a counterattack by British and French forces aimed at halting the German advance. Despite initial successes, including the use of tanks, the attack ultimately failed as German forces quickly reinforced their positions, allowing them to continue their advance.',
      battleName: 'Battle of Arras'
    },
    nl: {
      location: 'Arras, Frankrijk',
      date: '21 mei 1940',
      winner: 'Geallieerden',
      summary: 'De Slag om Arras was een tegenaanval van Britse en Franse troepen om de Duitse opmars te stoppen. Ondanks aanvankelijke successen, waaronder het gebruik van tanks, mislukte de aanval uiteindelijk omdat Duitse troepen hun posities snel versterkten, waardoor ze hun opmars konden voortzetten.',
      battleName: 'Slag om Arras'
    }
  });

  // Battle of Belgium
dataPoints[8].push({
    x: 780,
    y: 870,
    civilians: 4000,
    allied: 85000,
    axis: 10000,
    en: {
      location: 'Belgium',
      date: '10–28 May 1940',
      winner: 'Axis',
      summary: 'The invasion of Belgium saw German forces launch a rapid attack through the Ardennes, bypassing the heavily fortified Maginot Line. Belgian and Allied forces were quickly overwhelmed, and the country was occupied, facilitating the German advance into France.',
      battleName: 'The invasion of Belgium'
    },
    nl: {
      location: 'België',
      date: '10–28 mei 1940',
      winner: 'Asmogendheden',
      summary: 'De invasie van België zag Duitse troepen een snelle aanval door de Ardennen uitvoeren, waarbij de zwaar versterkte Maginotlinie werd omzeild. Belgische en geallieerde troepen werden snel overweldigd, en het land werd bezet, wat de Duitse opmars naar Frankrijk vergemakkelijkte.',
      battleName: 'De invasie van België'
    }
  });
  
  // Battle of the Netherlands
  dataPoints[8].push({
    x: 815,
    y: 836,
    civilians: 10000,
    allied: 50000,
    axis: 7000,
    en: {
      location: 'Netherlands',
      date: '10–14 May 1940',
      winner: 'Axis',
      summary: 'The invasion of the Netherlands involved a swift German attack using airborne troops to capture key bridges and airfields. Despite fierce resistance, the Netherlands surrendered after the devastating bombing of Rotterdam, allowing Germany to continue its advance into Western Europe.',
      battleName: 'Battle of the Netherlands'
    },
    nl: {
      location: 'Nederland',
      date: '10–14 mei 1940',
      winner: 'Asmogendheden',
      summary: 'De invasie van Nederland omvatte een snelle Duitse aanval met luchtlandingstroepen om strategische bruggen en vliegvelden te veroveren. Ondanks hevig verzet capituleerde Nederland na het verwoestende bombardement op Rotterdam, waardoor Duitsland zijn opmars in West-Europa kon voortzetten.',
      battleName: 'Slag om Nederland'
    }
  });
  
  // Battle of Dunkirk
  dataPoints[8].push({
    x: 736,
    y: 872,
    civilians: 1000,
    allied: 80000,
    axis: 6000,
    en: {
      location: 'Dunkirk, France',
      date: '26 May – 4 June 1940',
      winner: 'Axis',
      summary: 'The Battle of Dunkirk was a critical engagement where Allied forces were surrounded by advancing German troops. Despite heavy attacks, the successful evacuation of over 300,000 soldiers across the English Channel, known as the "Miracle of Dunkirk," preserved much of the Allied army.',
      battleName: 'Battle of Dunkirk'
    },
    nl: {
      location: 'Duinkerke, Frankrijk',
      date: '26 mei – 4 juni 1940',
      winner: 'Asmogendheden',
      summary: 'De Slag om Duinkerke was een cruciale confrontatie waarin geallieerde troepen omsingeld werden door oprukkende Duitse troepen. Ondanks zware aanvallen zorgde de succesvolle evacuatie van meer dan 300.000 soldaten over het Kanaal, bekend als het \"Wonder van Duinkerke,\" voor het behoud van een groot deel van het geallieerde leger.',
      battleName: 'Slag om Duinkerke'
    }
  });
  
  // Battle of Lille
  dataPoints[8].push({
    x: 764,
    y: 885,
    civilians: 500,
    allied: 35000,
    axis: 3000,
    en: {
      location: 'Lille, France',
      date: '28–31 May 1940',
      winner: 'Axis',
      summary: 'The Battle of Lille saw French forces valiantly defend against encircling German troops to delay their advance. This allowed a significant number of Allied forces to retreat toward Dunkirk, but the French defenders were ultimately forced to surrender after intense fighting.',
      battleName: 'Battle of Lille'
    },
    nl: {
      location: 'Lille, Frankrijk',
      date: '28–31 mei 1940',
      winner: 'Asmogendheden',
      summary: 'De Slag om Lille zag Franse troepen dapper verdedigen tegen omsingelende Duitse troepen om hun opmars te vertragen. Dit stelde een aanzienlijk aantal geallieerde troepen in staat zich terug te trekken richting Duinkerke, maar de Franse verdedigers werden uiteindelijk gedwongen zich over te geven na hevige gevechten.',
      battleName: 'Slag om Lille'
    }
  });
  
  // Battle of Calais
  dataPoints[8].push({
    x: 727,
    y: 882,
    civilians: 500,
    allied: 10000,
    axis: 1000,
    en: {
      location: 'Calais, France',
      date: '22–26 May 1940',
      winner: 'Axis',
      summary: 'The Battle of Calais involved a desperate Allied defense to hold the port against advancing German forces. Although the defenders were eventually overwhelmed, their resistance delayed the German advance, aiding the evacuation of Allied troops from Dunkirk.',
      battleName: 'Battle of Calais'
    },
    nl: {
      location: 'Calais, Frankrijk',
      date: '22–26 mei 1940',
      winner: 'Asmogendheden',
      summary: 'De Slag om Calais betrof een wanhopige geallieerde verdediging om de haven te behouden tegen oprukkende Duitse troepen. Hoewel de verdedigers uiteindelijk werden overweldigd, vertraagde hun verzet de Duitse opmars, wat de evacuatie van geallieerde troepen uit Duinkerke ondersteunde.',
      battleName: 'Slag om Calais'
    }
  });
  
  // Battle of Abbeville
dataPoints[8].push({
    x: 727,
    y: 905,
    civilians: 500,
    allied: 15000,
    axis: 2000,
    en: {
      location: 'Abbeville, France',
      date: '27 May – 4 June 1940',
      winner: 'Allies',
      summary: 'The Battle of Abbeville was a fierce Allied counterattack aimed at breaking German control over the Somme bridges. Despite initial successes, the Allies were unable to dislodge the Germans, who maintained their strategic position and continued their advance into France.',
      battleName: 'Battle of Abbeville'
    },
    nl: {
      location: 'Abbeville, Frankrijk',
      date: '27 mei – 4 juni 1940',
      winner: 'Geallieerden',
      summary: 'De Slag om Abbeville was een hevige geallieerde tegenaanval gericht op het doorbreken van de Duitse controle over de bruggen bij de Somme. Ondanks aanvankelijke successen konden de geallieerden de Duitsers niet verdrijven, die hun strategische positie behielden en hun opmars in Frankrijk voortzetten.',
      battleName: 'Slag om Abbeville'
    }
  });
  
  // Battle of Le Havre
  dataPoints[9].push({
    x: 705,
    y: 907,
    civilians: 500,
    allied: 5000,
    axis: 1000,
    en: {
      location: 'Le Havre, France',
      date: '10–12 June 1940',
      winner: 'Axis',
      summary: 'The Battle of Le Havre saw German forces capturing the port city of Le Havre from Allied defenders. The port’s strategic importance was crucial for German logistics during their campaign in France.',
      battleName: 'Battle of Le Havre'
    },
    nl: {
      location: 'Le Havre, Frankrijk',
      date: '10–12 juni 1940',
      winner: 'Asmogendheden',
      summary: 'De Slag om Le Havre zag Duitse troepen de havenstad Le Havre innemen van geallieerde verdedigers. Het strategische belang van de haven was cruciaal voor de Duitse logistiek tijdens hun campagne in Frankrijk.',
      battleName: 'Slag om Le Havre'
    }
  });
  
    // Battle of England (July - october 1940)

  // Battle of the Channel
  dataPoints[10].push({
    x: 725,
    y: 870,
    civilians: 0,
    allied: 250,
    axis: 600,
    en: {
      location: 'The Channel',
      date: '10 July – 12 August 1940',
      winner: 'Axis',
      summary: 'The Battle of the Channel marked the beginning of the air war against England. Germany aimed to weaken British shipping and ports, leading to intense air battles as a prelude to the broader Battle of Britain.',
      battleName: 'Battle of the Channel'
    },
    nl: {
      location: 'Het Kanaal',
      date: '10 juli – 12 augustus 1940',
      winner: 'Asmogendheden',
      summary: 'De Slag om het Kanaal markeerde het begin van de luchtoorlog tegen Engeland. Duitsland had als doel de Britse scheepvaart en havens te verzwakken, wat leidde tot intense luchtgevechten als opmaat voor de bredere Slag om Engeland.',
      battleName: 'Slag om het Kanaal'
    }
  });

  dataPoints[11].push({
    x: 725,
    y: 870,
    civilians: 0, // totaal 43000, dit aantal moet worden onderverdeeld over alle punten van de Slag om Engeland
    allied: 250, // totaal 1542
    axis: 600, // totaal 3510
    en: {
      location: 'The Channel',
      date: '10 July - 12 August 1940',
      winner: 'Axis', // moet voor alles nog worden uitgezocht
      summary: 'The Battle of the Channel marked the beginning of the air war against England. Germany aimed to weaken British shipping and ports, leading to intense air battles as a prelude to the broader Battle of Britain.',
      battleName: 'Battle of the Channel'
    },
    nl: {
      location: 'Het Kanaal',
      date: '10 juli - 12 augustus 1940',
      winner: 'Asmogendheden', // moet voor alles nog worden uitgezocht
      summary: 'De Slag om het Kanaal markeerde het begin van de luchtoorlog tegen Engeland. Duitsland wilde de Britse scheepvaart en havens verzwakken, wat leidde tot intense luchtgevechten als opmaat voor de bredere Slag om Engeland.',
      battleName: 'Slag om het Kanaal'
    }
  });  
  
  // Operation Eagle: Plymouth
  dataPoints[11].push({
    x: 630,
    y: 875,
    civilians: 1400,
    allied: 120,
    axis: 580,
    en: {
      location: 'Plymouth, England',
      date: '13–18 August 1940',
      winner: 'Axis',
      summary: 'Operation Eagle’s airstrikes targeted Plymouth, a key British naval base, aiming to cripple naval and industrial capabilities. Intense German bombing caused significant destruction and civilian casualties but failed to weaken Britain’s resolve.',
      battleName: 'Operation Eagle Plymouth'
    },
    nl: {
      location: 'Plymouth, Engeland',
      date: '13–18 augustus 1940',
      winner: 'Asmogendheden',
      summary: 'De luchtaanvallen van Operatie Adelaar richtten zich op Plymouth, een belangrijke Britse marinebasis, met als doel de marine- en industriële capaciteiten te verlammen. Intense Duitse bombardementen veroorzaakten aanzienlijke vernietiging en burgerlijke verliezen, maar faalden in het verzwakken van het Britse doorzettingsvermogen.',
      battleName: 'Operatie Adelaar Plymouth'
    }
  });
  
  // Operation Eagle: Southampton
  dataPoints[11].push({
    x: 670,
    y: 865,
    civilians: 1500,
    allied: 150,
    axis: 600,
    en: {
      location: 'Southampton, England',
      date: '13–18 August 1940',
      winner: 'Axis',
      summary: 'During Operation Eagle, Southampton was heavily bombed by the Luftwaffe as part of Germany’s effort to destroy British infrastructure and morale. The attacks caused significant civilian casualties and extensive damage.',
      battleName: 'Operation Eagle Southampton'
    },
    nl: {
      location: 'Southampton, Engeland',
      date: '13–18 augustus 1940',
      winner: 'Asmogendheden',
      summary: 'Tijdens Operatie Adelaar werd Southampton zwaar gebombardeerd door de Luftwaffe als onderdeel van Duitsland’s poging om de Britse infrastructuur en moraal te vernietigen. De aanvallen veroorzaakten aanzienlijke burgerlijke verliezen en uitgebreide schade.',
      battleName: 'Operatie Adelaar Southampton'
    }
  });
  

  // Operation Eagle: Kent
dataPoints[11].push({
    x: 715,
    y: 865,
    civilians: 2000,
    allied: 250,
    axis: 700,
    en: {
      location: 'Kent, England',
      date: '13–18 August 1940',
      winner: 'Axis',
      summary: 'During World War II, airfields in Kent were heavily bombed by the German Luftwaffe. These air raids targeted strategic sites, including RAF Manston and RAF Lympne, in support of the air war against Great Britain.',
      battleName: 'Operation Eagle Kent'
    },
    nl: {
      location: 'Kent, Engeland',
      date: '13–18 augustus 1940',
      winner: 'Asmogendheden',
      summary: 'Tijdens de Tweede Wereldoorlog werden vliegvelden in Kent zwaar gebombardeerd door de Duitse Luftwaffe. Deze luchtaanvallen richtten zich op strategische locaties, waaronder RAF Manston en RAF Lympne, ter ondersteuning van de luchtoorlog tegen Groot-Brittannië.',
      battleName: 'Operatie Adelaar Kent'
    }
  });
  
  // Bombing of London: August
  dataPoints[11].push({
    x: 688,
    y: 850,
    civilians: 3000,
    allied: 200,
    axis: 150,
    en: {
      location: 'London, England',
      date: '24 August – 30 September 1940',
      winner: 'Axis',
      summary: 'In 1940, London was heavily bombed by the German Luftwaffe, with targets including industrial areas, airfields, and military installations. These attacks, part of the Blitz, caused significant damage and civilian casualties as the city prepared for further raids.',
      battleName: 'Battle of London'
    },
    nl: {
      location: 'Londen, Engeland',
      date: '24 augustus – 30 september 1940',
      winner: 'Asmogendheden',
      summary: 'In 1940 werd Londen zwaar gebombardeerd door de Duitse Luftwaffe, met doelen zoals industriële gebieden, vliegvelden en militaire installaties. Deze aanvallen, onderdeel van de Blitz, veroorzaakten aanzienlijke schade en burgerlijke verliezen terwijl de stad zich voorbereidde op verdere aanvallen.',
      battleName: 'Slag om Londen'
    }
  });
  
  // Bombing of London: September
  dataPoints[12].push({
    x: 688,
    y: 850,
    civilians: 3000,
    allied: 200,
    axis: 150,
    en: {
      location: 'London, England',
      date: '24 August – 30 September 1940',
      winner: 'Axis',
      summary: 'In 1940, London was heavily bombed by the German Luftwaffe, with targets including industrial areas, airfields, and military installations. These attacks, part of the Blitz, caused significant damage and civilian casualties as the city prepared for further raids.',
      battleName: 'Battle of London'
    },
    nl: {
      location: 'Londen, Engeland',
      date: '24 augustus – 30 september 1940',
      winner: 'Asmogendheden',
      summary: 'In 1940 werd Londen zwaar gebombardeerd door de Duitse Luftwaffe, met doelen zoals industriële gebieden, vliegvelden en militaire installaties. Deze aanvallen, onderdeel van de Blitz, veroorzaakten aanzienlijke schade en burgerlijke verliezen terwijl de stad zich voorbereidde op verdere aanvallen.',
      battleName: 'Slag om Londen'
    }
  });
  
  // Italian Invasion of Greece: October
  dataPoints[13].push({
    x: 1120,
    y: 1140,
    civilians: 15000,
    allied: 9000,
    axis: 12000,
    en: {
      location: 'Greece',
      date: '28 October 1940 – 23 April 1941',
      winner: 'Axis',
      summary: 'The Italian invasion of Greece, launched on 28 October 1940, aimed for a swift conquest but met fierce Greek resistance. The Greeks counterattacked, pushing Italian forces back into Albania. After multiple failed offensives, Germany intervened in April 1941, launching a combined invasion through Bulgaria.',
      battleName: 'The invasion of Greece'
    },
    nl: {
      location: 'Griekenland',
      date: '28 oktober 1940 – 23 april 1941',
      winner: 'Asmogendheden',
      summary: 'De Italiaanse invasie van Griekenland, gelanceerd op 28 oktober 1940, was gericht op een snelle verovering maar stuitte op hevig Grieks verzet. De Grieken sloegen terug en duwden Italiaanse troepen terug naar Albanië. Na meerdere mislukte offensieven greep Duitsland in april 1941 in en startte een gecombineerde invasie via Bulgarije.',
      battleName: 'De invasie van Griekenland'
    }
  });

  // Italian invasion of Greece November
dataPoints[14].push({
    x: 1120,
    y: 1140,
    civilians: 15000,
    allied: 9000,
    axis: 12000,
    en: {
      location: 'Greece',
      date: '28 October 1940 - 23 April 1941',
      winner: 'Axis',
      summary: 'The Italian invasion of Greece, launched on 28 October 1940, aimed for a swift conquest but met fierce Greek resistance. The Greeks counterattacked, pushing Italian forces back into Albania. After multiple failed offensives, Germany intervened in April 1941, launching a combined invasion through Bulgaria.',
      battleName: 'The invasion of Greece'
    },
    nl: {
      location: 'Griekenland',
      date: '28 oktober 1940 - 23 april 1941',
      winner: 'Asmogendheden',
      summary: 'De Italiaanse invasie van Griekenland, gelanceerd op 28 oktober 1940, was gericht op een snelle verovering maar stuitte op hevig Grieks verzet. De Grieken sloegen terug en duwden Italiaanse troepen terug naar Albanië. Na meerdere mislukte offensieven greep Duitsland in april 1941 in en lanceerde een gecombineerde invasie via Bulgarije.',
      battleName: 'De invasie van Griekenland'
    }
  });
  
  // Italian invasion of Greece December
  dataPoints[15].push({
    x: 1120,
    y: 1140,
    civilians: 15000,
    allied: 9000,
    axis: 12000,
    en: {
      location: 'Greece',
      date: '28 October 1940 - 23 April 1941',
      winner: 'Axis',
      summary: 'The Italian invasion of Greece, launched on 28 October 1940, aimed for a swift conquest but met fierce Greek resistance. The Greeks counterattacked, pushing Italian forces back into Albania. After multiple failed offensives, Germany intervened in April 1941, launching a combined invasion through Bulgaria.',
      battleName: 'The invasion of Greece'
    },
    nl: {
      location: 'Griekenland',
      date: '28 oktober 1940 - 23 april 1941',
      winner: 'Asmogendheden',
      summary: 'De Italiaanse invasie van Griekenland, gelanceerd op 28 oktober 1940, was gericht op een snelle verovering maar stuitte op hevig Grieks verzet. De Grieken sloegen terug en duwden Italiaanse troepen terug naar Albanië. Na meerdere mislukte offensieven greep Duitsland in april 1941 in en lanceerde een gecombineerde invasie via Bulgarije.',
      battleName: 'De invasie van Griekenland'
    }
  });
  
  // Italian invasion of Greece January
  dataPoints[16].push({
    x: 1120,
    y: 1140,
    civilians: 15000,
    allied: 9000,
    axis: 12000,
    en: {
      location: 'Greece',
      date: '28 October 1940 - 23 April 1941',
      winner: 'Axis',
      summary: 'The Italian invasion of Greece, launched on 28 October 1940, aimed for a swift conquest but met fierce Greek resistance. The Greeks counterattacked, pushing Italian forces back into Albania. After multiple failed offensives, Germany intervened in April 1941, launching a combined invasion through Bulgaria.',
      battleName: 'The invasion of Greece'
    },
    nl: {
      location: 'Griekenland',
      date: '28 oktober 1940 - 23 april 1941',
      winner: 'Asmogendheden',
      summary: 'De Italiaanse invasie van Griekenland, gelanceerd op 28 oktober 1940, was gericht op een snelle verovering maar stuitte op hevig Grieks verzet. De Grieken sloegen terug en duwden Italiaanse troepen terug naar Albanië. Na meerdere mislukte offensieven greep Duitsland in april 1941 in en lanceerde een gecombineerde invasie via Bulgarije.',
      battleName: 'De invasie van Griekenland'
    }
  });
  
  // Italian invasion of Greece February
  dataPoints[17].push({
    x: 1120,
    y: 1140,
    civilians: 15000,
    allied: 9000,
    axis: 12000,
    en: {
      location: 'Greece',
      date: '28 October 1940 - 23 April 1941',
      winner: 'Axis',
      summary: 'The Italian invasion of Greece, launched on 28 October 1940, aimed for a swift conquest but met fierce Greek resistance. The Greeks counterattacked, pushing Italian forces back into Albania. After multiple failed offensives, Germany intervened in April 1941, launching a combined invasion through Bulgaria.',
      battleName: 'The invasion of Greece'
    },
    nl: {
      location: 'Griekenland',
      date: '28 oktober 1940 - 23 april 1941',
      winner: 'Asmogendheden',
      summary: 'De Italiaanse invasie van Griekenland, gelanceerd op 28 oktober 1940, was gericht op een snelle verovering maar stuitte op hevig Grieks verzet. De Grieken sloegen terug en duwden Italiaanse troepen terug naar Albanië. Na meerdere mislukte offensieven greep Duitsland in april 1941 in en lanceerde een gecombineerde invasie via Bulgarije.',
      battleName: 'De invasie van Griekenland'
    }
  });
  
  // Italian invasion of Greece March
  dataPoints[18].push({
    x: 1120,
    y: 1140,
    civilians: 15000,
    allied: 9000,
    axis: 12000,
    en: {
      location: 'Greece',
      date: '28 October 1940 - 23 April 1941',
      winner: 'Axis',
      summary: 'The Italian invasion of Greece, launched on 28 October 1940, aimed for a swift conquest but met fierce Greek resistance. The Greeks counterattacked, pushing Italian forces back into Albania. After multiple failed offensives, Germany intervened in April 1941, launching a combined invasion through Bulgaria.',
      battleName: 'The invasion of Greece'
    },
    nl: {
      location: 'Griekenland',
      date: '28 oktober 1940 - 23 april 1941',
      winner: 'Asmogendheden',
      summary: 'De Italiaanse invasie van Griekenland, gelanceerd op 28 oktober 1940, was gericht op een snelle verovering maar stuitte op hevig Grieks verzet. De Grieken sloegen terug en duwden Italiaanse troepen terug naar Albanië. Na meerdere mislukte offensieven greep Duitsland in april 1941 in en lanceerde een gecombineerde invasie via Bulgarije.',
      battleName: 'De invasie van Griekenland'
    }
  });
  
  // Italian invasion of Greece April
  dataPoints[19].push({
    x: 1120,
    y: 1140,
    civilians: 15000,
    allied: 9000,
    axis: 12000,
    en: {
      location: 'Greece',
      date: '28 October 1940 - 23 April 1941',
      winner: 'Axis',
      summary: 'The Italian invasion of Greece, launched on 28 October 1940, aimed for a swift conquest but met fierce Greek resistance. The Greeks counterattacked, pushing Italian forces back into Albania. After multiple failed offensives, Germany intervened in April 1941, launching a combined invasion through Bulgaria.',
      battleName: 'The invasion of Greece'
    },
    nl: {
      location: 'Griekenland',
      date: '28 oktober 1940 - 23 april 1941',
      winner: 'Asmogendheden',
      summary: 'De Italiaanse invasie van Griekenland, gelanceerd op 28 oktober 1940, was gericht op een snelle verovering maar stuitte op hevig Grieks verzet. De Grieken sloegen terug en duwden Italiaanse troepen terug naar Albanië. Na meerdere mislukte offensieven greep Duitsland in april 1941 in en lanceerde een gecombineerde invasie via Bulgarije.',
      battleName: 'De invasie van Griekenland'
    }
  });  
  
  // Invasion of Yugoslavia april
  dataPoints[19].push({
    x: 995,
    y: 995,
    civilians: 15000,
    allied: 60000,
    axis: 12000,
    en: {
      location: 'Yugoslavia',
      date: '6 April 1941 – 17 April 1941',
      winner: 'Axis',
      summary: 'Germany, Italy, and Hungary invaded Yugoslavia after a coup removed the pro-Axis government. The campaign ended with the occupation and division of Yugoslavia among the Axis powers.',
      battleName: 'The invasion of Yugoslavia'
    },
    nl: {
      location: 'Joegoslavië',
      date: '6 april 1941 – 17 april 1941',
      winner: 'Asmogendheden',
      summary: 'Duitsland, Italië en Hongarije vielen Joegoslavië binnen na een staatsgreep die de pro-Asmogendheden-regering omverwierp. De campagne eindigde met de bezetting en verdeling van Joegoslavië onder de Asmogendheden.',
      battleName: 'De invasie van Joegoslavië'
    }
  });
  
  // Battle of Crete may
  dataPoints[20].push({
    x: 1200,
    y: 1250,
    civilians: 15000,
    allied: 15000,
    axis: 6000,
    en: {
      location: 'Crete, Greece',
      date: '20 May 1941 – 1 June 1941',
      winner: 'Axis',
      summary: 'Germany launched the first large-scale airborne invasion in history. Despite fierce resistance from British, Greek, and Cretan forces, the Germans captured the island after heavy casualties.',
      battleName: 'Battle of Crete'
    },
    nl: {
      location: 'Kreta, Griekenland',
      date: '20 mei 1941 – 1 juni 1941',
      winner: 'Asmogendheden',
      summary: 'Duitsland lanceerde de eerste grootschalige luchtlanding in de geschiedenis. Ondanks hevig verzet van Britse, Griekse en Kretenzische troepen veroverden de Duitsers het eiland na zware verliezen.',
      battleName: 'Slag om Kreta'
    }
  });
  
  // Battle of Crete June 1941
dataPoints[20].push({
    x: 1200,
    y: 1250,
    civilians: 15000,
    allied: 15000,
    axis: 6000,
    en: {
      location: 'Crete, Greece',
      date: '20 May 1941 - 1 June 1941',
      winner: 'Axis',
      summary: 'Germany launched the first large-scale airborne invasion in history. Despite fierce resistance from British, Greek, and Cretan forces, the Germans captured the island after heavy casualties.',
      battleName: 'Battle of Crete'
    },
    nl: {
      location: 'Kreta, Griekenland',
      date: '20 mei 1941 - 1 juni 1941',
      winner: 'Asmogendheden',
      summary: 'Duitsland lanceerde de eerste grootschalige luchtlanding in de geschiedenis. Ondanks hevig verzet van Britse, Griekse en Kretenzische troepen veroverden de Duitsers het eiland na zware verliezen.',
      battleName: 'Slag om Kreta'
    }
  });
  
  // Battle 1: Battle of Białystok-Minsk
dataPoints[20].push({
    x: 1238,
    y: 785,
    civilians: 50000,
    allied: 300000,
    axis: 25000,
    en: {
      location: 'Białystok-Minsk, Soviet Union',
      date: '22 June 1941 - 28 June 1941',
      winner: 'Axis',
      summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
      battleName: 'Operation Barbarossa'
    },
    nl: {
      location: 'Białystok-Minsk, Sovjet-Unie',
      date: '22 juni 1941 - 28 juni 1941',
      winner: 'Asmogendheden',
      summary: 'Als onderdeel van Operatie Barbarossa vond er gevechten plaats in heel Oost-Europa, met snelle Duitse opmarsen door Białystok en Minsk. Het aanvankelijke succes van de Asmogendheden werd gekenmerkt door zware Sovjetverliezen en terugtrekkingen.',
      battleName: 'Operatie Barbarossa'
    }
  });
  
  // Battle 2: Battle of Smolensk august
  dataPoints[21].push({
    x: 1350,
    y: 770,
    civilians: 60000,
    allied: 500000,
    axis: 40000,
    en: {
      location: 'Smolensk, Soviet Union',
      date: '10 July 1941 - 10 September 1941',
      winner: 'Axis',
      summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
      battleName: 'Operation Barbarossa'
    },
    nl: {
      location: 'Smolensk, Sovjet-Unie',
      date: '10 juli 1941 - 10 september 1941',
      winner: 'Asmogendheden',
      summary: 'Als onderdeel van Operatie Barbarossa vond er gevechten plaats in heel Oost-Europa, met snelle Duitse opmarsen door Białystok en Minsk. Het aanvankelijke succes van de Asmogendheden werd gekenmerkt door zware Sovjetverliezen en terugtrekkingen.',
      battleName: 'Operatie Barbarossa'
    }
  });

  // Battle 2: Battle of Smolensk August 1941
dataPoints[22].push({
    x: 1350,
    y: 770,
    civilians: 60000,
    allied: 500000,
    axis: 40000,
    en: {
      location: 'Smolensk, Soviet Union',
      date: '10 July 1941 - 10 September 1941',
      winner: 'Axis',
      summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
      battleName: 'Operation Barbarossa'
    },
    nl: {
      location: 'Smolensk, Sovjet-Unie',
      date: '10 juli 1941 - 10 september 1941',
      winner: 'Asmogendheden',
      summary: 'Als onderdeel van Operatie Barbarossa vonden er gevechten plaats in heel Oost-Europa, met snelle Duitse opmarsen door Białystok en Minsk. Het aanvankelijke succes van de Asmogendheden werd gekenmerkt door zware Sovjetverliezen en terugtrekkingen.',
      battleName: 'Operatie Barbarossa'
    }
  });
  
  // Battle 2: Battle of Smolensk September 1941
  dataPoints[23].push({
    x: 1350,
    y: 770,
    civilians: 60000,
    allied: 500000,
    axis: 40000,
    en: {
      location: 'Smolensk, Soviet Union',
      date: '10 July 1941 - 10 September 1941',
      winner: 'Axis',
      summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
      battleName: 'Operation Barbarossa'
    },
    nl: {
      location: 'Smolensk, Sovjet-Unie',
      date: '10 juli 1941 - 10 september 1941',
      winner: 'Asmogendheden',
      summary: 'Als onderdeel van Operatie Barbarossa vonden er gevechten plaats in heel Oost-Europa, met snelle Duitse opmarsen door Białystok en Minsk. Het aanvankelijke succes van de Asmogendheden werd gekenmerkt door zware Sovjetverliezen en terugtrekkingen.',
      battleName: 'Operatie Barbarossa'
    }
  });
  
  
  // Battle 3: Battle of Kiev july
  dataPoints[21].push({
    x: 1320,
    y: 885,
    civilians: 80000,
    allied: 660000,
    axis: 35000,
    en: {
      location: 'Kiev, Soviet Union',
      date: '7 July 1941 - 26 September 1941',
      winner: 'Axis',
      summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
      battleName: 'Operation Barbarossa'
    },
    nl: {
      location: 'Kiev, Sovjet-Unie',
      date: '7 juli 1941 - 26 september 1941',
      winner: 'Asmogendheden',
      summary: 'Als onderdeel van Operatie Barbarossa vond er gevechten plaats in heel Oost-Europa, met snelle Duitse opmarsen door Białystok en Minsk. Het aanvankelijke succes van de Asmogendheden werd gekenmerkt door zware Sovjetverliezen en terugtrekkingen.',
      battleName: 'Operatie Barbarossa'
    }
  });
  
// Battle 3: Battle of Kiev August 1941
dataPoints[22].push({
    x: 1320,
    y: 885,
    civilians: 80000,
    allied: 660000,
    axis: 35000,
    en: {
      location: 'Kiev, Soviet Union',
      date: '7 July 1941 - 26 September 1941',
      winner: 'Axis',
      summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
      battleName: 'Operation Barbarossa'
    },
    nl: {
      location: 'Kiev, Sovjet-Unie',
      date: '7 juli 1941 - 26 september 1941',
      winner: 'Asmogendheden',
      summary: 'Als onderdeel van Operatie Barbarossa vonden er gevechten plaats in heel Oost-Europa, met snelle Duitse opmarsen door Białystok en Minsk. Het aanvankelijke succes van de Asmogendheden werd gekenmerkt door zware Sovjetverliezen en terugtrekkingen.',
      battleName: 'Operatie Barbarossa'
    }
  });
  
  // Battle 3: Battle of Kiev September 1941
  dataPoints[23].push({
    x: 1320,
    y: 885,
    civilians: 80000,
    allied: 660000,
    axis: 35000,
    en: {
      location: 'Kiev, Soviet Union',
      date: '7 July 1941 - 26 September 1941',
      winner: 'Axis',
      summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
      battleName: 'Operation Barbarossa'
    },
    nl: {
      location: 'Kiev, Sovjet-Unie',
      date: '7 juli 1941 - 26 september 1941',
      winner: 'Asmogendheden',
      summary: 'Als onderdeel van Operatie Barbarossa vonden er gevechten plaats in heel Oost-Europa, met snelle Duitse opmarsen door Białystok en Minsk. Het aanvankelijke succes van de Asmogendheden werd gekenmerkt door zware Sovjetverliezen en terugtrekkingen.',
      battleName: 'Operatie Barbarossa'
    }
  });  

  // Battle 4: Battle of Vyazma september
  dataPoints[23].push({
    x: 1400,
    y: 750,
    civilians: 40000,
    allied: 150000,
    axis: 25000,
    en: {
      location: 'Vyazma, Soviet Union',
      date: '30 September 1941 - 6 October 1941',
      winner: 'Axis',
      summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
      battleName: 'Operation Barbarossa'
    },
    nl: {
      location: 'Vyazma, Sovjet-Unie',
      date: '30 september 1941 - 6 oktober 1941',
      winner: 'Asmogendheden',
      summary: 'Als onderdeel van Operatie Barbarossa vond er gevechten plaats in heel Oost-Europa, met snelle Duitse opmarsen door Białystok en Minsk. Het aanvankelijke succes van de Asmogendheden werd gekenmerkt door zware Sovjetverliezen en terugtrekkingen.',
      battleName: 'Operatie Barbarossa'
    }
  });

// Battle 4: Battle of Vyazma October 1941
dataPoints[24].push({
    x: 1400,
    y: 750,
    civilians: 40000,
    allied: 150000,
    axis: 25000,
    en: {
      location: 'Vyazma, Soviet Union',
      date: '30 September 1941 - 6 October 1941',
      winner: 'Axis',
      summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
      battleName: 'Operation Barbarossa'
    },
    nl: {
      location: 'Vyazma, Sovjet-Unie',
      date: '30 september 1941 - 6 oktober 1941',
      winner: 'Asmogendheden',
      summary: 'Als onderdeel van Operatie Barbarossa vonden er gevechten plaats in heel Oost-Europa, met snelle Duitse opmarsen door Białystok en Minsk. Het aanvankelijke succes van de Asmogendheden werd gekenmerkt door zware Sovjetverliezen en terugtrekkingen.',
      battleName: 'Operatie Barbarossa'
    }
  });
  
  
  // Battle 5: Battle of Moscow october
  dataPoints[24].push({
    x: 1440,
    y: 735,
    civilians: 100000,
    allied: 500000,
    axis: 250000,
    en: {
      location: 'Moscow, Soviet Union',
      date: '5 October 1941 - 7 December 1941',
      winner: 'Soviet Union',
      summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
      battleName: 'Operation Barbarossa'
    },
    nl: {
      location: 'Moskou, Sovjet-Unie',
      date: '5 oktober 1941 - 7 december 1941',
      winner: 'Sovjet-Unie',
      summary: 'Als onderdeel van Operatie Barbarossa vond er gevechten plaats in heel Oost-Europa, met snelle Duitse opmarsen door Białystok en Minsk. Het aanvankelijke succes van de Asmogendheden werd gekenmerkt door zware Sovjetverliezen en terugtrekkingen.',
      battleName: 'Operatie Barbarossa'
    }
  });

// Battle 5: Battle of Moscow November 1941
dataPoints[25].push({
    x: 1440,
    y: 735,
    civilians: 100000,
    allied: 500000,
    axis: 250000,
    en: {
      location: 'Moscow, Soviet Union',
      date: '5 October 1941 - 7 December 1941',
      winner: 'Soviet Union',
      summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
      battleName: 'Operation Barbarossa'
    },
    nl: {
      location: 'Moskou, Sovjet-Unie',
      date: '5 oktober 1941 - 7 december 1941',
      winner: 'Sovjet-Unie',
      summary: 'Als onderdeel van Operatie Barbarossa vonden er gevechten plaats in heel Oost-Europa, met snelle Duitse opmarsen door Białystok en Minsk. Het aanvankelijke succes van de Asmogendheden werd gekenmerkt door zware Sovjetverliezen en terugtrekkingen.',
      battleName: 'Operatie Barbarossa'
    }
  });
  
  // Battle 5: Battle of Moscow December 1941
  dataPoints[26].push({
    x: 1440,
    y: 735,
    civilians: 100000,
    allied: 500000,
    axis: 250000,
    en: {
      location: 'Moscow, Soviet Union',
      date: '5 October 1941 - 7 December 1941',
      winner: 'Soviet Union',
      summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
      battleName: 'Operation Barbarossa'
    },
    nl: {
      location: 'Moskou, Sovjet-Unie',
      date: '5 oktober 1941 - 7 december 1941',
      winner: 'Sovjet-Unie',
      summary: 'Als onderdeel van Operatie Barbarossa vonden er gevechten plaats in heel Oost-Europa, met snelle Duitse opmarsen door Białystok en Minsk. Het aanvankelijke succes van de Asmogendheden werd gekenmerkt door zware Sovjetverliezen en terugtrekkingen.',
      battleName: 'Operatie Barbarossa'
    }
  });
  
  
  // Battle 6: Battle of Tikhvin november
  dataPoints[25].push({
    x: 1358,
    y: 665,
    civilians: 20000,
    allied: 300000,
    axis: 25000,
    en: {
      location: 'Tikhvin, Soviet Union',
      date: '8 November 1941 - 9 December 1941',
      winner: 'Soviet Union',
      summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
      battleName: 'Operation Barbarossa'
    },
    nl: {
      location: 'Tikhvin, Sovjet-Unie',
      date: '8 november 1941 - 9 december 1941',
      winner: 'Sovjet-Unie',
      summary: 'Als onderdeel van Operatie Barbarossa vond er gevechten plaats in heel Oost-Europa, met snelle Duitse opmarsen door Białystok en Minsk. Het aanvankelijke succes van de Asmogendheden werd gekenmerkt door zware Sovjetverliezen en terugtrekkingen.',
      battleName: 'Operatie Barbarossa'
    }
  });

// Battle 6: Battle of Tikhvin December 1941
dataPoints[26].push({
    x: 1358,
    y: 665,
    civilians: 20000,
    allied: 300000,
    axis: 25000,
    en: {
      location: 'Tikhvin, Soviet Union',
      date: '8 November 1941 - 9 December 1941',
      winner: 'Soviet Union',
      summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
      battleName: 'Operation Barbarossa'
    },
    nl: {
      location: 'Tikhvin, Sovjet-Unie',
      date: '8 november 1941 - 9 december 1941',
      winner: 'Sovjet-Unie',
      summary: 'Als onderdeel van Operatie Barbarossa vonden er gevechten plaats in heel Oost-Europa, met snelle Duitse opmarsen door Białystok en Minsk. Het aanvankelijke succes van de Asmogendheden werd gekenmerkt door zware Sovjetverliezen en terugtrekkingen.',
      battleName: 'Operatie Barbarossa'
    }
  });
  
  
  // Battle 7: Battle of Rostov november 1941
  dataPoints[26].push({
    x: 1470,
    y: 985,
    civilians: 20000,
    allied: 40000,
    axis: 30000,
    en: {
      location: 'Rostov-on-Don, Soviet Union',
      date: '17 November 1941 - 2 December 1941',
      winner: 'Allies',
      summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
      battleName: 'Operation Barbarossa'
    },
    nl: {
      location: 'Rostov-aan-de-Don, Sovjet-Unie',
      date: '17 november 1941 - 2 december 1941',
      winner: 'Geallieerden',
      summary: 'Als onderdeel van Operatie Barbarossa vond er gevechten plaats in heel Oost-Europa, met snelle Duitse opmarsen door Białystok en Minsk. Het aanvankelijke succes van de Asmogendheden werd gekenmerkt door zware Sovjetverliezen en terugtrekkingen.',
      battleName: 'Operatie Barbarossa'
    }
  });
  // Battle 7: Battle of Rostov December 1941
dataPoints[27].push({
    x: 1510,
    y: 955,
    civilians: 20000,
    allied: 40000,
    axis: 30000,
    en: {
      location: 'Rostov-on-Don, Soviet Union',
      date: '17 November 1941 - 2 December 1941',
      winner: 'Allies',
      summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
      battleName: 'Operation Barbarossa'
    },
    nl: {
      location: 'Rostov-aan-de-Don, Sovjet-Unie',
      date: '17 november 1941 - 2 december 1941',
      winner: 'Geallieerden',
      summary: 'Als onderdeel van Operatie Barbarossa vond er gevechten plaats in heel Oost-Europa, met snelle Duitse opmarsen door Białystok en Minsk. Het aanvankelijke succes van de Asmogendheden werd gekenmerkt door zware Sovjetverliezen en terugtrekkingen.',
      battleName: 'Operatie Barbarossa'
    }
  });

  // Battle 8: Battle of Rzhev January 1942
dataPoints[28].push({
  x: 1370,
  y: 715,
  civilians: 50000,
  allied: 1300000,
  axis: 600000,
  en: {
    location: 'Rzhev, Soviet Union',
    date: '8 January 1942 - 31 March 1942',
    winner: 'Axis',
    summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Bialystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
    battleName: 'Operation Barbarossa'
  },
  nl: {
    location: 'Rzhev, Sovjet-Unie',
    date: '8 januari 1942 - 31 maart 1942',
    winner: 'Asmogendheden',
    summary: 'Als onderdeel van Operatie Barbarossa vond er gevechten plaats in heel Oost-Europa, met snelle Duitse opmarsen door Bialystok en Minsk. Het aanvankelijke succes van de Asmogendheden werd gekenmerkt door zware Sovjetverliezen en terugtrekkingen.',
    battleName: 'Operatie Barbarossa'
  }
});
 // Battle 8: Battle of Rzhev Februari 1942
 dataPoints[29].push({
  x: 1370,
  y: 715,
  civilians: 50000,
  allied: 1300000,
  axis: 600000,
  en: {
    location: 'Rzhev, Soviet Union',
    date: '8 January 1942 - 31 March 1942',
    winner: 'Axis',
    summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Bialystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
    battleName: 'Operation Barbarossa'
  },
  nl: {
    location: 'Rzhev, Sovjet-Unie',
    date: '8 januari 1942 - 31 maart 1942',
    winner: 'Asmogendheden',
    summary: 'Als onderdeel van Operatie Barbarossa vond er gevechten plaats in heel Oost-Europa, met snelle Duitse opmarsen door Bialystok en Minsk. Het aanvankelijke succes van de Asmogendheden werd gekenmerkt door zware Sovjetverliezen en terugtrekkingen.',
    battleName: 'Operatie Barbarossa'
  }
});
// Battle 8: Battle of Rzhev March 1942
dataPoints[30].push({
  x: 1370,
  y: 715,
  civilians: 50000,
  allied: 1300000,
  axis: 600000,
  en: {
    location: 'Rzhev, Soviet Union',
    date: '8 January 1942 - 31 March 1942',
    winner: 'Axis',
    summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Bialystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
    battleName: 'Operation Barbarossa'
  },
  nl: {
    location: 'Rzhev, Sovjet-Unie',
    date: '8 januari 1942 - 31 maart 1942',
    winner: 'Asmogendheden',
    summary: 'Als onderdeel van Operatie Barbarossa vond er gevechten plaats in heel Oost-Europa, met snelle Duitse opmarsen door Bialystok en Minsk. Het aanvankelijke succes van de Asmogendheden werd gekenmerkt door zware Sovjetverliezen en terugtrekkingen.',
    battleName: 'Operatie Barbarossa'
  }
});
  
  // Battle 9: Battle of Sevastopol october 1941
  dataPoints[25].push({
    x: 1380,
    y: 1011,
    civilians: 15000,
    allied: 100000,
    axis: 150000,
    en: {
      location: 'Sevastopol, Soviet Union',
      date: '30 october 1941 - 4 July 1942',
      winner: 'Axis',
      summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Bialystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
      battleName: 'Operation Barbarossa'
    },
    nl: {
      location: 'Sevastopol, Sovjet-Unie',
      date: '30 oktober 1942 - 4 juli 1942',
      winner: 'Asmogendheden',
      summary: 'Als onderdeel van Operatie Barbarossa vond er gevechten plaats in heel Oost-Europa, met snelle Duitse opmarsen door Bialystok en Minsk. Het aanvankelijke succes van de Asmogendheden werd gekenmerkt door zware Sovjetverliezen en terugtrekkingen.',
      battleName: 'Operatie Barbarossa'
    }
  });
  // Battle 9: Battle of Sevastopol november 1941
  dataPoints[26].push({
    x: 1380,
    y: 1011,
    civilians: 15000,
    allied: 100000,
    axis: 150000,
    en: {
      location: 'Sevastopol, Soviet Union',
      date: '30 october 1941 - 4 July 1942',
      winner: 'Axis',
      summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Bialystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
      battleName: 'Operation Barbarossa'
    },
    nl: {
      location: 'Sevastopol, Sovjet-Unie',
      date: '30 oktober 1942 - 4 juli 1942',
      winner: 'Asmogendheden',
      summary: 'Als onderdeel van Operatie Barbarossa vond er gevechten plaats in heel Oost-Europa, met snelle Duitse opmarsen door Bialystok en Minsk. Het aanvankelijke succes van de Asmogendheden werd gekenmerkt door zware Sovjetverliezen en terugtrekkingen.',
      battleName: 'Operatie Barbarossa'
    }
  });
  // Battle 9: Battle of Sevastopol december 1941
  dataPoints[27].push({
    x: 1380,
    y: 1011,
    civilians: 15000,
    allied: 100000,
    axis: 150000,
    en: {
      location: 'Sevastopol, Soviet Union',
      date: '30 october 1941 - 4 July 1942',
      winner: 'Axis',
      summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Bialystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
      battleName: 'Operation Barbarossa'
    },
    nl: {
      location: 'Sevastopol, Sovjet-Unie',
      date: '30 oktober 1942 - 4 juli 1942',
      winner: 'Asmogendheden',
      summary: 'Als onderdeel van Operatie Barbarossa vond er gevechten plaats in heel Oost-Europa, met snelle Duitse opmarsen door Bialystok en Minsk. Het aanvankelijke succes van de Asmogendheden werd gekenmerkt door zware Sovjetverliezen en terugtrekkingen.',
      battleName: 'Operatie Barbarossa'
    }
  });
  // Battle 9: Battle of Sevastopol januari 1941
  dataPoints[28].push({
    x: 1380,
    y: 1011,
    civilians: 15000,
    allied: 100000,
    axis: 150000,
    en: {
      location: 'Sevastopol, Soviet Union',
      date: '30 october 1941 - 4 July 1942',
      winner: 'Axis',
      summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Bialystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
      battleName: 'Operation Barbarossa'
    },
    nl: {
      location: 'Sevastopol, Sovjet-Unie',
      date: '30 oktober 1942 - 4 juli 1942',
      winner: 'Asmogendheden',
      summary: 'Als onderdeel van Operatie Barbarossa vond er gevechten plaats in heel Oost-Europa, met snelle Duitse opmarsen door Bialystok en Minsk. Het aanvankelijke succes van de Asmogendheden werd gekenmerkt door zware Sovjetverliezen en terugtrekkingen.',
      battleName: 'Operatie Barbarossa'
    }
  });
  // Battle 9: Battle of Sevastopol februari 1942
  dataPoints[29].push({
    x: 1380,
    y: 1011,
    civilians: 15000,
    allied: 100000,
    axis: 150000,
    en: {
      location: 'Sevastopol, Soviet Union',
      date: '30 october 1941 - 4 July 1942',
      winner: 'Axis',
      summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Bialystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
      battleName: 'Operation Barbarossa'
    },
    nl: {
      location: 'Sevastopol, Sovjet-Unie',
      date: '30 oktober 1942 - 4 juli 1942',
      winner: 'Asmogendheden',
      summary: 'Als onderdeel van Operatie Barbarossa vond er gevechten plaats in heel Oost-Europa, met snelle Duitse opmarsen door Bialystok en Minsk. Het aanvankelijke succes van de Asmogendheden werd gekenmerkt door zware Sovjetverliezen en terugtrekkingen.',
      battleName: 'Operatie Barbarossa'
    }
  });
  // Battle 9: Battle of Sevastopol maart 1942
  dataPoints[30].push({
    x: 1380,
    y: 1011,
    civilians: 15000,
    allied: 100000,
    axis: 150000,
    en: {
      location: 'Sevastopol, Soviet Union',
      date: '30 october 1941 - 4 July 1942',
      winner: 'Axis',
      summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Bialystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
      battleName: 'Operation Barbarossa'
    },
    nl: {
      location: 'Sevastopol, Sovjet-Unie',
      date: '30 oktober 1942 - 4 juli 1942',
      winner: 'Asmogendheden',
      summary: 'Als onderdeel van Operatie Barbarossa vond er gevechten plaats in heel Oost-Europa, met snelle Duitse opmarsen door Bialystok en Minsk. Het aanvankelijke succes van de Asmogendheden werd gekenmerkt door zware Sovjetverliezen en terugtrekkingen.',
      battleName: 'Operatie Barbarossa'
    }
  });
  // Battle 9: Battle of Sevastopol arpil 1942
  dataPoints[31].push({
    x: 1380,
    y: 1011,
    civilians: 15000,
    allied: 100000,
    axis: 150000,
    en: {
      location: 'Sevastopol, Soviet Union',
      date: '30 october 1941 - 4 July 1942',
      winner: 'Axis',
      summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Bialystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
      battleName: 'Operation Barbarossa'
    },
    nl: {
      location: 'Sevastopol, Sovjet-Unie',
      date: '30 oktober 1942 - 4 juli 1942',
      winner: 'Asmogendheden',
      summary: 'Als onderdeel van Operatie Barbarossa vond er gevechten plaats in heel Oost-Europa, met snelle Duitse opmarsen door Bialystok en Minsk. Het aanvankelijke succes van de Asmogendheden werd gekenmerkt door zware Sovjetverliezen en terugtrekkingen.',
      battleName: 'Operatie Barbarossa'
    }
  });
  // Battle 9: Battle of Sevastopol mei 1942
  dataPoints[32].push({
    x: 1380,
    y: 1011,
    civilians: 15000,
    allied: 100000,
    axis: 150000,
    en: {
      location: 'Sevastopol, Soviet Union',
      date: '30 october 1941 - 4 July 1942',
      winner: 'Axis',
      summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Bialystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
      battleName: 'Operation Barbarossa'
    },
    nl: {
      location: 'Sevastopol, Sovjet-Unie',
      date: '30 oktober 1942 - 4 juli 1942',
      winner: 'Asmogendheden',
      summary: 'Als onderdeel van Operatie Barbarossa vond er gevechten plaats in heel Oost-Europa, met snelle Duitse opmarsen door Bialystok en Minsk. Het aanvankelijke succes van de Asmogendheden werd gekenmerkt door zware Sovjetverliezen en terugtrekkingen.',
      battleName: 'Operatie Barbarossa'
    }
  });
  // Battle 9: Battle of Sevastopol juni 1942
  dataPoints[33].push({
    x: 1380,
    y: 1011,
    civilians: 15000,
    allied: 100000,
    axis: 150000,
    en: {
      location: 'Sevastopol, Soviet Union',
      date: '30 october 1941 - 4 July 1942',
      winner: 'Axis',
      summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Bialystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
      battleName: 'Operation Barbarossa'
    },
    nl: {
      location: 'Sevastopol, Sovjet-Unie',
      date: '30 oktober 1942 - 4 juli 1942',
      winner: 'Asmogendheden',
      summary: 'Als onderdeel van Operatie Barbarossa vond er gevechten plaats in heel Oost-Europa, met snelle Duitse opmarsen door Bialystok en Minsk. Het aanvankelijke succes van de Asmogendheden werd gekenmerkt door zware Sovjetverliezen en terugtrekkingen.',
      battleName: 'Operatie Barbarossa'
    }
  });
  // Battle 9: Battle of Sevastopol juli 1942
  dataPoints[34].push({
    x: 1380,
    y: 1011,
    civilians: 15000,
    allied: 100000,
    axis: 150000,
    en: {
      location: 'Sevastopol, Soviet Union',
      date: '30 october 1941 - 4 July 1942',
      winner: 'Axis',
      summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Bialystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
      battleName: 'Operation Barbarossa'
    },
    nl: {
      location: 'Sevastopol, Sovjet-Unie',
      date: '30 oktober 1942 - 4 juli 1942',
      winner: 'Asmogendheden',
      summary: 'Als onderdeel van Operatie Barbarossa vond er gevechten plaats in heel Oost-Europa, met snelle Duitse opmarsen door Bialystok en Minsk. Het aanvankelijke succes van de Asmogendheden werd gekenmerkt door zware Sovjetverliezen en terugtrekkingen.',
      battleName: 'Operatie Barbarossa'
    }
  });

  // Battle 10: Battle of Stalingrad August 1942
  dataPoints[35].push({
    x: 1590,
    y: 922,
    civilians: 400000,
    allied: 1120000,
    axis: 850000,
    en: {
      location: 'Stalingrad, Soviet Union',
      date: '23 August 1942 - 2 February 1943',
      winner: 'Allies',
      summary: 'The decisive battle of the Eastern Front where Soviet forces encircled and destroyed the German 6th Army, marking a turning point in the war.',
      battleName: 'Battle of Stalingrad'
    },
    nl: {
      location: 'Stalingrad, Sovjet-Unie',
      date: '23 augustus 1942 - 2 februari 1943',
      winner: 'Geallieerden',
      summary: 'De beslissende slag aan het oostfront waarbij Sovjet-troepen het Duitse 6e leger omsingelden en vernietigden, wat een keerpunt in de oorlog markeerde.',
      battleName: 'Slag om Stalingrad'
    }
});
// Battle 10: Battle of Stalingrad September 1942
dataPoints[36].push({
  x: 1590,
  y: 922,
  civilians: 400000,
  allied: 1120000,
  axis: 850000,
  en: {
    location: 'Stalingrad, Soviet Union',
    date: '23 August 1942 - 2 February 1943',
    winner: 'Allies',
    summary: 'The decisive battle of the Eastern Front where Soviet forces encircled and destroyed the German 6th Army, marking a turning point in the war.',
    battleName: 'Battle of Stalingrad'
  },
  nl: {
    location: 'Stalingrad, Sovjet-Unie',
    date: '23 augustus 1942 - 2 februari 1943',
    winner: 'Geallieerden',
    summary: 'De beslissende slag aan het oostfront waarbij Sovjet-troepen het Duitse 6e leger omsingelden en vernietigden, wat een keerpunt in de oorlog markeerde.',
    battleName: 'Slag om Stalingrad'
  }
});
// Battle 10: Battle of Stalingrad oktober 1942
dataPoints[37].push({
  x: 1590,
  y: 922,
  civilians: 400000,
  allied: 1120000,
  axis: 850000,
  en: {
    location: 'Stalingrad, Soviet Union',
    date: '23 August 1942 - 2 February 1943',
    winner: 'Allies',
    summary: 'The decisive battle of the Eastern Front where Soviet forces encircled and destroyed the German 6th Army, marking a turning point in the war.',
    battleName: 'Battle of Stalingrad'
  },
  nl: {
    location: 'Stalingrad, Sovjet-Unie',
    date: '23 augustus 1942 - 2 februari 1943',
    winner: 'Geallieerden',
    summary: 'De beslissende slag aan het oostfront waarbij Sovjet-troepen het Duitse 6e leger omsingelden en vernietigden, wat een keerpunt in de oorlog markeerde.',
    battleName: 'Slag om Stalingrad'
  }
});
// Battle 10: Battle of Stalingrad november 1942
dataPoints[38].push({
  x: 1590,
  y: 922,
  civilians: 400000,
  allied: 1120000,
  axis: 850000,
  en: {
    location: 'Stalingrad, Soviet Union',
    date: '23 August 1942 - 2 February 1943',
    winner: 'Allies',
    summary: 'The decisive battle of the Eastern Front where Soviet forces encircled and destroyed the German 6th Army, marking a turning point in the war.',
    battleName: 'Battle of Stalingrad'
  },
  nl: {
    location: 'Stalingrad, Sovjet-Unie',
    date: '23 augustus 1942 - 2 februari 1943',
    winner: 'Geallieerden',
    summary: 'De beslissende slag aan het oostfront waarbij Sovjet-troepen het Duitse 6e leger omsingelden en vernietigden, wat een keerpunt in de oorlog markeerde.',
    battleName: 'Slag om Stalingrad'
  }
});
// Battle 10: Battle of Stalingrad december 1942
dataPoints[39].push({
  x: 1590,
  y: 922,
  civilians: 400000,
  allied: 1120000,
  axis: 850000,
  en: {
    location: 'Stalingrad, Soviet Union',
    date: '23 August 1942 - 2 February 1943',
    winner: 'Allies',
    summary: 'The decisive battle of the Eastern Front where Soviet forces encircled and destroyed the German 6th Army, marking a turning point in the war.',
    battleName: 'Battle of Stalingrad'
  },
  nl: {
    location: 'Stalingrad, Sovjet-Unie',
    date: '23 augustus 1942 - 2 februari 1943',
    winner: 'Geallieerden',
    summary: 'De beslissende slag aan het oostfront waarbij Sovjet-troepen het Duitse 6e leger omsingelden en vernietigden, wat een keerpunt in de oorlog markeerde.',
    battleName: 'Slag om Stalingrad'
  }
});
// Battle 10: Battle of Stalingrad januari 1943
dataPoints[40].push({
  x: 1590,
  y: 922,
  civilians: 400000,
  allied: 1120000,
  axis: 850000,
  en: {
    location: 'Stalingrad, Soviet Union',
    date: '23 August 1942 - 2 February 1943',
    winner: 'Allies',
    summary: 'The decisive battle of the Eastern Front where Soviet forces encircled and destroyed the German 6th Army, marking a turning point in the war.',
    battleName: 'Battle of Stalingrad'
  },
  nl: {
    location: 'Stalingrad, Sovjet-Unie',
    date: '23 augustus 1942 - 2 februari 1943',
    winner: 'Geallieerden',
    summary: 'De beslissende slag aan het oostfront waarbij Sovjet-troepen het Duitse 6e leger omsingelden en vernietigden, wat een keerpunt in de oorlog markeerde.',
    battleName: 'Slag om Stalingrad'
  }
});
// Battle 10: Battle of Stalingrad februari 1943
dataPoints[41].push({
  x: 1590,
  y: 922,
  civilians: 400000,
  allied: 1120000,
  axis: 850000,
  en: {
    location: 'Stalingrad, Soviet Union',
    date: '23 August 1942 - 2 February 1943',
    winner: 'Allies',
    summary: 'The decisive battle of the Eastern Front where Soviet forces encircled and destroyed the German 6th Army, marking a turning point in the war.',
    battleName: 'Battle of Stalingrad'
  },
  nl: {
    location: 'Stalingrad, Sovjet-Unie',
    date: '23 augustus 1942 - 2 februari 1943',
    winner: 'Geallieerden',
    summary: 'De beslissende slag aan het oostfront waarbij Sovjet-troepen het Duitse 6e leger omsingelden en vernietigden, wat een keerpunt in de oorlog markeerde.',
    battleName: 'Slag om Stalingrad'
  }
});
 
// Battle 11: Battle of Kursk juli 1943
dataPoints[46].push({
  x: 1430,
  y: 822,
  civilians: 70000,
  allied: 1200000,
  axis: 900000,
  en: {
    location: 'Kursk, Soviet Union',
    date: '5 July 1943 - 23 August 1943',
    winner: 'Allies',
    summary: 'The Battle of Kursk was the largest tank battle in history, where Soviet forces decisively halted the final major German offensive on the Eastern Front. This victory marked a significant turning point in World War II, as it weakened the German offensive capabilities.',
    battleName: 'Battle of Kursk'
  },
  nl: {
    location: 'Koersk, Sovjet-Unie',
    date: '5 juli 1943 - 23 augustus 1943',
    winner: 'Geallieerden',
    summary: 'De Slag bij Koersk was de grootste tankslag in de geschiedenis, waarbij Sovjettroepen de laatste grote Duitse offensieve aanval aan het oostfront beslissend wisten te stoppen. Deze overwinning markeerde een belangrijk keerpunt in de Tweede Wereldoorlog, aangezien het de Duitse offensieve capaciteiten verzwakte.',
    battleName: 'Slag bij Koersk'
  }
});
// Battle 11: Battle of Kursk August 1943
dataPoints[47].push({
  x: 1430,
  y: 822,
  civilians: 70000,
  allied: 1200000,
  axis: 900000,
  en: {
    location: 'Kursk, Soviet Union',
    date: '5 July 1943 - 23 August 1943',
    winner: 'Allies',
    summary: 'The Battle of Kursk was the largest tank battle in history, where Soviet forces decisively halted the final major German offensive on the Eastern Front. This victory marked a significant turning point in World War II, as it weakened the German offensive capabilities.',
    battleName: 'Battle of Kursk'
  },
  nl: {
    location: 'Koersk, Sovjet-Unie',
    date: '5 juli 1943 - 23 augustus 1943',
    winner: 'Geallieerden',
    summary: 'De Slag bij Koersk was de grootste tankslag in de geschiedenis, waarbij Sovjettroepen de laatste grote Duitse offensieve aanval aan het oostfront beslissend wisten te stoppen. Deze overwinning markeerde een belangrijk keerpunt in de Tweede Wereldoorlog, aangezien het de Duitse offensieve capaciteiten verzwakte.',
    battleName: 'Slag bij Koersk'
  }
});

// Battle 12: D-Day / Battle of Normandy June 1944
dataPoints[57].push({
  x: 705,
  y: 915,
  civilians: 20000,
  allied: 225000,
  axis: 400000,
  en: {
    location: 'Normandy, France',
    date: '6 June 1944 - 25 August 1944',
    winner: 'Allies',
    summary: 'D-Day was the largest amphibious invasion in history, where Allied forces stormed the beaches of Normandy. It marked the beginning of the liberation of Western Europe from Nazi occupation, setting the stage for the eventual defeat of Nazi Germany in World War II.',
    battleName: 'Battle of Normandy'
  },
  nl: {
    location: 'Normandië, Frankrijk',
    date: '6 juni 1944 - 25 augustus 1944',
    winner: 'Geallieerden',
    summary: 'D-Day was de grootste amfibische invasie in de geschiedenis, waarbij geallieerde troepen de stranden van Normandië bestormden. Het markeerde het begin van de bevrijding van West-Europa van de nazi-bezetting en vormde de opmaat naar de uiteindelijke nederlaag van nazi-Duitsland in de Tweede Wereldoorlog.',
    battleName: 'Slag om Normandië'
  }
});
// Battle 12: D-Day / Battle of Normandy juli 1944
dataPoints[58].push({
  x: 705,
  y: 915,
  civilians: 20000,
  allied: 225000,
  axis: 400000,
  en: {
    location: 'Normandy, France',
    date: '6 June 1944 - 25 August 1944',
    winner: 'Allies',
    summary: 'D-Day was the largest amphibious invasion in history, where Allied forces stormed the beaches of Normandy. It marked the beginning of the liberation of Western Europe from Nazi occupation, setting the stage for the eventual defeat of Nazi Germany in World War II.',
    battleName: 'Battle of Normandy'
  },
  nl: {
    location: 'Normandië, Frankrijk',
    date: '6 juni 1944 - 25 augustus 1944',
    winner: 'Geallieerden',
    summary: 'D-Day was de grootste amfibische invasie in de geschiedenis, waarbij geallieerde troepen de stranden van Normandië bestormden. Het markeerde het begin van de bevrijding van West-Europa van de nazi-bezetting en vormde de opmaat naar de uiteindelijke nederlaag van nazi-Duitsland in de Tweede Wereldoorlog.',
    battleName: 'Slag om Normandië'
  }
});
// Battle 12: D-Day / Battle of Normandy august 1944
dataPoints[59].push({
  x: 705,
  y: 915,
  civilians: 20000,
  allied: 225000,
  axis: 400000,
  en: {
    location: 'Normandy, France',
    date: '6 June 1944 - 25 August 1944',
    winner: 'Allies',
    summary: 'D-Day was the largest amphibious invasion in history, where Allied forces stormed the beaches of Normandy. It marked the beginning of the liberation of Western Europe from Nazi occupation, setting the stage for the eventual defeat of Nazi Germany in World War II.',
    battleName: 'Battle of Normandy'
  },
  nl: {
    location: 'Normandië, Frankrijk',
    date: '6 juni 1944 - 25 augustus 1944',
    winner: 'Geallieerden',
    summary: 'D-Day was de grootste amfibische invasie in de geschiedenis, waarbij geallieerde troepen de stranden van Normandië bestormden. Het markeerde het begin van de bevrijding van West-Europa van de nazi-bezetting en vormde de opmaat naar de uiteindelijke nederlaag van nazi-Duitsland in de Tweede Wereldoorlog.',
    battleName: 'Slag om Normandië'
  }
});

// Operation Market Garden September 1944
dataPoints[58].push({
  x: 815,
  y: 836,
  civilians: 10000,
  allied: 17000,
  axis: 13000,
  en: {
    location: 'The Netherlands',
    date: '17 - 25 September 1944',
    winner: 'Axis',
    summary: 'An ambitious Allied operation aimed to capture key bridges at Arnhem, Nijmegen, and Eindhoven to bypass German defenses and advance into Germany. Despite initial successes, the operation failed, leading to heavy casualties and the eventual retreat of Allied forces.',
    battleName: 'Operation Market Garden'
  },
  nl: {
    location: 'Nederland',
    date: '17 - 25 september 1944',
    winner: 'Asmogendheden',
    summary: 'Een ambitieuze geallieerde operatie met als doel belangrijke bruggen bij Arnhem, Nijmegen en Eindhoven te veroveren om de Duitse verdediging te omzeilen en door te stoten naar Duitsland. Ondanks aanvankelijke successen mislukte de operatie, wat leidde tot zware verliezen en de uiteindelijke terugtrekking van de geallieerde troepen.',
    battleName: 'Operatie Market Garden'
  }
});

// Battle of the Bulge December 1944
dataPoints[61].push({
  x: 785,
  y: 885,
  civilians: 3000,
  allied: 90000,
  axis: 100000,
  en: {
    location: 'Ardennes, Belgium',
    date: '16 December 1944 - 25 January 1945',
    winner: 'Allies',
    summary: 'The last major German offensive of the war. It aimed to split Allied forces in two, but it ultimately failed as reinforcements arrived.',
    battleName: 'Battle of the Bulge'
  },
  nl: {
    location: 'Ardennen, België',
    date: '16 december 1944 - 25 januari 1945',
    winner: 'Geallieerden',
    summary: 'Het laatste grote Duitse offensief van de oorlog. Het had tot doel de geallieerde troepen in tweeën te splitsen, maar het mislukte uiteindelijk toen versterkingen arriveerden.',
    battleName: 'Slag om de Ardennen'
  }
});

// Battle of the Bulge januari 1945
dataPoints[61].push({
  x: 785,
  y: 885,
  civilians: 3000,
  allied: 90000,
  axis: 100000,
  en: {
    location: 'Ardennes, Belgium',
    date: '16 December 1944 - 25 January 1945',
    winner: 'Allies',
    summary: 'The last major German offensive of the war. It aimed to split Allied forces in two, but it ultimately failed as reinforcements arrived.',
    battleName: 'Battle of the Bulge'
  },
  nl: {
    location: 'Ardennen, België',
    date: '16 december 1944 - 25 januari 1945',
    winner: 'Geallieerden',
    summary: 'Het laatste grote Duitse offensief van de oorlog. Het had tot doel de geallieerde troepen in tweeën te splitsen, maar het mislukte uiteindelijk toen versterkingen arriveerden.',
    battleName: 'Slag om de Ardennen'
  }
});

// Battle 15: Battle of Berlin April 1945
dataPoints[66].push({
  x: 965,
  y: 825,
  civilians: 125000,
  allied: 200000,
  axis: 100000,
  en: {
    location: 'Berlin, Germany',
    date: '16 April 1945 - 2 May 1945',
    winner: 'Allies',
    summary: 'The Battle of Berlin was the final major battle of World War II in Europe. Soviet forces launched a massive assault on the city, leading to its capture. The fall of Berlin marked the collapse of the Third Reich, and Adolf Hitler committed suicide on April 30, 1945.',
    battleName: 'Battle of Berlin'
  },
  nl: {
    location: 'Berlijn, Duitsland',
    date: '16 april 1945 - 2 mei 1945',
    winner: 'Geallieerden',
    summary: 'De Slag om Berlijn was de laatste grote slag van de Tweede Wereldoorlog in Europa. Sovjettroepen lanceerden een grootschalig offensief op de stad, wat leidde tot de inname ervan. De val van Berlijn betekende de ineenstorting van het Derde Rijk, en Adolf Hitler pleegde zelfmoord op 30 april 1945.',
    battleName: 'Slag om Berlijn'
  }
});
// Battle of Berlin may 1945
dataPoints[67].push({
  x: 965,
  y: 825,
  civilians: 125000,
  allied: 200000,
  axis: 100000,
  en: {
    location: 'Berlin, Germany',
    date: '16 April 1945 - 2 May 1945',
    winner: 'Allies',
    summary: 'The Battle of Berlin was the final major battle of World War II in Europe. Soviet forces launched a massive assault on the city, leading to its capture. The fall of Berlin marked the collapse of the Third Reich, and Adolf Hitler committed suicide on April 30, 1945.',
    battleName: 'Battle of Berlin'
  },
  nl: {
    location: 'Berlijn, Duitsland',
    date: '16 april 1945 - 2 mei 1945',
    winner: 'Geallieerden',
    summary: 'De Slag om Berlijn was de laatste grote slag van de Tweede Wereldoorlog in Europa. Sovjettroepen lanceerden een grootschalig offensief op de stad, wat leidde tot de inname ervan. De val van Berlijn betekende de ineenstorting van het Derde Rijk, en Adolf Hitler pleegde zelfmoord op 30 april 1945.',
    battleName: 'Slag om Berlijn'
  }
});