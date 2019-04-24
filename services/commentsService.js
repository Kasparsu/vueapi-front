import Service from "./service";

export default class CommentsService extends Service {
  constructor(api){
    super(api);
    this.prefix= 'comments'
  }
  like(commentId){
    return this.get(commentId + '/like')
  }
  unlike(commentId){
    return this.get(commentId + '/unlike')
  }
}
