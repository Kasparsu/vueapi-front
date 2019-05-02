// teoreetiliselt kuna eesti keeles enamik käändeid ehituvad üles sõna omastavale käändele midagi liites, saaks seda ka arvestada ja teha targema süsteemi. aga ma ei viitsi

const wordTypes = {
  'declinable': {
    '1': {
      'endingLength': 0,
      'endings': {
        'singular': [
          [{ 'offset': 0, 'text': '' }],
          [{ 'offset': 0, 'text': '' }],
          [{ 'offset': 0, 'text': 't' }],
          [{ 'offset': 0, 'text': 'sse' }],
          [{ 'offset': 0, 'text': 's' }],
          [{ 'offset': 0, 'text': 'st' }],
          [{ 'offset': 0, 'text': 'le' }],
          [{ 'offset': 0, 'text': 'l' }],
          [{ 'offset': 0, 'text': 'lt' }],
          [{ 'offset': 0, 'text': 'ks' }],
          [{ 'offset': 0, 'text': 'ni' }],
          [{ 'offset': 0, 'text': 'na' }],
          [{ 'offset': 0, 'text': 'ta' }],
          [{ 'offset': 0, 'text': 'ga' }]
        ],
        'plural': [
          [{ 'offset': 0, 'text': 'd' }],
          [{ 'offset': 0, 'text': 'te' }],
          [{ 'offset': 0, 'text': 'id' }],
          [{ 'offset': 0, 'text': 'isse' }, { 'offset': 0, 'text': 'tesse' }],
          [{ 'offset': 0, 'text': 'is' }, { 'offset': 0, 'text': 's' }],
          [{ 'offset': 0, 'text': 'ist' }, { 'offset': 0, 'text': 'st' }],
          [{ 'offset': 0, 'text': 'ile' }, { 'offset': 0, 'text': 'le' }],
          [{ 'offset': 0, 'text': 'il' }, { 'offset': 0, 'text': 'l' }],
          [{ 'offset': 0, 'text': 'ilt' }, { 'offset': 0, 'text': 'lt' }],
          [{ 'offset': 0, 'text': 'iks' }, { 'offset': 0, 'text': 'ks' }],
          [{ 'offset': 0, 'text': 'ini' }, { 'offset': 0, 'text': 'ni' }],
          [{ 'offset': 0, 'text': 'ina' }, { 'offset': 0, 'text': 'na' }],
          [{ 'offset': 0, 'text': 'ita' }, { 'offset': 0, 'text': 'ta' }],
          [{ 'offset': 0, 'text': 'iga' }, { 'offset': 0, 'text': 'ga' }]
        ]
      }
    },
    '1e': {
      'endingLength': 1,
      'endings': {
        'singular': [
          [{ 'offset': 1, 'text': '' }],
          [{ 'offset': 1, 'text': '' }],
          [{ 'offset': 1, 'text': 't' }],
          [{ 'offset': 1, 'text': 'sse' }],
          [{ 'offset': 1, 'text': 's' }],
          [{ 'offset': 1, 'text': 'st' }],
          [{ 'offset': 1, 'text': 'le' }],
          [{ 'offset': 1, 'text': 'l' }],
          [{ 'offset': 1, 'text': 'lt' }],
          [{ 'offset': 1, 'text': 'ks' }],
          [{ 'offset': 1, 'text': 'ni' }],
          [{ 'offset': 1, 'text': 'na' }],
          [{ 'offset': 1, 'text': 'ta' }],
          [{ 'offset': 1, 'text': 'ga' }]
        ],
        'plural': [
          [{ 'offset': 1, 'text': 'd' }],
          [{ 'offset': 1, 'text': 'te' }],
          [{ 'offset': 0, 'text': 'eid' }],
          [{ 'offset': 0, 'text': 'eisse' }, { 'offset': 1, 'text': 'tesse' }],
          [{ 'offset': 0, 'text': 'eis' }, { 'offset': 1, 'text': 'tes' }],
          [{ 'offset': 0, 'text': 'eist' }, { 'offset': 1, 'text': 'test' }],
          [{ 'offset': 0, 'text': 'eile' }, { 'offset': 1, 'text': 'tele' }],
          [{ 'offset': 0, 'text': 'eil' }, { 'offset': 1, 'text': 'tel' }],
          [{ 'offset': 0, 'text': 'eilt' }, { 'offset': 1, 'text': 'telt' }],
          [{ 'offset': 0, 'text': 'eiks' }, { 'offset': 1, 'text': 'teks' }],
          [{ 'offset': 0, 'text': 'eini' }, { 'offset': 1, 'text': 'teni' }],
          [{ 'offset': 0, 'text': 'eina' }, { 'offset': 1, 'text': 'tena' }],
          [{ 'offset': 0, 'text': 'eita' }, { 'offset': 1, 'text': 'teta' }],
          [{ 'offset': 0, 'text': 'eiga' }, { 'offset': 1, 'text': 'tega' }]
        ]
      }
    }
  },
  'conjugable': {
    
  }  
};

export default class EpicFilter {
  constructor() {

  };

  clean(text) {
    return "puhas";
  }
}