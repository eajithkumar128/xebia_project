<template>
  <div class="about ma-16" >
        <BlogContentViewer :blog="blog" type="single" />
  </div>
</template>

<script>
const BlogContentViewer = () => import("../components/BlogContentViewer.vue")
 
export default{
    components:{
        BlogContentViewer
    },
    computed:{
        blog(){
            return this.$store.getters.getSpecificBlog(this.$router.currentRoute.params.name);
        },
    }
}
</script>