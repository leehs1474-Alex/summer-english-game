var LEVEL2_DATA = {
  DAY1: {
    teacher: "Rachel",
    place: "해변",
    introEmoji: "🟦📖🎧",
    intro: "Level 2는 영어의 뜻과 상황을 이해하는 미션입니다!",
    mid1: "좋아요! 그림을 보고 의미를 잘 찾고 있어요.",
    mid2: "이제 듣기와 문맥 문제까지 집중하세요!",
    next: "다음 미션: Level 2 DAY2로 가세요!",
    questions: [
      {
        type: "picture_sentence",
        image: "images/level2/day1/scene1.png",
        prompt: "What is the girl doing?",
        choices: ["She is sleeping.", "She is riding a bike.", "She is swimming."],
        answer: "She is riding a bike."
      },
      {
        type: "picture_sentence",
        image: "images/level2/day1/scene1.png",
        prompt: "Who is playing soccer?",
        choices: ["The girl.", "The dog.", "The boy."],
        answer: "The boy."
      },
      {
        type: "picture_sentence",
        image: "images/level2/day1/scene2.png",
        prompt: "Who is cooking?",
        choices: ["The mother.", "The father.", "The boy."],
        answer: "The mother."
      },
      {
        type: "picture_sentence",
        image: "images/level2/day1/scene2.png",
        prompt: "What is the father doing?",
        choices: ["He is watching TV.", "He is washing the dishes.", "He is sleeping."],
        answer: "He is washing the dishes."
      },
      {
        type: "picture_sentence",
        image: "images/level2/day1/scene3.png",
        prompt: "What are the children doing?",
        choices: ["They are eating lunch.", "They are reading books.", "They are playing soccer."],
        answer: "They are reading books."
      },
      {
        type: "picture_sentence",
        image: "images/level2/day1/scene4.png",
        prompt: "Where is the family?",
        choices: ["At school.", "At the beach.", "At the supermarket."],
        answer: "At the beach."
      },

      {
        type: "listen_sentence",
        audio: "audio/level2/day1/listening1.mp3",
        textForTTS: "It is a sunny day. The girl is riding a bike. The boy is playing soccer.",
        prompt: "Who is riding a bike?",
        choices: ["The boy.", "The girl.", "The father."],
        answer: "The girl."
      },
      {
        type: "listen_sentence",
        audio: "audio/level2/day1/listening2.mp3",
        textForTTS: "The mother is cooking. The father is washing the dishes. The boy is watching TV.",
        prompt: "Who is washing the dishes?",
        choices: ["The father.", "The mother.", "The boy."],
        answer: "The father."
      },
      {
        type: "listen_sentence",
        audio: "audio/level2/day1/listening3.mp3",
        textForTTS: "The boy is eating lunch. The girl is drinking milk. The dog is sleeping.",
        prompt: "What is the girl doing?",
        choices: ["She is eating lunch.", "She is drinking milk.", "She is sleeping."],
        answer: "She is drinking milk."
      },
      {
        type: "listen_sentence",
        audio: "audio/level2/day1/listening4.mp3",
        textForTTS: "There is a dog in the park. It is sleeping under the tree.",
        prompt: "Where is the dog?",
        choices: ["Under the tree.", "On the table.", "In the water."],
        answer: "Under the tree."
      },

      {
        type: "blank_word",
        prompt: "문장에 가장 잘 어울리는 단어를 고르세요!",
        sentence: "The girl is reading a story. She is in the ______.",
        choices: ["library", "kitchen", "bathroom"],
        answer: "library"
      },
      {
        type: "blank_word",
        prompt: "문장에 가장 잘 어울리는 단어를 고르세요!",
        sentence: "It is raining outside. The boy needs an ______.",
        choices: ["apple", "umbrella", "pencil"],
        answer: "umbrella"
      }
    ]
  }
};