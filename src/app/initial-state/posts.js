import Users from './users';
// from https://www.hollywoodreporter.com/lists/ghostbusters-cast-now-bill-murray-dan-aykroyd-more-1215600
// from http://www.mtv.com/news/1916081/103-ghostbusters-quotes/

const 
    peter = Users[0],
    ray = Users[1],
    egon = Users[2],
    winston = Users[3];
    
function upToOneWeekAgo() {
    return upToMillisecondsAgo(604800000);
} 

function upToMillisecondsAgo(n) {
    return new Date(new Date() - random(0, n));
} 

function random(from, to) {
    return Math.floor(Math.random() * (to - from) + from);
}

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum cursus quam, maximus fringilla arcu volutpat eget. Praesent nec tincidunt nulla, eget ornare purus. Sed auctor placerat dapibus. Praesent volutpat leo sed augue commodo, aliquet tincidunt ligula volutpat. Vivamus varius eu tellus sit amet tincidunt. Sed vitae euismod nulla. Quisque mollis aliquet vulputate. Proin gravida fermentum lectus in finibus. Quisque facilisis libero sit amet imperdiet varius. Donec justo ipsum, dignissim eu dapibus malesuada, porta molestie est. Nulla sem augue, interdum a mi a, ullamcorper commodo orci. Duis non iaculis massa. Aliquam auctor velit at auctor varius. Donec sit amet scelerisque nisl, eget efficitur lacus.\nCurabitur molestie elit mi. Nulla lacinia condimentum libero at sodales. Proin porta risus metus, vitae venenatis ex volutpat in. Nam accumsan fermentum augue. Sed et orci vel augue interdum viverra. In in sapien et sapien dignissim tristique. In at aliquam orci, eu efficitur tortor. Aliquam id sagittis nibh, vitae rutrum tortor. Vestibulum feugiat, mi in pellentesque ullamcorper, felis lacus volutpat nisl, in accumsan magna tortor ac diam.\nAliquam et tincidunt mauris. Mauris commodo malesuada neque, quis ultricies justo auctor eget. Morbi sed diam nibh. Vivamus sit amet nisl at libero tristique porttitor eu posuere nunc. Sed egestas diam eget ligula suscipit placerat. Fusce maximus interdum facilisis. Ut faucibus eleifend ligula, a tempus lacus auctor quis. Pellentesque accumsan porttitor erat. Nam rhoncus lacinia nulla sed vehicula. Morbi condimentum mauris a tortor tristique feugiat quis quis tellus."

export default [
    { 
        id: "post_1",
        title: "Drop everything, Venkman. We got one.",
        content: loremIpsum,
        author: ray,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 1,
        history: null
    },
    { 
        id: "post_2",
        title: "Egon, somehow this reminds me of the time you tried to drill a hole in your head. Do you remember that?",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 2,
        history: null
    },
    { 
        id: "post_3",
        title: "Have you or any member of your family ever been diagnosed schizophrenic or mentally incompetent?",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 3,
        history: null
    },
    { 
        id: "post_5",
        title: "I'll call that a big yes.",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 5,
        history: null
    },
    { 
        id: "post_6",
        title: "Spengler, are you serious about actually catching a ghost?",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 6,
        history: null
    },
    { 
        id: "post_7",
        title: "I'm always serious.",
        content: loremIpsum,
        author: egon,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 7,
        history: null
    },
    { 
        id: "post_10",
        title: "I collect spores, molds, and fungus.",
        content: loremIpsum,
        author: egon,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 10,
        history: null
    },
    { 
        id: "post_12",
        title: "I'm gonna go for broke. I am madly in love with you.",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 12,
        history: null
    },
    { 
        id: "post_16",
        title: "He slimed me. I feel so funky.",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 16,
        history: null
    },
    { 
        id: "post_17",
        title: "Spengler! I'm with Venkman! He got slimed!",
        content: loremIpsum,
        author: ray,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 17,
        history: null
    },
    { 
        id: "post_18",
        title: "That's great, Ray! Save some for me!",
        content: loremIpsum,
        author: egon,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 18,
        history: null
    },
    { 
        id: "post_19",
        title: "Don't. Cross. The streams. It would be bad.",
        content: loremIpsum,
        author: egon,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 19,
        history: null
    },
    { 
        id: "post_20",
        title: "Nice shooting, Tex!",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 20,
        history: null
    },
    { 
        id: "post_21",
        title: "We came! We saw! We kicked its ass!",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 21,
        history: null
    },
    { 
        id: "post_22",
        title: "No job is too big, no fee is too big.",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 22,
        history: null
    },
    { 
        id: "post_26",
        title: "Beautiful. You're hired.",
        content: loremIpsum,
        author: ray,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 26,
        history: null
    },
    { 
        id: "post_29",
        title: "No.",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 29,
        history: null
    },
    { 
        id: "post_31",
        title: "Because you did not use the magic word.",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 31,
        history: null
    },
    { 
        id: "post_33",
        title: "…Please!",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 33,
        history: null
    },
    { 
        id: "post_42",
        title: "What a lovely singing voice you must have.",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 42,
        history: null
    },
    { 
        id: "post_43",
        title: "Please come down.",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 43,
        history: null
    },
    { 
        id: "post_49",
        title: "I don't think he's human.",
        content: loremIpsum,
        author: egon,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 49,
        history: null
    },
    { 
        id: "post_52",
        title: "Yes, have some.",
        content: loremIpsum,
        author: egon,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 52,
        history: null
    },
    { 
        id: "post_55",
        title: "She says she's the Gatekeeper. Does that make sense to you?",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 55,
        history: null
    },
    { 
        id: "post_57",
        title: "Oh, we have to get these two together.",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 57,
        history: null
    },
    { 
        id: "post_58",
        title: "Bad news, honey. I have to go to work.",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 58,
        history: null
    },
    { 
        id: "post_59",
        title: "Don't. Shut it. Off. I'm warning you.",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 59,
        history: null
    },
    { 
        id: "post_60",
        title: "My friend, don't be a jerk.",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 60,
        history: null
    },
    { 
        id: "post_64",
        title: "YOUR MOTHER!!!",
        content: loremIpsum,
        author: egon,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 64,
        history: null
    },
    { 
        id: "post_65",
        title: "Ray… pretend for a moment that I don't know anything about metallurgy, engineering, or physics — and just tell me what the hell is going on.",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 65,
        history: null
    },
    { 
        id: "post_66",
        title: "You never studied.",
        content: loremIpsum,
        author: ray,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 66,
        history: null
    },
    { 
        id: "post_67",
        title: "Your girlfriend lives in the corner penthouse of Spook Central.",
        content: loremIpsum,
        author: ray,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 67,
        history: null
    },
    { 
        id: "post_68",
        title: "She's not my girlfriend. I find her interesting because she's a client — and because she sleeps above her covers. FOUR. FEET above her covers! She barks! She drools! She claws!",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 68,
        history: null
    },
    { 
        id: "post_69",
        title: "Are we actually gonna go before a federal judge and tell him that some moldy Babylonian god is going to drop in on Central Park West, and start tearing up the city?",
        content: loremIpsum,
        author: winston,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 69,
        history: null
    },
    { 
        id: "post_70",
        title: "Sumerian — not Babylonian.",
        content: loremIpsum,
        author: egon,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 70,
        history: null
    },
    { 
        id: "post_71",
        title: "Yeah. Big difference.",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 71,
        history: null
    },
    { 
        id: "post_74",
        title: "Everything was fine with our system until the power grid was shut off by dickless here.",
        content: loremIpsum,
        author: ray,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 74,
        history: null
    },
    { 
        id: "post_77",
        title: "Yes, it's true.",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 77,
        history: null
    },
    { 
        id: "post_79",
        title: "I'm Winston Zeddemore. I've only been with the company for a couple of weeks, but these things are real. Since I joined these men, I've seen sh-- that'll turn you white.",
        content: loremIpsum,
        author: winston,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 79,
        history: null
    },
    { 
        id: "post_80",
        title: "Fire and brimstone coming down from the skies! Rivers and seas boiling!",
        content: loremIpsum,
        author: ray,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 80,
        history: null
    },
    { 
        id: "post_81",
        title: "Forty years of darkness! Earthquakes! Volcanoes!",
        content: loremIpsum,
        author: egon,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 81,
        history: null
    },
    { 
        id: "post_82",
        title: "The dead rising from the grave!",
        content: loremIpsum,
        author: winston,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 82,
        history: null
    },
    { 
        id: "post_83",
        title: "Human sacrifice! Dogs and cats, living together! Mass hysteria!",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 83,
        history: null
    },
    { 
        id: "post_84",
        title: "When we get to 20, tell me, because I'm gonna throw up.",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 84,
        history: null
    },
    { 
        id: "post_85",
        title: "Okay. So she's a dog.",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 85,
        history: null
    },
    { 
        id: "post_87",
        title: "...No?",
        content: loremIpsum,
        author: ray,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 87,
        history: null
    },
    { 
        id: "post_89",
        title: "Ray, when someone asks you if you're a God, you say yes!",
        content: loremIpsum,
        author: winston,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 89,
        history: null
    },
    { 
        id: "post_90",
        title: "Alright! This chick is toast!",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 90,
        history: null
    },
    { 
        id: "post_91",
        title: "Let's show this prehistoric bitch how we do things downtown.",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 91,
        history: null
    },
    { 
        id: "post_93",
        title: "I couldn't help it... it just popped in there!",
        content: loremIpsum,
        author: ray,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 93,
        history: null
    },
    { 
        id: "post_94",
        title: "...it's the Stay Puft Marshmallow Man.",
        content: loremIpsum,
        author: ray,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 94,
        history: null
    },
    { 
        id: "post_95",
        title: "There's something you don't see every day.",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 95,
        history: null
    },
    { 
        id: "post_95",
        title: "I tried to think of the most harmless thing. Something I loved from my childhood. Something that could never ever possibly destroy us. Mr. Stay Puft!",
        content: loremIpsum,
        author: ray,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 95,
        history: null
    },
    { 
        id: "post_96",
        title: "We've been going about this all wrong. This Mr. Stay Puft's okay! He's a sailor, he's in New York... if we get this guy laid, we won't have any trouble!",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 96,
        history: null
    },
    { 
        id: "post_97",
        title: "I have a radical idea. We cross the streams.",
        content: loremIpsum,
        author: egon,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 97,
        history: null
    },
    { 
        id: "post_98",
        title: "See you on the other side, Ray.",
        content: loremIpsum,
        author: peter,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 98,
        history: null
    },
    { 
        id: "post_100",
        title: "We're the Ghostbusters.",
        content: loremIpsum,
        author: ray,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 100,
        history: null
    },
    { 
        id: "post_102",
        title: "We'd like to get a sample of your brain tissue.",
        content: loremIpsum,
        author: egon,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 102,
        history: null
    },
    { 
        id: "post_103",
        title: "I love this town!",
        content: loremIpsum,
        author: winston,
        date: upToOneWeekAgo(),
        childComments: [],
        likes: 103,
        history: null
    }
]