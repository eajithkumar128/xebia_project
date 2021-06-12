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
    <v-row>
        <v-col sm="6" xs="1" md="4" lg="4" xl="4" cols="12" v-for="(blog,i) in filterBlog" :key="i" class="mb-9" @click="$router.push('/blog/'+blog.title)">
            <BlogContentViewer :blog="blog" type="main"/>
        </v-col>
    </v-row>
    
  </div>
</template>

<script>
const BlogContentViewer = () => import("../components/BlogContentViewer.vue")

export default{
    components:{
        BlogContentViewer
    },
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