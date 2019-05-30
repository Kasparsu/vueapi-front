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
  profileUser: {}
});

export const mutations = {
  SET_FORM_DATA(state, payload){
    state.forms[payload.form][payload.key] = payload.value;
  },
  SET_TOKEN(state, token){
    state.token = token;
  },
  SET_BIO(state, bio){
    state.user.bio = bio;
  },
  SET_AGE(state, age){
    state.user.age = age;
  },
  SET_USER(state, user){
    state.user = user;
  },
  SET_INFO(state, info){
    state.profileUser = info;
  }
};
export const actions = {
  setBio(context,payload){
    if (payload.id == context.state.user.id){
      context.commit('SET_BIO',payload.bio);
      this.$api.service.post('profile/'+payload.id, payload);
    }
    else {
      console.log("not your account")
    }
  },
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
  getProfile(context,userID){
    this.$api.service.get('profile/'+userID).then((resp) => {
      console.log(resp);
      context.commit('SET_INFO', resp);
    })
  }
};
export const getters = {

};
