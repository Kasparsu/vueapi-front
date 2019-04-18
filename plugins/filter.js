const Filter = require('bad-words');
export default ({ app }, inject) => {
  filter.addWords('featuur');
  inject('filter', filter);
}
