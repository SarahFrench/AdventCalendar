

document.addEventListener("DOMContentLoaded", function() {

    let page = document.getElementsByTagName("body")[0].getAttribute('data-page');

    class Vector {
      constructor(x=0, y=0){
        this.x = x;
        this.y = y;
      }

      get len(){
        return Math.sqrt(this.x*this.x + this.y * this.y);
      }

      set len(value){
        const fact = value/this.len
        this.x *= fact
        this.y *= fact
      }
    }

    class Rectange{
      constructor(w,h){
        this.pos = new Vector;
        this.size = new Vector(w,h);
      }

      get left(){
        return this.pos.x - this.size.x/2
      }

      get right(){
        return this.pos.x + this.size.x/2
      }

      get top(){
        return this.pos.y - this.size.y/2
      }

      get bottom(){
        return this.pos.y + this.size.y/2
      }
    }

    class Ball extends Rectange {
      constructor(){
        super(10,10);
        this.vel = new Vector;
      }
    }

    class Player extends Rectange {
      constructor(name){
        super(10,100);
        this.score = 0;
        this.name = name;
      }
    }

    class Pong {
      constructor(canvas){
        this._canvas = canvas;
        this._context = canvas.getContext("2d");

        this.ball = new Ball;

        this.players = [
          new Player("Player1"),
          new Player("Player2"),
        ]

        this.players[0].pos.x = 40;
        this.players[1].pos.x = canvas.width-40;
        this.players.forEach(player => {
          player.pos.y = this._canvas.height/2
        })

        let lastTime;

        const callback = (milliseconds) => {
          if(lastTime){
            this.update((milliseconds - lastTime)/1000)
          }
          lastTime = milliseconds;
          requestAnimationFrame(callback);
        };

        callback();
        this.reset();
      }

      collide(player, ball){
        if(player.left < ball.right && player.right > ball.left && player.top < ball.bottom && player.bottom > ball.top){
          console.log(player.name);
          this.updateScoreElement(player.name);
          const len = ball.vel.len;
          ball.vel.x = -ball.vel.x;
          // console.log('vel x: ' + ball.vel.x);
          ball.vel.y = ball.vel.y;
          // console.log('vel y: ' + ball.vel.y);
          ball.vel.y += 300 * (Math.random() - 0.5);
          ball.vel.len = len * 1.05
          // console.log('len: ' + ball.vel.len);
        }
      }

      drawRect(rectangle){
        this._context.fillStyle = '#FFF';
        this._context.fillRect(rectangle.left, rectangle.top,
                     rectangle.size.x, rectangle.size.y)
      }

      draw(){
        this._context.fillStyle = '#000';
        this._context.fillRect(0,0,this._canvas.width, this._canvas.height)

        this.drawRect(this.ball)
        this.players.forEach( player => {
          this.drawRect(player)
        })
      }

      reset(){
        this.ball.pos.x = this._canvas.width/2;
        this.ball.pos.y = this._canvas.height/2;
        this.ball.vel.x = 0;
        this.ball.vel.y = 0;
      }

      start(){
        if(this.ball.vel.x === 0 && this.ball.vel.y === 0){
          this.ball.vel.x = 300 * (Math.random() > 0.5 ? 1: -1);
          this.ball.vel.y = 300 * (Math.random() > 0.5 ? 1: -1);
          this.ball.vel.len = 200;
        }
      }

      updateScoreElement(playerName){
        if(playerName === "Player1"){
          let score = parseInt(document.getElementById(playerName).innerText);
          console.log(score);
          ++score;
          document.getElementById(playerName).innerText = score;
          if(this.newHighScore(score)){
            document.getElementById(playerName).style.color = "red";
          }
        }
      }

      newHighScore(score){
        let sarahScore = parseInt(document.getElementById("SarahScore").innerText);
        return score > sarahScore;
      }

      resetScoreElement(){
          document.getElementById("Player1").innerText="0";
      }

      update(dt){
        this.ball.pos.x += this.ball.vel.x * dt;
        this.ball.pos.y += this.ball.vel.y * dt;
        // console.log(this.ball.pos.x, this.ball.pos.y);

        if (this.ball.left < 0 || this.ball.right > this._canvas.width){
          const playerId = this.ball.vel.x < 0 | 0
          this.players[playerId].score++
          this.reset()
        }

        if (this.ball.top < 0 || this.ball.bottom > this._canvas.height){
          this.ball.vel.y = -this.ball.vel.y
        }

        this.players[1].pos.y = this.ball.pos.y
        this.players.forEach( player => { this.collide(player, this.ball)})
        this.draw();
      }
    }

    const canvas = document.getElementById('pong');
    const pong = new Pong(canvas);

    canvas.addEventListener('mousemove', event => {
      if (event.y < 50){
        pong.players[0].pos.y = 50;
      } else if ( event.y > canvas.height-50 ) {
        pong.players[0].pos.y = canvas.height-50;
      } else {
        pong.players[0].pos.y = event.y;
      };
    })

    canvas.addEventListener('click', event => {
      pong.resetScoreElement();
      pong.start()
    })
})
