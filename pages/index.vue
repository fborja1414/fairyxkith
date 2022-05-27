<template>
  <div class="overlay">
    <div class="overlay-grid">
      <div class="transparency-checker">
        <img class="transparency_desktop" src="../assets/pink_pattern_transparent.png"/>
          </div>
  </div>
  <div class="innerPage">
    <blog-component />
    </div>
    <div class="index_filter" :class="{'fadeIn': windowToggle, 'fadeOut': !windowToggle}"></div>
  <div class="index-wrapper">
    <div class="name-link">
      <div class="window">
        <div class="window-bar">
          <div class="window-circles">
          <div class="window_circles"></div>
          <div class="window_circles"></div>
          <div class="window_circles"></div>
          </div>
            </div>
      </div>
      <div class="name-bio">
      <h3 class="title">Fairy Kith </h3>
      <h3 class="links cursor-pointer">Twitch</h3>
      <h3 class="links cursor-pointer">Instagram</h3>
      </div>
      </div>
      <div class="image-container">
        <div class="mac-hearts">
          <img class="hearts" src="../assets/mac-hearts.png"/>
          </div>
          <div class="window">
        <div class="window-bar">
          <div class="window-circles">
          <div class="window_circles"></div>
          <div class="window_circles"></div>
          <div class="window_circles"></div>
          </div>
            </div>
      </div>
        <div class="pfp">
        <img class="image-pfp" src="../assets/pfp.png"/>
        </div>
        </div>
        <div class="hello-kitty-links">
          <div class="hello-kitty-shortcut">
            <img class="hello-kitty-img" src="../assets/link-images/Folder-3.png"/>
            <p class="hk-text"> Links </p>
          </div>
           <div class="hello-kitty-shortcut">
            <img class="hello-kitty-img" src="../assets/link-images/MyComputer-3.png"/>
            <p class="hk-text"> Links </p>
          </div>
           <div class="hello-kitty-shortcut">
            <img class="hello-kitty-img" src="../assets/link-images/Activexcache-2.png"/>
            <p class="hk-text"> Links </p>
          </div>
          </div>
          <div v-for="(entry,index) in Blog" :key="index">
          <blog :entry="entry"/>
          </div>
    </div>
  </div>
</template>

<script>
import Blog from '../components/Blog.vue';
import BlogComponent from '../components/BlogComponent.vue';
export default {
  components: { Blog, BlogComponent },
  name:"Index",

    data(){
        return{
            Blog:[
            {
                BlogBool:true,
                id:1,
                Title: "Fairy Kith Blog Title",
                date: "May 23,2022",
                bodytext: "Knock on the door at the drew house and expect to be greeted by a group of friends—or as they consider themselves, family—surrounded by skateboards, teddy bears, and VHS tapes from garage sale scores. Located in the San Fernando Valley, the real-life home that gives shape to the eponymous clothing label founded in 2018 by Justin Bieber and creative director Ryan Good is Knock on the door at the drew house and expect to be greeted by a group of friends—or as they consider themselves, family—surrounded by skateboards, teddy bears, and VHS tapes from garage sale scores. Located in the San Fernando Valley, the real-life home that gives shape to the eponymous clothing label founded in 2018 by Justin Bieber and creative director Ryan Good is Knock on the door at the drew house and expect to be greeted by a group of friends—or as they consider themselves, family—surrounded by skateboards, teddy bears, and VHS tapes from garage sale scores. Located in the San Fernando Valley, the real-life home that gives shape to the eponymous clothing label founded in 2018 by Justin Bieber and creative director Ryan Good is Knock on the door at the drew house and expect to be greeted by a group of friends—or as they consider themselves, family—surrounded by skateboards, teddy bears, and VHS tapes from garage sale scores. Located in the San Fernando Valley, the real-life home that gives shape to the eponymous clothing label founded in 2018 by Justin Bieber and creative director Ryan Good is ",
                position: "right-offset-window",
            },
            {
                BlogBool:true,
                id:2,
                Title: "Fairy Kith Blog Title",
                date: "May 23,2022",
                bodytext: "Knock on the door at the drew house and expect to be greeted by a group of friends—or as they consider themselves, family—surrounded by skateboards, teddy bears, and VHS tapes from garage sale scores. Located in the San Fernando Valley, the real-life home that gives shape to the eponymous clothing label founded in 2018 by Justin Bieber and creative director Ryan Good is",
                 position: "center-offset-window"
            },
            {
              NoteBool:true,
              id:3,
              Title:"Hi Welcome  overflow:hidden;  overflow:hidden; overflow:hidden; overflow:hidden;",
              position: "left-offset-window"
            },
            {
                BlogBool:true,
                id:4,
                Title: "Fairy Kith Blog Title",
                date: "May 23,2022",
                bodytext: "Knock on the door at the drew house and expect to be greeted by a group of friends—or as they consider themselves, family—surrounded by skateboards, teddy bears, and VHS tapes from garage sale scores. Located in the San Fernando Valley, the real-life home that gives shape to the eponymous clothing label founded in 2018 by Justin Bieber and creative director Ryan Good is",
                position: "center-leftset-window"
            },
            ]    
        };
    },
    computed:{
      windowToggle(){
        return this.$store.state.popBool;
      },
    },
}
</script>

<style lang="scss">
@import "~assets/main.scss";

.overlay{
  overflow-x: hidden;
}
.overlay-wrapper{
  outline:none;
}
.overlay_grid{
  overflow:hidden;
  
}

  .overlay-grid{
    position:fixed;
    z-index: 1;
    background-image: url("../assets/mesh-gradient.png");
    height:200vw;
  }
.transparency_desktop{
  width:100vw;
   mix-blend-mode:lighten;
}

.index-wrapper{
  height:200vw;
}

.innerPage{
  overflow:hidden;
}

.index_filter{
  width:100vw;
  height:100vh;
  position:fixed;
  left:0px;
  z-index:104;
    background: #E7A6BE;
  mix-blend-mode: overlay;
}

.fadeOut {
    animation: fadeOut 1s ease-in-out forwards;
}

.fadeIn {
    animation: fadeIn 1s ease-in-out;
}

@keyframes fadeOut{
  0% {
    opacity: 1;
}
99% {
    opacity: 0;
    margin-top: 30px;
}
100% {
    opacity: 0;
    display: none;
    z-index: -1;
}
}

@keyframes fadeIn {
  100%{
    opacity:1;
  }
  0% {
    opacity:0;
  }
}

//change width for mobile
.name-link{
  position:relative;
  top:28px;
  left:5vw;
  width: 30vw;
  height: 20vw;
  z-index:3;
  background:white;
  border:1px solid #E7A6BE;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.name-bio{
   font-family:"Daydream";
  color: #E7A6BE;
  text-align: center;
 font-family: 'Daydream';
font-style: normal;
font-weight: 100;
padding:0.5rem;
padding-bottom:50px;
}

.links{
  font-size:2vw;
}
.links:hover{
  //font-size:1.9vw;
}

.cursor-pointer{
  cursor: pointer;
}

.title{
  font-size: 3vw;
  width:100%;
  margin-bottom:0.5rem;
  padding-top:0.5rem;
}


.image-container{
   position:absolute;
  top:145px;
  width: 212px;
  z-index:80;
  left:32vw;
  background:white;
  // transform: translateY(-250px);
  border:1px solid #E7A6BE;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.mac-hearts{
  position:absolute;
  width:156px;
  top:-30px;
  left:35px;
}

.hearts{
  width:100%;
}

.pfp{
  z-index:3;
  width:212px;
}

.image-pfp{
  width:100%;
}


.window{
  z-index: 5;
  cursor: pointer;
}

.window-bar {
    height: 24px;
    border-top: 1px solid #E7A6BE;
    border-bottom: 1px solid #E7A6BE;
    //transform: translateY(1px);
    //background-color: var(--secondary);
    text-decoration: none;
}

.window-circles{
    display: flex;
    margin: 6px 6px 6px 10px;
}
.window_circles {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    border: 1px solid #E7A6BE;
    margin-right: 6px;
}

.hello-kitty-links{
  position:absolute;
  display:flex;
  flex-direction: row;
  top:450px;
  left:10vw;
  z-index:3;
  font-family: PPMondwest-Regular;
}

.hello-kitty-img{
    margin-bottom: 1em;

}
.hello-kitty-shortcut{
  width: 100px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1rem;
}





</style>