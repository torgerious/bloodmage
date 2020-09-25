<template>
    <div class="fightscene-wrapper">
        <div class="fight-arena">
            <!-- Healthbar -->
            <slot name="you"></slot>
            <slot name="enemy"></slot>

            <img class="you" src="../../public/img/icons/character-right.png" alt="player">
            <img class="enemy" src="../../public/img/icons/mage.png" alt="player">
        </div>
        <div class="fight-menu">
            <div class="player">
                <img src="../../public/img/icons/character-right.png" alt="player">
            </div>
            <div class="user-attacks">
                <button>Slice</button>
                <button>Fireball</button>
                <button>Saliva squirt</button>
            </div>
        </div> 
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import anime from '../../node_modules/animejs/lib/anime.es';
import HealthBar from '../components/healtbar.vue';


@Component({
    name:'hp',
    components: {
  },
})
export default class fightScene extends Vue {
    @Prop({default:0}) hp:number;



    
    public runAnime(event):void{
        this.$emit('eventHandler', event);
    }

   

    public created():void {
    
      
   }


  

}

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Bad+Script&display=swap');
.fightscene-wrapper{
    height: 100vh;
    width:100%;
    position: absolute;
       background-image: url("../../public/img/icons/fight-background.jpg");
  
    background-position: center;
    background-size: cover;
    background-repeat-x: repeat;
    background-repeat-y: no-repeat;
    overflow: hidden;
    .fight-arena{
        width:100%;
        height:90vh;
        img{
            height:200px;
        }
        .you{
            margin-left: 254px;
            margin-top: 332px;
            float: left;
        }
        .enemy{
            margin-left: 179px;
            float: right;
            margin-top: 350px;
            margin-right: 408px;
        }
    }
    .fight-menu{
        width:100%;
        height:15vh;
        padding:20px;
        bottom:0;
        position: absolute;
        background: #1a1f24de;
        border-top: 4px solid #193a65;
        .player{
            width: 141px;
            height: 106px;
            float: left;
            border: 2px solid #52000000;
            background: repeating-radial-gradient(#0ac395, #00000042 100px);
            overflow: hidden;
            border-radius: 6px;
            -webkit-box-shadow: 0px 0px 5px 0px #ff0202;
            box-shadow: 0px 0px 5px 0px #ecc3c3;
            display: inline-block;
            img{
                height: 213px;
            }
        }
        .user-attacks{
            margin-left: 50px;
            width: auto;
            float: left;
            height: auto;
            button{
                height: 100px;
                padding: 0 20px;
                color: white;
                border: none;
                background: #0000006e;
                margin: 7px;
            }
        }
    }
}

</style>
