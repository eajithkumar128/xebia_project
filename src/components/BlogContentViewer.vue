<template>
  <div>
        <v-card
            elevation="2"
            :class="type!== 'single' ? 'cards' : ''"
            outlined
            hover
            :style="[type === 'single' ? {'height':'70vh','overflow':'Scroll'} : {}]"
        >
            <v-card-title>{{blog.title}}</v-card-title>
            <v-card-text> <div class="font-italic caption">create by: {{blog.name}}</div></V-card-text>
            <v-card-text><p v-html="type ==='single' ? blog.content : blog.content.split('.')[0]"></p></v-card-text>
        </v-card>
        
        <v-divider></v-divider>
  </div>
</template>

<script>

export default{
    props:['blog','type']
}
</script>

<style lang="scss">
.cards{
    &:hover{
        border: 1px solid green;
    }
}
</style>