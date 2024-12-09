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

  // Bombardementen London august
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

  // Bombardementen London september
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

  // Italian invasion of Greece october
  dataPoints[13].push({
    x: 1120,
    y: 1140,
    civilians: 15000,
    allied: 9000,
    axis: 12000,
    location: 'Greece',
    date: '28 October 1940 - 23 April 1941',
    winner: 'Axis',
    summary: 'The Italian invasion of Greece, launched on 28 October 1940, aimed for a swift conquest but met fierce Greek resistance. The Greeks counterattacked, pushing Italian forces back into Albania. After multiple failed offensives, Germany intervened in April 1941, launching a combined invasion through Bulgaria.',
    battleName: 'The invasion of Greece'
  });
  // Italian invasion of Greece november
  dataPoints[14].push({
    x: 1120,
    y: 1140,
    civilians: 15000,
    allied: 9000,
    axis: 12000,
    location: 'Greece',
    date: '28 October 1940 - 23 April 1941',
    winner: 'Axis',
    summary: 'The Italian invasion of Greece, launched on 28 October 1940, aimed for a swift conquest but met fierce Greek resistance. The Greeks counterattacked, pushing Italian forces back into Albania. After multiple failed offensives, Germany intervened in April 1941, launching a combined invasion through Bulgaria.',
    battleName: 'The invasion of Greece'
  });
  // Italian invasion of Greece december
  dataPoints[15].push({
    x: 1120,
    y: 1140,
    civilians: 15000,
    allied: 9000,
    axis: 12000,
    location: 'Greece',
    date: '28 October 1940 - 23 April 1941',
    winner: 'Axis',
    summary: 'The Italian invasion of Greece, launched on 28 October 1940, aimed for a swift conquest but met fierce Greek resistance. The Greeks counterattacked, pushing Italian forces back into Albania. After multiple failed offensives, Germany intervened in April 1941, launching a combined invasion through Bulgaria.',
    battleName: 'The invasion of Greece'
  });
  // Italian invasion of Greece january
  dataPoints[16].push({
    x: 1120,
    y: 1140,
    civilians: 15000,
    allied: 9000,
    axis: 12000,
    location: 'Greece',
    date: '28 October 1940 - 23 April 1941',
    winner: 'Axis',
    summary: 'The Italian invasion of Greece, launched on 28 October 1940, aimed for a swift conquest but met fierce Greek resistance. The Greeks counterattacked, pushing Italian forces back into Albania. After multiple failed offensives, Germany intervened in April 1941, launching a combined invasion through Bulgaria.',
    battleName: 'The invasion of Greece'
  });
  // Italian invasion of Greece february
  dataPoints[17].push({
    x: 1120,
    y: 1140,
    civilians: 15000,
    allied: 9000,
    axis: 12000,
    location: 'Greece',
    date: '28 October 1940 - 23 April 1941',
    winner: 'Axis',
    summary: 'The Italian invasion of Greece, launched on 28 October 1940, aimed for a swift conquest but met fierce Greek resistance. The Greeks counterattacked, pushing Italian forces back into Albania. After multiple failed offensives, Germany intervened in April 1941, launching a combined invasion through Bulgaria.',
    battleName: 'The invasion of Greece'
  });
  // Italian invasion of Greece march
  dataPoints[18].push({
    x: 1120,
    y: 1140,
    civilians: 15000,
    allied: 9000,
    axis: 12000,
    location: 'Greece',
    date: '28 October 1940 - 23 April 1941',
    winner: 'Axis',
    summary: 'The Italian invasion of Greece, launched on 28 October 1940, aimed for a swift conquest but met fierce Greek resistance. The Greeks counterattacked, pushing Italian forces back into Albania. After multiple failed offensives, Germany intervened in April 1941, launching a combined invasion through Bulgaria.',
    battleName: 'The invasion of Greece'
  });
  // Italian invasion of Greece april
  dataPoints[19].push({
    x: 1120,
    y: 1140,
    civilians: 15000,
    allied: 9000,
    axis: 12000,
    location: 'Greece',
    date: '28 October 1940 - 23 April 1941',
    winner: 'Axis',
    summary: 'The Italian invasion of Greece, launched on 28 October 1940, aimed for a swift conquest but met fierce Greek resistance. The Greeks counterattacked, pushing Italian forces back into Albania. After multiple failed offensives, Germany intervened in April 1941, launching a combined invasion through Bulgaria.',
    battleName: 'The invasion of Greece'
  });

  // Invaison of Yugoslavia april 1941
  dataPoints[19].push({
    x: 995,
    y: 995,
    civilians: 15000,
    allied: 60000,
    axis: 12000,
    location: 'Yugoslavia',
    date: '6 April 1941 - 17 April 1941',
    winner: 'Axis',
    summary: 'Germany, Italy, and Hungary invaded Yugoslavia after a coup removed the pro-Axis government. The campaign ended with the occupation and division of Yugoslavia among the Axis powers.',
    battleName: 'The invasion of Yugoslavia'
  });

  // Battle of Crete may 1941
  dataPoints[20].push({
    x: 1200,
    y: 1250,
    civilians: 15000,
    allied: 15000,
    axis: 6000,
    location: 'Crete, Greece',
    date: '20 May 1941 - 1 June 1941',
    winner: 'Axis',
    summary: 'Germany launched the first large-scale airborne invasion in history. Despite fierce resistance from British, Greek, and Cretan forces, the Germans captured the island after heavy casualties.',
    battleName: 'Battle of Crete'
  });
  // Battle of Crete june 1941
  dataPoints[20].push({
    x: 1200,
    y: 1250,
    civilians: 15000,
    allied: 15000,
    axis: 6000,
    location: 'Crete, Greece',
    date: '20 May 1941 - 1 June 1941',
    winner: 'Axis',
    summary: 'Germany launched the first large-scale airborne invasion in history. Despite fierce resistance from British, Greek, and Cretan forces, the Germans captured the island after heavy casualties.',
    battleName: 'Battle of Crete'
  });

  // Operation Barbarossa june 1941
  // Battle 1: Battle of Białystok-Minsk
  dataPoints[20].push({
    x: 1238,
    y: 785,
    civilians: 50000,
    allied: 300000,
    axis: 25000,
    location: 'Białystok-Minsk, Soviet Union',
    date: '22 June 1941 - 28 June 1941',
    winner: 'Axis',
    summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
    battleName: 'Operation Barbarossa'
  });

  // Battle 2: Battle of Smolensk july 1941
  dataPoints[21].push({
    x: 1350,
    y: 770,
    civilians: 60000,
    allied: 500000,
    axis: 40000,
    location: 'Smolensk, Soviet Union',
    date: '10 July 1941 - 10 September 1941',
    winner: 'Axis',
    summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
    battleName: 'Operation Barbarossa'
  });
  // Battle 2: Battle of Smolensk august 1941
  dataPoints[22].push({
    x: 1350,
    y: 770,
    civilians: 60000,
    allied: 500000,
    axis: 40000,
    location: 'Smolensk, Soviet Union',
    date: '10 July 1941 - 10 September 1941',
    winner: 'Axis',
    summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
    battleName: 'Operation Barbarossa'
  });
  // Battle 2: Battle of Smolensk september 1941
  dataPoints[23].push({
    x: 1350,
    y: 770,
    civilians: 60000,
    allied: 500000,
    axis: 40000,
    location: 'Smolensk, Soviet Union',
    date: '10 July 1941 - 10 September 1941',
    winner: 'Axis',
    summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
    battleName: 'Operation Barbarossa'
  });

  // Battle 3: Battle of Kiev july 1941
  dataPoints[21].push({
    x: 1320,
    y: 885,
    civilians: 80000,
    allied: 660000,
    axis: 35000,
    location: 'Kiev, Soviet Union',
    date: '7 July 1941 - 26 September 1941',
    winner: 'Axis',
    summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
    battleName: 'Operation Barbarossa'
  });
  // Battle 3: Battle of Kiev august 1941
  dataPoints[22].push({
    x: 1320,
    y: 885,
    civilians: 80000,
    allied: 660000,
    axis: 35000,
    location: 'Kiev, Soviet Union',
    date: '7 July 1941 - 26 September 1941',
    winner: 'Axis',
    summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
    battleName: 'Operation Barbarossa'
  });
  // Battle 3: Battle of Kiev september 1941
  dataPoints[23].push({
    x: 1320,
    y: 885,
    civilians: 80000,
    allied: 660000,
    axis: 35000,
    location: 'Kiev, Soviet Union',
    date: '7 July 1941 - 26 September 1941',
    winner: 'Axis',
    summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
    battleName: 'Operation Barbarossa'
  });

  // Battle 4: Battle of Vyazma september 1941
  dataPoints[23].push({
    x: 1400,
    y: 750,
    civilians: 40000,
    allied: 150000,
    axis: 25000,
    location: 'Vyazma, Soviet Union',
    date: '30 September 1941 - 6 October 1941',
    winner: 'Axis',
    summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
    battleName: 'Operation Barbarossa'
  });
  // Battle 4: Battle of Vyazma october 1941
  dataPoints[24].push({
    x: 1400,
    y: 750,
    civilians: 40000,
    allied: 150000,
    axis: 25000,
    location: 'Vyazma, Soviet Union',
    date: '30 September 1941 - 6 October 1941',
    winner: 'Axis',
    summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
    battleName: 'Operation Barbarossa'
  });
  
  // Battle 5: Battle of Moscow october 1941
  dataPoints[24].push({
    x: 1440,
    y: 735,
    civilians: 100000,
    allied: 500000,
    axis: 250000,
    location: 'Moscow, Soviet Union',
    date: '5 October 1941 - 7 December 1941',
    winner: 'Soviet Union', // of allies?
    summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
    battleName: 'Operation Barbarossa'
  });
  // Battle 5: Battle of Moscow november 1941
  dataPoints[25].push({
    x: 1440,
    y: 735,
    civilians: 100000,
    allied: 500000,
    axis: 250000,
    location: 'Moscow, Soviet Union',
    date: '5 October 1941 - 7 December 1941',
    winner: 'Soviet Union', // of allies?
    summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
    battleName: 'Operation Barbarossa'
  });
  // Battle 5: Battle of Moscow december 1941
  dataPoints[26].push({
    x: 1440,
    y: 735,
    civilians: 100000,
    allied: 500000,
    axis: 250000,
    location: 'Moscow, Soviet Union',
    date: '5 October 1941 - 7 December 1941',
    winner: 'Soviet Union', // of allies?
    summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
    battleName: 'Operation Barbarossa'
  });

  // Battle 6: Battle of Tikhvin november 1941
  dataPoints[25].push({
    x: 1358,
    y: 665,
    civilians: 20000,
    allied: 300000,
    axis: 25000,
    location: 'Tikhvin, Soviet Union',
    date: '8 November 1941 - 9 December 1941',
    winner: 'Soviet Union', // of allies?
    summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
    battleName: 'Operation Barbarossa'
  });
  // Battle 6: Battle of Tikhvin december 1941
  dataPoints[26].push({
    x: 1358,
    y: 665,
    civilians: 20000,
    allied: 300000,
    axis: 25000,
    location: 'Tikhvin, Soviet Union',
    date: '8 November 1941 - 9 December 1941',
    winner: 'Soviet Union', // of allies?
    summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
    battleName: 'Operation Barbarossa'
  });
    
  // Battle 7: Battle of Rostov november 1941
  dataPoints[26].push({
    x: 1470,
    y: 985,
    civilians: 20000,
    allied: 40000,
    axis: 30000,
    location: 'Rostov-on-Don, Soviet Union',
    date: '17 November 1941 - 2 December 1941',
    winner: 'Allies',
    summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
    battleName: 'Operation Barbarossa'
  });
  // Battle 7: Battle of Rostov december 1941
  dataPoints[27].push({
    x: 1510,
    y: 955,
    civilians: 20000,
    allied: 40000,
    axis: 30000,
    location: 'Rostov-on-Don, Soviet Union',
    date: '17 November 1941 - 2 December 1941',
    winner: 'Allies',
    summary: 'As part of Operation Barbarossa, fighting occurred across Eastern Europe, with rapid German advances through Białystok and Minsk. The initial success for the Axis was marked by heavy Soviet casualties and retreats.',
    battleName: 'Operation Barbarossa'
  });
