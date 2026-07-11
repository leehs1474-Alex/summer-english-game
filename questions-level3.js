var LEVEL3_DATA = {
  DAY1: {
    teacher: "Rachel",
    place: "문법 캠프",
    introEmoji: "🟦🧩📘",
    intro: "Level 3 DAY1! 단어와 be동사의 기본을 확인하세요.",
    mid1: "좋아요! 단수와 복수를 잘 구별하고 있어요.",
    mid2: "이제 문장 전체를 보고 가장 자연스러운 답을 고르세요!",
    next: "다음 미션: Level 3 DAY2로 가세요!",

    questions: [
      {
        type: "grammar_choice",
        prompt: "My brother ______ tall.",
        choices: ["am", "is", "are"],
        answer: "is"
      },
      {
        type: "grammar_choice",
        prompt: "The dogs ______ hungry.",
        choices: ["am", "is", "are"],
        answer: "are"
      },
      {
        type: "grammar_choice",
        prompt: "I ______ not tired today.",
        choices: ["am", "is", "are"],
        answer: "am"
      },
      {
        type: "grammar_choice",
        prompt: "This book ______ very interesting.",
        choices: ["am", "is", "are"],
        answer: "is"
      },
      {
        type: "grammar_choice",
        prompt: "Choose the best word. The soup is very ______. Be careful!",
        choices: ["hot", "slow", "empty"],
        answer: "hot"
      },
      {
        type: "grammar_choice",
        prompt: "Choose the best word. The box has nothing in it. It is ______.",
        choices: ["empty", "heavy", "sweet"],
        answer: "empty"
      },
      {
        type: "grammar_choice",
        prompt: "Choose the correct sentence.",
        choices: [
          "She are my friend.",
          "She is my friend.",
          "She am my friend."
        ],
        answer: "She is my friend."
      },
      {
        type: "grammar_choice",
        prompt: "Choose the correct sentence.",
        choices: [
          "The students is ready.",
          "The students are ready.",
          "The students am ready."
        ],
        answer: "The students are ready."
      },
      {
        type: "grammar_choice",
        prompt: "Tom and I ______ in the same class.",
        choices: ["am", "is", "are"],
        answer: "are"
      },
      {
        type: "grammar_choice",
        prompt: "My shoes ______ under the bed.",
        choices: ["am", "is", "are"],
        answer: "are"
      },
      {
        type: "grammar_choice",
        prompt: "Choose the best word. The baby wants to sleep because she is ______.",
        choices: ["sleepy", "noisy", "bright"],
        answer: "sleepy"
      },
      {
        type: "grammar_choice",
        prompt: "Choose the correct sentence.",
        choices: [
          "There is three pencils on the desk.",
          "There are three pencils on the desk.",
          "There am three pencils on the desk."
        ],
        answer: "There are three pencils on the desk."
      }
    ]
  },

  DAY2: {
    teacher: "Alex",
    place: "문법 정글",
    introEmoji: "🟩✏️🌿",
    intro: "Level 3 DAY2! 일반동사와 수일치를 정확히 구별하세요.",
    mid1: "좋아요! 주어에 따라 동사의 모양이 달라지는 것을 잘 보고 있어요.",
    mid2: "이제 be동사와 일반동사를 함께 비교해 보세요!",
    next: "다음 미션: Level 3 DAY3로 가세요!",

    questions: [
      {
        type: "grammar_choice",
        prompt: "Kevin ______ soccer after school.",
        choices: ["play", "plays", "playing"],
        answer: "plays"
      },
      {
        type: "grammar_choice",
        prompt: "My friends ______ lunch at school.",
        choices: ["eats", "eat", "is eating"],
        answer: "eat"
      },
      {
        type: "grammar_choice",
        prompt: "She ______ a new backpack.",
        choices: ["have", "has", "having"],
        answer: "has"
      },
      {
        type: "grammar_choice",
        prompt: "The boys ______ their homework every evening.",
        choices: ["does", "do", "is"],
        answer: "do"
      },
      {
        type: "grammar_choice",
        prompt: "My father ______ coffee every morning.",
        choices: ["drink", "drinks", "drinking"],
        answer: "drinks"
      },
      {
        type: "grammar_choice",
        prompt: "Choose the correct sentence.",
        choices: [
          "She have a new bag.",
          "She has a new bag.",
          "She having a new bag."
        ],
        answer: "She has a new bag."
      },
      {
        type: "grammar_choice",
        prompt: "Choose the correct sentence.",
        choices: [
          "They plays basketball on Fridays.",
          "They play basketball on Fridays.",
          "They playing basketball on Fridays."
        ],
        answer: "They play basketball on Fridays."
      },
      {
        type: "grammar_choice",
        prompt: "Which sentence uses the correct verb?",
        choices: [
          "The cat sleep on the sofa.",
          "The cat sleeps on the sofa.",
          "The cat are sleeping on the sofa every day."
        ],
        answer: "The cat sleeps on the sofa."
      },
      {
        type: "grammar_choice",
        prompt: "Mina ______ kind, and she ______ everyone.",
        choices: [
          "is / helps",
          "are / help",
          "is / help"
        ],
        answer: "is / helps"
      },
      {
        type: "grammar_choice",
        prompt: "The students ______ excited because the game ______ fun.",
        choices: [
          "is / are",
          "are / is",
          "are / are"
        ],
        answer: "are / is"
      },
      {
        type: "grammar_choice",
        prompt: "Choose the best word. A person who teaches students is a ______.",
        choices: ["teacher", "farmer", "driver"],
        answer: "teacher"
      },
      {
        type: "grammar_choice",
        prompt: "Choose the correct sentence.",
        choices: [
          "Does he likes music?",
          "Does he like music?",
          "Do he like music?"
        ],
        answer: "Does he like music?"
      }
    ]
  },

  DAY3: {
    teacher: "Sunny",
    place: "시간의 동굴",
    introEmoji: "🟨⏰🪄",
    intro: "Level 3 DAY3! 조동사와 현재형·과거형을 구별하세요.",
    mid1: "좋아요! 조동사 뒤에는 동사원형이 온다는 것을 잘 기억하고 있어요.",
    mid2: "이제 시간 표현을 보고 현재와 과거를 판단하세요!",
    next: "다음 미션: Level 3 DAY4로 가세요!",

    questions: [
      {
        type: "grammar_choice",
        prompt: "You should ______ your homework first.",
        choices: ["finish", "finished", "finishes"],
        answer: "finish"
      },
      {
        type: "grammar_choice",
        prompt: "Mina can ______ very fast.",
        choices: ["runs", "ran", "run"],
        answer: "run"
      },
      {
        type: "grammar_choice",
        prompt: "Students must ______ quiet in the library.",
        choices: ["be", "are", "were"],
        answer: "be"
      },
      {
        type: "grammar_choice",
        prompt: "Yesterday, Joon ______ his grandmother.",
        choices: ["visits", "visited", "visit"],
        answer: "visited"
      },
      {
        type: "grammar_choice",
        prompt: "I usually ______ breakfast at seven.",
        choices: ["eat", "ate", "eats"],
        answer: "eat"
      },
      {
        type: "grammar_choice",
        prompt: "Last night, the baby ______ for three hours.",
        choices: ["sleeps", "slept", "sleep"],
        answer: "slept"
      },
      {
        type: "grammar_choice",
        prompt: "Tom lost his key, so he ______ open the door.",
        choices: ["can", "cannot", "must"],
        answer: "cannot"
      },
      {
        type: "grammar_choice",
        prompt: "Choose the correct sentence.",
        choices: [
          "She can sings well.",
          "She can sing well.",
          "She can sang well."
        ],
        answer: "She can sing well."
      },
      {
        type: "grammar_choice",
        prompt: "Choose the correct sentence.",
        choices: [
          "We go to the museum yesterday.",
          "We went to the museum yesterday.",
          "We goes to the museum yesterday."
        ],
        answer: "We went to the museum yesterday."
      },
      {
        type: "grammar_choice",
        prompt: "Every Saturday, my father ______ dinner. Yesterday, he ______ pasta.",
        choices: [
          "cooks / cooked",
          "cooked / cooks",
          "cook / cooking"
        ],
        answer: "cooks / cooked"
      },
      {
        type: "grammar_choice",
        prompt: "Choose the best word. The road is wet because it ______ last night.",
        choices: ["rains", "rained", "rain"],
        answer: "rained"
      },
      {
        type: "grammar_choice",
        prompt: "Which sentence is correct?",
        choices: [
          "You must wears a seat belt.",
          "You must wear a seat belt.",
          "You must wore a seat belt."
        ],
        answer: "You must wear a seat belt."
      }
    ]
  },

  DAY4: {
    teacher: "Daniel",
    place: "문법 정상",
    introEmoji: "🟥🏆🧠",
    intro: "Level 3 마지막 DAY! 문법과 어휘를 종합해서 해결하세요.",
    mid1: "좋아요! 이제 두 가지 이상의 문법 정보를 함께 판단하고 있어요.",
    mid2: "마지막 문제에서는 형용사와 부사까지 정확히 구별하세요!",
    next: "🎉 Congratulations! You finished Level 3!",

    questions: [
      {
        type: "grammar_choice",
        prompt: "Jina ______ tired yesterday, but she ______ fine today.",
        choices: [
          "is / feels",
          "was / feels",
          "was / felt"
        ],
        answer: "was / feels"
      },
      {
        type: "grammar_choice",
        prompt: "My brother can ______ the piano very well.",
        choices: ["plays", "played", "play"],
        answer: "play"
      },
      {
        type: "grammar_choice",
        prompt: "The baby is sleeping ______, so please be quiet.",
        choices: ["peaceful", "peacefully", "peace"],
        answer: "peacefully"
      },
      {
        type: "grammar_choice",
        prompt: "The rabbit is very ______, and it runs ______.",
        choices: [
          "quick / quickly",
          "quickly / quick",
          "quick / quick"
        ],
        answer: "quick / quickly"
      },
      {
        type: "grammar_choice",
        prompt: "Choose the correct sentence.",
        choices: [
          "The students was excited yesterday.",
          "The students were excited yesterday.",
          "The students are excited yesterday."
        ],
        answer: "The students were excited yesterday."
      },
      {
        type: "grammar_choice",
        prompt: "Choose the correct sentence.",
        choices: [
          "Mina carefully opened the box.",
          "Mina careful opened the box.",
          "Mina opened careful the box."
        ],
        answer: "Mina carefully opened the box."
      },
      {
        type: "grammar_choice",
        prompt: "Yesterday, Tom ______ sick, so he ______ go to school.",
        choices: [
          "was / could not",
          "is / cannot",
          "were / did not"
        ],
        answer: "was / could not"
      },
      {
        type: "grammar_choice",
        prompt: "Which sentence is incorrect?",
        choices: [
          "My sister plays tennis well.",
          "My sister can play tennis well.",
          "My sister can plays tennis well."
        ],
        answer: "My sister can plays tennis well."
      },
      {
        type: "grammar_choice",
        prompt: "The dog ______ loudly when a stranger came to the door.",
        choices: ["barks", "barked", "bark"],
        answer: "barked"
      },
      {
        type: "grammar_choice",
        prompt: "Choose the best word. The test was difficult, but Mia answered the questions ______.",
        choices: ["careful", "carefully", "care"],
        answer: "carefully"
      },
      {
        type: "grammar_choice",
        prompt: "Choose the correct sentence.",
        choices: [
          "He does not likes spicy food.",
          "He does not like spicy food.",
          "He is not like spicy food."
        ],
        answer: "He does not like spicy food."
      },
      {
        type: "grammar_choice",
        prompt: "Emma usually ______ to school, but yesterday she ______ the bus.",
        choices: [
          "walks / took",
          "walked / takes",
          "walk / taken"
        ],
        answer: "walks / took"
      }
    ]
  }
};
