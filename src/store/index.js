import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogs:[
      {
        content:"<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Blog Content.</p>",
        name:"Ajith at Sat Jun 12 2021 21:28:53 GMT+0530 (India Standard Time)", 
        title:"Lorum Ipsum",
        time: "Sat Jun 12 2021 23:31:41 GMT+0530 (India Standard Time)"
      },
      {
        content:"<p>It is a long established <strong>fact that a reade</strong>r will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us<i>ing 'Content </i>here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>",
        name:"kumar at Sat Jun 12 2021 21:46:23 GMT+0530 (India Standard Time)",
        title:"New Lorum Ipsum",
        time:"Sat Jun 12 2021 23:00:41 GMT+0530 (India Standard Time)"
      },
      {
        content:"<p>Engineers at Google have tasked an <a href='https://www.newscientist.com/definition/artificial-intelligence-ai/'>artificial intelligence</a> with designing faster and more efficient processors – and then used its chip designs to develop the next generation of specialised computers that run the very same type of AI algorithms.</p><p>Google operates at such a large scale that it designs its own computer chips rather than buying commercial products. This allows it to optimise the chips to run its own software, but the process is time-consuming and expensive. A custom chip usually takes two to three years to develop.</p><p>One stage of chip design is a process called floorplanning, which involves taking the finalised circuit diagram of a new chip and arranging the millions of components into an efficient layout for manufacturing. Although the functional design of the chip is complete at this point, the layout can have a huge effect on speed and power consumption. For chips in smartphones, the priority may be to cut power consumption in order to increase battery life, but for a data centre, it may be more important to maximise speed.</p><p>Floorplanning has previously been a highly manual and time-consuming task, says Anna Goldie at Google. Teams would split larger chips into blocks and work on parts in parallel, fiddling around to find small refinements, she says.</p><p>But Goldie and her colleagues have now created software that turns the floorplanning problem into a task for a neural network. It treats a blank chip and its millions of components as a complex jigsaw with a vast amount of possible solutions. The aim is to optimise whatever parameters the engineers decide are most important, while also placing all the components and connections between them accurately.</p><p>The software began by developing solutions at random that were tested for performance and efficiency by a separate algorithm and then fed back to the first one. In this way, it gradually learned what strategies were effective and built upon past successes. “It started off kind of random and gets really bad placements, but after thousands of iterations it becomes extremely good and fast,” says Goldie.</p>",
        name:"Ajith at Sat Jun 12 2021 23:19:00 GMT+0530 (India Standard Time)",
        title:"Google is using AI",
        time:"Sat Jun 12 2021 21:06:41 GMT+0530 (India Standard Time)"
      },
      {
        content:'<p>MANY of us have uploaded our lives to the internet. Banking, work emails, social media, dating profiles, medical records – all that vital, sensitive information. So it is a little disconcerting that <a href="http://www.newscientist.com/article/mg24432530-300-the-internet-was-supposed-to-be-a-utopia-50-years-on-what-happened/">the internet</a> has a fatal security flaw. Don’t panic; our private information is safe for now. But before very long <a href="http://www.newscientist.com/article/mg23731670-800-unbreakable-the-race-to-protect-our-secrets-from-quantum-hacks/">the encryption algorithms</a> that protect us online are going to crack.</p><p>That is the urgent driving force behind a new, more secure kind of internet that harnesses the power of <a href="http://www.newscientist.com/definition/quantum-physics/">the quantum realm</a>. Once up and running, the system will be able to do a lot more than protect our data. It could bring us unforeseen quantum apps, and maybe become the scaffold for a world-spanning quantum computer of incredible power.</p><p>Building the quantum internet is a huge and multi-faceted engineering challenge, but the foundations are already being laid. Networks of fibres are spreading. Scientists are chatting in secret on local networks. There are even plans to use tiny satellites to enable long-distance quantum connections. Sooner or later, we could all be joining the quantum information superhighway.</p><p>Human culture and industry have long been based on <a href="http://www.newscientist.com/article/mg24432600-900-why-information-could-be-our-route-to-the-universes-deepest-secrets/">information</a>. If you could get the right kind of information, understand it and share it, you could gain power and profit. The rise of the internet as we know it cemented the role of information and we are only beginning to feel its profound effects. Now we are at the threshold of a new information age, which could change things all over again.</p><p>Conventional, classical computers deal in digital units called bits. This is the amount of information in the outcome …</p>',
        name:"kumar at Sat Jun 12 2021 23:22:12 GMT+0530 (India Standard Time)",
        title:"Quantum internet",
        time:"Sat Jun 12 2021 21:05:41 GMT+0530 (India Standard Time)"
      },
      {
        content:"<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Blog Content.</p>",
        name:"Ajith at Sat Jun 12 2021 21:28:53 GMT+0530 (India Standard Time)", 
        title:"Lorum Ipsum",
        time:"Sat Jun 12 2021 21:04:41 GMT+0530 (India Standard Time)"
      },
      {
        content:"<p>It is a long established <strong>fact that a reade</strong>r will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us<i>ing 'Content </i>here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>",
        name:"kumar at Sat Jun 12 2021 21:46:23 GMT+0530 (India Standard Time)",
        title:"New Lorum Ipsum",
        time:"Sat Jun 12 2021 21:03:41 GMT+0530 (India Standard Time)"
      },
      {
        content:"<p>Engineers at Google have tasked an <a href='https://www.newscientist.com/definition/artificial-intelligence-ai/'>artificial intelligence</a> with designing faster and more efficient processors – and then used its chip designs to develop the next generation of specialised computers that run the very same type of AI algorithms.</p><p>Google operates at such a large scale that it designs its own computer chips rather than buying commercial products. This allows it to optimise the chips to run its own software, but the process is time-consuming and expensive. A custom chip usually takes two to three years to develop.</p><p>One stage of chip design is a process called floorplanning, which involves taking the finalised circuit diagram of a new chip and arranging the millions of components into an efficient layout for manufacturing. Although the functional design of the chip is complete at this point, the layout can have a huge effect on speed and power consumption. For chips in smartphones, the priority may be to cut power consumption in order to increase battery life, but for a data centre, it may be more important to maximise speed.</p><p>Floorplanning has previously been a highly manual and time-consuming task, says Anna Goldie at Google. Teams would split larger chips into blocks and work on parts in parallel, fiddling around to find small refinements, she says.</p><p>But Goldie and her colleagues have now created software that turns the floorplanning problem into a task for a neural network. It treats a blank chip and its millions of components as a complex jigsaw with a vast amount of possible solutions. The aim is to optimise whatever parameters the engineers decide are most important, while also placing all the components and connections between them accurately.</p><p>The software began by developing solutions at random that were tested for performance and efficiency by a separate algorithm and then fed back to the first one. In this way, it gradually learned what strategies were effective and built upon past successes. “It started off kind of random and gets really bad placements, but after thousands of iterations it becomes extremely good and fast,” says Goldie.</p>",
        name:"Ajith at Sat Jun 12 2021 23:19:00 GMT+0530 (India Standard Time)",
        title:"Google is using AI",
        time:"Sat Jun 12 2021 21:02:41 GMT+0530 (India Standard Time)"
      },
      {
        content:'<p>MANY of us have uploaded our lives to the internet. Banking, work emails, social media, dating profiles, medical records – all that vital, sensitive information. So it is a little disconcerting that <a href="http://www.newscientist.com/article/mg24432530-300-the-internet-was-supposed-to-be-a-utopia-50-years-on-what-happened/">the internet</a> has a fatal security flaw. Don’t panic; our private information is safe for now. But before very long <a href="http://www.newscientist.com/article/mg23731670-800-unbreakable-the-race-to-protect-our-secrets-from-quantum-hacks/">the encryption algorithms</a> that protect us online are going to crack.</p><p>That is the urgent driving force behind a new, more secure kind of internet that harnesses the power of <a href="http://www.newscientist.com/definition/quantum-physics/">the quantum realm</a>. Once up and running, the system will be able to do a lot more than protect our data. It could bring us unforeseen quantum apps, and maybe become the scaffold for a world-spanning quantum computer of incredible power.</p><p>Building the quantum internet is a huge and multi-faceted engineering challenge, but the foundations are already being laid. Networks of fibres are spreading. Scientists are chatting in secret on local networks. There are even plans to use tiny satellites to enable long-distance quantum connections. Sooner or later, we could all be joining the quantum information superhighway.</p><p>Human culture and industry have long been based on <a href="http://www.newscientist.com/article/mg24432600-900-why-information-could-be-our-route-to-the-universes-deepest-secrets/">information</a>. If you could get the right kind of information, understand it and share it, you could gain power and profit. The rise of the internet as we know it cemented the role of information and we are only beginning to feel its profound effects. Now we are at the threshold of a new information age, which could change things all over again.</p><p>Conventional, classical computers deal in digital units called bits. This is the amount of information in the outcome …</p>',
        name:"kumar at Sat Jun 12 2021 23:22:12 GMT+0530 (India Standard Time)",
        title:"Quantum internet",
        time:"Sat Jun 12 2021 21:01:41 GMT+0530 (India Standard Time)"
      }
    ]
  },
  mutations: {
    update_blog(state,payload){
      state.blogs.push(payload)
      state.blogs.sort(function(a,b){ 
          return Math.abs(new Date(a.time) - new Date(b.time)) 
      });
    }
  },
  actions: {
    action_update_blog({commit}, payload){
      commit("update_blog",payload);
    }
  },
  modules: {},
  getters: {
    getSpecificBlog: (state) => (title) => {
      return state.blogs.find(blog => blog.title === title)
    }
  }
});
