// teoreetiliselt kuna eesti keeles enamik käändeid ehituvad üles sõna omastavale käändele midagi liites, saaks seda ka arvestada ja teha targema süsteemi. aga ma ei viitsi

const wordTypes = {
  'declinable': {
    '1': {
      /* all rules are original */
      'definition': 'original',
      'ainsus': {
        /* all changes are based on word root */
        'nimetav': [{'definition': 'original','changes': { '*': {'offset': 0, 'text': ''}}}],
        'omastav': [{'definition': 'original','changes': { '*': {'offset': 0, 'text': ''}}}],
        'osastav': [{'definition': 'original','changes': { '*': {'offset': 0, 'text': ''}}}],
        /* all changes are based on lead */
        'sisse': [{'definition': 'addon','lead': 'ainsus/omastav','changes': { '*': {'offset': 0, 'text': 'sse'}}}],
        'sees': [{'definition': 'addon','lead': 'ainsus/omastav','changes': { '*': {'offset': 0, 'text': 's'}}}],
        'seest': [{'definition': 'addon','lead': 'ainsus/omastav','changes': { '*': {'offset': 0, 'text': 'st'}}}],
        'alale': [{'definition': 'addon','lead': 'ainsus/omastav','changes': { '*': {'offset': 0, 'text': 'le'}}}],
        'alal': [{'definition': 'addon','lead': 'ainsus/omastav','changes': { '*': {'offset': 0, 'text': 'l'}}}],
        'alalt': [{'definition': 'addon','lead': 'ainsus/omastav','changes': { '*': {'offset': 0, 'text': 'lt'}}}],
        'saav': [{'definition': 'addon','lead': 'ainsus/omastav','changes': { '*': {'offset': 0, 'text': 'ks'}}}],
        'rajav': [{'definition': 'addon','lead': 'ainsus/omastav','changes': { '*': {'offset': 0, 'text': 'ni'}}}],
        'olev': [{'definition': 'addon','lead': 'ainsus/omastav','changes': { '*': {'offset': 0, 'text': 'na'}}}],
        'ilma': [{'definition': 'addon','lead': 'ainsus/omastav','changes': { '*': {'offset': 0, 'text': 'ta'}}}],
        'kaasa': [{'definition': 'addon','lead': 'ainsus/omastav','changes': { '*': {'offset': 0, 'text': 'ga'}}}],
      },
      'mitmus': {
        'nimetav': [{'definition': 'original','changes': { '*': {'offset': 0, 'text': 'd'}}}],
        'omastav': [{'definition': 'addon','lead': 'ainsus/osastav', 'changes': { '*': {'offset': 0, 'text': 'te'}}}],
        'osastav': [{'definition': 'original','changes': { '*': {'offset': 0, 'text': 'id'}}}],
        'sisse': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 'sse'}}},
          {'definition': 'addon','lead': 'mitmus/osastav','changes': { '*': {'offset': -1, 'text': 'sse'}}}
        ],
        'sees': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 's'}}},
          {'definition': 'addon','lead': 'mitmus/osastav','changes': { '*': {'offset': -1, 'text': 's'}}}
        ],
        'seest': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 'st'}}},
          {'definition': 'addon','lead': 'mitmus/osastav','changes': { '*': {'offset': -1, 'text': 'st'}}}
        ],
        'alale': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 'le'}}},
          {'definition': 'addon','lead': 'mitmus/osastav','changes': { '*': {'offset': -1, 'text': 'le'}}}
        ],
        'alal': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 'l'}}},
          {'definition': 'addon','lead': 'mitmus/osastav','changes': { '*': {'offset': -1, 'text': 'l'}}}
        ],
        'alalt': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 'lt'}}},
          {'definition': 'addon','lead': 'mitmus/osastav','changes': { '*': {'offset': -1, 'text': 'lt'}}}
        ],
        'saav': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 'ks'}}},
          {'definition': 'addon','lead': 'mitmus/osastav','changes': { '*': {'offset': -1, 'text': 'ks'}}}
        ],
        'rajav': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 'ni'}}},
          {'definition': 'addon','lead': 'mitmus/osastav','changes': { '*': {'offset': -1, 'text': 'ni'}}}
        ],
        'olev': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 'na'}}},
          {'definition': 'addon','lead': 'mitmus/osastav','changes': { '*': {'offset': -1, 'text': 'na'}}}
        ],
        'ilma': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 'ta'}}},
          {'definition': 'addon','lead': 'mitmus/osastav','changes': { '*': {'offset': -1, 'text': 'ta'}}}
        ],
        'kaasa': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 'ga'}}},
          {'definition': 'addon','lead': 'mitmus/osastav','changes': { '*': {'offset': -1, 'text': 'ga'}}}
        ]
      }
    },
    '1e': {
      /* rules are copied from lead, unless overwritten by new definition */
      'definition': 'copy',
      'lead': '1',
      'ainsus': {
        
      },
      'mitmus': {
        'osastav': [{'definition': 'original','changes': { '*': {'offset': -1, 'text': 'eid'}}}],
      }
    },
    '2': {
      'definition': 'copy',
      'lead': '1',
      'ainsus': {
        'nimetav': [{'definition': 'addon','lead': 'ainsus/omastav','changes': { '*': {'offset': 0, 'text': 'd'}}}],
        'omastav': [
          {
            'definition': 'original',
            'changes': {
              'g': {'offset': 0, 'text': 'u'},
              'k': {'offset': 0, 'text': 'u'},
              's': {'offset': 0, 'text': 'a'},
              'm': {'offset': 0, 'text': 'a'},
              'v': {'offset': 0, 'text': 'a'},
              'b': {'offset': 0, 'text': 'e'},
              'ud': {'offset': -1, 'text': ''},
              'd': {'offset': 0, 'text': 'e'},
              'e': {'offset': 0, 'text': 'da'},        
              'oodne': {'offset': -2, 'text': 'sa'},
              'ne': {'offset': -2, 'text': 'se'},
              'sas': {'offset': -1, 'text': 'nda'},
              's': {'offset': -1, 'text': ''},
              'er': {'offset': -2, 'text': 'ra'},
              'el': {'offset': -2, 'text': 'la'},
              'ev': {'offset': -2, 'text': 'va'},
              'en': {'offset': -2, 'text': 'na'},
              'is': {'offset': -2, 'text': 'sa'},
              'us': {'offset': -2, 'text': 'sa'},
              'ur': {'offset': -2, 'text': 'ru'}, 
            }  
          }
        ]
      },
      'mitmus': {

      }
    },
    '2e': {
      'definition': 'copy',
      'lead': '2',
      'ainsus': {
        'omastav': [
          {
            'definition': 'original',
            'changes': {
              'er': {'offset': -2, 'text': 'ri'},
              'el': {'offset': -2, 'text': 'li'},
              '*': {'offset': 0, 'text': 'i'}
            }
          }
        ]
      },
      'mitmus': {
        'osastav': [{'definition': 'original','changes': { '*': {'offset': 0, 'text': 'eid'}}}],
        'sisse': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 'sse'}}},
          {'definition': 'original','changes': { '*': {'offset': 0, 'text': 'eisse'}}}
        ],
        'sees': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 's'}}},
          {'definition': 'original','changes': { '*': {'offset': 0, 'text': 'eis'}}}
        ],
        'seest': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 'st'}}},
          {'definition': 'original','changes': { '*': {'offset': 0, 'text': 'eist'}}}
        ],
        'alale': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 'le'}}},
          {'definition': 'original','changes': { '*': {'offset': 0, 'text': 'eile'}}}
        ],
        'alal': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 'l'}}},
          {'definition': 'original','changes': { '*': {'offset': 0, 'text': 'eil'}}}
        ],
        'alalt': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 'lt'}}},
          {'definition': 'original','changes': { '*': {'offset': 0, 'text': 'eilt'}}}
        ],
        'saav': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 'ks'}}},
          {'definition': 'original','changes': { '*': {'offset': 0, 'text': 'eiks'}}}
        ],
        'rajav': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 'ni'}}},
          {'definition': 'original','changes': { '*': {'offset': 0, 'text': 'eini'}}}
        ],
        'olev': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 'na'}}},
          {'definition': 'original','changes': { '*': {'offset': 0, 'text': 'eina'}}}
        ],
        'ilma': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 'ta'}}},
          {'definition': 'original','changes': { '*': {'offset': 0, 'text': 'eita'}}}
        ],
        'kaasa': [
          {'definition': 'addon','lead': 'mitmus/omastav','changes': { '*': {'offset': 0, 'text': 'ga'}}},
          {'definition': 'original','changes': { '*': {'offset': 0, 'text': 'eiga'}}}
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