<template>
    <div class="player player"  :style="{marginLeft: positionX + 'px', marginBottom: positionY + 'px' } " >
        <div v-if="message !== ''" class="dialog-wrapper">
            <p>{{message}}</p>
        </div>
        <img v-if="CharacterDirection === 'right' && !isWalking && !isJumping" src="../../public/img/icons/character-right.png" alt="player">
        <img v-if="CharacterDirection === 'left' && !isWalking" src="../../public/img/icons/character.gif" alt="player">
        <img v-if="isWalking && CharacterDirection === 'right' && !isJumping" src="../../public/img/icons/walking-character.gif" alt="player">
        <img v-if="isWalking && CharacterDirection === 'left'" src="../../public/img/icons/character-walking-left.gif" alt="player">
        <img v-if="isJumping && CharacterDirection === 'right'" src="../../public/img/icons/jumping-right.gif" alt="player">


    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import anime from '../../node_modules/animejs/lib/anime.es';
// import { direction } from '../views/scene1.vue';

@Component({
    name:'player',
    components: {
  },
})
export default class player extends Vue {
    @Prop({default:20}) positionX:number;
    @Prop({default:0}) positionY:number;
    @Prop({default:'right'}) CharacterDirection:string;
    @Prop({default:false}) isWalking:boolean;
    @Prop({default:false}) isJumping:boolean;
    @Prop({default:''}) message:string;






    public jumping:boolean = false;
    
    public runAnime(event):void{
        this.$emit('eventHandler', event);
    }

  

  
   

    public created():void {
      
   }


  

}

</script>

<style lang="scss" scoped>

 @keyframes jump {
  0%   {bottom:0;}
  25%  {bottom:70px; }
  50%  {bottom:140px}
  100% {bottom:200px}
}




.dialog-wrapper {
    position: absolute;
    background: #fff;
    border: 4px solid #fff;
    top: -116px;
    border-radius: 4px;
    padding: 1px 20px;
}
.dialog-wrapper:after, .dialog-wrapper:before {
	top: 100%;
	left: 50%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
}

.dialog-wrapper:after {
    border-color: rgba(136, 183, 213, 0);
    border-top-color: #fff;
    border-width: 15px;
    margin-left: -15px;
}
.dialog-wrapper:before {
    border-color: rgba(194, 225, 245, 0);
    border-top-color: #fff;
    border-width: 20px;
    margin-left: -20px;
}

.player{
    width:100px;
    height: 100px;
    left: 10px;
    bottom: 200px;
    position: absolute;
    left: 10px;
    transition: bottom 0.4s;
    img{
        height: 120px;
            margin-top: -29px;
    }
    
}

</style>
