import React from 'react'
import Header from './header'
import Card from './card'


const App = () => {
  // Array of sentences
  const sentences = [
    "Things I love about you bebe",
    "Your eyes",
    "Your hair (shining hair)",
    "Your name (eyire)",
    "Your personality",
    "Your laugh",
    "Your smile",
    "Your voice (funny cuz people were like is that a guy when we started dating)",
    "Your hands (they are bigger than mine funny enough)",
    "Your embrace (my peace)",
    "Your joy",
    "Your tears",
    "Your face",
    "Your kindness",
    "Your affection",
    "Your friendship",
    "Your beauty (so fucking pretty)",
    "Your love",
    "Your hugs",
    "Your messages (the joy with which I love seeing the notification that you sent me a text)",
    "Your style (you don’t have one but okay)",
    "Your forgiveness (boyyyyy)",
    "Your perfection (you ain't perfect but that’s perfection in itself)",
    "The time we spend together",
    "The memories we made",
    "The sound of you",
    "Watching the videos you send me",
    "The jokes we make together",
    "How you make me happy within 10 milliseconds",
    "The way you can love someone like me",
    "How I can talk to you and still not get bored",
    "The way we met and are so close now",
    "The thought of you",
    "The smell of you",
    "The selfishness",
    "Your strength (you are very strong)",
    "Your bravery",
    "Your intelligence",
    "Your passion (side eye)",
    "Your creativity",
    "Your patience",
    "Your respectability",
    "Your positivity",
    "Your trust",
    "I believe everything you say to me",
    "I can be myself around you",
    "I can listen to you without getting annoyed",
    "My dreams about you",
    "Your trustworthiness",
    "You always light up my day",
    "You are constantly on my mind",
    "You are very independent",
    "Your dependence on me",
    "You're incredible",
    "The fact you never let me down",
    "I trust you with all my secrets",
    "Your craziness",
    "Well, you're ABSOLUTELY GORGEOUS",
    "You can cheer me up",
    "You are adorable",
    "Your humour (I give up on your sense of humour)",
    "You’re literally the definition of perfection",
    "I feel like I can vent to yoou without feeing bad",
    "The fact that you never judge (I’m sorry it took me a long time to open up to you.)",
    "Your support",
    "Your honesty",
    "You bring a huge smile to my face whenever I talk to you",
    "You make me feel like im actually important",
    "You never give up too easily (cant say that about your books tho ‘side eye’)",
    "The fact that you are mine (funny number wont you say ‘side eye’)",
    "Your legs",
    "Your stomach",
    "You love the real me",
    "You care for someone like me",
    "Always with me in my bad days",
    "I can make you horny with just my voice (hehehe)"
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Header />
      <Card sentences={sentences} />
    </div>
  );
};

export default App;
