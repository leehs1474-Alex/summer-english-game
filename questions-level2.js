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


  },

  DAY2: {
    teacher: "Alex",
    place: "정글",
    introEmoji: "🟩👕🎧",
    intro: "행동과 옷의 색을 함께 확인하세요!",
    mid1: "좋아요! 행동과 색깔을 정확히 구별하고 있어요.",
    mid2: "듣기에서는 여러 사람의 행동과 옷 색을 함께 기억하세요!",
    next: "다음 미션: Level 2 DAY3로 가세요!",

    questions: [
      {
        type: "picture_sentence",
        image: "images/level2/day2/scene1.png",
        prompt: "Who is flying a kite?",
        choices: [
          "The boy in red.",
          "The girl in yellow.",
          "The boy in blue."
        ],
        answer: "The boy in red."
      },
      {
        type: "picture_sentence",
        image: "images/level2/day2/scene1.png",
        prompt: "What is the girl in yellow doing?",
        choices: [
          "She is reading.",
          "She is jumping rope.",
          "She is riding a bike."
        ],
        answer: "She is jumping rope."
      },
      {
        type: "picture_sentence",
        image: "images/level2/day2/scene2.png",
        prompt: "Who is carrying a box?",
        choices: [
          "The man in green.",
          "The woman in purple.",
          "The boy in orange."
        ],
        answer: "The man in green."
      },
      {
        type: "picture_sentence",
        image: "images/level2/day2/scene2.png",
        prompt: "What is the woman in purple doing?",
        choices: [
          "She is buying fruit.",
          "She is washing a car.",
          "She is drawing a picture."
        ],
        answer: "She is buying fruit."
      },
      {
        type: "picture_sentence",
        image: "images/level2/day2/scene3.png",
        prompt: "Who is painting?",
        choices: [
          "The girl in pink.",
          "The boy in blue.",
          "The teacher in white."
        ],
        answer: "The girl in pink."
      },
      {
        type: "picture_sentence",
        image: "images/level2/day2/scene4.png",
        prompt: "What is the boy in green doing?",
        choices: [
          "He is feeding a duck.",
          "He is taking a picture.",
          "He is eating a sandwich."
        ],
        answer: "He is feeding a duck."
      },

      {
        type: "listen_sentence",
        audio: "audio/level2/day2/listening1.mp3",
        textForTTS: "The boy in red is flying a kite. The girl in yellow is jumping rope. The boy in blue is riding a bike.",
        prompt: "Who is jumping rope?",
        choices: [
          "The boy in red.",
          "The girl in yellow.",
          "The boy in blue."
        ],
        answer: "The girl in yellow."
      },
      {
        type: "listen_sentence",
        audio: "audio/level2/day2/listening2.mp3",
        textForTTS: "The woman in purple is buying apples. The man in green is carrying a box. The boy in orange is drinking juice.",
        prompt: "What is the man in green doing?",
        choices: [
          "He is buying apples.",
          "He is carrying a box.",
          "He is drinking juice."
        ],
        answer: "He is carrying a box."
      },
      {
        type: "listen_sentence",
        audio: "audio/level2/day2/listening3.mp3",
        textForTTS: "The girl in pink is painting. The boy in blue is cutting paper. The teacher in white is writing on the board.",
        prompt: "Who is painting?",
        choices: [
          "The girl in pink.",
          "The boy in blue.",
          "The teacher in white."
        ],
        answer: "The girl in pink."
      },
      {
        type: "listen_sentence",
        audio: "audio/level2/day2/listening4.mp3",
        textForTTS: "The boy in green is feeding a duck. The girl in red is taking a picture. The man in black is eating a sandwich.",
        prompt: "What is the girl in red doing?",
        choices: [
          "She is feeding a duck.",
          "She is taking a picture.",
          "She is eating a sandwich."
        ],
        answer: "She is taking a picture."
      },

      {
        type: "blank_word",
        prompt: "문장에 가장 잘 어울리는 단어를 고르세요!",
        sentence: "Mina is cold. She wears her warm ______.",
        choices: [
          "jacket",
          "sandals",
          "water"
        ],
        answer: "jacket"
      },
      {
        type: "blank_word",
        prompt: "문장에 가장 잘 어울리는 단어를 고르세요!",
        sentence: "The sun is very bright. Joon wears his ______.",
        choices: [
          "gloves",
          "sunglasses",
          "boots"
        ],
        answer: "sunglasses"
      }
    ]

  },

  DAY3: {
    teacher: "Sunny",
    place: "동굴",
    introEmoji: "🟨📍🎧",
    intro: "짧은 이야기를 이해하고, 인물의 행동과 위치를 찾아보세요!",
    mid1: "좋아요! 행동과 위치를 함께 잘 찾고 있어요.",
    mid2: "이제 짧은 이야기를 듣고 중요한 정보를 기억하세요!",
    next: "다음 미션: Level 2 DAY4로 가세요!",

    questions: [
      {
        type: "picture_sentence",
        image: "images/level2/day3/scene1.png",
        prompt: "Where is the boy in blue reading?",
        choices: [
          "Under the tree.",
          "Near the fountain.",
          "On the bridge."
        ],
        answer: "Under the tree."
      },
      {
        type: "picture_sentence",
        image: "images/level2/day3/scene1.png",
        prompt: "Who is running near the fountain?",
        choices: [
          "The girl in red.",
          "The boy in blue.",
          "The man in gray."
        ],
        answer: "The girl in red."
      },
      {
        type: "picture_sentence",
        image: "images/level2/day3/scene2.png",
        prompt: "What is the woman in green doing by the window?",
        choices: [
          "She is watering plants.",
          "She is making coffee.",
          "She is cleaning the floor."
        ],
        answer: "She is watering plants."
      },
      {
        type: "picture_sentence",
        image: "images/level2/day3/scene2.png",
        prompt: "Where is the man in black?",
        choices: [
          "Behind the counter.",
          "Near the door.",
          "By the window."
        ],
        answer: "Behind the counter."
      },
      {
        type: "picture_sentence",
        image: "images/level2/day3/scene3.png",
        prompt: "Who is drawing near the bookshelf?",
        choices: [
          "The girl in yellow.",
          "The boy in green.",
          "The teacher in blue."
        ],
        answer: "The girl in yellow."
      },
      {
        type: "picture_sentence",
        image: "images/level2/day3/scene4.png",
        prompt: "Where is the man in brown fishing?",
        choices: [
          "On the dock.",
          "Near the bench.",
          "Under the tree."
        ],
        answer: "On the dock."
      },

      {
        type: "listen_sentence",
        audio: "audio/level2/day3/listening1.mp3",
        textForTTS: "Tom and Mia are spending the afternoon at the park. Tom is reading under a big tree. Mia is running near the fountain.",
        prompt: "Where is Tom reading?",
        choices: [
          "Under a big tree.",
          "Near the fountain.",
          "On the bridge."
        ],
        answer: "Under a big tree."
      },
      {
        type: "listen_sentence",
        audio: "audio/level2/day3/listening2.mp3",
        textForTTS: "Ben's family is helping at a cafe. His mother is watering plants by the window. His father is making coffee behind the counter.",
        prompt: "Who is making coffee?",
        choices: [
          "Ben.",
          "His mother.",
          "His father."
        ],
        answer: "His father."
      },
      {
        type: "listen_sentence",
        audio: "audio/level2/day3/listening3.mp3",
        textForTTS: "The class is having art time. Emma is drawing near the bookshelf. Jake is reading quietly at his desk.",
        prompt: "What is Emma doing?",
        choices: [
          "She is drawing.",
          "She is reading.",
          "She is writing."
        ],
        answer: "She is drawing."
      },
      {
        type: "listen_sentence",
        audio: "audio/level2/day3/listening4.mp3",
        textForTTS: "A family is enjoying the lake. The girl is feeding birds near a bench. Her father is fishing on the dock.",
        prompt: "Where is the father fishing?",
        choices: [
          "Near a bench.",
          "On the dock.",
          "Beside the road."
        ],
        answer: "On the dock."
      },

      {
        type: "blank_word",
        prompt: "문장에 가장 잘 어울리는 단어를 고르세요!",
        sentence: "The books are on the floor. Please put them on the ______.",
        choices: [
          "shelf",
          "river",
          "cloud"
        ],
        answer: "shelf"
      },
      {
        type: "blank_word",
        prompt: "문장에 가장 잘 어울리는 단어를 고르세요!",
        sentence: "The bus is coming. The students are waiting at the bus ______.",
        choices: [
          "stop",
          "kitchen",
          "bed"
        ],
        answer: "stop"
      }
    ]
  }

  },

  DAY4: {
    teacher: "Daniel",
    place: "산 정상",
    introEmoji: "🟥🎒🎧",
    intro: "마지막 미션! 행동, 위치, 소지품까지 모두 찾아보세요!",
    mid1: "좋아요! 여러 정보를 함께 이해하고 있어요.",
    mid2: "마지막 듣기 미션입니다. 끝까지 집중하세요!",
    next: "🎉 Congratulations! You finished Level 2!",

    questions: [
      {
        type: "picture_sentence",
        image: "images/level2/day4/scene1.png",
        prompt: "Who is sitting on the bench with a red backpack?",
        choices: [
          "The boy in blue.",
          "The girl in yellow.",
          "The woman in green."
        ],
        answer: "The boy in blue."
      },
      {
        type: "picture_sentence",
        image: "images/level2/day4/scene1.png",
        prompt: "What is the girl in yellow doing near the tree?",
        choices: [
          "She is reading a map.",
          "She is taking pictures.",
          "She is drinking water."
        ],
        answer: "She is reading a map."
      },
      {
        type: "picture_sentence",
        image: "images/level2/day4/scene2.png",
        prompt: "Where is the man in black carrying a brown box?",
        choices: [
          "Near the entrance.",
          "Behind the counter.",
          "Beside the window."
        ],
        answer: "Near the entrance."
      },
      {
        type: "picture_sentence",
        image: "images/level2/day4/scene2.png",
        prompt: "Who is holding a blue umbrella by the window?",
        choices: [
          "The woman in red.",
          "The man in black.",
          "The boy in white."
        ],
        answer: "The woman in red."
      },
      {
        type: "picture_sentence",
        image: "images/level2/day4/scene3.png",
        prompt: "What is the boy in green doing at the desk with a laptop?",
        choices: [
          "He is typing.",
          "He is drawing.",
          "He is sleeping."
        ],
        answer: "He is typing."
      },
      {
        type: "picture_sentence",
        image: "images/level2/day4/scene4.png",
        prompt: "Where is the girl in pink holding a yellow ball?",
        choices: [
          "Near the goal.",
          "On the slide.",
          "Under the tent."
        ],
        answer: "Near the goal."
      },

      {
        type: "listen_sentence",
        audio: "audio/level2/day4/listening1.mp3",
        textForTTS: "Tom and his family are spending the afternoon in the park. Tom is sitting on a bench with a red backpack. His sister Lily is reading a map near a big tree. Their mother is taking pictures by the fountain.",
        prompt: "Who has the red backpack?",
        choices: [
          "Tom.",
          "Lily.",
          "Their mother."
        ],
        answer: "Tom."
      },
      {
        type: "listen_sentence",
        audio: "audio/level2/day4/listening2.mp3",
        textForTTS: "Ben's family is waiting at the station. His father is carrying a brown box near the entrance. His mother is holding a blue umbrella by the window. Ben is pulling a small suitcase.",
        prompt: "Who is holding the blue umbrella?",
        choices: [
          "Ben.",
          "His father.",
          "His mother."
        ],
        answer: "His mother."
      },
      {
        type: "listen_sentence",
        audio: "audio/level2/day4/listening3.mp3",
        textForTTS: "Emma is studying in the library. She is reading a book at the table. Her brother Jake is typing on a laptop by the window. Their teacher is writing on the board.",
        prompt: "What is Jake doing?",
        choices: [
          "He is typing.",
          "He is reading.",
          "He is writing."
        ],
        answer: "He is typing."
      },
      {
        type: "listen_sentence",
        audio: "audio/level2/day4/listening4.mp3",
        textForTTS: "The family is enjoying a soccer game. Mia is holding a yellow ball near the goal. Her father is drinking water under the tent. Her brother is kicking the ball on the field.",
        prompt: "Where is Mia standing?",
        choices: [
          "Near the goal.",
          "Under the tent.",
          "On the field."
        ],
        answer: "Near the goal."
      },

      {
        type: "blank_word",
        prompt: "문장에 가장 잘 어울리는 단어를 고르세요!",
        sentence: "Kevin wants to take pictures on his trip. He puts his ______ in his bag.",
        choices: [
          "camera",
          "spoon",
          "pillow"
        ],
        answer: "camera"
      },
      {
        type: "blank_word",
        prompt: "문장에 가장 잘 어울리는 단어를 고르세요!",
        sentence: "Amy is thirsty after hiking. She drinks water from her ______.",
        choices: [
          "bottle",
          "wallet",
          "notebook"
        ],
        answer: "bottle"
      }
    ]
  };