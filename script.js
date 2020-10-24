    // Javascript content

    const quoteList = [
      {
        quote: "That might have been a small step for Neil, but it was a big one for me.",
        author: "Pete Conrad, Apollo 12 Commander",
        image: "https://www.hq.nasa.gov/alsj/a12/a12det7318sm.jpg"
      },
      {
        quote: "We choose to go to the Moon and do those other things, not because they are easy, but because they are hard.",
        author: "John F. Kennedy",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Jfk2.jpg/800px-Jfk2.jpg"
      },
      {
        quote: "The best part is no part.",
        author: "Elon Musk",
        image: "http://static4.businessinsider.com/image/51def664ecad04384c00000a/elon-musk-the-hyperloop-design-is-coming-august-12.jpg"
      },
      {
        author: "Abraham Lincoln",
        quote: "Things may come to those who wait, but only the things left by those who hustle.",
        image: "http://upload.wikimedia.org/wikipedia/commons/1/1b/Abraham_Lincoln_November_1863.jpg"
      },
      {
        author: "Adam Smith",
        quote: "The great secret of education is to direct vanity to proper objects.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/43/Adam_Smith_The_Muir_portrait.jpg"
      },
      {
        author: "Alain de Botton",
        quote: "It’s not that travel just broadens your mind, rather it enables you to see how narrow your oppressor’s minds are.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Alain_de_Botton.jpg/330px-Alain_de_Botton.jpg"
      },
      {
        author: "Alan Watts",
        quote: "A person who never made a mistake never tried anything new.",
        image: "https://upload.wikimedia.org/wikipedia/en/9/97/Alan_Watts.png"
      },
      {
        author: "Alan Watts",
        quote: "Better to have a short life that is full of what you like doing than a long life spent in a miserable way.",
        image: "https://upload.wikimedia.org/wikipedia/en/9/97/Alan_Watts.png"
      },
      {
        author: "Alan Watts",
        quote: "Life is a musical thing and you are supposed to dance and sign while it's being played.",
        image: "https://upload.wikimedia.org/wikipedia/en/9/97/Alan_Watts.png"
      },
      {
        author: "Alan Watts",
        quote: "Omnipotence is not knowing how everything is done; it's just doing it.",
        image: "https://upload.wikimedia.org/wikipedia/en/9/97/Alan_Watts.png"
      },
      {
        author: "Albert Camus",
        quote: "It is not humiliating to be unhappy. Physical suffering is sometimes humiliating, but the suffering of being cannot be, it is life.",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Albert_Camus,_gagnant_de_prix_Nobel,_portrait_en_buste,_pos%C3%A9_au_bureau,_faisant_face_%C3%A0_gauche,_cigarette_de_tabagisme.jpg"
      },
      {
        author: "Albert Einstein",
        quote: "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
        image: "http://upload.wikimedia.org/wikipedia/commons/5/50/Albert_Einstein_%28Nobel%29.png"
      },
      {
        author: "Albert Einstein",
        quote: "The secret to creativity is knowing how to hide your sources.",
        image: "http://upload.wikimedia.org/wikipedia/commons/5/50/Albert_Einstein_%28Nobel%29.png"
      },
      {
        author: "Albert Einstein",
        quote: "The true sign of intelligence is not knowledge but imagination.",
        image: "http://upload.wikimedia.org/wikipedia/commons/5/50/Albert_Einstein_%28Nobel%29.png"
      },
      {
        author: "Albert Einstein",
        quote: "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.",
        image: "http://upload.wikimedia.org/wikipedia/commons/5/50/Albert_Einstein_%28Nobel%29.png"
      },
      {
        author: "Albert Einstein",
        quote: "When facts don't fit the theory, change the facts.",
        image: "http://upload.wikimedia.org/wikipedia/commons/5/50/Albert_Einstein_%28Nobel%29.png"
      },
      {
        author: "Amar Bose",
        quote: "Creativity never comes under emotional stress or tension. The real creativity comes when the mind finally relaxes and is quiet and then can focus.",
        image: "https://upload.wikimedia.org/wikipedia/en/f/f9/Amar_Bose_india_times.jpg"
      },
      {
        author: "Amar Bose",
        quote: "If you think something is impossible, don't disturb the person doing it.",
        image: "https://upload.wikimedia.org/wikipedia/en/f/f9/Amar_Bose_india_times.jpg"
      },
      {
        author: "Amar Bose",
        quote: "What is bad is not that men live and die, but what dies within a man while he lives. Perhaps the most important thing that is within a man while he lives is his imagination. The thing that keeps you going and keeps you creative is never to loose your imagination. Always dream of things that are better, and think about ways to reach them",
        image: "https://upload.wikimedia.org/wikipedia/en/f/f9/Amar_Bose_india_times.jpg"
      },
      {
        author: "Antoine de Saint-Exupery",
        quote: "If you want to build a ship, don't drum up people to collect wood and don't assign them tasks and work, but rather teach them to long for the endless immensity of the sea.",
        image: "http://www.canalacademie.com/IMG/jpg/saint_exupery.jpg"
      },
      {
        author: "Antoine de Saint-Exupery",
        quote: "To love is not to look at one another: it is to look, together, in the same direction.",
        "quote_original": "Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la même direction.",
        image: "http://www.canalacademie.com/IMG/jpg/saint_exupery.jpg"
      },
      {
        author: "Antoine de Saint-Exupery",
        quote: "When you give yourself, you receive more than you give.",
        "quote_original": "Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la même direction.",
        image: "http://www.canalacademie.com/IMG/jpg/saint_exupery.jpg"
      },
      {
        author: "Bertrand Russell",
        quote: "Do not fear to be eccentric in opinion, for every opinion now accepted was once eccentric.",
        image: "http://www.brainpickings.org/wp-content/uploads/2012/04/bertrandrussell.png"
      },
      {
        author: "Bran Ferren",
        quote: "Visionaries not only believe that the impossible can be done, but that it must be done.",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/65/Etech05_Bran1.jpg"
      },
      {
        author: "Brene Brown",
        quote: "People who have a strong sense of love and belonging believe they're worthy of it.",
        image: "http://media.salon.com/2012/09/bene_brown.jpg"
      },
      {
        author: "Brigid Schulte",
        quote: "Every human being has some flavor of ‘not enough.’ You can either be stopped by it, or simply notice it, like the weather.",
        image: "http://media.npr.org/assets/img/2014/03/10/schulte_-c-peter-c.-heimberg-1db7ba4211403e09f4e3e8fc0209252927973f0d-s6-c30.jpeg"
      },
      {
        author: "Cennydd Bowles",
        quote: "Anyone can complain about the world, but only a good few can fix it.",
        image: "https://static1.squarespace.com/static/53cc84e7e4b0bcaba3c8b1ab/t/5a4668470d9297ab906e6f46/1514563655644/Cennydd+2017+small.jpg?format=1500w"
        
      },
      {
        author: "Christian Vuerings",
        quote: "So many people rush through life, let's take our time living it.",
        image: "https://2.gravatar.com/avatar/7ef7ea08be8b62f753c64405f23aa520?d=https%3A%2F%2Fidenticons.github.com%2F34e40d0730ec7223681d8359f19f4b85.png&s=400"
      },
      {
        author: "Dr. Seuss",
        quote: "The more that you read, the more things you will know. The more that you learn, the more places you’ll go.",
        image: "http://vignette1.wikia.nocookie.net/epicrapbattlesofhistory/images/4/48/Seuss.jpg/revision/latest"
      },
      {
        author: "Elon Musk",
        quote: "Dichotomy between sense of wonder and what is wrong.",
        image: "http://static4.businessinsider.com/image/51def664ecad04384c00000a/elon-musk-the-hyperloop-design-is-coming-august-12.jpg"
      },
      {
        author: "Elon Musk",
        quote: "If something is important enough, you should try. Even if the probable outcome is failure.",
        image: "http://static4.businessinsider.com/image/51def664ecad04384c00000a/elon-musk-the-hyperloop-design-is-coming-august-12.jpg"
      },
      {
        author: "Elon Musk",
        quote: "There's skepticism about anything new. That's normal.",
        image: "http://static4.businessinsider.com/image/51def664ecad04384c00000a/elon-musk-the-hyperloop-design-is-coming-august-12.jpg"
      },
      {
        author: "Epictetus",
        quote: "There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.",
        image: "http://www.justcharlie.com/wp-content/uploads/2014/10/epictetus-300x300.jpg"
      },
      {
        author: "Jean-Jacques Rousseau",
        quote: "There are 2 ways to make a man richer, give him more money or curb his desires.",
        image: "http://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Jean-Jacques_Rousseau_%28painted_portrait%29.jpg/430px-Jean-Jacques_Rousseau_%28painted_portrait%29.jpg"
      },
      {
        author: "Lao Tse",
        quote: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
        image: "https://iamfearlesssoul.com/wp-content/uploads/2018/04/LAO-TZU-COVER-759x500.jpg"
      },
      {
        author: "Lao Tse",
        quote: "A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.",
        image: "https://iamfearlesssoul.com/wp-content/uploads/2018/04/LAO-TZU-COVER-759x500.jpg"
      },
      {
        author: "Lao Tse",
        quote: "Silence is a source of great strength.",
        image: "https://iamfearlesssoul.com/wp-content/uploads/2018/04/LAO-TZU-COVER-759x500.jpg"
      },
      {
        author: "Lao Tse",
        quote: "To attain knowledge, add things every day. To attain wisdom, remove things every day.",
        image: "https://iamfearlesssoul.com/wp-content/uploads/2018/04/LAO-TZU-COVER-759x500.jpg"
      },
      {
        author: "Leo Babauta",
        quote: "Your attention is your most valuable possession. Give it as a gift to the people you love most, not a bunch of clowns on the Internet. Give it to the work that matters most, not distractions.",
        image: "https://pbs.twimg.com/profile_images/514865734816509952/k7puRwOr.jpeg"
      },
      {
        author: "Linus Pauling",
        quote: "The best way to have a good idea is to have lots of ideas.",
        image: "http://f.cl.ly/items/0G1o1C012b263A0m0T31/Image%202013.09.20%2012%3A41%3A24.jpeg"
      },
      {
        author: "Muhammad Ali",
        quote: "At home I am a nice guy: but I don't want the world to know. Humble people, I've found, don't get very far.",
        image: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQ3NjYxMzk4NjkwNzY4NDkz/muhammad_ali_photo_by_stanley_weston_archive_photos_getty_482857506.jpg"
      },
      {
        author: "Muhammad Ali",
        quote: "He who is not courageous enough to take risks will accomplish nothing in life.",
        image: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQ3NjYxMzk4NjkwNzY4NDkz/muhammad_ali_photo_by_stanley_weston_archive_photos_getty_482857506.jpg"
      },
      {
        author: "Muhammad Ali",
        quote: "I am the greatest, I said that even before I knew I was.",
        image: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQ3NjYxMzk4NjkwNzY4NDkz/muhammad_ali_photo_by_stanley_weston_archive_photos_getty_482857506.jpg"
      },
      {
        author: "Muhammad Ali",
        quote: "It isn't the mountains ahead to climb that wear you out; it's the pebble in your shoe.",
        image: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQ3NjYxMzk4NjkwNzY4NDkz/muhammad_ali_photo_by_stanley_weston_archive_photos_getty_482857506.jpg"
      },
      {
        author: "Muhammad Ali",
        quote: "The man who has no imagination has no wings.",
        image: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQ3NjYxMzk4NjkwNzY4NDkz/muhammad_ali_photo_by_stanley_weston_archive_photos_getty_482857506.jpg"
      },
      {
        author: "Frederick Douglass",
        quote: "If there is no struggle, there is no progress.",
        image: "http://www-tc.pbs.org/wgbh/aia/part4/images/4fred16m.jpg"
      },
      {
        author: "Howard H. Stevenson",
        quote: "Success is a state of being. Because as soon as you say you're successful, you probably start to fail.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Howard_Stevenson_120607-0264.jpg/330px-Howard_Stevenson_120607-0264.jpg"
      
      },
      {
        author: "George Bernard Shaw",
        quote: "The reasonable man adapts himself to the world; the unreasonable one persists in trying to adapt the world to himself. Therefore, all progress depends on the unreasonable man.",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/George_Bernard_Shaw_1934-12-06.jpg"
      },
           {
        author: "Henry Ford",
        quote: "Coming together is a beginning; keeping together is progress; staying together is success.",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Henry_ford_1919.jpg"
      },
      {
        author: "John Dewey",
        quote: "An ounce of experience is better than a ton of theory simply.",
        image: "http://dewey.pragmatism.org/dewey.gif"
      },
      {
        author: "Joseph Brodsky",
        quote: "Of all the parts of your body, be most vigilant over your index finger, for it is blame-thirsty. A pointed finger is a victim’s logo... No matter how abominable your condition may be, try not to blame anything or anybody: history, the state, superiors, race, parents, the phase of the moon, childhood, toilet training, etc. The moment that you place blame somewhere, you undermine your resolve to change anything.",
        image: "http://static.guim.co.uk/sys-images/Observer/Pix/pictures/2012/3/1/1330602483433/Joseph-Brodsky-portrait-007.jpg"
      },
      {
        author: "Kyle Maynard",
        quote: "The most frustrated I got the whole day would be when I looked up and saw how far I had to go, instead of looking back and seeing how far I have come. I think I do that a lot in life in general. Just one step at a time.",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/06/Kyle_Maynard_on_Mountain.jpg"
        
      },
      {
        author: "Laozi",
        quote: "A journey of a thousand miles begins with a single step.",
        image: "https://iamfearlesssoul.com/wp-content/uploads/2018/04/LAO-TZU-COVER-759x500.jpg"
      },
      {
        author: "Mahatma Gandhi",
        quote: "A man is but the product of his thoughts what he thinks, he becomes.",
        image: "https://miro.medium.com/max/1200/1*bRcZXP6T524lrvx5M0Cp7g.jpeg"
      },
      {
        author: "Mahatma Gandhi",
        quote: "An ounce of practice is worth more than tons of preaching.",
        image: "https://miro.medium.com/max/1200/1*bRcZXP6T524lrvx5M0Cp7g.jpeg"
      },
      {
        author: "Mahatma Gandhi",
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        image: "https://miro.medium.com/max/1200/1*bRcZXP6T524lrvx5M0Cp7g.jpeg"
      },
      {
        author: "Mahatma Gandhi",
        quote: "You must be the change you wish to see in the world.",
        image: "https://miro.medium.com/max/1200/1*bRcZXP6T524lrvx5M0Cp7g.jpeg"
      },
      {
        author: "Mahatma Gandhi",
        quote: "You must be the change you wish to see in the world.",
        image: "https://miro.medium.com/max/1200/1*bRcZXP6T524lrvx5M0Cp7g.jpeg"
      },
      {
        author: "Mark Twain",
        quote: "I have never let my schooling interfere with my education.",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Mark_Twain_by_AF_Bradley.jpg"
      },
      {
        author: "Marcus Aurelius",
        quote: "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.",
        image: "https://i.guim.co.uk/img/media/c5a3cb22f4ae7b4a4c7462ef4d2d0c71cacb3c65/0_232_2789_1673/master/2789.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d8b0aa8df7f1ebae670b860fde1e622e"
      },
      {
        author: "Margaret Mead",
        quote: "Never believe that a few caring people can't change the world. For, indeed, that's all who ever have.",
        image: "http://upload.wikimedia.org/wikipedia/commons/9/99/Margaret_Mead_(1901-1978).jpg"
      },
      {
        author: "Mark Twain",
        quote: "Keep away from those who try to belittle your ambitions. Small people always do that, but the really great make you believe that you too can become great.",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Mark_Twain_by_AF_Bradley.jpg"
      },
      {
        author: "Mark Twain",
        quote: "Life is short, break the rules.",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Mark_Twain_by_AF_Bradley.jpg"
      },
      {
        author: "Oscar Wilde",
        quote: "A gentleman is one who never hurts anyone's feelings unintentionally.",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Oscar_Wilde_3g07095u-adjust.jpg"
      },
      {
        author: "Oscar Wilde",
        quote: "A man who does not think for himself does not think at all.",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Oscar_Wilde_3g07095u-adjust.jpg"
      },
      {
        author: "Oscar Wilde",
        quote: "Always forgive your enemies - nothing annoys them so much.",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Oscar_Wilde_3g07095u-adjust.jpg"
      },
      {
        author: "Oscar Wilde",
        quote: "America is the only country that went from barbarism to decadence without civilization in between.",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Oscar_Wilde_3g07095u-adjust.jpg"
      },
      {
        author: "Oscar Wilde",
        quote: "Between men and women there is no friendship possible. There is passion, enmity, worship, love, but no friendship.",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Oscar_Wilde_3g07095u-adjust.jpg"
      },
      {
        author: "Oscar Wilde",
        quote: "Education is an admirable thing, but it is well to remember from time to time that nothing that is worth knowing can be taught.",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Oscar_Wilde_3g07095u-adjust.jpg"
      },
      {
        author: "Oscar Wilde",
        quote: "Experience is simply the name we give our mistakes.",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Oscar_Wilde_3g07095u-adjust.jpg"
      },
      {
        author: "Oscar Wilde",
        quote: "If you want to tell people the truth, make them laugh, otherwise they’ll kill you.",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Oscar_Wilde_3g07095u-adjust.jpg"
      },
      {
        author: "Oscar Wilde",
        quote: "There are only two tragedies in life: one is not getting what one wants, and the other is getting it.",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Oscar_Wilde_3g07095u-adjust.jpg"
      },
      {
        author: "Oscar Wilde",
        quote: "Work is the curse of the drinking classes.",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Oscar_Wilde_3g07095u-adjust.jpg"
      },
      {
        author: "Paul Buchheit",
        quote: "If you’re far enough ahead that people can’t figure out if you’re joking, you know you’ve innovated.",
        image: "http://static0.therichestimages.com/wp-content/uploads/Paul_Buchheit-Gmail-2007-03-24-17-49-04.jpg"
        
      },
      {
        author: "Paul Buchheit",
        quote: "The first thing I do on day one is build something useful, then just keep improving it.",
        image: "http://static0.therichestimages.com/wp-content/uploads/Paul_Buchheit-Gmail-2007-03-24-17-49-04.jpg"
      },
      {
        author: "Paul F. Davis",
        quote: "Go where you’re celebrated, not where you’re tolerated.",
        image: "https://www.prlog.org/10026432-paul-davis-prolific-poet-author-of-10-books.jpg"
      },
      {
        author: "Richard Branson",
        quote: "Maintain your spirit of curiosity, keep questioning things, and you’ll find new ways to innovate.",
        image: "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNDYyNDEwMjU0/sir-richard-branson-9224520-1-402.jpg"
      },
      {
        author: "Samuel Goldwyn",
        quote: "If I look confused it is because I am thinking.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Samuel_Goldwyn_-_Jul_1919_EH.jpg/220px-Samuel_Goldwyn_-_Jul_1919_EH.jpg"
      },
      {
        author: "Samuel Goldwyn",
        quote: "The harder I work, the luckier I get.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Samuel_Goldwyn_-_Jul_1919_EH.jpg/220px-Samuel_Goldwyn_-_Jul_1919_EH.jpg"
      },
      {
        author: "Samuel Goldwyn",
        quote: "When someone does a good job, applaud; it makes two people happy.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Samuel_Goldwyn_-_Jul_1919_EH.jpg/220px-Samuel_Goldwyn_-_Jul_1919_EH.jpg"
      },
      {
        author: "Seth Godin",
        quote: "Defenseless is the best choice for those seeking to grow.",
        image: "http://www.therisetothetop.com/wp-content/uploads/2011/11/SethGodin.jpg"
      },
      {
        author: "Seth Godin",
        quote: "Ship often. Ship lousy stuff, but ship. Ship constantly.",
        image: "http://www.therisetothetop.com/wp-content/uploads/2011/11/SethGodin.jpg"
      },
      {
        author: "Steve Jobs",
        quote: "Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. That's because they were able to connect experiences they've had and synthesize new things.",
        image: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5b8576db31358e0429c734e3%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D211%26cropX2%3D2381%26cropY1%3D900%26cropY2%3D3072"
      },
      {
        author: "Steve Jobs",
        quote: "If you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long. Just figure out what’s next.",
        image: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5b8576db31358e0429c734e3%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D211%26cropX2%3D2381%26cropY1%3D900%26cropY2%3D3072"
      },
      {
        author: "Ralph Waldo Emerson",
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        image: "https://www.biography.com/.image/t_share/MTIwNjA4NjMzODA1NzY4MjA0/ralph-waldo-emerson-9287153-1-402.jpg"
      },
      {
        author: "Ralph Waldo Emerson",
        quote: "For every minute you remain angry, you give up sixty seconds of peace of mind.",
        image: "https://www.biography.com/.image/t_share/MTIwNjA4NjMzODA1NzY4MjA0/ralph-waldo-emerson-9287153-1-402.jpg"
      },
      {
        author: "Ralph Waldo Emerson",
        quote: "Nothing great was ever achieved without enthusiasm.",
        image: "https://www.biography.com/.image/t_share/MTIwNjA4NjMzODA1NzY4MjA0/ralph-waldo-emerson-9287153-1-402.jpg"
      },
      {
        author: "Reid Hoffman",
        quote: "If you’re not a embarrassed by the first version of your product, you launched to late.",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/77/Reid_Hoffman_in_SF_2011.jpg"
      },
      {
        author: "Richard Branson",
        quote: "You earn trust by providing innovative, quality products and keeping your word.",
        image: "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNDYyNDEwMjU0/sir-richard-branson-9224520-1-402.jpg"
      },
      {
        author: "Richard Williams",
        quote: "Nothing comes to a sleeper but a dream.",
        image: "https://images.complex.com/complex/images/c_fill,f_auto,g_center,w_1200/fl_lossy,pg_1/aiybe7vaivmjwnefqjvq/award-winning-animator-richard-williams-dead-86"
      },
      {
        author: "Seneca The Younger",
        quote: "While we teach, we learn.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Duble_herma_of_Socrates_and_Seneca_Antikensammlung_Berlin_07.jpg"
      },
      {
        author: "Steve Jobs",
        quote: "Being the richest man in the cemetery doesn’t matter to me … Going to bed at night saying we’ve done something wonderful… that’s what matters to me.",
        image: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5b8576db31358e0429c734e3%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D211%26cropX2%3D2381%26cropY1%3D900%26cropY2%3D3072"
      },
      {
        author: "Sophocles",
        quote: "One must learn by doing the thing; for though you think you know it, you have no certainty until you try.",
        image: "http://ingridsnotes.files.wordpress.com/2011/04/sophocles.jpg"
      },
      {
        author: "Søren Kierkegaard",
        quote: "Truth always rests with the minority because the minority is generally formed by those who really have an opinion, while the strength of a majority is illusory, formed by the gangs who have no opinion.",
        image: "http://www.brainpickings.org/wp-content/uploads/2013/06/kierkegaard_stamp.jpg"
      },
      {
        author: "Tony Schwartz",
        quote: "The enemy of sustainable productivity is not stress. Rather, it’s the absence of intermittent rest and renewal.",
        image: "https://pbs.twimg.com/profile_images/999026713374806018/g4A6-9gJ.jpg"
      },
      {
        author: "Tiffany Han",
        quote: "I keep going anyway. I pause and take the doubts in. I cry. I curse. I think it's unfair and that I can't continue. But then I do. I get up, brush my shoulders off, and carry on.",
        "url": "http://www.tiffanyhan.com/blog/2013/3/15/fridays-confession-i-have-doubts.html",
        image: "http://4.bp.blogspot.com/-0rgyXDDyFDw/UL0tueomdvI/AAAAAAAACuw/cHfNaXPNq_Q/s1600/tiffany_han.jpg"
      },
      {
        author: "Victor Hugo",
        quote: "A man is not idle because he is absorbed in thought. There is a visible labor and there is an invisible labor.",
        image: "http://upload.wikimedia.org/wikipedia/commons/8/88/Victor_Hugo_by_%C3%89tienne_Carjat_1876.jpg"
      },
      {
        author: "Victor Hugo",
        quote: "He who opens a school door, closes a prison.",
        image: "http://upload.wikimedia.org/wikipedia/commons/8/88/Victor_Hugo_by_%C3%89tienne_Carjat_1876.jpg"
      },
      {
        author: "Victor Hugo",
        quote: "Initiative is doing the right thing without being told.",
        image: "http://upload.wikimedia.org/wikipedia/commons/8/88/Victor_Hugo_by_%C3%89tienne_Carjat_1876.jpg"
      },
      {
        author: "Victor Hugo",
        quote: "There is nothing more powerful than an idea whose time has come.",
        image: "http://upload.wikimedia.org/wikipedia/commons/8/88/Victor_Hugo_by_%C3%89tienne_Carjat_1876.jpg"
      },
      {
        author: "Victor Hugo",
        quote: "When a woman is talking to you, listen to what she says with her eyes.",
        image: "http://upload.wikimedia.org/wikipedia/commons/8/88/Victor_Hugo_by_%C3%89tienne_Carjat_1876.jpg"
      },
      {
        author: "Vin Diesel",
        quote: "Being male is a matter of birth. Being a man is a matter of age. But being a Gentleman is a matter of choice.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Vin_Diesel_by_Gage_Skidmore_2.jpg/800px-Vin_Diesel_by_Gage_Skidmore_2.jpg"
      },
      {
        author: "William Butler Yeats - adapted by Christian Vuerings",
        quote: "Education shouldn't fill a bucket but light a fire.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/William_Butler_Yeats_by_George_Charles_Beresford.jpg/220px-William_Butler_Yeats_by_George_Charles_Beresford.jpg"
      },
      {
        author: "William Butler Yeats",
        quote: "There are no strangers here; Only friends you haven't yet met.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/William_Butler_Yeats_by_George_Charles_Beresford.jpg/220px-William_Butler_Yeats_by_George_Charles_Beresford.jpg"
      }
    ]

let imageTest = document.getElementById("author-image");

const pageLoad = () => {
  generateQuote();
}

window.onload = pageLoad;

const generateQuote = () => {
  let quoteLength = quoteList.length;
  let randomIndex = Math.floor(Math.random() * quoteLength);
  let randomQuote = quoteList[randomIndex];
  
  // Create link to share to Twitter
  let tweetLink = "https://twitter.com/intent/tweet?&text=%23quotes "
  
  let encodedQuote = randomQuote.quote.replace(/ /g, "%20");
  
  let encodedAuthor = randomQuote.author.replace(/ /g, "%20");
  
  // Add quote as string to link
  tweetLink += '"' + encodedQuote + '" - ';
  
  // Add author as string to link
  tweetLink += encodedAuthor;
  
  document.getElementById("tweet-quote").href = tweetLink;
  
  document.getElementById("text").innerText = randomQuote.quote;
  
  document.getElementById("author").innerText = randomQuote.author;
  
  document.getElementById("author-image").src = randomQuote.image;

}


