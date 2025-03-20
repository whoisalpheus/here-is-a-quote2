// TODO: check for duplicate quotes...
// TODO: Add more quotes from libquotes, etc...
// TODO: contentWarning for depression category ????
// If used, does contentWarning go in every object??
// Categories: sad, happiness, anger, shame, guilt, self_worth, resilience, anxiety, *depression*

const quotes = [
    { 
        text: "Sadness flies away on the wings of time.",
        author: 'Jean de La Fontaine',
        category: 'sad'
    },
    {
        text: "Heavy hearts, like heavy clouds in the sky, are best relieved by the letting of a little water.",
        author: 'Christopher Morley',
        category: 'sad'
    },
    {
        text: "The keenest sorrow is to recognize ourselves as the sole cause of all our adversities.",
        author: 'Sophocles',
        category: 'sad'
    },
    {
        text: "Sad things happen. They do. But we don't need to live sad forever.",
        author: 'Mattie Stepanek',
        category: 'sad'
    },
    {
        text: "We never taste happiness in perfection, our most fortunate successes are mixed with sadness.",
        author: 'Pierre Corneille',
        category: 'sad'
    },
    { 
        text: "We must laugh before we are happy, for fear we die before we laugh at all.",
        author: 'Jean de La Bruyère',
        category: 'happiness'
    },
    {
        text: "Shame is the most powerful, master emotion. It's the fear that we're not good enough.",
        author: "Brené Brown",
        category: "shame"
    },
    {
        text: "The only difference between the saint and the sinner is that every saint has a past and every sinner has a future.",
        author: "Oscar Wilde",
        category: "guilt"
    },
    {
        text: "We all make mistakes, have struggles, and even regret things in our past. But you are not your mistakes, you are not your struggles, and you are here NOW with the power to shape your day and your future.",
        author: "Steve Maraboli",
        category: "guilt"
    },
    {
        text: "Shame dies when stories are told in safe places.",
        author: "Ann Voskamp",
        category: "shame"
    },
    {
        text: "Mistakes are always forgivable, if one has the courage to admit them.",
        author: "Bruce Lee",
        category: "guilt"
    },
    {
        text: "Guilt is a waste of time unless you learn how to use it to grow.",
        author: "Unknown",
        category: "guilt"
    },
    {
        text: "There is no saint without a past, no sinner without a future.",
        author: "Ahmad Sohrab, attributed a lot to St. Augustine of Hippo",
        category: "guilt"
    },
    {
        text: "Guilt is just your brain's way of reminding you that you're better than your mistakes.",
        author: "Unknown",
        category: "guilt"
    },
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Oliver Goldsmith, though attributed to many, including Nelson Mandela, Ralph Waldo Emerson, and Confucius",
        category: "resilience"
    },
    {
        text: "Forgive yourself for not knowing what you didn't know before you learned it.",
        author: "Maya Angelou",
        category: "self_worth"
    },
    {
        text: "To make mistakes is human; to stumble is commonplace; to be able to laugh at yourself is maturity.",
        author: "William Arthur Ward",
        category: "self_worth"
    },
    {
        text: "No one can make you feel inferior without your consent.",
        author: "Eleanor Roosevelt",
        category: "self_worth"
    },
    {
        text: "You yourself, as much as anybody in the entire universe, deserve your love and affection.",
        author: "Attributed to Buddha",
        category: "self_worth"
    },
    {
        text: "To love oneself is the beginning of a lifelong romance.",
        author: "Oscar Wilde",
        category: "self_worth"
    },
    {
        text: "Your value doesn't decrease based on someone's inability to see your worth.",
        author: "Unknown",
        category: "self_worth"
    },
    {
        text: "Owning our story and loving ourselves through that process is the bravest thing that we'll ever do.",
        author: "Brené Brown",
        category: "self_worth"
    },
    {
        text: "If you have the ability to love, love yourself first.",
        author: "Charles Bukowski",
        category: "self_worth"
    },
    {
        text: "We accept the love we think we deserve.",
        author: "Stephen Chbosky",
        category: "self_worth"
    },
    {
        text: "Beauty begins the moment you decide to be yourself.",
        author: "Attributed to Coco Chanel",
        category: "self_worth"
    },
    {
        text: "You are enough just as you are.",
        author: "Unknown, attributed to Meghan Markle",
        category: "self_worth"
    },
    {
        text: "Be yourself; everyone else is already taken.",
        author: "Attributed to Oscar Wilde",
        category: "self_worth"
    },
    {
        text: "Do not judge me by my success, judge me by how many times I fell down and got back up again.",
        author: "Nelson Mandela",
        category: "resilience"
    },
    {
        text: "Although the world is full of suffering, it is also full of the overcoming of it.",
        author: "Helen Keller",
        category: "resilience"
    },
    {
        text: "Rock bottom became the solid foundation on which I rebuilt my life.",
        author: "J.K. Rowling",
        category: "resilience"
    },
    {
        text: "The human capacity for burden is like bamboo—far more flexible than you’d ever believe at first glance.",
        author: "Jodi Picoult",
        category: "resilience"
    },
    {
        text: "You may have to fight a battle more than once to win it.",
        author: "Margaret Thatcher",
        category: "resilience"
    },
    {
        text: "I am not what happened to me, I am what I choose to become.",
        author: "Attributed to Carl Jung",
        category: "resilience"
    },
    {
        text: "Hardships often prepare ordinary people for an extraordinary destiny.",
        author: "Attributed to C.S. Lewis",
        category: "resilience"
    },
    {
        text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        author: "Henry Stanley Haskins. Misattributed to Ralph Waldo Emerson and Henry David Thoreau.",
        category: "resilience"
    },
    {
        text: "Only those who dare to fail greatly can ever achieve greatly.",
        author: "Robert F. Kennedy",
        category: "resilience"
    },
    {
        text: "That which does not kill us makes us stronger.",
        author: "Friedrich Nietzsche",
        category: "resilience"
    },
    {
        text: "Courage is resistance to fear, mastery of fear, not absence of fear.",
        author: "Mark Twain",
        category: "fear"
    },
    {
        text: "Fear is only as deep as the mind allows.",
        author: "Attributed as a Japanese Proverb",
        category: "fear"
    },
    {
        text: "Fear doesn't exist anywhere except in the mind.",
        author: "Dale Carnegie",
        category: "fear"
    },
    {
        text: "The purpose of life is not to be happy - but to matter, to be productive, to be useful, to have it make some difference that you lived at all.",
        author: "Leo Rosten",
        category: "happiness"
    },
    {
        text: "Do the thing you fear and the death of fear is certain.",
        author: "Attributed to Ralph Waldo Emerson",
        category: "fear"
    },
    {
        text: "He who is not everyday conquering some fear has not learned the secret of life.",
        author: "Attributed to Ralph Waldo Emerson",
        category: "fear"
    },
    {
        text: "Nothing in life is to be feared, it is only to be understood.",
        author: "Marie Curie",
        category: "fear"
    },
    {
        text: "You gain strength, courage, and confidence by every experience in which you stop to look fear in the face.",
        author: "Eleanor Roosevelt",
        category: "fear"
    },
    {
        text: "Fear is the path to the dark side. Fear leads to anger, anger leads to hate, hate leads to suffering.",
        author: "Yoda (George Lucas)",
        category: "fear"
    },
    {
        text: "We are more often frightened than hurt; and we suffer more from imagination than from reality.",
        author: "Seneca",
        category: "fear"
    },
    {
        text: "To conquer fear is the beginning of wisdom.",
        author: "Bertrand Russell",
        category: "fear"
    },
    {
        text: "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.",
        author: "Nelson Mandela",
        category: "fear"
    },
    {
        text: "The only thing we have to fear is fear itself.",
        author: "Franklin D. Roosevelt",
        category: "fear"
    },
    {
        text: "Courage is knowing what not to fear.",
        author: "Attributed to Plato",
        category: "fear"
    },
    {
        text: "You don't have to control your thoughts. You just have to stop letting them control you.",
        author: "Dan Millman",
        category: "anxiety"
    },
    {
        text: "Worrying is like paying a debt you don't owe.",
        author: "Original saying by Harry A. Thompson. Misattributed widely to Mark Twain",
        category: "anxiety"
    },
    {
        text: "Anxiety and fear produce energy. Where we focus that energy noticeably affects the quality of our lives: focus on the solution, not the problem.",
        author: "Walter Inglis Anderson",
        category: "anxiety"
    },
    {
        text: "Almost everything will work again if you unplug it for a few minutes, including you.",
        author: "Anne Lamott",
        category: "anxiety"
    },
    {
        text: "Do what you can, with what you have, where you are.",
        author: "Squire Bill Widener, quoted by Theodore Roosevelt",
        category: "anxiety"
    },
    {
        text: "If you want to conquer the anxiety of life, live in the moment, live in the breath.",
        author: "Amit Ray",
        category: "anxiety"
    },
    {
        text: "Anxiety does not empty tomorrow of its sorrows, but only empties today of its strength.",
        author: "Charles Spurgeon",
        category: "anxiety"
    },
    {
        text: "Feelings are just visitors. Let them come and go.",
        author: "Mooji",
        category: "anxiety"
    },
    {
        text: "Surrender to what is. Let go of what was. Have faith in what will be.",
        author: "Sonia Ricotti",
        category: "anxiety"
    },
    {
        text: "Calm mind brings inner strength and self-confidence, so that's very important for good health.",
        author: "Dalai Lama",
        category: "anxiety"
    },
    {
        text: "Happiness depends upon ourselves.",
        author: "Attributed to Aristotle",
        category: "happiness"
    },
    {
        text: "Happiness is not something ready-made. It comes from your own actions.",
        author: "Dalai Lama",
        category: "happiness"
    },
    {
        text: "Very little is needed to make a happy life.",
        author: "Marcus Aurelius",
        category: "happiness"
    },
    {
        text: "Most folks are as happy as they make up their minds to be.",
        author: "Attributed to Abraham Lincoln",
        category: "happiness"
    },
    {
        text: "Happiness is when what you think, what you say, and what you do are in harmony.",
        author: "Attributed to Mahatma Gandhi",
        category: "happiness"
    },
    {
        text: "To be happy, we must not be too concerned with others.",
        author: "Albert Camus",
        category: "happiness"
    },
    {
        text: "The only thing that will make you happy is being happy with who you are.",
        author: "Attributed to Goldie Hawn",
        category: "happiness"
    },
    {
        text: "True happiness arises, in the first place, from the enjoyment of oneself.",
        author: "Joseph Addison",
        category: "happiness"
    },
    {
        text: "Happiness is not a goal; it is a by-product.",
        author: "Eleanor Roosevelt",
        category: "happiness"
    },
    {
        text: "The greatest thing in the world is to know how to belong to oneself.",
        author: "Michel de Montaigne",
        category: "loneliness"
    },
    {
        text: "Loneliness and the feeling of being unwanted is the most terrible poverty.",
        author: "Mother Teresa",
        category: "loneliness"
    },
    {
        text: "Sometimes you need to be alone. Not to be lonely, but to enjoy your free time being yourself.",
        author: "Unknown",
        category: "loneliness"
    },
    {
        text: "If you are lonely when you're alone, you are in bad company.",
        author: "Jean-Paul Sartre",
        category: "loneliness"
    },
    {
        text: "The eternal quest of the human being is to shatter his loneliness.",
        author: "Norman Cousins",
        category: "loneliness"
    },
    {
        text: "Being alone has a power that very few people can handle.",
        author: "Steven Aitchison",
        category: "loneliness"
    },
    {
        text: "Solitude is where one discovers one is not alone.",
        author: "Attributed to Marty Rubin",
        category: "loneliness"
    },
    {
        text: "We are all so much together, but we are all dying of loneliness.",
        author: "Albert Schweitzer",
        category: "loneliness"
    },
    {
        text: "Sometimes, we just need someone to simply be there for us. Not to fix anything, but to let us feel supported.",
        author: "Unknown",
        category: "loneliness"
    },
    {
        text: "What a lovely surprise to discover how unlonely being alone can be.",
        author: "Ellen Burstyn",
        category: "loneliness"
    },
    {
        text: "For every minute you remain angry, you give up sixty seconds of peace of mind.",
        author: "Attributed to Ralph Waldo Emerson, more evidence toward unknown author",
        category: "anger"
    },
    {
        text: "Speak when you are angry, and you will make the best speech you will ever regret.",
        author: "Groucho Marx, attributed to Ambrose Bierce, probably Marx or unknown",
        category: "anger"
    },
    {
        text: "When anger rises, think of the consequences.",
        author: "Confucius",
        category: "anger"
    },
    {
        text: "Anger is never without a reason, but seldom with a good one.",
        author: "Benjamin Franklin",
        category: "anger"
    },
    {
        text: "Do not let your anger lead to hatred, as you will hurt yourself more than you would the other.",
        author: "Unknown",
        category: "anger"
    },
    {
        text: "No one can make you feel inferior without your consent.",
        author: "Eleanor Roosevelt",
        category: "anger"
    },
    {
        text: "In times of great stress or adversity, it's always best to keep busy, to plow your anger and your energy into something positive.",
        author: "Lee Iacocca",
        category: "anger"
    },
    {
        text: "The best fighter is never angry.",
        author: "Lao Tzu",
        category: "anger"
    },
    {
        text: "You will not be punished for your anger; you will be punished by your anger.",
        author: "Unknown",
        category: "anger"
    },
    {
        text: "The wound is the place where the Light enters you.",
        author: "Rumi",
        category: "sad"
    },
    {
        text: "Although the world is full of suffering, it is also full of the overcoming of it.",
        author: "Helen Keller",
        category: "sad"
    },
    {
        text: "You cannot protect yourself from sadness without protecting yourself from happiness.",
        author: "Jonathan Safran Foer",
        category: "sad"
    },
    {
        text: "Even the darkest night will end, and the sun will rise.",
        author: "Victor Hugo",
        category: "sad"
    },
    {
        text: "Pain is inevitable. Suffering is optional.",
        author: "Haruki Murakami",
        category: "sad"
    },
    {
        text: "There is no despair so absolute as that which comes with the first moments of our first great sorrow.",
        author: "George Eliot",
        category: "sad"
    },
    {
        text: "This too shall pass.",
        author: "Persian Proverb",
        category: "sad"
    },
    {
        text: "Sometimes, we need to sit with our sadness before we can truly let it go.",
        author: "Unknown",
        category: "sad"
    }
]

module.exports = quotes

// TODO:
// Need to handle: add, or add with contentWarning...
// {
//     text: "It's not worth the bother of killing oneself, since you always kill yourself too late.",
//     author: "Emil Cioran",
//     category: "depression",
//     contentWarning: true
// },
// {
//     text: "The thought of suicide is a great consolation: by means of it one gets through many a dark night",
//     author: "Friedrich Nietsche",
//     category: "depression",
//     contentWarning: true
// },

// TODO: Add a attributionWarning....
// attibutedWarning: true
// "Attributed to could mean the author never said this. It could also be a paraphrase of ideas, etc."
// Redirect/links to something like Qoute Investigator, LibQuotes, or WikiQuote