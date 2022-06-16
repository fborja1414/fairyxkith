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
        console.log(value);
    },
    saveBlogs(state,value){
        state.blogs = value;
    },
    // filterBlogs(state,value){
    //     const currentBlog = value.data.filter( (blogItem) => blogItem.id == state.blogIndex );
    //    state.filteredBlog = currentBlog;
    //    console.log(JSON.stringify(currentBlog));
    // }

};

