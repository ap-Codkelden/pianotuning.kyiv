import type { Lang } from './translations';

export type ServiceIconType = 'piano' | 'mechanics' | 'voicing' | 'shield';

type ServiceDetail = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

type Service = {
  iconType: ServiceIconType;
  title: string;
  text: string;
  details?: ServiceDetail[];
};

export function getServices(lang: Lang) {
  if (lang === 'en') return servicesEn;
  return servicesUk;
}

export function getPrices(lang: Lang) {
  if (lang === 'en') return pricesEn;
  return pricesUk;
}

export function getSteps(lang: Lang) {
  if (lang === 'en') return stepsEn;
  return stepsUk;
}

// ─── Ukrainian ────────────────────────────────────────────────────────────────

const servicesUk: Service[] = [
  {
    iconType: 'piano',
    title: 'Налаштування фортепіано та роялів',
    text: "Акустичне фортепіано та рояль поступово втрачають точність строю, навіть якщо на них мало грають. Головна причина — зміни вологості й температури: дерев'яна дека та інші елементи трохи розширюються або стискаються, через що змінюється натяг струн.",
    details: [
      {
        heading: 'Чому піаніно та рояль потрібно налаштовувати',
        paragraphs: [
          "У результаті інструмент починає звучати нечисто, «розпливчасто», а акорди втрачають прозорість.",
          "Регулярне налаштування допомагає зберігати чистий, красивий звук, підтримувати правильну висоту строю та не допускати сильного просідання інструмента.",
          "Під час візиту майстер також може помітити ранні проблеми з механікою, струнами, кілками чи декою."
        ]
      },
      {
        heading: 'Скільки разів на рік налаштовувати',
        bullets: [
          "Домашнє піаніно або рояль — мінімум 1 раз на рік, найкраща практика — 2 рази на рік.",
          "Новий інструмент — бажано 2–3 рази в перший рік, поки струни й конструкція стабілізуються.",
          "Музична школа, студія, викладач або активний піаніст — зазвичай 2–4 рази на рік.",
          "Концертний рояль — перед важливим виступом, а іноді й додатково після репетицій."
        ]
      },
      {
        heading: 'Найпростіша рекомендація',
        paragraphs: [
          "Піаніно або рояль варто налаштовувати двічі на рік. Якщо інструмент використовується рідко — не рідше одного разу на рік. Якщо грають часто, інструмент новий або стоїть у приміщенні з нестабільною вологістю — частіше."
        ]
      }
    ]
  },
  {
    iconType: 'mechanics',
    title: 'Регулювання механіки',
    text: "Регулювання механіки потрібне для того, щоб фортепіано та рояль точно, рівно й передбачувано реагували на дотик піаніста. Налаштування виправляє висоту звуку, а регулювання — роботу клавіш, молоточків, демпферів і педалей.",
    details: [
      {
        heading: 'Чому потрібне регулювання',
        paragraphs: [
          "З часом ущільнюються фетр, сукно й шкіряні деталі, дерев'яні елементи реагують на зміну вологості, вузли механізму поступово зношуються, а точні параметри роботи клавіш і молоточків збиваються."
        ]
      },
      {
        heading: 'Ознаки, що механіку варто відрегулювати',
        bullets: [
          "Фортепіано або рояль грають нерівно по клавіатурі.",
          "Зникає чутливість у тихій грі.",
          "Клавіші відчуваються важчими або млявими.",
          "Стає складніше виконувати швидкі пасажі та повторення нот.",
          "Атака звуку втрачає чіткість, а музикант гірше контролює інструмент."
        ]
      },
      {
        heading: 'Особливо важливо для рояля',
        paragraphs: [
          "Механіка рояля має систему швидкого повторення ноти: вона дозволяє знову взяти звук, не відпускаючи клавішу повністю. Коли ця система збита, страждають репетиції, трелі, швидка техніка й точність туше.",
          "Головна мета регулювання — повернути інструменту легкий і контрольований дотик, рівномірну роботу всіх клавіш, широкий динамічний діапазон і точну передачу задуму піаніста."
        ]
      }
    ]
  },
  {
    iconType: 'voicing',
    title: 'Інтонування молоточків',
    text: "Інтонування молоточків піаніно та рояля — це тонке налаштування тембру, м'якості, яскравості та рівності звучання фортепіано. На відміну від звичайного налаштування, яке виправляє висоту звуку, інтонування впливає саме на якість тону.",
    details: [
      {
        heading: 'Чому інтонування потрібне',
        paragraphs: ["Під час гри молоточки постійно вдаряють по струнах. З часом їхній фетр ущільнюється, твердне, отримує глибокі борозенки від струн і починає давати різкий, металевий або нерівний звук."],
        bullets: [
          "Інструмент може звучати надто різко або «скляно».",
          "Тембр стає глухим і безбарвним.",
          "Одні ноти звучать яскраво, інші — тьмяно.",
          "На forte звук стає жорстким, а на piano — недостатньо виразним."
        ]
      },
      {
        heading: 'Що робить майстер',
        bullets: [
          "Оцінює звучання кожного регістру.",
          "Перевіряє правильність контакту молоточків зі струнами.",
          "За потреби коригує форму робочої поверхні молоточків.",
          "Спеціальними голками змінює пружність фетру.",
          "Вирівнює тембр по всій клавіатурі."
        ],
        paragraphs: ["Це дуже делікатна робота, яка виконується на слух і потребує великого досвіду."]
      },
      {
        heading: 'Коли варто робити інтонування',
        bullets: [
          "Звук став різким, колючим або металевим.",
          "Інструмент втратив м'якість і співучість.",
          "Окремі ноти помітно виділяються за тембром.",
          "Після налаштування піаніно все одно звучить неприємно або нерівно.",
          "Молоточки мають виразні борозенки від струн."
        ],
        paragraphs: [
          "Найкращий результат інтонування дає тоді, коли інструмент уже налаштований, має справну й відрегульовану механіку, а молоточки правильно взаємодіють зі струнами.",
          "Інтонування повертає фортепіано красивий, благородний і збалансований голос, робить гру приємнішою для музиканта та слухача."
        ]
      }
    ]
  },
  {
    iconType: 'shield',
    title: 'Консультація при покупці піаніно або рояля',
    text: "Допомога при покупці піаніно або рояля. Об'єктивно оцінюємо технічний стан інструмента перед придбанням, щоб ви розуміли, що саме купуєте і чи відповідає він своїй ціні.",
    details: [
      {
        heading: 'Чому важлива перевірка перед покупкою',
        paragraphs: [
          "Зовні інструмент може виглядати привабливо, але мати приховані технічні проблеми: зношену механіку, тріщини в резонансній деці, слабке тримання строю, дефекти клавіатури чи надмірно дорогий майбутній ремонт."
        ]
      },
      {
        heading: 'Що перевіряється під час огляду',
        bullets: [
          "Загальний технічний стан інструмента.",
          "Стрій і здатність тримати налаштування.",
          "Стан струн, кілків, деки та чавунної рами.",
          "Робота клавіатури, педалей і механіки.",
          "Зношення молоточків та інших деталей.",
          "Наявність прихованих дефектів.",
          "Доцільність покупки та можливі майбутні витрати."
        ]
      },
      {
        heading: 'Що ви отримуєте після огляду',
        paragraphs: [
          "Зрозумілу професійну рекомендацію: чи варто купувати цей інструмент, яка його реальна якість і які роботи можуть знадобитися після придбання."
        ]
      }
    ]
  }
];

const pricesUk = [
  { title: 'Налаштування фортепіано та роялів', value: 'Фортепіано: 1 500–1 800 грн.\nРоялі: 1 800–2 100 грн.', note: 'Залежить від стану інструмента та обсягу робіт.' },
  { title: 'Регулювання механіки', value: 'від 800 грн.', note: 'Точна вартість залежить від стану механіки та обсягу робіт.' },
  { title: 'Інтонування молоточків', value: '1000–3000 грн.', note: 'Залежить від стану молоточків і бажаного тембру.' },
  { title: 'Консультація при покупці піаніно або рояля', value: '500–1000 грн.', note: 'Оцінка технічного стану піаніно або рояля.' },
];

const stepsUk = [
  { title: 'Заявка', text: "Зателефонуйте або напишіть нам. Для попередньої оцінки вартості робіт надішліть фото та коротке відео інструмента у Telegram або на електронну пошту. Це допоможе нам краще зрозуміти стан піаніно чи рояля, попередньо визначити обсяг робіт і зорієнтувати Вас щодо вартості. Після перегляду матеріалів ми зв'яжемося з Вами, уточнимо деталі, відповімо на запитання та домовимося про зручний день і час візиту." },
  { title: 'Налаштування', text: "Для якісного налаштування піаніно або рояля важливо забезпечити тишу, оскільки під час налаштування фахівець уважно слухає найменші відхилення у звучанні кожної ноти. Бажано вимкнути телевізор, музику, пилосос та інші джерела шуму. Також просимо забезпечити вільний доступ до інструмента: прибрати зайві речі з кришки піаніно, звільнити простір перед інструментом і поруч із ним." },
  { title: 'Рекомендації', text: "Розміщення: встановлюйте піаніно на рівній підлозі, подалі від батарей, кондиціонерів, протягів і прямих сонячних променів.\n\nТемпература і вологість: підтримуйте стабільний мікроклімат — 18–20°C і 40–55% вологості. Різкі перепади температури й вологості негативно впливають на стрій, дерев'яні деталі та механіку інструмента." },
];

// ─── English ──────────────────────────────────────────────────────────────────

const servicesEn: Service[] = [
  {
    iconType: 'piano',
    title: 'Piano & Grand Piano Tuning',
    text: "Acoustic pianos and grand pianos gradually lose pitch accuracy, even when played infrequently. The main cause is humidity and temperature change: the wooden soundboard and other components expand or contract slightly, altering string tension.",
    details: [
      {
        heading: 'Why pianos need regular tuning',
        paragraphs: [
          "As a result, the instrument starts to sound impure and \"blurry\", and chords lose their clarity.",
          "Regular tuning keeps the sound clean and beautiful, maintains correct pitch, and prevents large drops in pitch that would otherwise require a pitch-raise session before fine tuning.",
          "During the visit the technician can also spot early issues with the action, strings, tuning pins, or soundboard."
        ]
      },
      {
        heading: 'How often should you tune?',
        bullets: [
          "Home piano or grand — at minimum once a year, best practice is twice a year.",
          "New instrument — ideally 2–3 times in the first year while strings and structure stabilize.",
          "Music school, studio, teacher, or active pianist — typically 2–4 times a year depending on use and climate.",
          "Concert grand — before every important performance, sometimes additionally after rehearsals."
        ]
      },
      {
        heading: 'The simple rule',
        paragraphs: [
          "Tune your piano twice a year. If it is rarely played — at least once a year. If played often, if the instrument is new, or if it sits in a room with unstable humidity — more frequently."
        ]
      }
    ]
  },
  {
    iconType: 'mechanics',
    title: 'Action Regulation',
    text: "Action regulation ensures your piano or grand responds precisely, evenly, and predictably to your touch. Tuning corrects pitch; regulation corrects the behavior of the keys, hammers, dampers, and pedals.",
    details: [
      {
        heading: 'Why regulation is needed',
        paragraphs: [
          "Over time the felt, cloth, and leather components compact, wooden parts respond to humidity changes, joints wear, and the precise parameters governing key travel and hammer movement drift out of specification."
        ]
      },
      {
        heading: 'Signs that regulation is due',
        bullets: [
          "The instrument plays unevenly across the keyboard.",
          "Sensitivity at soft dynamics disappears.",
          "Keys feel heavier or sluggish.",
          "Fast passages and repeated notes become harder to execute.",
          "Note attack loses definition and control feels imprecise."
        ]
      },
      {
        heading: 'Especially important for grands',
        paragraphs: [
          "A grand piano's action has a repetition mechanism that allows the note to be re-struck without fully releasing the key. When this is out of adjustment, trills, repetitions, fast technique, and touch precision all suffer.",
          "The goal of regulation is to restore light, controlled touch, even response across all keys, a wide dynamic range, and precise translation of the pianist's intentions."
        ]
      }
    ]
  },
  {
    iconType: 'voicing',
    title: 'Hammer Voicing',
    text: "Voicing is the fine adjustment of a piano's tone — its softness, brightness, and evenness. Unlike tuning, which corrects pitch, voicing shapes the actual quality of the sound.",
    details: [
      {
        heading: 'Why voicing is needed',
        paragraphs: ["Each time a key is struck, the hammer hits the strings. Over time the hammer felt compresses, hardens, and develops deep string grooves, producing a harsh, metallic, or uneven tone."],
        bullets: [
          "The instrument sounds too sharp or \"glassy\".",
          "Tone becomes dull and colorless.",
          "Some notes sound bright while others are muffled.",
          "Forte playing feels harsh; piano playing lacks expression."
        ]
      },
      {
        heading: 'What the technician does',
        bullets: [
          "Evaluates the tone in each register.",
          "Checks correct hammer-to-string contact.",
          "Reshapes the hammer striking surface if needed.",
          "Uses specialized needles to adjust felt resilience.",
          "Evens out tone across the full keyboard."
        ],
        paragraphs: ["This is very delicate work performed entirely by ear and requires substantial experience."]
      },
      {
        heading: 'When to consider voicing',
        bullets: [
          "The sound has become sharp, piercing, or metallic.",
          "The instrument has lost softness and singing quality.",
          "Individual notes stand out noticeably in tone.",
          "Even after tuning, the piano still sounds unpleasant or uneven.",
          "Hammers show deep string grooves."
        ],
        paragraphs: [
          "Voicing is most effective after the instrument is in tune, has a properly regulated action, and the hammers are making correct contact with the strings.",
          "Voicing returns the piano a beautiful, noble, and balanced voice — making playing more enjoyable for both musician and listener."
        ]
      }
    ]
  },
  {
    iconType: 'shield',
    title: 'Pre-Purchase Consultation',
    text: "Expert assistance when buying a piano or grand piano. We objectively assess the instrument's technical condition before purchase so you know exactly what you're getting and whether it's worth the price.",
    details: [
      {
        heading: 'Why inspection matters',
        paragraphs: [
          "An instrument can look attractive while hiding serious technical problems: worn action, cracks in the soundboard, poor tuning stability, keyboard defects, or expensive repairs ahead."
        ]
      },
      {
        heading: 'What we inspect',
        bullets: [
          "Overall technical condition of the instrument.",
          "Pitch and tuning stability.",
          "Condition of strings, tuning pins, soundboard, and cast-iron plate.",
          "Keyboard, pedal, and action function.",
          "Hammer and component wear.",
          "Hidden defects.",
          "Purchase viability and likely future costs."
        ]
      },
      {
        heading: 'What you receive',
        paragraphs: [
          "A clear professional recommendation: whether to buy the instrument, its real quality level, and what servicing may be required after purchase."
        ]
      }
    ]
  }
];

const pricesEn = [
  { title: 'Piano & Grand Piano Tuning', value: 'Upright: 1,500–1,800 UAH\nGrand: 1,800–2,100 UAH', note: 'Depends on instrument condition and scope of work.' },
  { title: 'Action Regulation', value: 'from 800 UAH', note: 'Exact price depends on action condition and scope of work.' },
  { title: 'Hammer Voicing', value: '1,000–3,000 UAH', note: 'Depends on hammer condition and desired tone.' },
  { title: 'Pre-Purchase Consultation', value: '500–1,000 UAH', note: 'Assessment of the piano or grand piano\'s technical condition.' },
];

const stepsEn = [
  { title: 'Request', text: "Call or message us. To get a preliminary cost estimate, send photos and a short video of the instrument via Telegram or email. This helps us understand the piano's condition, estimate the scope of work, and give you an idea of the price. After reviewing the materials we'll get in touch, clarify the details, answer your questions, and agree on a convenient day and time for the visit." },
  { title: 'Tuning', text: "For quality tuning it's important to have silence — the technician listens carefully to the finest pitch deviations in each note. Please turn off the TV, music, vacuum cleaner, and other noise sources. Also ensure clear access to the instrument: remove items from the piano lid, clear space in front of and around it so the technician can open the case and work comfortably with the action and strings." },
  { title: 'Recommendations', text: "Placement: position the piano on a level floor, away from radiators, air conditioners, drafts, and direct sunlight.\n\nTemperature & humidity: maintain a stable environment — 18–20°C and 40–55% relative humidity. Sudden swings in temperature or humidity negatively affect tuning stability, wooden components, and the action." },
];
