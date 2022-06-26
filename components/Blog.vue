<template>
<div class="component-container" id="component" :class="'component-container-' + entry.id" >
    <div class="blog-container" v-if="entry.attributes.Blog" :class= "['blog-container-' + entry.id]">
           <div class="window" @mousedown="setWindowPos($event)" v-on:mouseup="resetWindow" >
        <div class="window-bar">
          <div class="window-circles">
          <div class="window_circles"></div>
          <div class="window_circles"></div>
          <div class="window_circles"></div>
          <div class="blog-index">Blog {{ entry.id}}</div>
          </div>
            </div>
      </div>
        <div class="blog-wrapper"  @click='toggleWindow'>

            <img v-if="entry.attributes.StartingImage.data != null" class="image" :src="entry.attributes.StartingImage.data.attributes.url" @load="setBlogDimension"/> 
             
            <div>
             <div v-if="entry.attributes.BlogTitle != ''" class="blog-title">{{entry.attributes.BlogTitle}}</div>
            <div v-if="entry.attributes.BlogDate != ''" class="blog-date">{{entry.attributes.BlogDate}}</div>
            <div v-if="entry.attributes.BlogText != ''" class="blog-text">{{entry.attributes.BlogText}}</div>
            </div>
             <div class="blog-circles">
          <div class="window_circles"></div>
          <div class="window_circles"></div>
          <div class="window_circles"></div>
          </div>
          </div>
    </div>
    <div class="note-container"  @click='toggleWindow' :class= "entry.attributes.position" v-if="entry.attributes.Note">
          <div class="window" >
        <div class="window-bar">
          <div class="window-circles">
          <div class="window_circles"></div>
          <div class="window_circles"></div>
          <div class="window_circles"></div>
          <div class="blog-index">Note {{ entry.id}}</div>
          </div>
            </div>
      </div>
        <div class="note-wrapper">
            <div class="note-text" :class="entry.attributes.NoteColor">{{entry.attributes.NoteText}}</div>
            <div></div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name:"Blog",
    props:{
        entry: Object,

    },

    data(){
        return{
            toggleBlog: false,
            isDown:false,
        };
    },

    methods:{

        initializeWindow(){
            var currBlog = document.querySelector('.blog-container-' + this.entry.id);
              console.log(currBlog);
            currBlog?.classList.add(this.entry.attributes.position);
        },

        toggleWindow(){
            if(!this.entry.attributes.Note)
            this.$store.commit('togglePop',true);
            this.$store.commit('updateBlogIndex',this.entry.id);
            this.$store.commit('saveBlogs',this.entry);
          
        },
        // in backend set blog width using Max Width but image width will always be default image width size
        // for image only posts, title is omitted

        //for notes, color will have 4 different font color options
        setBlogDimension(){
            let image=document.querySelector(".image");
            console.log(image);
            var imageWidth = image.clientWidth;
            //  image.style.maxWidth = this.entry.maxWidth + "vw";
           // console.log
            //var imageWidth = imageDims.x;
            var blogString = '.component-container-' + this.entry.id;
            var currBlog = document.querySelector('.blog-container-' + this.entry.id);
          const windowWidth = window.innerWidth;
            const viewWidth = 100 * imageWidth/windowWidth;
       if(this.entry.attributes.maxWidth){ 
            currBlog.style.width = this.entry.attributes.maxWidth +  "vw";
            currBlog.style.height = this.entry.attributes.maxWidth +  "vw";
         currBlog.style.maxWidth = this.entry.attributes.maxWidth + "vw";
            }
            else{
          currBlog.style.width= viewWidth + 4 + 'vw';
            
            }
            // let imageContainer = image.q
        },

        setWindowPos(e){
               
              var currBlog = document.querySelector('.blog-container-' + this.entry.id);
               var offset = [0,0];
                console.log(currBlog.offsetLeft + "offsetleft");
                 this.$store.commit('updateBlogIndex',this.entry.id);
  
                    
                     this.isDown = true;
                        offset = [
                            currBlog.offsetLeft - e.clientX,
                            currBlog.offsetTop - e.clientY
                        ];
                        document.addEventListener('mousemove', (e) => {
                            e.preventDefault();
   if (this.isDown) {
        console.log("inmousemove");
        console.log(e.clientX);
        currBlog.style.left = (e.clientX + offset[0]) + 'px';
        currBlog.style.top  = (e.clientY + offset[1]) + 'px';
    }
                        })
           
  
// divOverlay.addEventListener('mousedown', function(e) {
// isDown = true;
// offset = [
//     divOverlay.offsetLeft - e.clientX,
//     divOverlay.offsetTop - e.clientY
//  ];
 //}, true);

        },



resetWindow(){

   this.isDown = false;
       console.log(this.isDown);
},
    },


    mounted() {
        this.initializeWindow();
     }
}

</script>


<style lang="scss" scoped>

.window{
  z-index: 5;
  cursor: pointer;
  position:sticky;
  background:white;
  top:0px;
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

//change width for mobile

.blog-container{
    cursor:pointer;
    position:relative;
    background:white;
    overflow:scroll;
    z-index: 4;
    width:52vw;
    height:25vw;
    border:1px solid #E7A6BE;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}



.blog-wrapper{
   // max-width:30rem;
    padding:1rem;
}

.blog-index{
      font-family: PPNeueBit-Bold;
    font-size:18px;
        color:  #E7A6BE;
}

.blog-title{
    font-family: PPNeueBit-Bold;
    font-size: 50px;
    color:  #E7A6BE;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.blog-date{
    font-family: PPNeueBit-Bold;
    font-size:18px;
    color:  #E7A6BE;
    margin-bottom:3rem;
}

.blog-text{
    font-family: PPMondewest-Regular;
    font-size:20px;
    height:20vh;
    overflow:hidden;
    color:  #E7A6BE;
}

.blog-circles{
   // position:absolute;
       display: flex;
       justify-content: center;
       padding-top:1rem;
    bottom:2rem;
    left:1rem;
    text-align: center;
    align-content: center;
}

.note-container{
    position:relative;
    background:white;
    width:30vw;
    height:20vw;
     border:1px solid #E7A6BE;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index:100;
}

.note-wrapper{
   background: rgba(231, 166, 190, 0.35);
    width:100%;
    height:calc(100% - 24px);
  
}

.image{
    //width:100%;
   // height:20vw;
    z-index:120;
    max-width:20vw;
    margin-bottom: 3rem;
}

.note-text{
    padding:1rem;
    font-family: Daydream;
    font-size: 50px;
    height:calc(90% - 24px);
       overflow:scroll;
    color:#EFFF8B;
}



.Pink{
    color: #FFAFCD;
}
 //yellow
 .Yellow{
 color:#EFFF8B;
 }
 //green
 .Green{
 color:#A1DB66;
 }
 //blue
 .Blue{
 color:#7CD2ED;
 }


//white
.White{
color:#ffffff;
}

.right1{
    left:60vw;
    transform: translateY(-12vw);
  //  z-index:100;
}

.center1{
   left: 30vw;
    transform: translateY(-20vw);
   // z-index:5;
}

.center2{
  left:25vw;
    transform: translateY(-30vw);
    z-index:5;
}

.left1{
  //  margin-left: 5vw;
    transform: translateY(-30vw);
   left:5vw;
   // z-index:7;
}

.right2{
    left:50vw;
    transform: translateY(-20vw);
    z-index:6;
}

.left2{
  left:8vw;
    transform: translateY(-40vw);
   // z-index:7;
}

.center3{
   left:25vw;
    transform: translateY(-30vw);
   // z-index:5;
}

</style>