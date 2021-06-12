<template>
  <div class="about ma-16">
    <v-text-field
        v-model="search"
        label="Search for blog"
        required
        outlined
        dense
        class="mb-3"
    ></v-text-field>
    <div v-for="(blog,i) in filterBlog" :key="i" class="mb-9">
        <v-card
        elevation="2"
        outlined
        
        >
            <v-card-title>{{blog.title}}</v-card-title>
            <v-card-text> <div class="font-italic caption">create by: {{blog.name}}</div></V-card-text>
            <v-card-text><p v-html='blog.content'></p></v-card-text>
        </v-card>
        
        <v-divider></v-divider>
    </div>
  </div>
</template>

<script>

export default{
    computed:{
        blogs(){
            return this.$store.state.blogs;
        },
        filterBlog(){
            return this.blogs.filter(b =>{
                return !this.search || b.title.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
    data(){
        return{
            search: ''
        }
    }
}
</script>