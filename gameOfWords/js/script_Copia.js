// --------------------------------- BACKUP BOOKS ------------------------------------// 
const books = [
    {
        id: 5,
        name: 'O mágico de OZ',
        numberOfPages: 224,
        cover: "imagens/magicodeoz.jpg",
        draw: "imagens/_mgccut2.png",
        pages: {
            1: "THE train from 'Frisco was very late. It should have arrived at Hugson's siding at midnight, but it was already five o'clock and the gray dawn was breaking in the east when the little train slowly rumbled up to the open shed that served for the station-house. As it came to a stop the conductor called out in a loud voice: Hugson's Siding!",
            2: "The boy flicked the big, boney horse with his whip and looked thoughtful. Then he started to say something to his little companion, but before he could speak the buggy began to sway dangerously from side to side and the earth seemed to rise up before them. Next minute there was a roar and a sharp crash, and at her side Dorothy saw the ground open in a wide crack and then come together again.",
            3: "The horrible sensation of falling, the darkness and the terrifying noises, proved more than Dorothy could endure and for a few moments the little girl lost consciousness. Zeb, being a boy, did not faint, but he was badly frightened, and[Pg 22] clung to the buggy seat with a tight grip, expecting every moment would be his last.",
            4: "WHEN Dorothy recovered her senses they were still falling, but not so fast. The top of the buggy caught the air like a parachute or an umbrella filled with wind, and held them back so that they floated downward with a gentle motion that was not so very disagreeable to bear. The worst thing was their terror of reaching the bottom of this great crack in the earth, and the natural fear that sudden death was about to overtake them at any moment.",
        }
    },
    {
        id: 10,
        name: 'Humano, demasiado humano',// eu testei, tinha ficado meio sei lá, mas vou testar
        numberOfPages: 304,
        cover: "imagens/humano.jpg",
        draw: "imagens/nietcut.png",
        pages: {
            1: "From this morbid solitude, from the deserts of such trial years, the way is yet far to that great, overflowing certainty and healthiness which cannot dispense even with sickness as a means and a grappling hook of knowledge; to that matured freedom of the spirit which is, in an equal degree, self mastery and discipline of the heart, and gives access to the path of much and various reflection",
            2: "A step further in recovery: and the free spirit draws near to life again, slowly indeed, almost refractorily, almost distrustfully. There is again warmth and mellowness: feeling and fellow feeling acquire depth, lambent airs stir all about him. He almost feels: it seems as if now for the first time his eyes are open to things near. He is in amaze and sits hushed: for where had he been? These near and immediate things: how changed they seem to him! He looks gratefully back—grateful for his wandering, his self exile and severity, his lookings afar and his bird flights in the cold heights. How fortunate that he has not, like a sensitive, dull home body, remained always 'in the house' and 'at home!' He had been beside himself, beyond a doubt.",
            3: "About this time it becomes at last possible, amid the flash lights of a still unestablished, still precarious health, for the free, the ever freer spirit to begin to read the riddle of that great liberation, a riddle which has hitherto lingered, obscure, well worth questioning, almost impalpable, in his memory. If once he hardly dared to ask 'why so apart? so alone? renouncing all I loved? renouncing respect itself? why this coldness, this suspicion, this hate for one's very virtues?'",
            4: "Accordingly, the free spirit works out for itself an answer to that riddle of its liberation and concludes by generalizing upon its experience in the following fashion: 'What I went through everyone must go through' in whom any problem is germinated and strives to body itself forth. The inner power and inevitability of this problem will assert themselves in due course, as in the case of any unsuspected pregnancy—long before the spirit has seen this problem in its true aspect and learned to call it by its right name. "
        }
    },
    {
        id: 15,
        name: 'Inferno',
        numberOfPages: 461,
        cover: "imagens/inferno-dan.jpg",
        draw: "imagens/nobordante.png",
        pages: {
            1: "The memories materialized slowly, like bubbles rising from the darkness of a bottomless pit. A woman with her face covered by a veil. Robert Langdon was looking at her from the other side of a river whose rough waters were running red, tinged with blood. Facing him, on the opposite bank, the woman stared at him, immobile, solemn. She had in her hand a blue sash, a tainia, which she raised in honor of the sea of ​​corpses at her feet. The smell of death hung everywhere. Search, whispered the woman. And you will find. Langdon heard the words as if she had spoken them inside his head. Who are you? He asked, without her voice making a sound. Time is running out, she murmured. Search and you will find. Langdon took a step forward, towards the river",
            2: "Langdon's neck throbbed, excruciating pain. Cautiously, he raised his free arm and touched his scalp, trying to pinpoint the source of the headache. Under the matted hair, he found the hard edges of some ten points encrusted with dried blood. He closed his eyes and tried to remember an accident. Nothing. Total white. Think. Just darkness. A man in surgical clothing hurried in, apparently alerted by the accelerating beeps from Langdon's cardiac monitor. He had a disheveled beard, a tight mustache, and kind eyes that conveyed an attentive calm beneath his ruffled eyebrows. - What ... what happened? Langdon managed to ask. - Did I have an accident? The bearded man put a finger to his lips and hurried out again to call someone in the hall.",
            3: "He replied even more slowly: - University professor. Art History ... and Symbolism. Harvard. Dr. Brooks lowered the flashlight, looking surprised. The doctor with the frowning eyebrows looked equally astonished. - Are you an American? Langdon looked at her with a puzzled look. - It's just ... - She hesitated. - You had no documents when you arrived. Since he was wearing a Harris Tweed jacket and dress shoes, we thought he was British. 'I'm an American,' Langdon assured him, too exhausted to explain his preference for quality tailoring. - Are you in any pain? 'In the head,'' Langdon replied, the throbbing in his skull aggravated by the bright glow of the flashlight. Fortunately, the doctor put it in her pocket and took her wrist to measure the heartbeat. 'You woke up screaming,' she said. ",
            4: "Robert Langdon's head throbbed. Now he was sitting on the hospital bed, his back straight, pressing the button over and over to call for help. Despite the sedatives in his system, his heart was racing. Dr. Books hurried back to the room, her ponytail wagging. - Are you okay? Langdon shook his head, stunned. - Am I ... in Italy? 'Good,' she said. - You remember. - No! Langdon pointed out the window at the monumental building that stood in the distance. - I recognized Palazzo Vecchio. Dr. Brooks turned on the lights again, making the Florence skyline disappear. She went to the side of the bed, whispering in a quiet voice, 'Mr. Langdon, you needn't worry.' You are suffering from mild amnesia, but Dr. Marconi has already confirmed that there is nothing wrong with your brain functions.  "
        }
    }
]
// ----------------------------------------------------------------------------// 
const players = [
    {
        id: 1,
        name: 'Caio'
    },
    {
        id: 2,
        name: 'João'
    }
]
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// ----------------------------------- VARIABLES ---------------------------------//
let choosenBookProperty = {};
let numberPage;
let numberLetter;
let result = 0;
let scorePlayer1 = 5;
let scorePlayer2 = 5;

//--------------------------- FUNCTION TO CHOOSE BOOK -----------------------------//
function choices() {
    for (let i = 0; i < books.length; i++) {
        document.getElementById('listBooks').innerHTML += `<img id="buttonChoice${i}" class="changeBook"  src="${books[i].cover}" onclick="chooseBook(${i})"/>`
    }
}

choices();
//---------------------------------------------------------------------------//

//------------------------- STORE CHOOSED BOOKS -----------------------------//
function chooseBook(_code) {
    choosenBookProperty.id = books[_code].id;
    choosenBookProperty.name = books[_code].name;
    choosenBookProperty.numberOfPages = books[_code].numberOfPages;
    choosenBookProperty.coverBook = books[_code].cover;
    choosenBookProperty.pages = books[_code].pages;
    choosenBookProperty.draw = books[_code].draw;

    document.getElementById('template').style.background = `url(${choosenBookProperty.draw})`;
    document.getElementById('template').style.backgroundRepeat = "no-repeat";
    document.getElementById('template').style.backgroundSize = "cover";

    //---------- link da imagem só precisa da propriedade --------//
    //------------------------------------------------------------//
    document.getElementById('info').innerHTML = `
        <p> Title: ${choosenBookProperty.name} </p>
 `
}

//---------------------------------------------------------------------------//
//                              Number & Letter                              //
//---------------------------------------------------------------------------//
function show() {
    if (!choosenBookProperty.id) {
        document.getElementById('instruction').innerHTML = ` <p> Choose a book!! </p>`
    } else {
        numberPage = Math.floor(Math.random() * 4) + 1;
        document.getElementById('executionRandomNumber').innerHTML = `<p> Page: ${numberPage} </p>`;
        document.getElementById('instruction').innerHTML = ` <p> Choose a number. </p>`
        document.getElementById('textbook').innerHTML = `<p>${choosenBookProperty.pages[numberPage]}</p>`
        document.getElementById('executionRandomLetter').innerHTML = `Letter: ${alphabet[randomLetter()]}`;
        document.getElementById('raffleGame').style.display = "flex";
    }


    //----------------------- RANDOM NUMBER OF THE LETTER -----------------------//
    function randomLetter() {
        numberLetter = Math.floor(Math.random() * alphabet.length);
        return numberLetter
    }
}
//---------------------------------------------------------------------------//

//---------------------------- CHECKING THE PAGE ----------------------------//
function player() {
    let paginaview = choosenBookProperty.pages[numberPage].toUpperCase();
    console.log(paginaview);
    console.log('a letra é: ' + alphabet[numberLetter]);
    for (let i = 0; i < paginaview.length; i++) {
        if (paginaview[i] == alphabet[numberLetter]) {
            result++   //
        }
        console.log(result)
    }
    comparation(result);
    return result
}
//---------------------------------------------------------------------------//


//-------------------------- DECIDING THE WINNER ----------------------------//

function comparation(_result) {
    let palpitePlayerUm = document.getElementById('palpiteum').value;
    let palpitePlayerDois = document.getElementById('palpitedois').value;
    let player1 = Math.abs(_result - palpitePlayerUm);
    let player2 = Math.abs(_result - palpitePlayerDois);


    if ((palpitePlayerUm == '') || (palpitePlayerDois == '')) {
        document.getElementById('result').innerHTML = `Enter some value`;
    } else if (player1 < player2) {
        scorePlayer1 += 10
        console.log(scorePlayer1)
        document.getElementById('result').innerHTML = `Player 1 is the winner!`;
        document.getElementById('percentagePlayer1').style.width = scorePlayer1 + "%";
        while(scorePlayer1 == 85){
            document.getElementById('instruction').innerHTML = "GAME OVER!"
            scorePlayer1 = 5;
            scorePlayer2 = 5;
        }
    } else if (player2 < player1) {
        scorePlayer2 += 10
        document.getElementById('result').innerHTML = `Player 2 is the winner!`
        document.getElementById('percentagePlayer2').style.width = scorePlayer2 + "%";
        while(scorePlayer2 == 85){
            document.getElementById('instruction').innerHTML = "GAME OVER!"
            scorePlayer1 = 5;
            scorePlayer2 = 5;
        }
    } else if ((player1 != undefined) && (player1 != undefined) && (player2 == player2)) {
        document.getElementById('result').innerHTML = `Nobody won :/`;
    }
}
//------------------------------------------------------------------------------------------------//

//-------------------------------- ADD PLAYERS - not used yet ------------------------------------//
function addPlayer() {
    let userId = (document.getElementById('idNumber').value);
    let userName = (document.getElementById('userName').value);
    //produtoscomID = produto.filter(obj => obj.id == idUrl);
    for (let i = 0; 0 < players.length; i++) {
        if (userId == players[i].id || userName == players[i].name) {
            document.getElementById(notification).innerHTML = 'Já existe um usuário com esse id ou nome';
        } else if (userId <= 0 || userName == undefined) {
            document.getElementById(notification).innerHTML = 'Por favor, insira valores e nomes válidos.';
        } else {
            players.push({
                'id': userId,
                'name': userName
            })
            //players.id = userId;
            //players.name = userName;
        }
    }
}
//----------------------------------------- INCRISING LETTER -------------------------------------//
function increasingLetter(cont = 15) {
    return function () {
        if (cont > 20) {
            cont = 15;
            document.getElementById('textbook').style.fontSize = cont + 'px';
            return
        } else {
            cont++
            document.getElementById('textbook').style.fontSize = cont + 'px';
        };
        increasingLetter();
    }
}

let testFun = increasingLetter()
document.getElementById("changeLetter").onclick = testFun;

//------------------------------------- DARK MODE -------------------------------------------------//

function changeDarkMode() {

    document.getElementById('board').style.background = "#222831";
    document.getElementById('library').style.background = "#dddddd";
    document.getElementById('instrucion').style.background = "#8d93ab";
    document.getElementById('instrucion').style.color = "#151414";
    document.getElementById('textbook').style.color = "#dddddd";

}

//------------------------------------------------------------------------------------------------//