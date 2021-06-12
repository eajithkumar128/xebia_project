<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center headline" @click="$router.push('/')" style="cursor:pointer">
        BLOGS
      </div>

      <v-spacer></v-spacer>

      <v-btn @click="$router.push('/blog/new')">
        <span class="mr-2">Create New Blogs</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>

      <v-btn @click="$router.push('/blogs')" class="ml-7">
        <span class="mr-2">Go To Blogs</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
