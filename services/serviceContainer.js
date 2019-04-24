import PostsService from "./postsService";
import CommentsService from "./commentsService";
import Service from "./service";

export default class ServiceContainer {
  constructor(api){
    this.service = new Service(api);
    this.posts = new PostsService(api);
    this.comments = new CommentsService(api);
  }
}
