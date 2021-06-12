import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogs:[
      {
        content:"<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Blog Content.</p>",
        name:"Ajith at Sat Jun 12 2021 21:28:53 GMT+0530 (India Standard Time)", 
        title:"Lorum Ipsum"
      },
      {
        content:"<p>It is a long established <strong>fact that a reade</strong>r will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us<i>ing 'Content </i>here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>",
        name:"kumar at Sat Jun 12 2021 21:46:23 GMT+0530 (India Standard Time)",
        title:"New Lorum Ipsum",
      }
    ]
  },
  mutations: {
    update_blog(state,payload){
      state.blogs.push(payload)
      console.log(state.blogs);
    }
  },
  actions: {
    action_update_blog({commit}, payload){
      commit("update_blog",payload);
    }
  },
  modules: {},
});
