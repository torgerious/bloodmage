<template>

    <div>
          <fight-scene 
            v-if="isFighting">
            <health-bar slot="you" :hp="currentHP"></health-bar>
            <enemy-health-bar slot="enemy" :hp="currentHP"></enemy-health-bar>
        </fight-scene>
    <div v-else id="scene" class="game-wrapper">
      

        <div class="top">
            <button @click="refreshCamera">Refresh camera</button>
            <health-bar :hp="currentHP"></health-bar>
        </div>
        <div class="bottom">
                <player 
                    :eventHandler="runAnime"
                    :positionX="positionX" 
                    :positionY="positionY"
                    :isWalking="isWalking"
                    :isJumping="isJumping"
                    :message="message"
                    :CharacterDirection="direction">
                </player>
                <monster
                    :eventHandlerMessage="hideNPCMessage"
                    @fightHandler="startFight"
                    :npcMessage="npmMessage">
                </monster>

            <img src="../../public/img/icons/danger.png" alt="fire">
            <img @click="teleport" class="orb" src="../../public/img/icons/orb-portal.gif" alt="fire">
        </div>
    </div>
    </div>

</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import player from '../components/player.vue';
import anime from '../../node_modules/animejs/lib/anime.es';
import HealthBar from '../components/healtbar.vue';
import EnemyHealthBar from '../components/enemyHealthBar.vue';

import Monster from '../components/monster.vue';
import FightScene from '../components/fightScene.vue';




@Component({
  components: {
        player,
        HealthBar,
        Monster,
        FightScene,
        EnemyHealthBar
  },
})
export default class scene1 extends Vue {


    public positionX:number = 0;
    public positionY:number = 0;
    public direction:string = 'right';
    public isWalking:boolean = false;
    public walkingForward:boolean = false;
    public walkingBackward:boolean = false;
    public isJumping:boolean = false;
    public currentHP:number = 100;
    public message:string = '';
    public npmMessage:string = '';
    public isFighting:boolean = false;
    

    refreshCamera():void{
        document.documentElement.scrollLeft = 0        
    }

    teleport():void{
        alert("You will now be teleported to the mountains");
    }


    public hideNPCMessage():void{
        console.log("hiding mess");

        this.npmMessage = '';
        console.log("hiding mess");
    }

    public startFight():void{
        this.isFighting = true;
    }


    @Watch('message')
    clearMessage(){
        console.log("checcking message");
        setTimeout(() => {
            console.log("Cleared message");
            this.message = '';
        }, 3000)
    }
    

      

    public runAnime():void{
            let loop = false;
            let easing = 'easeOutQuad';
            let direction = 'normal';
            let jumpYPosition = 0;
            let jumpXPosition = 0;

            
            
            if(this.direction === 'right'){
                 jumpYPosition = this.positionY + 50 ;
            }
            if(this.direction === 'left'){
                 jumpYPosition = this.positionY + 50 ;
            }

            

          let player = anime.timeline({  
              loop, 
              direction,
              duration: 400
              })

        .add({
            targets: '.player',
            marginBottom: jumpYPosition,
            easing,
            }).add({
            targets: '.player',
            marginBottom: jumpYPosition - 50,
            easing,
            }).add({
            targets: '.player',
            easing,
            // background: '#FBF38C'
        })
    }

    public gameOver():void{
        this.positionX = 0;
        this.refreshCamera();
        this.isWalking = false;
        this.walkingForward = false;
        this.walkingBackward = false;
        this.currentHP = 100;
    }

    public isLosingDamage():void{
        this.currentHP = this.currentHP - 20;
        this.message = 'Auuuuch!!';
        if(this.currentHP < 0){
            this.gameOver();
        }
    }




    created() {

        setInterval(() => { 
            let html = document.documentElement;
                

                if(this.positionX > 250 && this.positionX < 255 && !this.isJumping){
                    this.isLosingDamage();
                }

                if(this.positionX > 1000 && this.positionX < 1005){
                    this.npmMessage = "YOU SHALL NOT PASS! ";
                }

    


            if(this.walkingForward){
                this.direction = 'right';
                this.positionX = this.positionX + 3;
                html.scrollLeft += 3;
                this.isWalking = true;
            }else if(this.walkingBackward){
                this.direction = 'left';
                this.positionX = this.positionX + -4;
                html.scrollLeft += -3;
                this.isWalking = true;
                if(this.positionX < 0){
                    this.positionX = 0;
                }
            }
        
            else {
                this.isWalking = false;
                this.walkingForward = false;
                this.walkingBackward = false;
            }
        }, 20);



            let d:number = 68;
            let spacebar:number = 32;
            let a:number = 65;

    


        //Check for keys released
        window.addEventListener('keyup', e =>{
            let keyPressed:number = e.keyCode;

            if(keyPressed === d){
                console.log("STOPPED WALKING FORWARD");
                this.walkingForward = false;
                this.isWalking = false;
            }

        
            if(keyPressed === a){
                console.log("STOPPED WALKING BACKWARDS");
                this.isWalking = false;
                this.walkingBackward = false;
            }
        });

        //Check for keys pressed
        window.addEventListener('keydown', e =>{
    
            let keyPressed:number = e.keyCode;
            let html = document.documentElement;

            //Walk forward
            if(keyPressed === d){
                // console.log("WALKING FORWARD");
                this.walkingForward = true;
                this.walkingBackward = false;
            }

            if(keyPressed === spacebar){
                this.runAnime();
                this.isJumping = true;
                setTimeout(() => {
                    this.isJumping = false;
                },400 )
            }
            if(keyPressed === a){
                this.walkingForward = false;
                this.walkingBackward = true;
            }


        });
    }



    destroyed() {
    };

}

</script>
<style lang="scss" scoped>
.game-wrapper{
    width: 5071px;
    height: 100vh;
    background-image: url("../../public/img/icons/scene1-background.png");
  
    background-position: center;
    background-size: cover;
    background-repeat-x: repeat;
    background-repeat-y: no-repeat;
    overflow: hidden;
    .top{
           height: 50vh;
           button{
           position: fixed;
            width: 10%;
            height: 39px;
            display: block;
            margin-left: 45%;
            float: left;
           }
    }
    .bottom{
        height: 50vh;
        background-image: url("../../public/img/icons/bridgeloop.png");
        background-position: center;
        background-size: contain;
        background-repeat-x: repeat;
        width:5971px;
        img{
            left: 255px;
            position: absolute;
            height: 61px;
            bottom: 191px;
        }
        .orb{
            left: 2503px;
            position: absolute;
            height: 63px;
            bottom: 359px;
        }
    }
}

</style>
