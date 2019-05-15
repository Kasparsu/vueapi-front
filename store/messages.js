export const state = () => ({
    modal:false,
    messages:[]
})

export const mutations = {
    setModalActive (state, value) {
        state.modal = value
      },
      addMessages (state,value) {
        state.messages.push(value)
      }
}
export const actions = {
    toggleChat (context) {
        context.commit('setModalActive', !context.state.modal);
    },
    addMessages (context,value) {
        console.log(context)
        context.commit('addMessages', value);
    }
}
export const getters = {

}
