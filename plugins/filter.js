import EpicFilter from "../src/EpicFilter.js";

export default ({ app }, inject) => {
  let filter = new EpicFilter();
  filter.addSwearWord(filter.getKaandWord('veski', '1e'));
  filter.addSwearWord(filter.getKaandWord('õpik', '2'));
  inject('filter', filter);
}
