export const state = () =>({
    popBool: false,
});

export const mutations={
    togglePop(state,value){
        console.log(value);
        state.popBool=value;
    },



}