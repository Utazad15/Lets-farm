let canvas;
let sam,sam1,sam2,sam3,sam4,sam5,sam6,sam7,sam8;
let bg;
let box1,box2,box3,box4;
let b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26,
    b27,b28,b29,b30,b31,b32,b33,b34,b35,b36,b37,b38,b39,b40,b41,b42,b43,b44,b45,b46,b47,b48,b49,b50;
let h1,h2,h3,h4,h5,h6,h7,h8,h9,h10,h11,h12,h13,h14,h15,h16,h17,h18,h19,h20;
let t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16,t17,t18,t19,t20,t21,t22,t23,t24,t25,t26,
    t27,t28,t29,t30,t31,t32,t33,t34,t35,t36,t37,t38,t39,t40,t41,t42,t43,t44,t45,t46,t47,t48,t49,t50,
    t51,t52,t53,t54,t55,t56,t57,t58,t59,t60,t61,t62,t63,t64,t65,t66,t67,t68,t69,t70,t71,t72,t73,t74,
    t75,t76,t77,t78,t79,t80,t81,t82,t83,t84,t85,t86,t87,t88,t89,t90,t91,t92,t93,t94,t95,t96,t97,t98,
    t99,t100,t101,t102,t103,t104,t105,t106,t107,t108,t109,t110,t111,t112,t113,t114,t115,t116,t117,
    t118,t119,t120,t121,t122,t123,t124,t125,t126,t127,t128,t129,t130,t131,t132,t133,t134,t135,t136,
    t137,t138,t139,t140,t141,t142,t143,t144,t145;
let array = [];
let win;
let click;
let bgSound;
let faceImg;
let face;
let health;
let healthImg;
let clock;
let clockImg;
let inventory;
let inventoryImg;
let clockFont;
let gameState = 1;
let logo;
let logoImg;
let bg1;
let bg2;
let play,playImg;
let array1 = [];
let array2 = [];
let array3 = [];
let array4 = [];
let array5 = [];
let fence,fenceImg;
let pig1,pig1Img,pig2,pig2Img;
let cow1Img,cow2Img;
let man1,man1Img;
let man2,man2Img;
let man3,man3Img;
let man4,man4Img;
let map2,map2Img,map3Img,map4Img,map5Img,map6Img,map7Img,Map8Img;
let play1;
let board,boardImg;
let board2;
let next,nextImg;
let s1 = 'Hello sam do you need help?';
let l1,l1Img;
let task, taskImg;
let font;
let gold = 200;
let hoe,hoeImg;
let pickaxe,pickaxeImg;
let carrots,carrotsImg;
let food,foodImg;
let l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15,l16,l17,l18,l19,l20;
let c1,c2,c3;
let l18Img,l19Img;
let endImg;
let buy,buyImg;
let sell,sellImg;
let r1,r2,r3,r4,r5,r6,r7,r8,r9,r10;
let help,ins,banner,bannerImg;
let Controls,ControlsImg;
let story,storyImg;
let cut1,cut1Img,cut2,cut2Img;
let control,controlImg;
let Ok,OkImg;
let task2,task2Img; 
let key,keyImg;
let bg3,bg3Img;
let screen,screenImg;
let Img,image;
let l2Img;
let g1,g2;
let array6 = [];

function preload(){
  bg = loadAnimation("assets/Map.png");
  sam1 = loadAnimation("assets/77318.png");
  sam2 = loadAnimation("assets/77319.png","assets/77320.png","assets/77321.png");
  sam3 = loadAnimation("assets/77326.png");
  sam4 = loadAnimation("assets/77327.png","assets/77328.png","assets/77329.png");
  sam5 = loadAnimation("assets/77322.png");
  sam6 = loadAnimation("assets/77323.png","assets/77324.png","assets/77325.png");
  sam7 = loadAnimation("assets/77330.png");
  sam8 = loadAnimation("assets/77331.png","assets/77332.png","assets/77333.png");
  soundFormats('mp3','wav');
  bgSound = loadSound("Music.mp3");
  win = loadSound("win.wav");
  click = loadSound("click.wav");
  faceImg = loadImage("assets/77317.png");
  healthImg = loadImage("assets/77315.png");
  clockImg = loadImage("assets/77316.png");
  inventoryImg = loadImage("assets/77314.png");
  clockFont = loadFont("digital-7.ttf");
  logoImg = loadImage("assets/Logo (1).png");
  bg1 = loadImage("assets/bg1.jpg");
  playImg = loadImage("assets/play.png");
  fenceImg = loadImage("assets/fence.png");
  pig1Img = loadImage("assets/pig.png");
  pig2Img = loadImage("assets/pig2.png");
  l18Img = loadImage("assets/l18.png");
  l19Img = loadImage("assets/l19.png");
  man1Img = loadImage("assets/man1.png");
  man2Img = loadImage("assets/man2.png");
  man3Img = loadImage("assets/man3.png");
  map2Img = loadAnimation("assets/Map2.png");
  boardImg = loadImage("assets/board.png");
  nextImg = loadImage("assets/next.png");
  l1Img = loadImage("assets/l1.png");
  taskImg = loadImage("assets/Task.png");
  font = loadFont("Stardew Valley ALL CAPS.ttf");
  hoeImg = loadImage("assets/hoe.png");
  pickaxeImg = loadImage("assets/pickaxe.png");
  carrotsImg = loadImage("assets/carrot4.png");
  foodImg = loadImage("assets/food.png");
  c1 = loadAnimation("assets/carrot1.png");
  c2 = loadAnimation("assets/carrot2.png");
  c3 = loadAnimation("assets/carrot3.png");
  endImg = loadImage("assets/end.png");
  buyImg = loadImage("assets/buy.png");
  sellImg = loadImage("assets/sell.png");
  map3Img = loadAnimation("assets/Map3.png");
  map4Img = loadAnimation("assets/Map4.png");
  map5Img = loadAnimation("assets/Map5.png");
  map6Img = loadAnimation("assets/Map6.png");
  map7Img = loadAnimation("assets/Map7.png");
  Map8Img = loadAnimation("assets/Map8.png");
  ins = loadImage("assets/help.png");
  bannerImg = loadImage("assets/instructions.png");
  ControlsImg = loadImage("assets/controls.png");
  storyImg = loadImage("assets/Story .png");
  cut1Img = loadImage("assets/cut1.png");
  cut2Img = loadImage("assets/cut2.png");
  controlImg = loadImage("assets/controls .png");
  man4Img = loadImage("assets/man4.png");
  OkImg = loadImage("assets/OK.png");
  task2Img = loadImage("assets/Task2.png");
  keyImg = loadImage("assets/key.png");
  screenImg = loadImage("assets/screen.png");
  Img = loadImage("assets/Img.png");
  image = loadImage("assets/Image.png");
  l2Img = loadImage("assets/l2.png");
}

function setup(){
  canvas = createCanvas(1340,635);
  
  //bgSound = new Audio('Music.mp3')
  //bgSound.loop();

  bg2 = createSprite(672,220,50,50);
  bg2.addImage(bg1);
  bg2.scale = 1.1;

  logo = createSprite(657,150,50,50);
  logo.addImage(logoImg);
  logo.scale = 1.1;

  play = createSprite(525,270,50,50);
  play.addImage(playImg);
  play.scale = 0.43;
  //play.debug = true;
  play.setCollider("rectangle",0,0,155,100);


  help = createSprite(620,270,50,50);
  help.addImage(ins);
  help.scale = 0.6;
  //help.debug = true;
  help.setCollider("rectangle",0,0,150,70);

  Controls = createSprite(745,270,50,50);
  Controls.addImage(ControlsImg);
  Controls.scale = 0.85;
  //Controls.debug = true;

  story = createSprite(230,140,50,50);
  story.addImage(storyImg);
  story.scale = 0.8;
  story.visible = false;

  cut1 = createSprite(400,55,50,50);
  cut1.addImage(cut1Img);
  cut1.scale = 0.4;
  cut1.visible = false;

  control = createSprite(1150,170,50,50);
  control.addImage(controlImg);
  control.visible = false;

  cut2 = createSprite(1285,55,50,50);
  cut2.addImage(cut1Img);
  cut2.scale = 0.4;
  cut2.visible = false;

  play1 = createSprite(1250,600,50,50);
  play1.addImage(playImg);
  play1.scale = 0.4;

  a = createSprite(2175,-650,100,100);
  a.addAnimation("backGround",bg);
  a.addAnimation("backGround2",Map8Img)
  a.scale = 4;

  man1 = createSprite(-400,-2780,50,50);
  man1.addImage(man1Img);
  man1.scale = 3;
  man1.visible = true;

  man2 = createSprite(4430,-2400,50,50);
  man2.addImage(man2Img);
  man2.scale = 3;  

  man3 = createSprite(-355,-2000,50,50);
  man3.addImage(man3Img);
  man3.scale = 3;



  l2 = createSprite(-400,430,25,25);
  l2.addAnimation("l2",l2Img);
  l2.scale = 0.1;
  l3 = createSprite(-400,530,25,25);
  l3.addAnimation("l3",l2Img);
  l3.scale = 0.1;
  l4 = createSprite(-300,430,25,25);
  l4.addAnimation("l4",l2Img);
  l4.scale = 0.1;
  l5 = createSprite(-300,530,25,25);
  l5.addAnimation("l5",l2Img);
  l5.scale = 0.1;
  l6 = createSprite(-200,430,25,25);
  l6.addAnimation("l6",l2Img);
  l6.scale = 0.1;
  l7 = createSprite(-200,530,25,25);
  l7.addAnimation("l7",l2Img);
  l7.scale = 0.1;
  l8 = createSprite(-100,430,25,25);
  l8.addAnimation("l8",l2Img);
  l8.scale = 0.1;
  l9 = createSprite(-100,530,25,25);
  l9.addAnimation("l9",l2Img);
  l9.scale = 0.1;
  l10 = createSprite(0,430,25,25);
  l10.addAnimation("l10",l2Img);
  l10.scale = 0.1;
  l11 = createSprite(0,530,25,25);
  l11.addAnimation("l11",l2Img);
  l11.scale = 0.1;
  l12 = createSprite(100,430,25,25);
  l12.addAnimation("l12",l2Img);
  l12.scale = 0.1;
  l13 = createSprite(100,530,25,25);
  l13.addAnimation("l13",l2Img);
  l13.scale = 0.1;
  l14 = createSprite(200,430,25,25);
  l14.addAnimation("l14",l2Img);
  l14.scale = 0.1;
  l15 = createSprite(200,530,25,25);
  l15.addAnimation("l15",l2Img);
  l15.scale = 0.1;

  key = createSprite(5200,650,50,50);
  key.addImage(keyImg);
  key.scale = 0.15;

  sam = createSprite(664,350,100,100);
  sam.addAnimation("samStand",sam1);
  sam.addAnimation("samStand2",sam2);
  sam.addAnimation("samStand3",sam3);
  sam.addAnimation("samStand4",sam4);
  sam.addAnimation("samStand5",sam5);
  sam.addAnimation("samStand6",sam6);
  sam.addAnimation("samStand7",sam7);
  sam.addAnimation("samStand8",sam8);
  sam.scale = 2.8;
  //sam.debug = true;

  box1 = createSprite(120,340,10,630);
  box1.visible = false;
  box2 = createSprite(670,145,1350,10);
  box2.visible = false;
  box3 = createSprite(1200,340,10,630);
  box3.visible = false;
  box4 = createSprite(670,550,1350,15);
  box4.visible = false;

  face = createSprite(65,75,110,110);
  face.addImage(faceImg);
  face.scale = 1.5;

  health = createSprite(1250,650,50,50);
  health.addImage(healthImg);
  health.scale = 0.6;

  screen = createSprite(650,635,50,50);
  screen.addImage(screenImg);
  screen.scale = 2;
  screen.visible = true;

  inventory = createSprite(670,600,50,50);
  inventory.addImage(inventoryImg);
  inventory.scale = 1.2;
  

  b1 = createSprite(920,580,130,700);
  b2 = createSprite(664,850,650,180);
  b3 = createSprite(410,1030,150,550);
  b4 = createSprite(140,1285,550,270);
  b5 = createSprite(1050,1075,180,450);
  b6 = createSprite(1280,1385,450,280);
  b7 = createSprite(1080,1600,500,300);
  b8 = createSprite(1560,1730,500,200);
  b9 = createSprite(1900,1625,200,500);
  b10 = createSprite(1890,1450,500,155);
  b11 = createSprite(1679,1310,70,130);
  b12 = createSprite(2150,1230,280,300);
  b13 = createSprite(2150,875,280,155);
  b14 = createSprite(2745,1330,950,300);
  b15 = createSprite(3075,1280,280,850);
  b16 = createSprite(3350,1600,300,200);
  b17 = createSprite(3700,1680,500,100);
  b18 = createSprite(4015,1600,300,200);
  b19 = createSprite(4180,1300,60,1500);
  b20 = createSprite(4900,1270,1500,200);
  b21 = createSprite(5370,1080,700,200);
  b22 = createSprite(5465,985,400,200);
  b23 = createSprite(5710,425,500,930);
  b24 = createSprite(5730,-200,300,500);
  b25 = createSprite(5425,-1045,1000,1330);
  b26 = createSprite(5520,-2300,500,1500);
  b27 = createSprite(4700,-3140,1200,500);
  b28 = createSprite(3795,-2800,700,1000);
  b29 = createSprite(2445,-3340,2200,600);
  b30 = createSprite(1135,-3010,600,500);
  b31 = createSprite(1340,-2530,200,460);
  b32 = createSprite(970,-2465,265,320);
  b33 = createSprite(-115,-2410,2100,200);
  b34 = createSprite(-1370,-1720,500,1500);
  b35 = createSprite(-1000,-680,970,900);
  b36 = createSprite(-1500,450,500,1500);
  b37 = createSprite(-800,1300,1050,300);
  b38 = createSprite(-590,1500,200,500);
  b39 = createSprite(200,1500,200,500);
  b40 = createSprite(-190,1750,600,300);
  b41 = createSprite(-875,-2800,500,800);
  b42 = createSprite(-10,-3230,1800,300);
  b43 = createSprite(2900,-1680,1850,1000);
  b44 = createSprite(550,-1350,250,250);
  b45 = createSprite(1470,290,350,500);
  b46 = createSprite(1830,1000,240,200);
  b47 = createSprite(1200,-2350,250,100);

  man4 = createSprite(1250,-2300,50,50);
  man4.addImage(man4Img);
  man4.scale = 3;

  h1 = createSprite(630,170,350,310);
  h2 = createSprite(-170,150,843,300);
  h3 = createSprite(-440,100,200,300);
  h4 = createSprite(-940,890,460,180);
  h5 = createSprite(-775,750,150,100);
  h6 = createSprite(-290,-750,350,330);
  h7 = createSprite(-200,-2200,600,400);
  h8 = createSprite(-870,-2250,350,500);
  h9 = createSprite(-270,-2990,670,490);
  h10 = createSprite(1360,890,420,300);
  h11 = createSprite(1790,150,350,310);
  h12 = createSprite(3400,650,350,1250);
  h13 = createSprite(3960,500,360,900);
  h14 = createSprite(3975,1200,390,220);
  h15 = createSprite(2480,-2980,2300,800);
  h16 = createSprite(4100,-1970,500,410);
  h17 = createSprite(4420,-2640,430,500);

  t1 = createSprite(1190,300,340,520);
  t2 = createSprite(1620,790,1105,300);
  t3 = createSprite(1220,1140,130,200);
  t4 = createSprite(1399,1200,220,60);
  t5 = createSprite(1755,1230,60,100);
  t6 = createSprite(1970,1230,60,100);
  t7 = createSprite(2325,1120,70,100);
  t8 = createSprite(2900,1120,70,100);
  t9 = createSprite(2402,795,62,50);
  t10 = createSprite(3080,810,300,60);
  t11 = createSprite(3040,695,160,70);
  t12 = createSprite(2970,535,510,130);
  t13 = createSprite(2250,505,930,70);
  t14 = createSprite(2180,150,500,230);
  t15 = createSprite(2630,200,460,270);
  t16 = createSprite(3165,265,160,400);
  t17 = createSprite(3050,200,100,300);
  t18 = createSprite(2930,90,150,50);
  t19 = createSprite(2435,-100,90,72);
  t20 = createSprite(1400,-140,100,100);
  t21 = createSprite(2705,-340,150,110);
  t22 = createSprite(2575,-670,190,250);
  t23 = createSprite(1970,-650,350,520);
  t24 = createSprite(1450,-650,350,520);
  t25 = createSprite(1710,-810,180,100);
  t26 = createSprite(2960,-740,140,110);
  t27 = createSprite(3060,-880,150,100);
  t28 = createSprite(3460,-745,200,100);
  t29 = createSprite(3250,-550,540,200);
  t30 = createSprite(3085,-390,100,205);
  t31 = createSprite(3440,-390,105,220);
  t32 = createSprite(3250,-755,230,250);
  t33 = createSprite(4060,-650,550,535);
  t34 = createSprite(3930,-350,120,90);
  t35 = createSprite(4210,-350,120,90);
  t36 = createSprite(4730,-850,210,200);
  t37 = createSprite(4730,-680,90,180);
  t38 = createSprite(4850,-550,160,170);
  t39 = createSprite(4868,-400,90,220);
  t40 = createSprite(4705,-3,130,100);
  t41 = createSprite(4840,210,150,100);
  t42 = createSprite(3985,-50,150,100);
  t43 = createSprite(4300,360,150,100);
  t44 = createSprite(4800,465,130,100);
  t45 = createSprite(4700,290,100,100);
  t46 = createSprite(4255,40,100,100);
  t47 = createSprite(4480,-1250,140,100);
  t48 = createSprite(3990,-1250,140,100);
  t49 = createSprite(4870,-1200,40,80);
  t50 = createSprite(4870,-1350,180,220);
  t51 = createSprite(4870,-1550,40,80);
  t52 = createSprite(4870,-1700,180,220);
  t53 = createSprite(5050,-1850,150,220);
  t54 = createSprite(5050,-2180,450,360);
  t55 = createSprite(4430,-2000,260,350);
  t56 = createSprite(4350,-1625,300,250);
  t57 = createSprite(4015,-1625,170,220);
  t58 = createSprite(3850,-1625,15,480);
  t59 = createSprite(4585,-1770,20,730);
  t60 = createSprite(4450,-1405,300,50);
  t61 = createSprite(4000,-1405,300,50);
  t62 = createSprite(4800,-2725,1500,200);
  t63 = createSprite(5100,-2500,310,500);
  t64 = createSprite(4370,-2270,400,50);
  t65 = createSprite(4180,-2400,20,300);
  t66 = createSprite(3150,-2400,510,160);
  t67 = createSprite(1700,-2400,510,160);
  t68 = createSprite(1000,-2600,50,50);
  t69 = createSprite(1620,-2530,50,110);
  t70 = createSprite(3270,-2530,50,110);
  t71 = createSprite(2750,-2335,350,50);
  t72 = createSprite(2130,-2335,380,50);
  t73 = createSprite(-200,-2560,820,100);
  t74 = createSprite(355,-2580,125,105);
  t75 = createSprite(555,-2580,125,105);
  t76 = createSprite(-530,-2690,125,170);
  t77 = createSprite(730,-2180,360,350);
  t78 = createSprite(315,-2180,130,350);
  t79 = createSprite(420,-2250,500,300);
  t80 = createSprite(200,-2245,300,50);
  t81 = createSprite(-580,-1975,130,100);
  t82 = createSprite(-1020,-1900,100,120);
  t83 = createSprite(-1020,-1730,200,100);
  t84 = createSprite(-500,-1590,2600,170);
  t85 = createSprite(-430,-1720,300,120);
  t86 = createSprite(-8,-1730,100,100);
  t87 = createSprite(390,-1730,100,100);
  t88 = createSprite(840,-1710,130,150);
  t89 = createSprite(760,-1400,140,220);
  t90 = createSprite(635,-1080,175,280);
  t91 = createSprite(200,-1090,220,200);
  t92 = createSprite(300,-1310,110,400);
  t93 = createSprite(-450,-1250,210,660);
  t94 = createSprite(-260,-1230,150,300);
  t95 = createSprite(-203,-1435,165,80);
  t96 = createSprite(160,-1450,140,160);
  t97 = createSprite(110,-795,520,150);
  t98 = createSprite(-75,-700,80,50);
  t99 = createSprite(105,-700,80,50);
  t100 = createSprite(280,-700,80,50);
  t101 = createSprite(500,-745,200,125);
  t102 = createSprite(730,-740,250,200);
  t103 = createSprite(795,-340,65,70);
  t104 = createSprite(142,-347,1010,125);
  t105 = createSprite(-440,-570,60,60);
  t106 = createSprite(300,115,100,80);
  t107 = createSprite(-735,200,150,110);
  t108 = createSprite(-1100,635,135,110);
  t109 = createSprite(210,980,130,110);
  t110 = createSprite(200,790,130,110);
  t111 = createSprite(-1090,-130,240,180);
  t112 = createSprite(730,515,50,140);
  t113 = createSprite(800,430,25,460);
  t114 = createSprite(-850,320,25,470);
  t115 = createSprite(-720,100,250,50);
  t116 = createSprite(-680,550,350,50);
  t117 = createSprite(-510,590,25,125);
  t118 = createSprite(150,630,1300,50);
  t119 = createSprite(-60,-190,1820,50);
  t120 = createSprite(-730,1110,900,50);
  t121 = createSprite(100,1100,450,50);
  t122 = createSprite(305,880,25,390);
  t123 = createSprite(-1190,550,25,1200);
  t124 = createSprite(-490,-500,25,600);
  t125 = createSprite(840,-300,25,250);
  t126 = createSprite(840,-600,25,100);
  t127 = createSprite(-1090,-2000,25,800);
  t128 = createSprite(900,-1980,25,150);
  t129 = createSprite(1030,-2045,175,275);
  t130 = createSprite(1490,-2090,180,275);
  t131 = createSprite(1900,-1600,220,900);
  t132 = createSprite(1460,-1510,620,550);
  t133 = createSprite(1300,-1210,135,130);
  t134 = createSprite(1620,-1210,135,130);
  t135 = createSprite(2330,-650,25,400);
  t136 = createSprite(2560,-460,460,50);
  t137 = createSprite(2560,-830,460,50);
  t138 = createSprite(2790,-790,25,120);
  t139 = createSprite(2790,-530,25,160);
  t140 = createSprite(3610,140,80,110);
  t141 = createSprite(10,1500,220,250);
  t142 = createSprite(-435,1500,220,250);
  t143 = createSprite(-150,1580,100,100);

  fence = createSprite(-595,460,50,50);
  fence.addImage(fenceImg);
  fence.scale = 1.4;

  pig1 = createSprite(-800,350,50,50);
  pig1.addImage(l18Img);
  pig1.scale = 2.5;
  //pig1.debug = true;
 // pig1.setCollider("rectangle",0,0,60,45);

  pig2 = createSprite(-650,480,50,50);
  pig2.addImage(l19Img);
  pig2.scale = 2.5;
  //pig2.debug = true;
 // pig2.setCollider("rectangle",0,0,60,45);

  
 // pig1.addImage(pig1Img);
  //pig1.debug = true;
  
  //pig1.visible = true;


  //pig2.visible = true;

  l1 = createSprite(650,325,500,50);
  l1.visible = false;

  task = createSprite(650,100,50,50);
  task.addImage(taskImg);
  task.scale = 1;
  task.visible = false;



  pickaxe = createSprite(485,598,50,50);
  pickaxe.addImage(pickaxeImg);
  pickaxe.scale = 1.7;
  pickaxe.visible = false;

  hoe = createSprite(520,598,50,50);
  hoe.addImage(hoeImg);
  hoe.scale = 1.7;
  hoe.visible = false; 

  carrots = createSprite(485,598,50,50);
  carrots.addImage(carrotsImg);
  carrots.scale = 0.7;
  carrots.visible = false;
  
  food = createSprite(520,598,50,50);
  food.addImage(foodImg);
  food.scale = 1.9;
  food.visible = false;

  board = createSprite(650,320,50,50);
  board.addImage(boardImg);
  board.visible = false;
  board.scale = 1.7;

  board2 = createSprite(650,400,50,50);
  board2.addImage(boardImg);
  board2.visible = false;

  next = createSprite(890,515,50,50);
  next.addImage(nextImg);
  next.visible = false;

  buy = createSprite(835,505,50,50);
  buy.addImage(buyImg);
  buy.visible = false;

  Ok = createSprite(810,580,50,50);
  Ok.addImage(OkImg);
  Ok.visible = false;

  sell = createSprite(875,505,50,50);
  sell.addImage(sellImg);
  sell.visible = false;
  sell.scale = 0.6;

  map2 = createSprite(650,315,50,50);
  map2.addAnimation("map",map2Img);
  map2.addAnimation("map1",map3Img);
  map2.addAnimation("map2",map4Img);
  map2.addAnimation("map3",map5Img);
  map2.addAnimation("map4",map6Img);
  map2.addAnimation("map5",map7Img);
 // map2.addAnimation("map6",map8Img);
  map2.scale = 0.46;

  l16 = createSprite(-800,390,25,10);
  l16.visible = false;
  l16.addImage(Img);
  l16.scale = 0.6;

  l17 = createSprite(-640,450,25,10);
  l17.visible = false;
  l17.addImage(image);
  l17.scale = 0.6;

/*
  pig1 = createSprite(800,390,50,50);
  //pig1 = createSprite(650,350,50,50);
  pig1.addImage(pig1Img);
  pig1.scale = 2.5;

  pig2 = createSprite(640,450,50,50);
  pig2.addImage(pig2Img);
  //pig2.debug = true;
  pig2.scale = 2.5;*/
  
  clock = createSprite(1250,100,50,50);
  clock.addImage(clockImg);
  clock.scale = 0.8;
  
 // bgSound.loop();

  const bgSound = new Audio("Music.mp3");
 // bgSound.muted = true;
  
  const alert_elem = document.querySelector( '.alert' );
  
  bgSound.play(true).then( () => {
    // already allowed
    alert_elem.remove();
    resetAudio();
  } )
  .catch( () => {
    // need user interaction
    alert_elem.addEventListener( 'click', ({ target }) => {
      if( target.matches('button') ) {
        const allowed = target.value === "1";
        if( allowed ) {
          bgSound.play(true)
            .then( resetAudio );
        }
        alert_elem.remove();
      }
    } );
  } );
  /*
  document.getElementById( 'btn' ).addEventListener( 'click', (e) => {
    if( bgSound.muted ) {
      console.log( 'silent notification' );
    }
    else {
      bgSound.play(true);
    }
  } );*/
  
  bgSound.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
bgSound.play()


  g1 = createSprite(1100,-610,500,120);
  g2 = createSprite(1085,-750,90,350);

  array = [man1,man3,man2,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15,l16,l17,fence,pig1,pig2,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,
           b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,
           b23,b24,b25,b26,b27,b28,b29,b30,b31,b32,b33,b34,b35,b36,b37,b38,b39,b40,b41,b42,b43,b44,b45,
           b46,h1,h2,h3,h4,h5,h6,h7,h8,h9,h10,h11,h12,h13,h14,h15,h16,h17,t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,
           t11,t12,t13,t14,t15,t16,t17,t18,t19,t20,t21,t22,t23,t24,t25,t26,t27,t28,t29,t30,t31,t32,t33,
           t34,t35,t36,t37,t38,t39,t40,t41,t42,t43,t44,t45,t46,t47,t48,t49,t50,t51,t52,t53,t54,t55,t56,
           t57,t58,t59,t60,t61,t62,t63,t64,t65,t66,t67,t68,t69,t70,t71,t72,t73,t74,t75,t76,t77,t78,t79,
           t80,t81,t82,t83,t84,t85,t86,t87,t88,t89,t90,t91,t92,t93,t94,t95,t96,t97,t98,t99,t100,t101,t102
           ,t103,t104,t105,t106,t107,t108,t109,t110,t111,t112,t113,t114,t115,t116,t117,t118,t119,t120,
           t121,t122,t123,t124,t125,t126,t127,t128,t129,t130,t131,t132,t133,t134,t135,t136,t137,t138,t139
           ,t140,t141,t142,t143];
           
  array1 = [a,sam,face,health,inventory,clock];
  array2 = [bg2,logo,play];  
  array3 = [l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15,man2,man3,fence,pig1,pig2];
  array4 = [play1];
  array5 = [b47,man4];
  array6 = [g1,g2];
  }

  function draw(){
  background(rgb(99, 199, 68));
  
  drawSprites();

  console.log(mouseX,mouseY);

  if(mousePressedOver(help)){
    story.visible = true;
    cut1.visible = true;
    click.play(false);
  }
  if(mousePressedOver(cut1)){
    story.visible = false;
    cut1.visible = false;
    click.play(false);
  }
  
if(gameState === 1){
  screen.visible = false;
 // myFunction();
}else {
  screen.visible = true;
}

  if(mousePressedOver(Controls)){
    control.visible = true;
    cut2.visible = true;
    click.play(false);
  }
  if(mousePressedOver(cut2)){
    control.visible = false;
    cut2.visible = false;
    click.play(false);
  }

  if(mouseY>=252 && mouseY<=290 && mouseX>=494 && mouseX<=558){
    play.scale = 0.5;
    
  }else {
    play.scale = 0.43;
  }

  if(mouseY>=252 && mouseY<=290 && mouseX>=580 && mouseX<=662){
    help.scale = 0.67;
  }else {
    help.scale = 0.6;
  }

  if(mouseY>=252 && mouseY<=290 && mouseX>=685 && mouseX<=808){
    Controls.scale = 0.92;
  }else {
    Controls.scale = 0.85;
  }

  //console.log(mouseX,mouseY);

  if(mouseIsPressed){
    noCursor();
  }else {
    cursor(CROSS);
  }

  if(gameState === 1){
    if(mousePressedOver(play)){
      console.log("clicked");
      gameState = 3;
      
      click.play(false);
    }
    map2.visible = false;
   // l1.visible = false;

   screen.visible = false;

    for(var j = 0;j<array1.length;j++){
        array1[j].visible = false;
    }

    for(var i = 1;i<array.length;i++){
      array[i].visible = false;
    }

    for(var z = 0;z<array5.length;z++){
      array5[z].visible = false;
    }

    for(var n = 0;n<array4.length;n++){
      array4[n].visible = false;
    }
  }else if(gameState === 3){
//  pig1.visible = true;
//  pig2.visible = true;

if(keyDown("g")){
  gameState = 5;
}

  textFont(clockFont);
  fill("black");
  textSize(25);
  text("$",1205,144);
  text(gold,1275,144);

  clocks();

  fill(rgb(3,0,45));
  textSize(25);
  text("Press & Hold 'M' to see Map and route.",10,600);
  text("Press & Hold 'T' to see tasks.",10,625);

  if(keyDown("T")){
    board.visible = true;

    fill("black");
    textSize(35);
    textFont("monospace");
    text("Tasks",600,120);
    textSize(25);
    text("1.Buy seeds to grow plants and animal food to feed animals from",225,160);
    text("plant shop by seeing map.",255,190);
    text("2.Grow the plants in the farm.",225,250);
    text("3.Feed the cows in your house's garden.",225,310);
    text("4.See map and go to hardware shop and from shopkeeper buy tools.",225,370);
    text("5.Cut the crops and take the milk from cows and sell it to the",225,430);
    text("general shop.",255,460);
  }

  if(keyWentUp("T")){
    board.visible = false;
  }

  for(var n = 0;n<array4.length;n++){
    array4[n].visible = false;
  }

  for(var z = 1;z<array5.length;z++){
    array5[z].visible = true;
    sam.collide(array5[z]);
  }

  for(var z = 0;z<array5.length;z++){
    sam.collide(array5[z]);
  }

  for(var j = 0;j<array1.length;j++){
    array1[j].visible = true;
  }
  
  for(var i = 22;i<array.length;i++){
    array[i].visible = false;
  }

  for(var b = 14;b<array3.length;b++){
    array3[b].visible = true;
  }

  for(var o = 22;o<array.length;o++){
    array[o].visible = false;
    sam.collide(array[o]);
  }

  for(var s = 0;s<array6.length;s++){
   array6[s].visible = false;
    sam.collide(array6[s]);
  }

  for(var r = 16;r<array3.length;r++){
    sam.collide(array3[r]);
  }

  if(keyDown("M")){
    map2.visible = true;
  }

  if(keyWentUp("M")){
    map2.visible = false;
 }

 
 if(keyDown("down") || keyDown("s")){
   changeAnimation(sam,"samStand2",sam2);
   changePosition(0,10,sam);
  }
  
  if(keyWentUp("down") || keyWentUp("s")){
    changeAnimation(sam,"samStand",sam1);
    sam.velocityY = 0;
  }
  
  if(keyDown("up") || keyDown("w")){
    changeAnimation(sam,"samStand4",sam4);
    changePosition(0,-10,sam);
  }
  
  if(keyWentUp("up") || keyWentUp("w")){
    changeAnimation(sam,"samStand3",sam3);
    sam.velocityY = 0;
  }
  
  if(keyDown("right") || keyDown("d")){
    changeAnimation(sam,"samStand6",sam6);
    changePosition(10,0,sam);
  }
  
  if(keyWentUp("right") || keyWentUp("d")){
    changeAnimation(sam,"samStand5",sam5);
    sam.velocityX = 0;
  }
  
  if(keyDown("left") || keyDown("a")){
    changeAnimation(sam,"samStand8",sam8);
    changePosition(-10,0,sam);
  }
  
  if(keyWentUp("left") || keyWentUp("a")){
    changeAnimation(sam,"samStand7",sam7);
    sam.velocityX = 0;
  }
  
  if(sam.isTouching(box1)){
    sam.collide(box1);
    if(keyDown("left") || keyDown("a")){
      sam.changeAnimation("samStand8",sam8);
      a.x = a.x+10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].x = array[i].x + 10;
      }

      key.x = key.x + 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].x = array5[z].x + 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].x = array6[k].x + 10;
      }
    }
  }
  
  if(sam.isTouching(box2)){
    sam.collide(box2);
    if(keyDown("up") || keyDown("w")){
      sam.changeAnimation("samStand4",sam4);
      a.y = a.y+10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].y = array[i].y + 10;
      }

      key.y = key.y + 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].y = array5[z].y + 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].y = array6[k].y + 10;
      }
    }
  }
  
  if(sam.isTouching(box3)){
    sam.collide(box3);
    if(keyDown("right") || keyDown("d")){
      sam.changeAnimation("samStand6",sam6);
      a.x = a.x-10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].x = array[i].x - 10;
      }

      key.x = key.x - 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].x = array5[z].x - 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].x = array6[k].x - 10;
      }
    }
  }
  
  if(sam.isTouching(box4)){
    sam.collide(box4);
    if(keyDown("down") || keyDown("s")){
      sam.changeAnimation("samStand2",sam2);
      a.y = a.y-10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].y = array[i].y - 10;
      }

      key.y = key.y - 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].y = array5[z].y - 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].y = array6[k].y - 10;
      }
    }
  }

  textSize(20);
  text("Press & Hold Hold 'M' to see map , and go to Plant shop.",890,600);
  text("there is a man and buy seeds from it",890,620)
  //text("After feeding it shows green rect, means cow is feeded",890,620);

  if(sam.isTouching(man3)){
    board2.visible = true;
    textSize(30);
    textFont("monospace");
    text("Hello i am sam.",400,290);
    text("Hello sam.",400,330);
    text("I want some seeds of carrots.",400,370);
    text("Ok i'll give you it costs $25.",400,410);
    text("Ok i'll pay,thankyou.",400,450);
    text("welcome.",400,490);
    buy.visible = true;

    if(mousePressedOver(buy)){
     task.visible = true;
     gameState = 4;
     win.play(false);
    }
  }else{
    board2.visible = false;
    buy.visible = false;
  }

}else if(gameState === 4){
   gold = 175;

   

   carrots.visible = true;
   food.visible = true;

   textFont(clockFont);
   fill("black");
   textSize(25);
   text("$",1205,144);
   text(gold + 80,1275,144);

   clocks();
   
   buy.visible = false;
   board2.visible = false;

   fill(rgb(3,0,45));
   textSize(25);
   text("Press & Hold 'M' to see Map and route.",10,600);
   text("Press & Hold 'T' to see tasks.",10,625);
 
   if(keyDown("T")){
     board.visible = true;
     task.visible = false;
 
     fill("black");
     textSize(35);
     textFont("monospace");
     text("Tasks",600,120);
     textSize(25);
     text("1.Buy seeds to grow plants and animal food to feed animals from",225,160);
     text("plant shop by seeing map.",255,190);
     text("2.Grow the plants in the farm.",225,250);
     text("3.Feed the cows in your house's garden.",225,310);
     text("4.See map and go to hardware shop and from shopkeeper buy tools.",225,370);
     text("5.Cut the crops and take the milk from cows and sell it to the",225,430);
     text("general shop.",255,460);
     fill("green");
     text("_____________________________________________________________",255,165);
     text("________________________",255,195);
   }
 
   if(keyWentUp("T")){
     board.visible = false;
   }
 
   for(var n = 0;n<array4.length;n++){
     array4[n].visible = false;
   }
 
   for(var j = 0;j<array1.length;j++){
     array1[j].visible = true;
   }

   for(var z = 1;z<array5.length;z++){
    array5[z].visible = true;
    sam.collide(array5[z]);
  }

  for(var z = 0;z<array5.length;z++){
    sam.collide(array5[z]);
  }
   
   for(var i = 3;i<array.length;i++){
     array[i].visible = false;
    // sam.collide(array[i]);
   }

   for(var s = 0;s<array6.length;s++){
    array6[s].visible = false;
     sam.collide(array6[s]);
   }

   for(var e = 17;e<array.length;e++){
    //array[i].visible = false;
    sam.collide(array[e]);
  }
 
   for(var b = 0;b<array3.length;b++){
     array3[b].visible = true;
   }

   for(var p = 16;p<array3.length;p++){
    sam.collide(array3[p]);
  }
 
   if(keyDown("M")){
     map2.changeAnimation("map1",map3Img);
     map2.visible = true;
     task.visible = false;
   }
 
   if(keyWentUp("M")){
     map2.visible = false;
  }
 
  
  if(keyDown("down") || keyDown("s")){
    changeAnimation(sam,"samStand2",sam2);
    changePosition(0,10,sam);
    task.visible = false;
   }
   
   if(keyWentUp("down") || keyWentUp("s")){
     changeAnimation(sam,"samStand",sam1);
     sam.velocityY = 0;
   }
   
   if(keyDown("up") || keyDown("w")){
     changeAnimation(sam,"samStand4",sam4);
     changePosition(0,-10,sam);
     task.visible = false;
   }
   
   if(keyWentUp("up") || keyWentUp("w")){
     changeAnimation(sam,"samStand3",sam3);
     sam.velocityY = 0;
   }
   
   if(keyDown("right") || keyDown("d")){
     changeAnimation(sam,"samStand6",sam6);
     changePosition(10,0,sam);
     task.visible = false;
   }
   
   if(keyWentUp("right") || keyWentUp("d")){
     changeAnimation(sam,"samStand5",sam5);
     sam.velocityX = 0;
   }
   
   if(keyDown("left") || keyDown("a")){
     changeAnimation(sam,"samStand8",sam8);
     changePosition(-10,0,sam);
     task.visible = false;
   }
   
   if(keyWentUp("left") || keyWentUp("a")){
     changeAnimation(sam,"samStand7",sam7);
     sam.velocityX = 0;
   }
   
   if(sam.isTouching(box1)){
    sam.collide(box1);
    if(keyDown("left") || keyDown("a")){
      sam.changeAnimation("samStand8",sam8);
      a.x = a.x+10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].x = array[i].x + 10;
      }

      key.x = key.x + 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].x = array5[z].x + 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].x = array6[k].x + 10;
      }
    }
  }
  
  if(sam.isTouching(box2)){
    sam.collide(box2);
    if(keyDown("up") || keyDown("w")){
      sam.changeAnimation("samStand4",sam4);
      a.y = a.y+10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].y = array[i].y + 10;
      }

      key.y = key.y + 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].y = array5[z].y + 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].y = array6[k].y + 10;
      }
    }
  }
  
  if(sam.isTouching(box3)){
    sam.collide(box3);
    if(keyDown("right") || keyDown("d")){
      sam.changeAnimation("samStand6",sam6);
      a.x = a.x-10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].x = array[i].x - 10;
      }

      key.x = key.x - 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].x = array5[z].x - 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].x = array6[k].x - 10;
      }
    }
  }
  
  if(sam.isTouching(box4)){
    sam.collide(box4);
    if(keyDown("down") || keyDown("s")){
      sam.changeAnimation("samStand2",sam2);
      a.y = a.y-10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].y = array[i].y - 10;
      }

      key.y = key.y - 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].y = array5[z].y - 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].y = array6[k].y - 10;
      }
    }
  }
   
   textSize(21);
   text("Touch each boxes in farm and press 'F' to sow seeds",890,595);
   text("sow seed in the last box of row 2 in last.",890,620);

   if(sam.isTouching(l2)){
     if(keyDown("f")){
       l2.addAnimation("carrot1",c1);
       l2.addAnimation("carrot2",c2);
       l2.changeAnimation("carrot1",c1);
       l2.scale = 2;
     }
   }

   if(sam.isTouching(l3)){
    if(keyDown("f")){
      l3.addAnimation("carrot1",c1);
      l3.changeAnimation("carrot1",c1);
      l3.scale = 2;
    }
  }

  if(sam.isTouching(l4)){
    if(keyDown("f")){
      l4.addAnimation("carrot1",c1);
      l4.changeAnimation("carrot1",c1);
      l4.scale = 2;
    }
  }

  if(sam.isTouching(l5)){
    if(keyDown("f")){
      l5.addAnimation("carrot1",c1);
      l5.changeAnimation("carrot1",c1);
      l5.scale = 2;
    }
  }

  if(sam.isTouching(l6)){
    if(keyDown("f")){
      l6.addAnimation("carrot1",c1);
      l6.changeAnimation("carrot1",c1);
      l6.scale = 2;
    }
  }

  if(sam.isTouching(l7)){
    if(keyDown("f")){
      l7.addAnimation("carrot1",c1);
      l7.changeAnimation("carrot1",c1);
      l7.scale = 2;
    }
  }

  if(sam.isTouching(l8)){
    if(keyDown("f")){
      l8.addAnimation("carrot1",c1);
      l8.changeAnimation("carrot1",c1);
      l8.scale = 2;
    }
  }

  if(sam.isTouching(l9)){
    if(keyDown("f")){
      l9.addAnimation("carrot1",c1);
      l9.changeAnimation("carrot1",c1);
      l9.scale = 2;
    }
  }

  if(sam.isTouching(l10)){
    if(keyDown("f")){
      l10.addAnimation("carrot1",c1);
      l10.changeAnimation("carrot1",c1);
      l10.scale = 2;
    }
  }

  if(sam.isTouching(l11)){
    if(keyDown("f")){
      l11.addAnimation("carrot1",c1);
      l11.changeAnimation("carrot1",c1);
      l11.scale = 2;
    }
  }

  if(sam.isTouching(l12)){
    if(keyDown("f")){
      l12.addAnimation("carrot1",c1);
      l12.changeAnimation("carrot1",c1);
      l12.scale = 2;
    }
  }

  if(sam.isTouching(l13)){
    if(keyDown("f")){
      l13.addAnimation("carrot1",c1);
      l13.changeAnimation("carrot1",c1);
      l13.scale = 2;
    }
  }

  if(sam.isTouching(l14)){
    if(keyDown("f")){
      l14.addAnimation("carrot1",c1);
      l14.changeAnimation("carrot1",c1);
      l14.scale = 2;
    }
  }

  if(sam.isTouching(l15)){
    if(keyDown("f")){
      l2.addAnimation("carrot1",c1);
      l2.addAnimation("carrot2",c2);
      l2.addAnimation("carrot3",c3);
      l2.scale = 2;
      l3.addAnimation("carrot1",c1);
      l3.addAnimation("carrot2",c2);
      l3.addAnimation("carrot3",c3);
      l3.scale = 2;
      l4.addAnimation("carrot1",c1);
      l4.addAnimation("carrot2",c2);
      l4.addAnimation("carrot3",c3);
      l4.scale = 2;
      l5.addAnimation("carrot1",c1);
      l5.addAnimation("carrot2",c2);
      l5.addAnimation("carrot3",c3);
      l5.scale = 2;
      l6.addAnimation("carrot1",c1);
      l6.addAnimation("carrot2",c2);
      l6.addAnimation("carrot3",c3);
      l6.scale = 2;
      l7.addAnimation("carrot1",c1);
      l7.addAnimation("carrot2",c2);
      l7.addAnimation("carrot3",c3);
      l7.scale = 2;
      l8.addAnimation("carrot1",c1);
      l8.addAnimation("carrot2",c2);
      l8.addAnimation("carrot3",c3);
      l8.scale = 2;
      l9.addAnimation("carrot1",c1);
      l9.addAnimation("carrot2",c2);
      l9.addAnimation("carrot3",c3);
      l9.scale = 2;
      l10.addAnimation("carrot1",c1);
      l10.addAnimation("carrot2",c2);
      l10.addAnimation("carrot3",c3);
      l10.scale = 2;
      l11.addAnimation("carrot1",c1);
      l11.addAnimation("carrot2",c2);
      l11.addAnimation("carrot3",c3);
      l11.scale = 2;
      l12.addAnimation("carrot1",c1);
      l12.addAnimation("carrot2",c2);
      l12.addAnimation("carrot3",c3);
      l12.scale = 2;
      l13.addAnimation("carrot1",c1);
      l13.addAnimation("carrot2",c2);
      l13.addAnimation("carrot3",c3);
      l13.scale = 2;
      l14.addAnimation("carrot1",c1);
      l14.addAnimation("carrot2",c2);
      l14.addAnimation("carrot3",c3);
      l14.scale = 2;
      l15.addAnimation("carrot1",c1);
      l15.addAnimation("carrot2",c2);
      l15.addAnimation("carrot3",c3);
      l15.changeAnimation("carrot1",c1);
      l15.scale = 2;
      gameState = 5;
      task.visible = true;
      win.play(false);
    }
  }  
}else if(gameState === 5){
  /*

  STARTING OF TASK 2
  STARTING OF TASK 2
  STARTING OF TASK 2
  */
/*
  STARTING OF TASK 3
  STARTING OF TASK 3
  STARTING OF TASK 3
*/
  gold = 255;
  carrots.visible = false;
  food.x = 485;
  
   textFont(clockFont);
   fill("black");
   textSize(25);
   text("$",1205,144);
   text(gold+80,1275,144);

   clocks();

  l2.changeAnimation("carrot1",c1);
  l3.changeAnimation("carrot1",c1);
  l4.changeAnimation("carrot1",c1);
  l5.changeAnimation("carrot1",c1);
  l6.changeAnimation("carrot1",c1);
  l7.changeAnimation("carrot1",c1);
  l8.changeAnimation("carrot1",c1);
  l9.changeAnimation("carrot1",c1);
  l10.changeAnimation("carrot1",c1);
  l11.changeAnimation("carrot1",c1);
  l12.changeAnimation("carrot1",c1);
  l13.changeAnimation("carrot1",c1);
  l14.changeAnimation("carrot1",c1);
  l15.changeAnimation("carrot1",c1);
   
   next.visible = false;
   board2.visible = false;

   fill(rgb(3,0,45));
   textSize(25);
   text("Press & Hold 'M' to see Map and route.",10,600);
   text("Press & Hold 'T' to see tasks.",10,625);

   textSize(15);
   text("Touch cow1 and press 'F' to feed and then cow2. first feed cow 1 and then cow 2",890,590);
   text("cow 2.",890,605)
   text("After feeding it shows green rect, means cow is feeded",890,620);
 
   if(keyDown("T")){
     board.visible = true;
     task.visible = false;
 
     fill("black");
     textSize(35);
     textFont("monospace");
     text("Tasks",600,120);
     textSize(25);
     text("1.Buy seeds to grow plants and animal food to feed animals from",225,160);
     text("plant shop by seeing map.",255,190);
     text("2.Grow the plants in the farm.",225,250);
     text("3.Feed the cows in your house's garden.",225,310);
     text("4.See map and go to hardware shop and from shopkeeper buy tools.",225,370);
     text("5.Cut the crops and take the milk from cows and sell it to the",225,430);
     text("general shop.",255,460);
     fill("green");
     text("_____________________________________________________________",255,165);
     text("________________________",255,195);
     text("___________________________",255,255);
   }
 
   if(keyWentUp("T")){
     board.visible = false;
   }
 
   for(var n = 0;n<array4.length;n++){
     array4[n].visible = false;
   }
 
   for(var j = 0;j<array1.length;j++){
     array1[j].visible = true;
   }
   
   for(var z = 1;z<array5.length;z++){
    array5[z].visible = true;
    sam.collide(array5[z]);
  }

  for(var z = 0;z<array5.length;z++){
    sam.collide(array5[z]);
  }
  
  for(var i = 24;i<array.length;i++){
    array[i].visible = false;
  }

  for(var s = 0;s<array6.length;s++){
    array6[s].visible = false;
     sam.collide(array6[s]);
   }

  for(var b = 0;b<array3.length;b++){
    array3[b].visible = true;
  }

  for(var o = 24;o<array.length;o++){
    array[o].visible = false;
    sam.collide(array[o]);
  }

  for(var r = 16;r<array3.length;r++){
    sam.collide(array3[r]);
  }

   if(keyDown("M")){
     map2.changeAnimation("map2",map4Img);
     map2.visible = true;
     task.visible = false;
   }
 
   if(keyWentUp("M")){
     map2.visible = false;
  }
 
  
  if(keyDown("down") || keyDown("s")){
    changeAnimation(sam,"samStand2",sam2);
    changePosition(0,10,sam);
    task.visible = false;
   }
   
   if(keyWentUp("down") || keyWentUp("s")){
     changeAnimation(sam,"samStand",sam1);
     sam.velocityY = 0;
   }
   
   if(keyDown("up") || keyDown("w")){
     changeAnimation(sam,"samStand4",sam4);
     changePosition(0,-10,sam);
     task.visible = false;
   }
   
   if(keyWentUp("up") || keyWentUp("w")){
     changeAnimation(sam,"samStand3",sam3);
     sam.velocityY = 0;
   }
   
   if(keyDown("right") || keyDown("d")){
     changeAnimation(sam,"samStand6",sam6);
     changePosition(10,0,sam);
     task.visible = false;
   }
   
   if(keyWentUp("right") || keyWentUp("d")){
     changeAnimation(sam,"samStand5",sam5);
     sam.velocityX = 0;
   }
   
   if(keyDown("left") || keyDown("a")){
     changeAnimation(sam,"samStand8",sam8);
     changePosition(-10,0,sam);
     task.visible = false;
   }
   
   if(keyWentUp("left") || keyWentUp("a")){
     changeAnimation(sam,"samStand7",sam7);
     sam.velocityX = 0;
   }
   
   if(sam.isTouching(box1)){
    sam.collide(box1);
    if(keyDown("left") || keyDown("a")){
      sam.changeAnimation("samStand8",sam8);
      a.x = a.x+10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].x = array[i].x + 10;
      }

      key.x = key.x + 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].x = array5[z].x + 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].x = array6[k].x + 10;
      }
    }
  }
  
  if(sam.isTouching(box2)){
    sam.collide(box2);
    if(keyDown("up") || keyDown("w")){
      sam.changeAnimation("samStand4",sam4);
      a.y = a.y+10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].y = array[i].y + 10;
      }

      key.y = key.y + 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].y = array5[z].y + 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].y = array6[k].y + 10;
      }
    }
  }
  
  if(sam.isTouching(box3)){
    sam.collide(box3);
    if(keyDown("right") || keyDown("d")){
      sam.changeAnimation("samStand6",sam6);
      a.x = a.x-10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].x = array[i].x - 10;
      }

      key.x = key.x - 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].x = array5[z].x - 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].x = array6[k].x - 10;
      }
    }
  }
  
  if(sam.isTouching(box4)){
    sam.collide(box4);
    if(keyDown("down") || keyDown("s")){
      sam.changeAnimation("samStand2",sam2);
      a.y = a.y-10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].y = array[i].y - 10;
      }

      key.y = key.y - 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].y = array5[z].y - 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].y = array6[k].y - 10;
      }
    }
  }

 // l16 = createSprite(-800,380,30,10);

  if(sam.isTouching(pig1)){
    if(keyDown("f")){
      l16.visible = true;
    }
  }

  if(sam.isTouching(pig2)){
    if(keyDown("f")){
      l17.visible = true;
      l16.visible = true;
      gameState = 6;
      task.visible = true;
      win.play(false);
    }
  }
 /*
  START OF TASK 4 
  START OF TASK 4
  START OF TASK 4
*/
 }else if(gameState === 6){
  task.visible = false;
  gold = 335

  textFont(clockFont);
  fill("black");
  textSize(25);
  text("$",1205,144);
  text(gold+80,1275,144);
  
  food.visible = false;

  l2.changeAnimation("carrot2",c2);
  l3.changeAnimation("carrot2",c2);
  l4.changeAnimation("carrot2",c2);
  l5.changeAnimation("carrot2",c2);
  l6.changeAnimation("carrot2",c2);
  l7.changeAnimation("carrot2",c2);
  l8.changeAnimation("carrot2",c2);
  l9.changeAnimation("carrot2",c2);
  l10.changeAnimation("carrot2",c2);
  l11.changeAnimation("carrot2",c2);
  l12.changeAnimation("carrot2",c2);
  l13.changeAnimation("carrot2",c2);
  l14.changeAnimation("carrot2",c2);
  l15.changeAnimation("carrot2",c2);

  clocks();
  
  next.visible = false;
  board2.visible = false;

  textSize(20);
  text("By seeing map go to hardware shop.",890,600);
  text("there is a man buy tools form it.",890,620);
 // text("After feeding it shows green rect, means cow is feeded",890,620);

  fill(rgb(3,0,45));
  textSize(25);
  text("Press & Hold 'M' to see Map and route.",10,600);
  text("Press & Hold 'T' to see tasks.",10,625);

  if(keyDown("T")){
    board.visible = true;
    task.visible = false;

    fill("black");
    textSize(35);
    textFont("monospace");
    text("Tasks",600,120);
    textSize(25);
    text("1.Buy seeds to grow plants and animal food to feed animals from",225,160);
    text("plant shop by seeing map.",255,190);
    text("2.Grow the plants in the farm.",225,250);
    text("3.Feed the cows in your house's garden.",225,310);
    text("4.See map and go to hardware shop and from shopkeeper buy tools.",225,370);
    text("5.Cut the crops and take the milk from cows and sell it to the",225,430);
    text("general shop.",255,460);
    fill("green");
    text("_____________________________________________________________",255,165);
    text("________________________",255,195);
    text("___________________________",255,255);
    text("____________________________________",255,315);
  }

  if(keyWentUp("T")){
    board.visible = false;
  }

  for(var n = 0;n<array4.length;n++){
    array4[n].visible = false;
  }

  for(var j = 0;j<array1.length;j++){
    array1[j].visible = true;
  }
  
  for(var z = 1;z<array5.length;z++){
    array5[z].visible = true;
    sam.collide(array5[z]);
  }

  for(var z = 0;z<array5.length;z++){
    sam.collide(array5[z]);
  }
 
 for(var i = 24;i<array.length;i++){
   array[i].visible = false;
 }

 for(var s = 0;s<array6.length;s++){
  array6[s].visible = false;
   sam.collide(array6[s]);
 }

 for(var b = 0;b<array3.length;b++){
   array3[b].visible = true;
 }

 for(var o = 24;o<array.length;o++){
   array[o].visible = false;
   sam.collide(array[o]);
 }

 for(var r = 16;r<array3.length;r++){
   sam.collide(array3[r]);
 }

  if(keyDown("M")){
    map2.changeAnimation("map3",map5Img);
    map2.visible = true;
    task.visible = false;
  }

  if(keyWentUp("M")){
    map2.visible = false;
 }

 
 if(keyDown("down") || keyDown("s")){
   changeAnimation(sam,"samStand2",sam2);
   changePosition(0,10,sam);
   task.visible = false;
  }
  
  if(keyWentUp("down") || keyWentUp("s")){
    changeAnimation(sam,"samStand",sam1);
    sam.velocityY = 0;
  }
  
  if(keyDown("up") || keyDown("w")){
    changeAnimation(sam,"samStand4",sam4);
    changePosition(0,-10,sam);
    task.visible = false;
  }
  
  if(keyWentUp("up") || keyWentUp("w")){
    changeAnimation(sam,"samStand3",sam3);
    sam.velocityY = 0;
  }
  
  if(keyDown("right") || keyDown("d")){
    changeAnimation(sam,"samStand6",sam6);
    changePosition(10,0,sam);
    task.visible = false;
  }
  
  if(keyWentUp("right") || keyWentUp("d")){
    changeAnimation(sam,"samStand5",sam5);
    sam.velocityX = 0;
  }
  
  if(keyDown("left") || keyDown("a")){
    changeAnimation(sam,"samStand8",sam8);
    changePosition(-10,0,sam);
    task.visible = false;
  }
  
  if(keyWentUp("left") || keyWentUp("a")){
    changeAnimation(sam,"samStand7",sam7);
    sam.velocityX = 0;
  }
  
  if(sam.isTouching(box1)){
    sam.collide(box1);
    if(keyDown("left") || keyDown("a")){
      sam.changeAnimation("samStand8",sam8);
      a.x = a.x+10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].x = array[i].x + 10;
      }

      key.x = key.x + 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].x = array5[z].x + 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].x = array6[k].x + 10;
      }
    }
  }
  
  if(sam.isTouching(box2)){
    sam.collide(box2);
    if(keyDown("up") || keyDown("w")){
      sam.changeAnimation("samStand4",sam4);
      a.y = a.y+10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].y = array[i].y + 10;
      }

      key.y = key.y + 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].y = array5[z].y + 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].y = array6[k].y + 10;
      }
    }
  }
  
  if(sam.isTouching(box3)){
    sam.collide(box3);
    if(keyDown("right") || keyDown("d")){
      sam.changeAnimation("samStand6",sam6);
      a.x = a.x-10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].x = array[i].x - 10;
      }

      key.x = key.x - 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].x = array5[z].x - 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].x = array6[k].x - 10;
      }
    }
  }
  
  if(sam.isTouching(box4)){
    sam.collide(box4);
    if(keyDown("down") || keyDown("s")){
      sam.changeAnimation("samStand2",sam2);
      a.y = a.y-10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].y = array[i].y - 10;
      }

      key.y = key.y - 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].y = array5[z].y - 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].y = array6[k].y - 10;
      }
    }
  }
  if(sam.isTouching(man4)){
    board2.visible = true;
    task.visible = false;
   // task2.visible = false;
    textSize(23);
    textFont("monospace");
    text("Hello i am sam.",400,290);
    text("I need to go can you open the gate?",400,330);
    text("I can't open it i lost its keys.",400,370);
    text("Can you find them,i lost them on beach.",400,410);
    text("Ok i'll find.",400,450);
    text("welcome.",400,490);
    Ok.visible = true

    if(mousePressedOver(Ok)){
     //task2.visible = true;
     gameState = 7;
    }
   }else{
    board2.visible = false;
    Ok.visible = false;
    //task2.visible = false;
   }

 }else if(gameState === 7){
  //task2.visible = true;
  gold = 335;

 // map2.changeAnimation("map5",map7Img);
//
key.visible = true;

  textFont(clockFont);
  fill("black");
  textSize(25);
  text("$",1205,144);
  text(gold+80,1275,144);
  
  food.visible = false;

  l2.changeAnimation("carrot2",c2);
  l3.changeAnimation("carrot2",c2);
  l4.changeAnimation("carrot2",c2);
  l5.changeAnimation("carrot2",c2);
  l6.changeAnimation("carrot2",c2);
  l7.changeAnimation("carrot2",c2);
  l8.changeAnimation("carrot2",c2);
  l9.changeAnimation("carrot2",c2);
  l10.changeAnimation("carrot2",c2);
  l11.changeAnimation("carrot2",c2);
  l12.changeAnimation("carrot2",c2);
  l13.changeAnimation("carrot2",c2);
  l14.changeAnimation("carrot2",c2);
  l15.changeAnimation("carrot2",c2);

  clocks();
  
  Ok.visible = false;
  board2.visible = false;

  textSize(22);
  fill("darkGreen");
  text("*new*",1250,605);
  fill(rgb(3,0,45));
  text("See map and go to beach & find the key.",890,600);
  text("Press 'C' to take the key",890,620);
  
 // text("After feeding it shows green rect, means cow is feeded",890,620);

  fill(rgb(3,0,45));
  textSize(25);
  text("Press & Hold 'M' to see map.",10,600);
  text("Press & Hold 'T' to see tasks.",10,625);

  if(keyDown("T")){
    board.visible = true;
    //task2.visible = false;

    fill("black");
    textSize(35);
    textFont("monospace");
    text("Tasks",600,120);
    textSize(25);
    text("1.Buy seeds to grow plants and animal food to feed animals from",225,160);
    text("plant shop by seeing map.",255,190);
    text("2.Grow the plants in the farm.",225,250);
    text("3.Feed the cows in your house's garden.",225,310);
    text("4.See map and go to hardware shop and from shopkeeper buy tools.",225,440);
    text("5.Cut the crops and take the milk from cows and sell it to the",225,490);
    text("general shop.",255,520);
    fill("green");
    text("_____________________________________________________________",255,165);
    text("________________________",255,195);
    text("___________________________",255,255);
    text("____________________________________",255,315);
    text("*new ",235,360);
    text(" go to beach and find the key",235,390);
  }

  if(keyWentUp("T")){
    board.visible = false;
    //task2.visible = false;
  }

  for(var n = 0;n<array4.length;n++){
    array4[n].visible = false;
  }

  for(var j = 0;j<array1.length;j++){
    array1[j].visible = true;
  }
  
  for(var z = 1;z<array5.length;z++){
    array5[z].visible = true;
    sam.collide(array5[z]);
  }

  for(var z = 0;z<array5.length;z++){
    sam.collide(array5[z]);
  }
 
 for(var i = 24;i<array.length;i++){
   array[i].visible = false;
 }

 for(var s = 0;s<array6.length;s++){
  array6[s].visible = false;
   sam.collide(array6[s]);
 }

 for(var b = 0;b<array3.length;b++){
   array3[b].visible = true;
 }

 for(var o = 24;o<array.length;o++){
   array[o].visible = false;
   sam.collide(array[o]);
 }

 for(var r = 16;r<array3.length;r++){
   sam.collide(array3[r]);
 }

  if(keyDown("M")){
    map2.changeAnimation("map5",map7Img);
    map2.visible = true;
   //task2.visible = false;
  }

  if(keyWentUp("M")){
    map2.visible = false;
    //task2.visible = false;
 }

 
 if(keyDown("down") || keyDown("s")){
   changeAnimation(sam,"samStand2",sam2);
   changePosition(0,10,sam);
   //task2.visible = false;
  }
  
  if(keyWentUp("down") || keyWentUp("s")){
    changeAnimation(sam,"samStand",sam1);
    sam.velocityY = 0;
    //task2.visible = false;
  }
  
  if(keyDown("up") || keyDown("w")){
    changeAnimation(sam,"samStand4",sam4);
    changePosition(0,-10,sam);
    //task2.visible = false;
  }
  
  if(keyWentUp("up") || keyWentUp("w")){
    changeAnimation(sam,"samStand3",sam3);
    sam.velocityY = 0;
    //task2.visible = false;
  }
  
  if(keyDown("right") || keyDown("d")){
    changeAnimation(sam,"samStand6",sam6);
    changePosition(10,0,sam);
    //task2.visible = false;
  }
  
  if(keyWentUp("right") || keyWentUp("d")){
    changeAnimation(sam,"samStand5",sam5);
    sam.velocityX = 0;
    //task2.visible = false;
  }
  
  if(keyDown("left") || keyDown("a")){
    changeAnimation(sam,"samStand8",sam8);
    changePosition(-10,0,sam);
    //task2.visible = false;
  }
  
  if(keyWentUp("left") || keyWentUp("a")){
    changeAnimation(sam,"samStand7",sam7);
    sam.velocityX = 0;
    //task2.visible = false;
  }
  
  if(sam.isTouching(box1)){
    sam.collide(box1);
    if(keyDown("left") || keyDown("a")){
      sam.changeAnimation("samStand8",sam8);
      a.x = a.x+10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].x = array[i].x + 10;
      }

      key.x = key.x + 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].x = array5[z].x + 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].x = array6[k].x + 10;
      }
    }
  }
  
  if(sam.isTouching(box2)){
    sam.collide(box2);
    if(keyDown("up") || keyDown("w")){
      sam.changeAnimation("samStand4",sam4);
      a.y = a.y+10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].y = array[i].y + 10;
      }

      key.y = key.y + 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].y = array5[z].y + 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].y = array6[k].y + 10;
      }
    }
  }
  
  if(sam.isTouching(box3)){
    sam.collide(box3);
    if(keyDown("right") || keyDown("d")){
      sam.changeAnimation("samStand6",sam6);
      a.x = a.x-10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].x = array[i].x - 10;
      }

      key.x = key.x - 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].x = array5[z].x - 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].x = array6[k].x - 10;
      }
    }
  }
  
  if(sam.isTouching(box4)){
    sam.collide(box4);
    if(keyDown("down") || keyDown("s")){
      sam.changeAnimation("samStand2",sam2);
      a.y = a.y-10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].y = array[i].y - 10;
      }

      key.y = key.y - 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].y = array5[z].y - 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].y = array6[k].y - 10;
      }
    }
  }
  if(sam.isTouching(key)){
    board2.visible = true;
    task.visible = false;
    textSize(30);
    textFont("monospace");
    text("Ahh! finally found the key.",400,290);
    
    Ok.visible = true;
   
    if(mousePressedOver(Ok)){
     task.visible = true;
     key.visible = false;
     gameState = 8;
     win.play(false);
    }
   }else{
    board2.visible = false;
    Ok.visible = false;
    task.visible = false;
   }
 }else if(gameState === 8){

  gold = 352;

  textFont(clockFont);
  fill("black");
  textSize(25);
  text("$",1205,144);
  text(gold+80,1275,144);

  clocks();

  textSize(20);
  text("See map & Go to hardware shop and buy tools",885,600);

  fill(rgb(3,0,45));
  textSize(25);
  text("Press & Hold 'M' to see Map and route.",10,600);
  text("Press & Hold 'T' to see tasks.",10,625);

  if(keyDown("T")){
    board.visible = true;
    task.visible = false;

    fill("black");
    textSize(35);
    textFont("monospace");
    text("Tasks",600,120);
    textSize(25);
    text("1.Buy seeds to grow plants and animal food to feed animals from",225,160);
    text("plant shop by seeing map.",255,190);
    text("2.Grow the plants in the farm.",225,250);
    text("3.Feed the cows in your house's garden.",225,310);
    text("4.See map and go to hardware shop and from shopkeeper buy tools.",225,370);
    text("5.Cut the crops and take the milk from cows and sell it to the",225,430);
    text("general shop.",255,460);
    fill("green");
    text("_____________________________________________________________",255,165);
    text("________________________",255,195);
    text("___________________________",255,255);
    text("_____________________________________",255,315);
    
  }

  if(keyWentUp("T")){
    board.visible = false;
  }

  for(var n = 0;n<array4.length;n++){
    array4[n].visible = false;
  }

  for(var j = 0;j<array1.length;j++){
    array1[j].visible = true;
  }
  
  for(var z = 1;z<array5.length;z++){
    array5[z].visible = true;
    sam.collide(array5[z]);
  }

  for(var z = 0;z<array5.length;z++){
    sam.collide(array5[z]);
  }
 
 for(var i = 24;i<array.length;i++){
   array[i].visible = false;
 }

 for(var s = 0;s<array6.length;s++){
  array6[s].visible = false;
   sam.collide(array6[s]);
 }

 for(var b = 0;b<array3.length;b++){
   array3[b].visible = true;
 }

 for(var o = 24;o<array.length;o++){
   array[o].visible = false;
   sam.collide(array[o]);
 }

 for(var r = 16;r<array3.length;r++){
   sam.collide(array3[r]);
 }

  if(keyDown("M")){
    map2.changeAnimation("map5",map7Img);
    map2.visible = true;
    task.visible = false;
  }

  if(keyWentUp("M")){
    map2.visible = false;
 }

 
 if(keyDown("down") || keyDown("s")){
   changeAnimation(sam,"samStand2",sam2);
   changePosition(0,10,sam);
   task.visible = false;
  }
  
  if(keyWentUp("down") || keyWentUp("s")){
    changeAnimation(sam,"samStand",sam1);
    sam.velocityY = 0;
  }
  
  if(keyDown("up") || keyDown("w")){
    changeAnimation(sam,"samStand4",sam4);
    changePosition(0,-10,sam);
    task.visible = false;
  }
  
  if(keyWentUp("up") || keyWentUp("w")){
    changeAnimation(sam,"samStand3",sam3);
    sam.velocityY = 0;
  }
  
  if(keyDown("right") || keyDown("d")){
    changeAnimation(sam,"samStand6",sam6);
    changePosition(10,0,sam);
    task.visible = false;
  }
  
  if(keyWentUp("right") || keyWentUp("d")){
    changeAnimation(sam,"samStand5",sam5);
    sam.velocityX = 0;
  }
  
  if(keyDown("left") || keyDown("a")){
    changeAnimation(sam,"samStand8",sam8);
    changePosition(-10,0,sam);
    task.visible = false;
  }
  
  if(keyWentUp("left") || keyWentUp("a")){
    changeAnimation(sam,"samStand7",sam7);
    sam.velocityX = 0;
  }
  
  if(sam.isTouching(box1)){
    sam.collide(box1);
    if(keyDown("left") || keyDown("a")){
      sam.changeAnimation("samStand8",sam8);
      a.x = a.x+10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].x = array[i].x + 10;
      }

      key.x = key.x + 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].x = array5[z].x + 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].x = array6[k].x + 10;
      }
    }
  }
  
  if(sam.isTouching(box2)){
    sam.collide(box2);
    if(keyDown("up") || keyDown("w")){
      sam.changeAnimation("samStand4",sam4);
      a.y = a.y+10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].y = array[i].y + 10;
      }

      key.y = key.y + 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].y = array5[z].y + 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].y = array6[k].y + 10;
      }
    }
  }
  
  if(sam.isTouching(box3)){
    sam.collide(box3);
    if(keyDown("right") || keyDown("d")){
      sam.changeAnimation("samStand6",sam6);
      a.x = a.x-10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].x = array[i].x - 10;
      }

      key.x = key.x - 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].x = array5[z].x - 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].x = array6[k].x - 10;
      }
    }
  }
  
  if(sam.isTouching(box4)){
    sam.collide(box4);
    if(keyDown("down") || keyDown("s")){
      sam.changeAnimation("samStand2",sam2);
      a.y = a.y-10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].y = array[i].y - 10;
      }

      key.y = key.y - 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].y = array5[z].y - 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].y = array6[k].y - 10;
      }
    }
  }

  if(sam.isTouching(man4)){
    board2.visible = true;
    Ok.visible = true;
    textSize(25);
    textFont("monospace");
    text("Hello i found the key.",400,290);
    text("Ok i'll open the gate.",400,330);
 
    if(mousePressedOver(Ok)){
      board2.visible = false;
      Ok.visible = false;
      gameState = 9;
      win.play(false);
    }
  }else {
  Ok.visible = false;
  board2.visible = false;
 }
 }else if(gameState === 9){

  a.changeAnimation("backGround2",Map8Img);
 // bg3.scale = 1.1;
  gold = 352;

  textFont(clockFont);
  fill("black");
  textSize(25);
  text("$",1205,144);
  text(gold+80,1275,144);

 
  clocks();
  
  Ok.visible = false;  
  board2.visible = false;

  textSize(20);
  text("See map & Go to hardware shop and buy tools",885,600);


  fill(rgb(3,0,45));
  textSize(25);
  text("Press & Hold 'M' to see Map and route.",10,600);
  text("Press & Hold 'T' to see tasks.",10,625);

  if(keyDown("T")){
    board.visible = true;
    task.visible = false;

    fill("black");
    textSize(35);
    textFont("monospace");
    text("Tasks",600,120);
    textSize(25);
    text("1.Buy seeds to grow plants and animal food to feed animals from",225,160);
    text("plant shop by seeing map.",255,190);
    text("2.Grow the plants in the farm.",225,250);
    text("3.Feed the cows in your house's garden.",225,310);
    text("4.See map and go to hardware shop and from shopkeeper buy tools.",225,370);
    text("5.Cut the crops and take the milk from cows and sell it to the",225,430);
    text("general shop.",255,460);
    fill("green");
    text("_____________________________________________________________",255,165);
    text("________________________",255,195);
    text("___________________________",255,255);
    text("_____________________________________",255,315);
    
  }

  if(keyWentUp("T")){
    board.visible = false;
  }

  for(var n = 0;n<array4.length;n++){
    array4[n].visible = false;
  }

  for(var j = 0;j<array1.length;j++){
    array1[j].visible = true;
  }
  
  for(var z = 1;z<array5.length;z++){
    array5[z].visible = true;
    //sam.collide(array5[z]);
  }

  
 
 for(var i = 24;i<array.length;i++){
   array[i].visible = false;
 }

 for(var s = 0;s<array6.length;s++){
  array6[s].visible = false;
   sam.collide(array6[s]);
 }

 for(var b = 0;b<array3.length;b++){
   array3[b].visible = true;
 }

 for(var o = 24;o<array.length;o++){
   array[o].visible = false;
   sam.collide(array[o]);
 }

 for(var r = 16;r<array3.length;r++){
   sam.collide(array3[r]);
 }

  if(keyDown("M")){
    map2.changeAnimation("map5",map7Img);
    map2.visible = true;
    task.visible = false;
  }

  if(keyWentUp("M")){
    map2.visible = false;
 }

 
 if(keyDown("down") || keyDown("s")){
   changeAnimation(sam,"samStand2",sam2);
   changePosition(0,10,sam);
   task.visible = false;
  }
  
  if(keyWentUp("down") || keyWentUp("s")){
    changeAnimation(sam,"samStand",sam1);
    sam.velocityY = 0;
  }
  
  if(keyDown("up") || keyDown("w")){
    changeAnimation(sam,"samStand4",sam4);
    changePosition(0,-10,sam);
    task.visible = false;
  }
  
  if(keyWentUp("up") || keyWentUp("w")){
    changeAnimation(sam,"samStand3",sam3);
    sam.velocityY = 0;
  }
  
  if(keyDown("right") || keyDown("d")){
    changeAnimation(sam,"samStand6",sam6);
    changePosition(10,0,sam);
    task.visible = false;
  }
  
  if(keyWentUp("right") || keyWentUp("d")){
    changeAnimation(sam,"samStand5",sam5);
    sam.velocityX = 0;
  }
  
  if(keyDown("left") || keyDown("a")){
    changeAnimation(sam,"samStand8",sam8);
    changePosition(-10,0,sam);
    task.visible = false;
  }
  
  if(keyWentUp("left") || keyWentUp("a")){
    changeAnimation(sam,"samStand7",sam7);
    sam.velocityX = 0;
  }
  
  if(sam.isTouching(box1)){
    sam.collide(box1);
    if(keyDown("left") || keyDown("a")){
      sam.changeAnimation("samStand8",sam8);
      a.x = a.x+10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].x = array[i].x + 10;
      }

      key.x = key.x + 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].x = array5[z].x + 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].x = array6[k].x + 10;
      }
    }
  }
  
  if(sam.isTouching(box2)){
    sam.collide(box2);
    if(keyDown("up") || keyDown("w")){
      sam.changeAnimation("samStand4",sam4);
      a.y = a.y+10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].y = array[i].y + 10;
      }

      key.y = key.y + 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].y = array5[z].y + 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].y = array6[k].y + 10;
      }
    }
  }
  
  if(sam.isTouching(box3)){
    sam.collide(box3);
    if(keyDown("right") || keyDown("d")){
      sam.changeAnimation("samStand6",sam6);
      a.x = a.x-10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].x = array[i].x - 10;
      }

      key.x = key.x - 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].x = array5[z].x - 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].x = array6[k].x - 10;
      }
    }
  }
  
  if(sam.isTouching(box4)){
    sam.collide(box4);
    if(keyDown("down") || keyDown("s")){
      sam.changeAnimation("samStand2",sam2);
      a.y = a.y-10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].y = array[i].y - 10;
      }

      key.y = key.y - 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].y = array5[z].y - 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].y = array6[k].y - 10;
      }
    }
  }

  if(sam.isTouching(man1)){
    board2.visible = true;
    buy.visible = true;
    textSize(25);
    textFont("monospace");
    text("hello i want to buy tools",400,290);
    text("Ok i'll give.",400,330);
 
    if(mousePressedOver(buy)){
      board2.visible = false;
      buy.visible = false;
      gameState = 10;
      win.play(false);
    }
  }else {
  buy.visible = false;
  board2.visible = false;
 }
 }else if(gameState === 10){
  gold = 525;

  textFont(clockFont);
  fill("black");
  textSize(25);
  text("$",1205,144);
  text(gold,1275,144);

  pickaxe.visible = true;
  hoe.visible = true;
  food.visible = false;
  
  clocks();
  
  next.visible = false;
  board2.visible = false;

  textSize(20);
  text("Cut the crops and take the milk from cows.",890,600);
  text("Press 'C' to take",890,620);

  fill(rgb(3,0,45));
  textSize(25);
  text("Press & Hold 'M' to see Map and routes.",10,600);
  text("Press & Hold 'T' to see tasks.",10,625);

  if(keyDown("T")){
    board.visible = true;
    task.visible = false;

    fill("black");
    textSize(35);
    textFont("monospace");
    text("Tasks",600,120);
    textSize(25);
    text("1.Buy seeds to grow plants and animal food to feed animals from",225,160);
    text("plant shop by seeing map.",255,190);
    text("2.Grow the plants in the farm.",225,250);
    text("3.Feed the cows in your house's garden.",225,310);
    text("4.See map and go to hardware shop and from shopkeeper buy tools.",225,370);
    text("5.Cut the crops and take the milk from cows and sell it to the",225,430);
    text("general shop.",255,460);
    fill("green");
    text("_____________________________________________________________",255,165);
    text("________________________",255,195);
    text("___________________________",255,255);
    text("_____________________________________",255,315);
    text("_____________________________________________________________",255,375);
  }

  if(keyWentUp("T")){
    board.visible = false;
  }

  for(var n = 0;n<array4.length;n++){
    array4[n].visible = false;
  }

  for(var j = 0;j<array1.length;j++){
    array1[j].visible = true;
  }

  for(var z = 0;z<array5.length;z++){
    //array5[z].visible = true;
    //sam.collide(array5[z]);
  }
  
 
 for(var i = 24;i<array.length;i++){
   array[i].visible = false;
 }

 for(var s = 0;s<array6.length;s++){
  array6[s].visible = false;
   sam.collide(array6[s]);
 }

 for(var b = 0;b<array3.length;b++){
   array3[b].visible = true;
 }

 for(var o = 24;o<array.length;o++){
   array[o].visible = false;
   sam.collide(array[o]);
 }

 for(var r = 16;r<array3.length;r++){
   sam.collide(array3[r]);
 }

  if(keyDown("M")){
    map2.changeAnimation("map4",map6Img);
    map2.visible = true;
    task.visible = false;
  }

  if(keyWentUp("M")){
    map2.visible = false;
 }   
 
 if(keyDown("down") || keyDown("s")){
   changeAnimation(sam,"samStand2",sam2);
   changePosition(0,10,sam);
   gameState = 10;
  }
  
  if(keyWentUp("down") || keyWentUp("s")){
    changeAnimation(sam,"samStand",sam1);
    sam.velocityY = 0;
  }
  
  if(keyDown("up") || keyDown("w")){
    changeAnimation(sam,"samStand4",sam4);
    changePosition(0,-10,sam);
    gameState = 10;
  }
  
  if(keyWentUp("up") || keyWentUp("w")){
    changeAnimation(sam,"samStand3",sam3);
    sam.velocityY = 0;
  }
  
  if(keyDown("right") || keyDown("d")){
    changeAnimation(sam,"samStand6",sam6);
    changePosition(10,0,sam);
    gameState = 10;
  }
  
  if(keyWentUp("right") || keyWentUp("d")){
    changeAnimation(sam,"samStand5",sam5);
    sam.velocityX = 0;
  }
  
  if(keyDown("left") || keyDown("a")){
    changeAnimation(sam,"samStand8",sam8);
    changePosition(-10,0,sam);
    gameState = 10;
  }
  
  if(keyWentUp("left") || keyWentUp("a")){
    changeAnimation(sam,"samStand7",sam7);
    sam.velocityX = 0;
  }
  
  if(sam.isTouching(box1)){
    sam.collide(box1);
    if(keyDown("left") || keyDown("a")){
      sam.changeAnimation("samStand8",sam8);
      a.x = a.x+10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].x = array[i].x + 10;
      }

      key.x = key.x + 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].x = array5[z].x + 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].x = array6[k].x + 10;
      }
    }
  }
  
  if(sam.isTouching(box2)){
    sam.collide(box2);
    if(keyDown("up") || keyDown("w")){
      sam.changeAnimation("samStand4",sam4);
      a.y = a.y+10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].y = array[i].y + 10;
      }

      key.y = key.y + 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].y = array5[z].y + 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].y = array6[k].y + 10;
      }
    }
  }
  
  if(sam.isTouching(box3)){
    sam.collide(box3);
    if(keyDown("right") || keyDown("d")){
      sam.changeAnimation("samStand6",sam6);
      a.x = a.x-10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].x = array[i].x - 10;
      }

      key.x = key.x - 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].x = array5[z].x - 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].x = array6[k].x - 10;
      }
    }
  }
  
  if(sam.isTouching(box4)){
    sam.collide(box4);
    if(keyDown("down") || keyDown("s")){
      sam.changeAnimation("samStand2",sam2);
      a.y = a.y-10;

      //task2.visible = false;
      
      for(var i = 0;i<array.length;i++){
        array[i].y = array[i].y - 10;
      }

      key.y = key.y - 10;

      for(var z = 0;z<array5.length;z++){
        array5[z].y = array5[z].y - 10;
      }

      for(var k = 0;k<array6.length;k++){
        array6[k].y = array6[k].y - 10;
      }
    }
  }

  if(sam.isTouching(l2)){
    if(keyDown("c")){
      l2.scale = 0.1;
    }
  }

  if(sam.isTouching(l3)){
    if(keyDown("c")){
      l3.scale = 0.1;
    }
 }

 if(sam.isTouching(l4)){
  if(keyDown("c")){
    l4.scale = 0.1;
  }
 }

 if(sam.isTouching(l5)){
  if(keyDown("c")){
    l5.scale = 0.1;
  }
 }

 if(sam.isTouching(l6)){
  if(keyDown("c")){
    l6.scale = 0.1;
  }
 }

 if(sam.isTouching(l7)){
  if(keyDown("c")){
    l7.scale = 0.1;
  }
 }

 if(sam.isTouching(l8)){
  if(keyDown("c")){
    l8.scale = 0.1;
  }
 }

 if(sam.isTouching(l9)){
  if(keyDown("c")){
    l9.scale = 0.1;
  }
 }

 if(sam.isTouching(l10)){
  if(keyDown("c")){
    l10.scale = 0.1;
  }
 }

 if(sam.isTouching(l11)){
  if(keyDown("c")){
    l11.scale = 0.1;
  }
 }

 if(sam.isTouching(l12)){
  if(keyDown("c")){
    l12.scale = 0.1;
  }
 }

 if(sam.isTouching(l13)){
  if(keyDown("c")){
    l13.scale = 0.1;
  }
 }

 if(sam.isTouching(l14)){
   if(keyDown("c")){
     l14.scale = 0.1;
   }
 }

 if(sam.isTouching(l15)){
  if(keyDown("c")){
    l15.scale = 0.1;
  }
 }

 if(sam.isTouching(pig1)){
   if(keyDown("c")){
     l16.visible = false;
   }
 }

 if(sam.isTouching(pig2)){
  if(keyDown("c")){
    l17.visible = false;
  }
 }

 if(sam.isTouching(man2)){
   board2.visible = true;
   sell.visible = true;
   textSize(25);
   textFont("monospace");
   text("Hello i want to sell milk and carrots",400,290);
   text("Ok i'll give you $93",400,330);

   if(mousePressedOver(sell)){
     board2.visible = false;
     sell.visible = false;
     gameState = 11;
     win.play(false);
   }
 }else {
  sell.visible = false;
}
 }else if(gameState === 11){
  gold = 525;

  textFont(clockFont);
  fill("black");
  textSize(25);
  text("$",1205,144);
  text(gold,1275,144);

  pickaxe.visible = true;
  hoe.visible = true;
  food.visible = false;
  
  clocks();
  
  next.visible = false;
  board2.visible = false;

  textSize(20);
  text("Cut the crops and take the milk from cows.",890,600);
  text("Press 'C' to take",890,620);

  fill(rgb(3,0,45));
  textSize(25);
  text("Press & Hold 'M' to see Map and routes.",10,600);
  text("Press & Hold 'T' to see tasks.",10,625);

  if(keyDown("T")){
    board.visible = true;
    task.visible = false;

    fill("black");
    textSize(35);
    textFont("monospace");
    text("Tasks",600,120);
    textSize(25);
    text("1.Buy seeds to grow plants and animal food to feed animals from",225,160);
    text("plant shop by seeing map.",255,190);
    text("2.Grow the plants in the farm.",225,250);
    text("3.Feed the cows in your house's garden.",225,310);
    text("4.See map and go to hardware shop and from shopkeeper buy tools.",225,370);
    text("5.Cut the crops and take the milk from cows and sell it to the",225,430);
    text("general shop.",255,460);
    fill("green");
    text("_____________________________________________________________",255,165);
    text("________________________",255,195);
    text("___________________________",255,255);
    text("_____________________________________",255,315);
    text("_____________________________________________________________",255,375);
    text("____________________________________________________________",225,435);
    text("___________",225,465);
  }

  if(keyWentUp("T")){
    board.visible = false;
  }

  if(keyDown("M")){
    map2.changeAnimation("map4",map6Img);
    map2.visible = true;
    task.visible = false;
  }

  if(keyWentUp("M")){
    map2.visible = false;
 } 

 for(var n = 0;n<array4.length;n++){
  array4[n].visible = false;
}

for(var j = 0;j<array1.length;j++){
  array1[j].visible = true;
}

for(var z = 0;z<array5.length;z++){
  array5[z].visible = true;
  sam.collide(array5[z]);
}


for(var i = 24;i<array.length;i++){
 array[i].visible = false;
}

for(var s = 0;s<array6.length;s++){
  array6[s].visible = false;
   sam.collide(array6[s]);
 }

for(var b = 0;b<array3.length;b++){
 array3[b].visible = true;
}

for(var o = 24;o<array.length;o++){
 array[o].visible = false;
 sam.collide(array[o]);
}

for(var r = 16;r<array3.length;r++){
 sam.collide(array3[r]);
}

  if(keyDown("down") || keyDown("s")){
    changeAnimation(sam,"samStand2",sam2);
    changePosition(0,10,sam);
    gameState = 12;
    win.play(false);
   }
   
   if(keyWentUp("down") || keyWentUp("s")){
     changeAnimation(sam,"samStand",sam1);
     sam.velocityY = 0;
   }
   
   if(keyDown("up") || keyDown("w")){
     changeAnimation(sam,"samStand4",sam4);
     changePosition(0,-10,sam);
     gameState = 12;
     win.play(false);
   }
   
   if(keyWentUp("up") || keyWentUp("w")){
     changeAnimation(sam,"samStand3",sam3);
     sam.velocityY = 0;
   }
   
   if(keyDown("right") || keyDown("d")){
     changeAnimation(sam,"samStand6",sam6);
     changePosition(10,0,sam);
     gameState = 12;
     win.play(false);
   }
   
   if(keyWentUp("right") || keyWentUp("d")){
     changeAnimation(sam,"samStand5",sam5);
     sam.velocityX = 0;
   }
   
   if(keyDown("left") || keyDown("a")){
     changeAnimation(sam,"samStand8",sam8);
     changePosition(-10,0,sam);
     gameState = 12;
     win.play(false);
   }
   
   if(keyWentUp("left") || keyWentUp("a")){
     changeAnimation(sam,"samStand7",sam7);
     sam.velocityX = 0;
   }

  //l20.velocityX = 30;
 }else if(gameState = 12){
  l20 = createSprite(670,330,50,50);
  l20.addImage(endImg);
  l20.scale = 1.6;
 } 
}

function changePosition(x,y,body){
  body.x = body.x + x;
  body.y = body.y + y;
}

function changeAnimation(body,tag,name){
  body.changeAnimation(tag,name);
}

function clocks(){
  fill("black");
  textFont(clockFont);
  textSize(20);
  let Hour = hour();
  let min = minute();
  let secs = second();
  let noon = Hour >= 12? " PM" : " AM"
  let d = day(); 
  let m = month();
  let y = year();
  if(min < 10)
    min = "0"+min
  Hour%=12
  text(Hour+":"+min+":"+secs+noon, 1238, 95); 
  text(d + '/' + m + '/' + y, 1238, 40);
}

function changeScale(){
  play.scale = 0.5;
}

function resetAudio() {
  bgSound.pause();
  bgSound.currentTime = 0;
  bgSound.muted = false;
}