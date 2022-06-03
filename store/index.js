export const state = () =>({
    popBool: false,
    blogIndex: 1,
});

export const mutations={
    togglePop(state,value){
        console.log(value);
        state.popBool=value;
    },
    updateBlogIndex(state, value){
        state.blogIndex = value;
    },


}