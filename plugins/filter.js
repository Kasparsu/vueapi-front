import EpicFilter from "../src/EpicFilter.js";

export default ({ app }, inject) => {
  let filter = new EpicFilter();
  inject('filter', filter);
}
