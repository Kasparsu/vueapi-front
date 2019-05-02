export const state = () => ({
  pagination: {
    current_page: 0,
    last_page: 0
  },
  info: {},
});

export const mutations = {
  SET_PAGE_DATA(state, data) {
    state.pagination = data;
  },
  SET_THOUGHT_INFO(state, data) {
    state.info = data;
  }
};
export const actions = {
  loadThought(context) {
    this.$api.thoughts.thought(1).then((response) => {
      context.commit('SET_PAGE_DATA', response);
      context.commit('SET_THOUGHT_INFO', response.data[0]);
    });
  },
  loadNextThought(context, page) {
    this.$api.thoughts.thought(page).then(response => {
      context.commit('SET_PAGE_DATA', response);
      context.commit('SET_THOUGHT_INFO', response.data[0]);
    })


  }
};
export const getters = {};
