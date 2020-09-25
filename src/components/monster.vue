<template>
    <div class="monster " >
        <div v-if="npcMessage !== ''" class="dialog-wrapper"  @click="hideMessage">
            <p>{{npcMessage}}</p>
            <button @click="startFight">Start fight</button>
        </div>
        <img src="../../public/img/icons/mage.png" alt="player">
   
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import anime from '../../node_modules/animejs/lib/anime.es';
// import { direction } from '../views/scene1.vue';

@Component({
    name:'monster',
    components: {
  },
})
export default class monster extends Vue {
    @Prop({default:''}) npcMessage:string;


    public jumping:boolean = false;
    
    public hideMessage(event):void{
        this.$emit('eventHandlerMessage', event);
    }

    public startFight(event):void{
        this.$emit('fightHandler', event);
    }


   

    public created():void {
      
   }


  

}

</script>

<style lang="scss" scoped>



.dialog-wrapper {
    position: absolute;
    background: #722f2f;
    border: 4px solid #5c2a2a;
    top: -170px;
    border-radius: 4px;
    padding: 1px 20px;
    width: 287px;
    left: -117px;
    box-shadow: -1px 0px 19px 0px #5c2a2a;
    color: #fff;
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
    border-top-color: #5c2a2a;
    border-width: 15px;
    margin-left: -15px;
}
.dialog-wrapper:before {
    border-color: rgba(194, 225, 245, 0);
    border-top-color: #5c2a2a;
    border-width: 20px;
    margin-left: -20px;
}

.monster{
    width:100px;
    height: 100px;
    left: 1000px !important;
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
