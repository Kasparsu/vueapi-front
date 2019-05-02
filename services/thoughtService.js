import service from "./service";

export default class thoughtService extends service {
  constructor(api) {
    super(api);
    this.prefix = 'thoughts'
  }

  thought(page) {
    return this.get('', {
      params: {
        page: page
      }
    })
  }

}
