<template>
    <div class="healthbar">
        <div class="health" :style="{width: hp + '%' }"></div>
        <p>HP - {{hp}} </p>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import anime from '../../node_modules/animejs/lib/anime.es';

@Component({
    name: 'hp',
    components: {
  },
})
export default class player extends Vue {
    @Prop({default: 0}) public hp: number;



    public jumping: boolean = false;

    public runAnime(event): void {
        this.$emit('eventHandler', event);
    }



    public created(): void {


   }




}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Bad+Script&display=swap');
.healthbar{
    width: 200px;
    background: #333;
    border-radius: 4px;
    height: 30px;
    position: fixed;
    width: 200px;
    display: block;
    margin-left: 5%;
    float: left;
    top: 20px;
    p{
        font-family: 'Bad Script', cursive;
        color: #E91E63;
        text-shadow: -2px 1px 20px;
        font-weight: BOLD;
        font-size: 20PX;
    }
    .health{
        background:red;
        border-radius: 4px;
        height:30px;
    }
}

</style>
