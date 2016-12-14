'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.fdb11219-8074-4f95-be4a-d901c8fa22a8"; //Please change the app-id to you own skill id
var SKILL_NAME = 'Motivational Quotes';

/**
 * Array containing Quotes.
 */
var FACTS = [
"The best preparation for tomorrow is doing your best today. H. Jackson Brown, Jr.",
"Put your heart, mind, and soul into even your smallest acts. This is the secret of success. Swami Sivananda",
"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it. Steve Jobs",
"Keep your face always toward the sunshine - and shadows will fall behind you. Walt Whitman",
"Today I choose life. Every morning when I wake up I can choose joy, happiness, negativity, pain... To feel the freedom that comes from being able to continue to make mistakes and choices - today I choose to feel life, not to deny my humanity but embrace it. Kevyn Aucoin",
"Happiness is not something you postpone for the future; it is something you design for the present. Jim Rohn",
"I can't change the direction of the wind, but I can adjust my sails to always reach my destination. Jimmy Dean",
"Nothing is impossible, the word itself says 'I'm possible'! Audrey Hepburn",
"What we think, we become. Buddha",
"Believe you can and you're halfway there. Theodore Roosevelt",
"As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them. John F. Kennedy",
"My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style. Maya Angelou",
"Try to be a rainbow in someone's cloud. Maya Angelou",
"Change your thoughts and you change your world. Norman Vincent Peale",
"It is during our darkest moments that we must focus to see the light. Aristotle Onassis",
"A hero is someone who has given his or her life to something bigger than oneself. Joseph Campbell",
"Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship. Buddha",
"No act of kindness, no matter how small, is ever wasted. Aesop",
"Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky. Rabindranath Tagore",
"Let us remember: One book, one pen, one child, and one teacher can change the world. Malala Yousafzai",
"We know what we are, but know not what we may be. William Shakespeare",
"Perfection is not attainable, but if we chase perfection we can catch excellence. Vince Lombardi",
"Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible. Francis of Assisi",
"If opportunity doesn't knock, build a door. Milton Berle",
"Let us sacrifice our today so that our children can have a better tomorrow. A. P. J. Abdul Kalam",
"I believe in pink. I believe that laughing is the best calorie burner. I believe in kissing, kissing a lot. I believe in being strong when everything seems to be going wrong. I believe that happy girls are the prettiest girls. I believe that tomorrow is another day and I believe in miracles. Audrey Hepburn",
"There are two ways of spreading light: to be the candle or the mirror that reflects it. Edith Wharton",
"We can't help everyone, but everyone can help someone. Ronald Reagan",
"You don't learn to walk by following rules. You learn by doing, and by falling over. Richard Branson",
"Business opportunities are like buses, there’s always another one coming. Richard Branson",
"Do not be embarrassed by your failures, learn from them and start again. Richard Branson",
"A business has to be involving, it has to be fun, and it has to exercise your creative instincts. Richard Branson",
"One thing is certain in business. You and everyone around you will make mistakes. Richard Branson",
"My general attitude to life is to enjoy every minute of every day. I never do anything with a feeling of, ’Oh God, I’ve got to do this today.’ Richard Branson",
"I cannot remember a moment in my life when I have not felt the love of my family. We were a family that would have killed for each other - and we still are. Richard Branson",
"I never get the accountants in before I start up a business. It's done on gut feeling, especially if I can see that they are taking the mickey out of the consumer. Richard Branson",
"I love the freedom of movement that my phone gives me. That has definitely transformed my life. Richard Branson",
"Work hard for what you want because it won't come to you without a fight. You have to be strong and courageous and know that you can do anything you put your mind to. If somebody puts you down or criticizes you, just keep on believing in yourself and turn it into something positive. Leah LaBelle",
"Once you replace negative thoughts with positive ones, you'll start having positive results. Willie Nelson",
"Yesterday is not ours to recover, but tomorrow is ours to win or lose. Lyndon B. Johnson",
"Your smile will give you a positive countenance that will make people feel comfortable around you. Les Brown",
"I believe if you keep your faith, you keep your trust, you keep the right attitude, if you're grateful, you'll see God open up new doors. Joel Osteen",
"You cannot have a positive life and a negative mind. Joyce Meyer",
"In order to carry a positive action we must develop here a positive vision. Dalai Lama",
"Keep your face to the sunshine and you cannot see a shadow. Helen Keller",
"Live life to the fullest, and focus on the positive. Matt Cameron",
"Find a place inside where there's joy, and the joy will burn out the pain. Joseph Campbell",
"I truly believe that everything that we do and everyone that we meet is put in our path for a purpose. There are no accidents; we're all teachers - if we're willing to pay attention to the lessons we learn, trust our positive instincts and not be afraid to take risks or wait for some miracle to come knocking at our door. Marla Gibbs",
"Adopting the right attitude can convert a negative stress into a positive one. Hans Selye",
"Did I offer peace today? Did I bring a smile to someone's face? Did I say words of healing? Did I let go of my anger and resentment? Did I forgive? Did I love? These are the real questions. I must trust that the little bit of love that I sow now will bear many fruits, here in this world and the life to come. Henri Nouwen",
"Successful people maintain a positive focus in life no matter what is going on around them. They stay focused on their past successes rather than their past failures, and on the next action steps they need to take to get them closer to the fulfillment of their goals rather than all the other distractions that life presents to them. Jack Canfield",
"Every day brings new choices. Martha Beck",
"Correction does much, but encouragement does more. Johann Wolfgang von Goethe",
"Positive anything is better than negative nothing. Elbert Hubbard",
"No matter what you're going through, there's a light at the end of the tunnel and it may seem hard to get to it but you can do it and just keep working towards it and you'll find the positive side of things. Demi Lovato",
"I often think that the night is more alive and more richly colored than the day. Vincent Van Gogh",
"Your attitude is like a box of crayons that color your world. Constantly color your picture gray, and your picture will always be bleak. Try adding some bright colors to the picture by including humor, and your picture begins to lighten up. Allen Klein",
"Always Do Your Best. Your best is going to change from moment to moment; it will be different when you are healthy as opposed to sick. Under any circumstance, simply do your best, and you will avoid self-judgment, self-abuse and regret. Don Miguel Ruiz",
"Positive feelings come from being honest about yourself and accepting your personality, and physical characteristics, warts and all; and, from belonging to a family that accepts you without question. Willard Scott",
"Trust in dreams, for in them is hidden the gate to eternity. Khalil Gibran",
"If you have a positive attitude and constantly strive to give your best effort, eventually you will overcome your immediate problems and find you are ready for greater challenges. Pat Riley",
"At the end of the day, the most overwhelming key to a child's success is the positive involvement of parents. Jane D. Hull",
"To succeed, you need to find something to hold on to, something to motivate you, something to inspire you. Tony Dorsett",
"You've done it before and you can do it now. See the positive possibilities. Redirect the substantial energy of your frustration and turn it into positive, effective, unstoppable determination. Ralph Marston",
"Work hard, stay positive, and get up early. It's the best part of the day. George Allen, Sr.",
"I think it's important to get your surroundings as well as yourself into a positive state - meaning surround yourself with positive people, not the kind who are negative and jealous of everything you do. Heidi Klum",
"Art is not a study of positive reality, it is the seeking for ideal truth. John Ruskin",
"A positive attitude causes a chain reaction of positive thoughts, events and outcomes. It is a catalyst and it sparks extraordinary results. Wade Boggs",
"The joy of life comes from our encounters with new experiences, and hence there is no greater joy than to have an endlessly changing horizon, for each day to have a new and different sun. Christopher McCandless",
"You have to enjoy life. Always be surrounded by people that you like, people who have a nice conversation. There are so many positive things to think about. Sophia Loren",
"I do believe we're all connected. I do believe in positive energy. I do believe in the power of prayer. I do believe in putting good out into the world. And I believe in taking care of each other. Harvey Fierstein",
"While you're going through this process of trying to find the satisfaction in your work, pretend you feel satisfied. Tell yourself you had a good day. Walk through the corridors with a smile rather than a scowl. Your positive energy will radiate. If you act like you're having fun, you'll find you are having fun. Jean Chatzky",
"When you show deep empathy toward others, their defensive energy goes down, and positive energy replaces it. That's when you can get more creative in solving problems. Stephen Covey",
"Look up, laugh loud, talk big, keep the color in your cheek and the fire in your eye, adorn your person, maintain your health, your beauty and your animal spirits. William Hazlitt",
"Virtually nothing is impossible in this world if you just put your mind to it and maintain a positive attitude. Lou Holtz",
"Stay positive and happy. Work hard and don't give up hope. Be open to criticism and keep learning. Surround yourself with happy, warm and genuine people. Tena Desae",
"Choosing to be positive and having a grateful attitude is going to determine how you're going to live your life. Joel Osteen",
"In every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make a positive impact. Les Brown",
"Success or failure depends more upon attitude than upon capacity successful men act as though they have accomplished or are enjoying something. Soon it becomes a reality. Act, look, feel successful, conduct yourself accordingly, and you will be amazed at the positive results. William James",
"When you wake up every day, you have two choices. You can either be positive or negative; an optimist or a pessimist. I choose to be an optimist. It's all a matter of perspective. Harvey Mackay ",
"We can bring positive energy into our daily lives by smiling more, talking to strangers in line, replacing handshakes with hugs, and calling our friends just to tell them we love them. Brandon Jenner",
"The person who can bring the spirit of laughter into a room is indeed blessed. Bennett Cerf",
"I always like to look on the optimistic side of life, but I am realistic enough to know that life is a complex matter. Walt Disney",
"Positive thinking will let you do everything better than negative thinking will. Zig Ziglar",
"It takes but one positive thought when given a chance to survive and thrive to overpower an entire army of negative thoughts. Robert H.",
"The worst people to serve are the Poor people. Give them free, they think it's a trap. Tell them it's a small investment, they'll say can't earn much. Tell them to come in big, they'll say no money. Tell them try new things, they'll say no experience. Tell them it's traditional business, they'll say hard to do. Tell them it's a new business model, they'll say it's MLM. Tell them to run a shop, they'll say no freedom. Tell them run new business, they'll say no expertise. They do have some things in common: They love to ask google, listen to friends who are as hopeless as them, they think more than an university professor and do less than a blind man. Just ask them, what can they do. They won't be able to answer you. My conclusion: Instead of your heart beats faster, why not you just act faster a bit; instead of just thinking about it, why not do something about it. Poor people fail because of one common behaviour: Their Whole Life is About Waiting. Jack Ma",
"I will keep smiling, be positive and never give up! I will give 100 percent each time I play. These are always my goals and my attitude. Yani Tseng",
"I am happy to say that everyone that I have met in my life, I have gained something from them; be it negative or positive, it has enforced and reinforced my life in some aspect. Walter Payton",
"Life is short, youth is finite, and opportunities endless. Have you found the intersection of your passion and the potential for world-shaping positive impact? If you don't have a great idea of your own, there are plenty of great teams that need you - unknown startups and established teams in giant companies alike. Justin Rosenstein",
"Pessimism leads to weakness, optimism to power. William James",
"The internet could be a very positive step towards education, organization and participation in a meaningful society. Noam Chomsky",
"Museums are managers of consciousness. They give us an interpretation of history, of how to view the world and locate ourselves in it. They are, if you want to put it in positive terms, great educational institutions. If you want to put it in negative terms, they are propaganda machines. Hans Haacke",
"I hope the millions of people I've touched have the optimism and desire to share their goals and hard work and persevere with a positive attitude. Michael Jordan",
"Resilience isn't a single skill. It's a variety of skills and coping mechanisms. To bounce back from bumps in the road as well as failures, you should focus on emphasizing the positive. Jean Chatzky",
"Chaotic people often have chaotic lives, and I think they create that. But if you try and have an inner peace and a positive attitude, I think you attract that. Imelda Staunton ",
"You're going to go through tough times - that's life. But I say, 'Nothing happens to you, it happens for you.' See the positive in negative events. Joel Osteen ",
"In high school, in sport, I had a coach who told me I was much better than I thought I was, and would make me do more in a positive sense. He was the first person who taught me not to be afraid of failure. Mike Krzyzewski",
"The gift of fantasy has meant more to me than my talent for absorbing positive knowledge. Albert Einstein",
"Don't let people disrespect you. My mom says don't open the door to the devil. Surround yourself with positive people. Cuba Gooding, Jr.",
"I believe in Karma. If the good is sown, the good is collected. When positive things are made, that returns well. Yannick Noah",
"Confidence isn't optimism or pessimism, and it's not a character attribute. It's the expectation of a positive outcome. Rosabeth Moss Kanter",
"Perpetual optimism is a force multiplier. Colin Powell",
"Our chief want is someone who will inspire us to be what we know we could be. Ralph Waldo Emerson",
"The learner always begins by finding fault, but the scholar sees the positive merit in everything. Georg Wilhelm Friedrich Hegel",
"I think anything is possible if you have the mindset and the will and desire to do it and put the time in. Roger Clemens",
"There is little difference in people, but that little difference makes a big difference. The little difference is attitude. The big difference is whether it is positive or negative. W. Clement Stone ",
"And I have to work so hard at talking positively to myself. If I don't, it's just real hard to get through the day, and I'll get really down, and just want to cry. My whole body language changes. I get more slumped over. Delta Burke",
"Today or any day that phone may ring and bring good news. Ethel Waters",
"The most important thing is to try and inspire people so that they can be great in whatever they want to do. Kobe Bryan",
"I'm a really, really optimistic and really, really positive person. My main thing is, 'Enjoy life. Celebrate life.' Luke Bryan",
"There is no racial or ethnic involvement in Thanksgiving, and people who may be very distant from the Christian system can see the beauty and the positive spirit that comes from the holiday. John Clayton"
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random fact from the facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a random fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
