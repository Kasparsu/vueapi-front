import PostsService from "./postsService";
import Service from "./service";
import thoughtService from "./thoughtService";

export default class ServiceContainer {
  constructor(api) {
    this.service = new Service(api);
    this.posts = new PostsService(api);
    this.thoughts = new thoughtService(api);
  }
}
