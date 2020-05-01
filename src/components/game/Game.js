import React, { Component } from 'react'

export default class Game extends Component {
    constructor(){
        super();
        this.canvasHeight=400;
        this.canvasWidth=900;
        this.leftPlayerWidth=20;
        this.leftPlayerHeight=80;
        this.leftPlayerPositionX=10;
        this.leftPlayerPositionY=250;
        this.rightPlayerWidth=20;
        this.rightPlayerHeight=80;
        this.rightPlayerPositionX=875;
        this.rightPlayerPositionY= 250;
        this.leftFireWidth = 30;
        this.leftFireHeight = 15;
        this.leftFirePositionX = 0;
        this.leftFirePositionY = 0; 
        this.leftFireIntervalid = null;
        this.rightFireWidth = 30;
        this.rightFireHeight = 15;
        this.rightFirePositionX = 0;
        this.rightFirePositionY = 0; 
        this.rightFireIntervalid = null;
        this.canvasref= React.createRef();
        this.canvasStyle={
            border:"3px solid red"
        }
    }

    componentDidMount(){
        let canvas = this.canvasref.current;
        canvas.width = this.canvasWidth;
        canvas.height = this.canvasHeight;
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "red";
        ctx.fillRect(this.leftPlayerPositionX, 
          this.leftPlayerPositionY, this.leftPlayerWidth, this.leftPlayerHeight);
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.rightPlayerPositionX, 
          this.rightPlayerPositionY, this.rightPlayerWidth, this.rightPlayerHeight);   
      }

      startGame=()=>{
        document.addEventListener('keydown', this.getMovin);
        
      }
      stopGame=()=>{
        document.removeEventListener('keydown', this.getMovin);
      }

      getMovin=(e)=>{
        if(e.code === "KeyW"){
          if(this.leftPlayerPositionY > 0){
            
        
            this.leftUP(true);
          
          }
          
          
        }
        if(e.code ==="KeyS"){
          if(this.leftPlayerPositionY < this.canvasHeight - this.leftPlayerHeight){
            
            this.leftUP(false);
            
            
          }
          
  
        }

        if(e.code === "KeyD"){
            this.LeftPlayerFire();
          }

        if(e.code === "ArrowUp"){
          if(this.rightPlayerPositionY > 0){
            this.rightUP(true);
          } 
          
        }
        if(e.code === "ArrowDown"){
          if(this.rightPlayerPositionY < this.canvasHeight - this.rightPlayerHeight){
            this.rightUP(false);
          }
          
        }

        if(e.code === "ArrowLeft"){
            this.rightPlayerFire();
          }
      }

      LeftPlayerFire=()=>{
          
            this.leftFirePositionX = this.leftPlayerPositionX + 15;
            this.leftFirePositionY = this.leftPlayerPositionY + 20;
            let canvas = this.canvasref.current;
            let ctx = canvas.getContext("2d");
            ctx.fillStyle = "black";
            this.leftFireIntervalid = setInterval(()=>{
                ctx.clearRect(this.leftFirePositionX, 
                    this.leftFirePositionY, this.leftFireWidth, this.leftFireHeight);
                this.leftFirePositionX += 30;
                ctx.fillStyle = "black";
                ctx.fillRect(this.leftFirePositionX, 
                    this.leftFirePositionY, this.leftFireWidth, this.leftFireHeight);
                 
                        
            }, 20);
    
            setTimeout(()=>{
                clearInterval(this.leftFireIntervalid);
                ctx.clearRect(this.leftFirePositionX, 
                    this.leftFirePositionY, this.leftFireWidth, this.leftFireHeight);
            }, 700);
          
  
      }

      rightPlayerFire=()=>{
          
        this.rightFirePositionX = this.rightPlayerPositionX - 15;
        this.rightFirePositionY = this.rightPlayerPositionY + 20;
        let canvas = this.canvasref.current;
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "black";
        this.rightFireIntervalid = setInterval(()=>{
            ctx.clearRect(this.rightFirePositionX, 
                this.rightFirePositionY, this.rightFireWidth, this.rightFireHeight);
            this.rightFirePositionX -= 30;
            ctx.fillStyle = "black";
            ctx.fillRect(this.rightFirePositionX, 
                this.rightFirePositionY, this.rightFireWidth, this.rightFireHeight);
             
                    
        }, 20);

        setTimeout(()=>{
            clearInterval(this.rightFireIntervalid);
            ctx.clearRect(this.rightFirePositionX, 
                this.rightFirePositionY, this.rightFireWidth, this.rightFireHeight);
        }, 700);
      

  }


      
    leftUP=(flag)=>{
        let canvas = this.canvasref.current;
        let ctx = canvas.getContext("2d");
        ctx.clearRect(this.leftPlayerPositionX , this.leftPlayerPositionY,
         this.leftPlayerWidth, this.leftPlayerHeight);
         if(flag === true){
          this.leftPlayerPositionY-= 4;
        
         }else{
            this.leftPlayerPositionY+= 4;
         
         }
         ctx.fillStyle = "red";
          ctx.fillRect(this.leftPlayerPositionX, 
          this.leftPlayerPositionY, this.leftPlayerWidth, this.leftPlayerHeight);
      }
  
      rightUP=(flag)=>{
        let canvas = this.canvasref.current;
        let ctx = canvas.getContext("2d");
        ctx.clearRect(this.rightPlayerPositionX , this.rightPlayerPositionY,
         this.rightPlayerWidth, this.rightPlayerHeight);
         if(flag === true){
          this.rightPlayerPositionY-= 4;
        
     
         }else{
          this.rightPlayerPositionY+= 4;
        
   
         }
         ctx.fillStyle = "yellow";
          ctx.fillRect(this.rightPlayerPositionX, 
          this.rightPlayerPositionY, this.rightPlayerWidth, this.rightPlayerHeight);
      }

    render() {
        return (
            <main style={{minHeight:"554px", textAlign:"center"}}>
                
            <canvas style={this.canvasStyle} ref={this.canvasref}></canvas>
            <div>
              <button onClick={this.startGame}>play</button>
              <button onClick={this.stopGame}>stop</button>
            </div>
        
          </main>
        )
    }
}
