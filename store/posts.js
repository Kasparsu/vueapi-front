export const state = () => ({
  single: null,
  list: [],
  pagination: {
    current_page:0,
    last_page:0
  },
  isLoading: false,
  comment: {
    text: "",
  },
  modal: {
    edit: {
      active: false,
      title: 'Create Post',
      closeAction: 'posts/toggleModal',
      saveAction: 'posts/createPost',
      name: 'edit',
      id: 0,
      data: {
        title: '',
        content: ''
      }
    }
  }
});

export const mutations = {
  ADD_POSTS(state, posts) {
    state.list.push(...posts)
  },
  SET_POSTS(state, posts) {
    state.list = posts;
  },
  SET_PAGINATION(state, pagination) {
    state.pagination = pagination;
  },
  TOGGLE_IS_LOADING(state){
    state.isLoading = !state.isLoading;
  },
  TOGGLE_MODAL(state, key){
    state.modal[key].active = !state.modal[key].active;
  },
  SET_MODAL_DATA(state, data){
    state.modal[data.modal].data[data.key] = data.value;
  },
  UPDATE_MODAL(state, data){
    state.modal[data.modal] = {...state.modal[data.modal], ...data }
  },
  SET_POST(state, payload){
    state.list.splice(payload.index, 1, payload.data);
  },
  REMOVE_POST(state, index){
    state.list.splice(index, 1);
  },
  SET_SINGLE_POST(state, post){
    state.single = post;
  },
  SET_COMMENT_TEXT(state, value){
    state.comment.text = value;
  },
  ADD_COMMENT(state, value){
    state.single.comments.push(value);
  }
};
export const actions = {
  loadFavoritesPosts(context){
    this.$api.service.get('favorites/get').then((response)=>{
      context.commit('ADD_POSTS', response.data);
      // delete response.data;
      // context.commit('SET_PAGINATION', response);
      // context.commit('TOGGLE_IS_LOADING');
    })
  },
  loadNextPosts(context) {
    context.commit('TOGGLE_IS_LOADING');
    this.$api.posts.page(context.state.pagination.current_page + 1).then((response)=>{
      context.commit('ADD_POSTS', response.data);
      delete response.data;
      context.commit('SET_PAGINATION', response);
      context.commit('TOGGLE_IS_LOADING');
    });
  },
  loadPostPage(context, page) {
    context.commit('TOGGLE_IS_LOADING');
    this.$api.posts.page(page).then((response)=>{
      context.commit('SET_POSTS', response.data);
      delete response.data;
      context.commit('SET_PAGINATION', response);
      context.commit('TOGGLE_IS_LOADING');
    });
  },
  toggleModal(context, key) {
    context.commit('TOGGLE_MODAL', key);
  },
  setModalData(context, data) {
    if(data.id){
      context.commit('UPDATE_MODAL', {
        modal: data.modal,
        id: data.id,
        title: 'Edit Post',
        data: Object.assign({}, context.state.list.filter((el)=> el.id == data.id)[0]),
        saveAction: 'posts/savePost'
      });
    } else {
      context.commit('UPDATE_MODAL', {
        modal: 'edit',
        id: 0,
        title: 'Create Post',
        data: {},
        saveAction: 'posts/createPost'
      });
    }

  },
  setFormData(context, data){
    context.commit('SET_MODAL_DATA', data)
  },
  savePost(context) {
    let edit = context.state.modal.edit;
    this.$api.posts.save(edit.id,edit.data).then((response)=>{
      context.commit('TOGGLE_MODAL', 'edit');
      console.log(response);
      let index = context.state.list.findIndex(el => el.id==response.id);
      context.commit('SET_POST', {data:response, index: index});
    });
  },
  deletePost(context,id) {
    this.$api.posts.remove(id).then((response)=>{
      let index = context.state.list.findIndex(el => el.id==id);
      context.dispatch('loadPostPage', context.state.pagination.current_page);
    });
  },
  createPost(context){
    let edit = context.state.modal.edit;
    this.$api.posts.create(edit.data).then((response)=>{
      context.commit('TOGGLE_MODAL', 'edit');
      let pagination = context.state.pagination;
        context.dispatch('loadPostPage', context.state.pagination.current_page);
    });
  },
  likePost(context, postId){
    let post = context.state.list.filter((el)=> el.id == postId)[0];
    let call;
    if(!post.is_liked){
      call = this.$api.posts.like(postId);
    } else {
      call = this.$api.posts.unlike(postId);
    }
    call.then( response =>{
      let index = context.state.list.findIndex(el => el.id==response.id);
      context.commit('SET_POST', {data:response, index: index});
    });
  },
  dislikePost(context, postId){
    let post = context.state.list.filter((el)=> el.id == postId)[0];
    let call;
    if(!post.is_disliked){
      call = this.$api.posts.dislike(postId);
    } else {
      call = this.$api.posts.undislike(postId);
    }
    call.then( response =>{
      let index = context.state.list.findIndex(el => el.id==response.id);
      context.commit('SET_POST', {data:response, index: index});
    });
  },
  getPost(context, postId){
    let posts = context.state.list;
    if(posts.length){
      let index = context.state.list.findIndex(el => el.id==postId);
      if(index){
        context.commit('SET_SINGLE_POST', posts[index]);
        return;
      }
    }
    this.$api.posts.get(postId).then(resp => {
      context.commit('SET_SINGLE_POST', resp);
    });
  },
  postComment(context) {
    console.log("postComment");
    this.$api.posts.comment(context.state.single.id, context.state.comment.text).then(resp => {
      context.commit('SET_COMMENT_TEXT', '');
      context.commit('SET_SINGLE_POST', resp);
    });
  },
  setCommentText(context, value){
    context.commit('SET_COMMENT_TEXT', value);
  },
  pollComments(context, postId){
    let length = 0;
    if(context.state.single) {
      length = context.state.single.comments.length;
    }
    this.$api.posts.pollComments(postId, length).then(resp => {
      context.commit('SET_SINGLE_POST', resp);
      context.dispatch('pollComments', postId);
    });
  },
  addComment(context, comment){
    context.commit('ADD_COMMENT', comment);
  }
};
export const getters = {

};
