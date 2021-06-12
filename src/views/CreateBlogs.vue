<template>
  <div class="createBlog pa-10 mx-10">
    <p class="headline">Create New Blog</p>
    <v-divider></v-divider>

    <div class="mt-14">
        <v-form ref="form" v-model="valid">
            <v-text-field
                v-model="blogContent.title"
                label="Blog title"
                required
                :rules="[v => !!v || 'Value is required']"
                outlined
                dense
            ></v-text-field>
            <v-text-field
                v-model="blogContent.name"
                label="User name"
                required
                :rules="[v => !!v || 'Value is required']"
                outlined
                dense
            ></v-text-field>
            <div>
                <ckeditor :editor="editor" v-model="blogContent.editorData" :config="editorConfig" ></ckeditor>
            </div>
            <v-btn :disabled="!valid" @click="createBlogs" class="mt-7" block color="primary">Create Blog</v-btn>
        </v-form>
    </div>
    <v-snackbar
      timeout="4000"
      :value="snackbar"
      bottom
      color="success"
      outlined
      class="mb-4"
    >
      Blog Succesfully Created.
    </v-snackbar>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default{
    data(){
        return{
            editor: ClassicEditor,
            blogContent:{
                title: "",
                name: "",
                editorData: '<p>Blog Content.</p>'
            },        
            editorConfig: {
                // The configuration of the editor.
            },
            snackbar: false,
            valid: true
        }
    },
    methods:{
        resetValues(){
            this.$refs.form.resetValidation()
            this.snackbar = true;
            this.blogContent = {}
            this.blogContent.editorData = '<p>Blog Content.</p>'
        },
        createBlogs(){
            this.$store.dispatch("action_update_blog",{
                title: this.blogContent.title,
                name:  this.blogContent.name + " at " + new Date(),
                content: this.blogContent.editorData
            })
            this.resetValues();
        }
    }
}

</script>


<style>
.createBlog{
    display: grid;
    align-self: center;
    justify-self: center;
}

.ck-editor__editable{
    min-height:150px;
    max-height:150px;
}
</style>