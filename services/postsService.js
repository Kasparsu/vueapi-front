import Service from "./service";

export default class PostsService extends Service {

  constructor(api){
    super(api);
    this.prefix= 'posts'
  }
  like(postId){
    return this.get(postId + '/like')
  }
  dislike(postId){
    return this.get(postId + '/dislike')
  }
  unlike(postId){
    return this.get(postId + '/unlike')
  }
  undislike(postId){
    return this.get(postId + '/undislike')
  }
}
