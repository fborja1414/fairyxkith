<template>
    <div>
         <div class="innerpage_background" :class="{'remove': !windowToggle}" @click="toggleWindowOff"> </div>
         <div class="innerpage_window" :class="{'popUp': windowToggle, 'popOut':!windowToggle}"> 
               <div class="window">
        <div class="window-bar">
          <div class="window-circles">
          <div class="window_circles"></div>
          <div class="window_circles"></div>
          <div class="window_circles"></div>
          <div class="blog-index">Blog {{ }}</div>
          </div>
             </div>
               </div>
               <div class="innerpage-wrapper" v-if="curBlog.attributes?.StartingImage">

            <img v-if="curBlog.attributes?.StartingImage.data" class="image" :src="curBlog.attributes.StartingImage.data.attributes.url" loading="lazy" /> 
             
            <div>
             <div v-if="curBlog.attributes?.BlogTitle" class="innerpage-title">{{curBlog.attributes.BlogTitle}}</div>
            <div v-if="curBlog.attributes?.BlogDate" class="innerpage-date">{{curBlog.attributes.BlogDate}}</div>
            <div v-if="curBlog.attributes?.BlogText" class="innerpage-text">{{curBlog.attributes.BlogText}}</div>
           
          </div>
                
             </div>
         </div>
        </div>
</template>

<script>
export default {
    name:"BlogComponent",
    props: {
        blogs:Object,
    },

    // data(){
    //     return{
    //         curBlog:Object,
    //     };
    // },

    computed:{
        windowToggle(){
            return this.$store.state.popBool;
        },
        curBlog(){
            return this.$store.state.blogs;
        },
    },


    watch:{
        windowToggle(){
            const windowBoolean = this.$store.state.popBool;
            if(windowBoolean) {
                document.body.classList.add("switchoverflow");
                // this.filterBlog(this.blogs);
            } else{
                document.body.classList.remove("switchoverflow");
            }
        }
    },

// mounted(){
//     this.filterBlog(this.blogs);
// },
    methods:{
    toggleWindowOff(){
        this.$store.commit("togglePop", false);
    },
    // filterBlog(blog){
    //    console.log(JSON.stringify(blog));
    //   // console.log(blog.data.attributes.id);
    //    var indexblog= this.$store.state.blogIndex;
    //    console.log(indexblog);
    //     const currentBlog = blog.data.filter( (blogItem) => blogItem.id == this.$store.state.blogIndex );
    //      console.log(typeof (currentBlog));
    //     this.curBlog = currentBlog;
    // }
    }

}
</script>

<style lang="scss">
.innerpage_window{
width: 90vw;
    position: fixed;
    z-index: 100;
    left: 5vw;
    height: 88vh;
    background-color: #fff;
    outline: 1px solid #E7A6BE;
    z-index: 120;
    top: 6vh;
    overflow: scroll;
   
}

.innerpage_background{
        width: 100vw;
        height:1000vh;
    position: absolute;
    z-index: 111;
    opacity: 1%;
}

.innerpage_content{
    display:flex;
    justify-content: center;
    padding:5rem;
}

.innerpage-wrapper{
    padding:1rem;
    text-align: center;
    height:100%;

}

.innerpage-index{
      font-family: PPNeueBit-Bold;
    font-size:18px;
        color:  #E7A6BE;
}

.innerpage-title{
    text-align: center;
    font-family: PPNeueBit-Bold;
    font-size: 50px;
    color:  #E7A6BE;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.innerpage-date{
    text-align: center;
    font-family: PPNeueBit-Bold;
    font-size:18px;
    color:  #E7A6BE;
    margin-bottom:3rem;
}

.innerpage-text{
    text-align: left;
    font-family: PPMondewest-Regular;
    font-size:20px;
    height:20vh;
    overflow:scroll;
    color:  #E7A6BE;
}


.remove{
    display:none;
}

.switchoverflow{
    overflow:hidden;
}

.window{
  z-index: 5;
  cursor: pointer;
}

.blog-index{
      font-family: PPNeueBit-Bold;
    font-size:18px;
        color:  #E7A6BE;
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


.popUp{
     animation: popUp .7s cubic-bezier(.31,1.49,.48,1);
}

.popOut{ animation: popOut .7s cubic-bezier(.31,1.49,.48,1) forwards;
}
@keyframes popUp {
    
0% {
    opacity: 0;
    transform: translateY(30px);
}
100% {
    opacity: 1;
    transform: translate(0);
}
}

@keyframes popOut{
   0%  {
    opacity: 1;
    transform: translate(0);
}

99% {
    opacity: 0;
    transform: translateY(30px);
}
100% {
    opacity: 0;
    display: none;
    z-index: -1;
}
}
</style>