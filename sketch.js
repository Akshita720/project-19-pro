var spaceImg;
var asteroidImg , asteroidGroup;
var gameOverImg;
var starImg , starGroup;
var score , distance;
var gameState = "play"

function preload(){
    starImg = loadImage("star.png");
    asteroidImg = loadImage("asteroid.jpg");

    
    gameOverImg = loadImage("game over.png");

    rocketImg = loadImage("rocket.jpg");
    spaceImg = loadImage("tower.png");
    

}

function setup() {
    createCanvas(600,600)
  

    space = createSprite(220,0)
    space.addImage("space" , spaceImg)
    space.velocityY = 4
    
    rocket = createSprite(200,200,40,50)
    rocket.addImage("rocket",rocketImg);
    rocket.scale = 0.1
    
   

    gameOver = createSprite(300,280)
    gameOver.addImage(gameOverImg)
    gameOver.scale = 0.2
    

    starGroup = new Group();
    asteroidGroup = new Group();

    score = 0;
    distance = 0;

    score.depth = space.depth;
    score.depth = score.depth + 1;

    distance.depth = space.depth;
    distance.depth = distance.depth + 1;

   

}

function draw() 
{
    background(200);

    stroke("red")
    fill ("red")
    textSize = 200
    text("Score = " + score , 520 , 60)

    stroke("red")
    fill ("red")
    textSize = 200
    text("Distance = " + distance , 520 ,80)



    if(gameState === "play"){

        gameOver.visible = false

        spawnAsteroid();
        spawnStars();

        if(space.y > 300){
            space.y = 200
        }

        distance = distance + Math.round(getFrameRate()/60)

       if(keyDown("left_arrow")){
           rocket.x = rocket.x - 8
       }

        if(keyDown("right_arrow")){
            rocket.x = rocket.x + 8
        }

        if(starGroup.isTouching(rocket)){
            score = score + 2
            star.visible = false
            gameState = "play"
        }

        if (asteroidGroup.isTouching(rocket) ||  rocket.y > 600){
            star.visible = false
            asteroid.visible = false
            rocket.visible = false
            space.visible = false
            gameOver.visible =true
            score.visible = false
            distance.visible = false

            
            
              }
        }

 drawSprites();
}


function spawnStars(){

    if(frameCount % 300 === 0)
    { 
       star = createSprite(210,-60)
       star.addImage(starImg)
       star.velocityY = 2
       star.scale = 0.1
       star.x= Math.round(random(120,400))
       starGroup.add(star)
       star.lifetime = 520
       

    
    }
}

function spawnAsteroid(){

    if(frameCount % 240 === 0)
    { 
       asteroid = createSprite(210,-60)
       asteroid.addImage(asteroidImg)
       asteroid.velocityY = 2
       asteroid.scale = 0.2
       asteroid.x= Math.round(random(120,400))
       asteroidGroup.add(asteroid)
       asteroid.lifetime = 520

    
    }
}

