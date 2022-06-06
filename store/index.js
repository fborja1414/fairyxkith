export const state = () =>({
    popBool: false,
    blogIndex: 1,
    blogs: Object,
   // filteredBlog: Object,
});

export const mutations={
    togglePop(state,value){
        console.log(value);
        state.popBool=value;
    },
    updateBlogIndex(state, value){
        state.blogIndex = value;
    },
    saveBlogs(state,value){
        state.blogs = value;
        console.log("blogs" + JSON.stringify(value));
    },
    // filterBlogs(state,value){
    //     const currentBlog = value.data.filter( (blogItem) => blogItem.id == state.blogIndex );
    //    state.filteredBlog = currentBlog;
    //    console.log(JSON.stringify(currentBlog));
    // }

};

