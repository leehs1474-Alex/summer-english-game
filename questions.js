const GAME_DATA = {
  DAY1: {
    teacher: "Rachel",
    place: "해변",
    introEmoji: "🌊⛈️🏝️",
    intro: "폭풍 때문에 배가 난파되었어요. Rachel 선생님이 해변에 혼자 남아 있어요!",
    mid1: "Rachel 선생님을 발견했어요! 조금만 더 도와주세요.",
    mid2: "구조 보트를 찾았어요! 마지막 미션까지 힘내요.",
    next: "다음 미션: Alex 선생님을 구하러 가세요!",
    questions: [
      {
        type: "picture",
        emoji: "🐱",
        sound: "short a",
        prompt: "알맞은 영어 단어를 골라보세요.",
        choices: ["cat", "cap", "cup"],
        answer: "cat"
      },
      {
        type: "listen",
        word: "pen",
        sound: "short e",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["pan", "pen", "pin"],
        answer: "pen"
      },
      {
        type: "picture",
        emoji: "🐷",
        sound: "short i",
        prompt: "알맞은 영어 단어를 골라보세요.",
        choices: ["big", "bag", "pig"],
        answer: "pig"
      },
      {
        type: "listen",
        word: "dog",
        sound: "short o",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["dog", "dig", "duck"],
        answer: "dog"
      },
      {
        type: "listen",
        word: "sun",
        sound: "short u",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["son", "sun", "sin"],
        answer: "sun"
      },
      {
        type: "listen",
        word: "shop",
        sound: "sh",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["chop", "ship", "shop"],
        answer: "shop"
      },
      {
        type: "listen",
        word: "chick",
        sound: "ch",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["chick", "ship", "fish"],
        answer: "chick"
      },
      {
        type: "listen",
        word: "bus",
        sound: "short u",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["bug", "bus", "boss"],
        answer: "bus"
      },
      {
        type: "helper",
        word: "have",
        sound: "Helper Word",
        prompt: "⭐ 특별 미션! 발음을 듣고 Helper Word를 골라보세요.",
        choices: ["gave", "hive", "have"],
        answer: "have"
      },
      {
        type: "listen",
        word: "hat",
        sound: "short a",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["hat", "hot", "hit"],
        answer: "hat"
      },
      {
        type: "listen",
        word: "duck",
        sound: "ck",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["deck", "dock", "duck"],
        answer: "duck"
      },
      {
        type: "final",
        word: "chicken",
        sound: "Final Mission",
        prompt: "👑 마지막 구조 미션! 발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["kitchen", "chicken", "children"],
        answer: "chicken"
      }
    ]
  },
     
  DAY2: {
    teacher: "Alex",
    place: "정글",
    introEmoji: "🌴🦜🗺️",
    intro: "Rachel 선생님을 구했어요! 이번에는 Alex 선생님이 정글 안에 있어요.",
    mid1: "정글 안쪽에서 Alex 선생님의 목소리가 들려요!",
    mid2: "덩굴길을 지나 구조 지점에 거의 도착했어요.",
    next: "다음 미션: Sunny 선생님을 구하러 가세요!",
    questions: [
      {
        type: "picture",
        emoji: "👑",
        sound: "ng",
        prompt: "알맞은 영어 단어를 골라보세요.",
        choices: ["ring", "king", "kin"],
        answer: "king"
      },
      {
        type: "listen",
        word: "pink",
        sound: "nk",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["pick", "pink", "pig"],
        answer: "pink"
      },
      {
        type: "listen",
        word: "duck",
        sound: "ck",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["duck", "deck", "dock"],
        answer: "duck"
      },
      {
        type: "listen",
        word: "back",
        sound: "ck",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["bag", "back", "black"],
        answer: "back"
      },
      {
        type: "listen",
        word: "song",
        sound: "ng",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["sun", "son", "song"],
        answer: "song"
      },
      {
        type: "picture",
        emoji: "🔔",
        sound: "ll",
        prompt: "알맞은 영어 단어를 골라보세요.",
        choices: ["bell", "bill", "ball"],
        answer: "bell"
      },
      {
        type: "listen",
        word: "bell",
        sound: "ll",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["ball", "bill", "bell"],
        answer: "bell"
      },
      {
        type: "listen",
        word: "whale",
        sound: "wh",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["wheel", "whale", "white"],
        answer: "whale"
      },
      {
        type: "helper",
        word: "come",
        sound: "Helper Word",
        prompt: "⭐ 특별 미션! 발음을 듣고 Helper Word를 골라보세요.",
        choices: ["came", "come", "comb"],
        answer: "come"
      },
      {
        type: "listen",
        word: "black",
        sound: "ck",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["back", "black", "block"],
        answer: "black"
      },
      {
        type: "listen",
        word: "luck",
        sound: "ck",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["lock", "luck", "lake"],
        answer: "luck"
      },
      {
        type: "final",
        word: "whisk",
        sound: "Final Mission",
        prompt: "👑 마지막 구조 미션! 발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["wish", "wink", "whisk"],
        answer: "whisk"
      }
    ]
  },

  DAY3: {
    teacher: "Sunny",
    place: "동굴",
    introEmoji: "⛰️🕯️🦇",
    intro: "Rachel, Alex 선생님을 구했어요! 이제 Sunny 선생님이 동굴에서 길을 잃었어요.",
    mid1: "동굴 안에서 Sunny 선생님의 목소리가 들려요!",
    mid2: "빛이 보이기 시작했어요! 조금만 더 힘내세요.",
    next: "다음 미션: Daniel 선생님을 구하러 가세요!",
    questions: [

      {
        type: "picture",
        emoji: "🌧️",
        sound: "ai",
        prompt: "알맞은 영어 단어를 골라보세요.",
        choices: ["rain", "ran", "run"],
        answer: "rain"
      },

      {
        type: "listen",
        word: "train",
        sound: "ai",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["tree", "train", "rain"],
        answer: "train"
      },

      {
        type: "listen",
        word: "beach",
        sound: "ea",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["bench", "beach", "peach"],
        answer: "beach"
      },
      {
        type: "listen",
        word: "play",
        sound: "ay",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["pray", "plan", "play"],
        answer: "play"
      },

      {
        type: "listen",
        word: "road",
        sound: "oa",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["red", "rode", "road"],
        answer: "road"
      },

      {
        type: "picture",
        emoji: "🚤",
        sound: "oa",
        prompt: "알맞은 영어 단어를 골라보세요.",
        choices: ["boat", "boot", "bat"],
        answer: "boat"
      },

      {
        type: "listen",
        word: "snow",
        sound: "ow",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["snail", "snow", "slow"],
        answer: "snow"
      },

      {
        type: "listen",
        word: "tree",
        sound: "ee",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["three", "tree", "free"],
        answer: "tree"
      },

      {
        type: "helper",
        word: "come",
        sound: "Helper Word",
        prompt: "⭐ 특별 미션! 발음을 듣고 Helper Word를 골라보세요.",
        choices: ["comb", "came", "come"],
        answer: "come"
      },

      {
        type: "listen",
        word: "green",
        sound: "ee",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["grain", "green", "grand"],
        answer: "green"
      },

      {
        type: "listen",
        word: "coat",
        sound: "oa",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["coat", "cat", "cot"],
        answer: "coat"
      },

      {
        type: "final",
        word: "rainbow",
        sound: "Final Mission",
        prompt: "👑 마지막 구조 미션! 발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["window", "yellow", "rainbow"],
        answer: "rainbow"
      }

    ]
  },

  DAY4: {
    teacher: "Daniel",
    place: "화산",
    introEmoji: "🌋🔥🏝️",
    intro: "마지막 미션입니다! Daniel 선생님이 화산 근처에 갇혀 있어요.",
    mid1: "Daniel 선생님이 보이기 시작했어요!",
    mid2: "마지막 구조 지점입니다! 끝까지 집중하세요.",
    next: "모든 선생님 구조 완료!",
    questions: [

      {
        type: "picture",
        emoji: "🪙",
        sound: "oi",
        prompt: "알맞은 영어 단어를 골라보세요.",
        choices: ["coin", "cone", "corn"],
        answer: "coin"
      },

      {
        type: "listen",
        word: "boy",
        sound: "oy",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["buy", "boy", "bay"],
        answer: "boy"
      },
      {
        type: "listen",
        word: "cloud",
        sound: "ou",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["cloud", "climb", "cold"],
        answer: "cloud"
      },

      {
        type: "listen",
        word: "cow",
        sound: "ow",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["coat", "cow", "coin"],
        answer: "cow"
      },

      {
        type: "picture",
        emoji: "🐦",
        sound: "ir",
        prompt: "알맞은 영어 단어를 골라보세요.",
        choices: ["bird", "bread", "bed"],
        answer: "bird"
      },

      {
        type: "listen",
        word: "nurse",
        sound: "ur",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["nose", "nurse", "nine"],
        answer: "nurse"
      },

      {
        type: "listen",
        word: "car",
        sound: "ar",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["cat", "cut", "car"],
        answer: "car"
      },

      {
        type: "picture",
        emoji: "🌸",
        sound: "ow",
        prompt: "알맞은 영어 단어를 골라보세요.",
        choices: ["flower", "floor", "flour"],
        answer: "flower"
      },

      {
        type: "helper",
        word: "two",
        sound: "Helper Word",
        prompt: "⭐ 특별 미션! 발음을 듣고 Helper Word를 골라보세요.",
        choices: ["too", "two", "to"],
        answer: "two"
      },

      {
        type: "listen",
        word: "toy",
        sound: "oy",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["tie", "toy", "toe"],
        answer: "toy"
      },

      {
        type: "listen",
        word: "storm",
        sound: "or",
        prompt: "발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["stone", "storm", "steam"],
        answer: "storm"
      },

      {
        type: "final",
        word: "doctor",
        sound: "Final Mission",
        prompt: "👑 마지막 구조 미션! 발음을 듣고 맞는 단어를 골라보세요.",
        choices: ["doctor", "daughter", "driver"],
        answer: "doctor"
      }

    ]
  }

};