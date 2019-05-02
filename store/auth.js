export const state = () => ({
  user: {},
  token: '',
  forms: {
    login: {
      email: '',
      password: ''
    },
    register: {
      email: '',
      password: '',
      password_confirmation: '',
      name: ''
    }
  },
  userSettingsFeedbackModal: {
    success: true,
    message: '',
    enabled: false,
  }
});

export const mutations = {
  SET_FORM_DATA(state, payload){
    state.forms[payload.form][payload.key] = payload.value;
  },
  SET_TOKEN(state, token){
    state.token = token;
  },
  SET_USER(state, user){
    state.user = user;
  },
  SET_USER_SETTING(state, payload) {
    state.user.settings.values[payload[0]] = payload[1];
  },
  ENABLE_USER_SETTING_MODAL(state, payload) {
    state.userSettingsFeedbackModal.enabled = true;
    state.userSettingsFeedbackModal.message = payload.message;
    state.userSettingsFeedbackModal.success = payload.success;
  },
  DISABLE_USER_SETTING_MODAL(state) {
    state.userSettingsFeedbackModal.enabled = false;
  }
};
export const actions = {
  setFormData(context, payload){
    context.commit('SET_FORM_DATA', payload);
  },
  login(context){
    this.$api.service.post('login', context.state.forms.login).then((resp) => {
      context.dispatch('setToken', resp.token);
      this.$router.go({ path: '/posts' })
    });
  },
  setToken(context, token){
    context.commit('SET_TOKEN', token);
    window.localStorage.setItem('token', token);
    this.$axios.setToken(token, 'Bearer');
    this.$api.service.get('user').then((resp) => {
      context.commit('SET_USER', resp.user);
    });
  },
  logout(context){
    context.commit('SET_USER', {});
    window.localStorage.removeItem('token');
    context.commit('SET_TOKEN', '');
    this.$router.go({ path: '/' })
  },
  register(context){
    this.$api.service.post('register', context.state.forms.register).then((resp) => {
      context.dispatch('setToken', resp.token);
      context.commit('SET_USER', resp.user);
      this.$router.go({ path: '/posts' })
    });
  },
  refresh(context) {
    this.$api.service.get('refresh').then((resp) => {
      window.localStorage.setItem('token', resp.token);
      context.dispatch('setToken', resp.token);
    }).error(error => {
      console.log(error);
    });
  },
  updateUserSettings(context) {
    this.$api.service.post('usersettings', context.state.user.settings.values).then((resp) => {
      if (resp['success'] == true) {
        context.commit('ENABLE_USER_SETTING_MODAL', {message: "Settings successfully changed!", success: true});
      }
    },((error) => {
      let errorMessage = error.response.data.errors[Object.keys(error.response.data.errors)[0]][0];
      context.commit('ENABLE_USER_SETTING_MODAL', {message: errorMessage, success: false});
    }));
  }
  ,
  disableUserSettingModal(context){
    context.commit("DISABLE_USER_SETTING_MODAL");
  },
  setUserSetting(context, payload) {
    context.commit('SET_USER_SETTING', payload);
  }
};
export const getters = {

};
