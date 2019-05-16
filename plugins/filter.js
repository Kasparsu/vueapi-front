import EpicFilter from "../src/EpicFilter.js";

export default ({ app }, inject) => {
  let filter = new EpicFilter();

  // words to ban. to ban a word you need to provite its base form and its type group
  filter.addSwearWord(filter.getKaandWord('ohutu', '1'));
  filter.addSwearWord(filter.getKaandWord('veski', '1e'));
  filter.addSwearWord(filter.getKaandWord('voodi', '1e'));
  filter.addSwearWord(filter.getKaandWord('rahusti', '1e'));
  filter.addSwearWord(filter.getKaandWord('õpik', '2'));
  filter.addSwearWord(filter.getKaandWord('vaagen', '2'));
  filter.addSwearWord(filter.getKaandWord('hirmus', '2'));
  filter.addSwearWord(filter.getKaandWord('heeringas', '2'));
  filter.addSwearWord(filter.getKaandWord('kreemjas', '2'));
  filter.addSwearWord(filter.getKaandWord('köitev', '2'));
  filter.addSwearWord(filter.getKaandWord('minut', '2e'));
  filter.addSwearWord(filter.getKaandWord('loend', '2e'));
  filter.addSwearWord(filter.getKaandWord('peegel', '2e'));
  filter.addSwearWord(filter.getKaandWord('keegel', '2e'));

  // cool
  filter.addSwearWord(filter.getKaandWord('neeger', '2e'));

  inject('filter', filter);
}

