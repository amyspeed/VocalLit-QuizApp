'use strict';

//Data bank:
const STORE = [
  {
    num: 1,
    question: 'This composer of <i>Alceste</i> (1674) stabbed his foot with his conducting staff and died of gangrene.',
    answerOptions: ['Jacopo Peri', 'Claudio Monteverdi','Jean-Baptiste Lully', 'Alessandro Scarlatti',],
    answerCorrect: 'Jean-Baptiste Lully',
  },

  {
    num: 2,
    question: 'This composer of <i>Lucia di Lammermoor</i> (1835) suffered his own madness, due to syphilis, and spent his last years in an insane asylum.',
    answerOptions: ['Gaetano Donizetti', 'Vincenzo Bellini', 'Giuseppe Verdi','Gioachino Antonio Rossini',],
    answerCorrect: 'Gaetano Donizetti',    
  },

  {
    num: 3,
    question: 'This <i>Dichterliebe</i> (1840) composer and pianist would often submerge his hands into the entrails of a slaughtered animal to heal his injuries.',
    answerOptions: ['Franz Schubert', 'Franz Liszt', 'Clara Schumann', 'Robert Schumann',],
    answerCorrect: 'Robert Schumann',    
  },

  {
    num: 4,
    question: 'This <i>Die schöne Müllerin</i> (1823) composer was known by some as Schwammerl, or little mushroom, because of his round figure and short, 5’1” stature.',
    answerOptions: ['Robert Schumann', 'Franz Schubert', 'Franz Liszt', 'Clara Schumann',],
    answerCorrect: 'Franz Schubert',    
  },

  {
    num: 5,
    question: 'This <i>Dido and Aeneas</i> (1688) composer died of cold when his wife locked him out in the yard after a late night.',
    answerOptions: ['Henry Purcell', 'William Byrd', 'George Frederic Handel', 'Joseph Haydn',],
    answerCorrect: 'Henry Purcell',    
  },

  {
    num: 6,
    question: 'Just after World War II, this composer, of “Das dunkle Herz” (1934), stepped outside, lit a cigar, and was shot by an American soldier. In 2013, Michael Dellaira composed a one-act opera about this composer’s death.',
    answerOptions: ['Richard Strauss', 'Alban Berg', 'Arnold Schoenberg', 'Anton Webern',],
    answerCorrect: 'Anton Webern',        
  },

  {
    num: 7,
    question: 'This composer rode his bicycle into a brick wall and died instantly. He also composed “Les Papillons” (1880).',
    answerOptions: ['Gabriel Fauré', 'Ernst Chausson', 'Maurice Ravel', 'Erik Satie',],
    answerCorrect: 'Ernst Chausson',    
  },

  {
    num: 8,
    question: 'This composer, of “Oh! Quand je dors” (1842 and 1849), received so many requests for locks of his hair that he bought a dog and began sending fur clippings.',
    answerOptions: ['Franz Liszt', 'Claude Debussy', 'Gabriel Fauré', 'Ernst Chausson',],
    answerCorrect: 'Franz Liszt',    
  },

  {
    num: 9,
    question: 'This composer, of <i>Das Buch der hängenden Gärten</i> (1909), suffered a fear of the number 13: Triskaidekaphobia. He died on Friday July 13, 1951.',
    answerOptions: ['Richard Strauss', 'Alban Berg', 'Arnold Schoenberg', 'Anton Webern',],
    answerCorrect: 'Arnold Schoenberg',    
  },

  {
    num: 10,
    question: 'This composer of “Am Strande” (1840) once described Wagner’s, <i>Tristan und Isolde</i> as “The most repugnant thing I have ever seen or heard in all my life.”',
    answerOptions: ['Franz Schubert', 'Franz Liszt', 'Clara Schumann', 'Robert Schumann',],
    answerCorrect: 'Clara Schumann',    
  },
];

let questionNum = 0;
let score = 0;

//Question page HTML
function quizPage() {
   return `<section role="region" id="question-page">
        <form>
          <fieldset>
            <div class="row">    
              <div class="col-12">
                <div class="box question">
                <h5><span class="question-number">Question ${STORE[questionNum].num} </span>of 10 (<span class="current-score">${score} correct)</h5>
                <p>${STORE[questionNum].question}</p>
                </div>
              </div>    
            </div>
            
            <div class="row">
              <div class="col-12">
                <legend class="box">Select One:</legend>
              </div>
            </div>  

            <div class="row">
            ${choiceLoop()}
            </div>
          </fieldset>
        </form>    
      </section>  `
 }

function choiceBtn(i) {
  return `<div class="col-3">
                <button class="answer-button box" type="submit" id="${STORE[questionNum].answerOptions[i]}" name="submit-answer">
                  <label for"${STORE[questionNum].answerOptions[i]}"><p>${STORE[questionNum].answerOptions[i]}</p></label>
                </button>
              </div>`
}

//loop through answers and create array
function choiceLoop() {
  const optArr= STORE[questionNum].answerOptions;
  let choices= [];
  for(let i=0; i<optArr.length; i++) {
    choices.push(choiceBtn(i));
  }
  //remove commas in the array
  return choices.join("");
}

//HTML feedback pages
function feedbackPage() {
return `<section role="region" id="feedback-page">
        <div class="row">
          <div class="col-12">
            <div class="box feedback">
              <h6>Nailed it!</h6>
              <p>You must be a serious ${STORE[questionNum].answerCorrect} scholar.</p>
              <button class="main-button next">Next!</button>
            </div>  
          </div>  
        </div>  
      </section> `
}

function feedbackWrongPage() {
return `<section role="region" id="feedback-page">
        <div class="row">
          <div class="col-12">
            <div class="box feedback feedback-wrong">
              <h4>Nope!</h4>
              <p> The correct answer is ${STORE[questionNum].answerCorrect}.</p>
              <button class="main-button next">Next!</button>
            </div>  
          </div>  
        </div>  
      </section> `
}

//HTML score page
function scorePage() {
  return `<section role="region" id="final-page">
        <div class="row final">
          <div class="col-12">
            <div class="box final-box">
              <h6>Wowee WOWZAA! <br> You answered ${score} out of 10 questions correctly. Your score is ${score>0 ? score:''}0%.</h6>
              <button class="main-button again">Try Again!</button>
            </div>  
          </div>  
        </div> `
}

//generate quizPage or scorePage
function runQuizOrScore() {
  if (questionNum < STORE.length) {
    appendQuiz();
  } 
  else {
   appendScore();
  }
}

//remove current section, append quizPage, call answerButtons
function appendQuiz() {
    $('section').remove();
    $('main').append(quizPage());
}

//remove current section, append scorePage, call startOver
function appendScore() {
  $('section').remove();
  $('main').append(scorePage());
  startOver();
}

//remove current section, append feedback pages, handle next button
function appendFeedback(){
  $('section').remove();
  $('main').append(feedbackPage());
}

function appendFeedbackWrong(){
  $('section').remove();
  $('main').append(feedbackWrongPage());
}

function changeQuestionNum(){
  questionNum++;
 // event.preventDefault();
}

function changeScore(){
  score++;
//  event.preventDefault();

}

//Start the quiz and handle start button.
function handleBegin() {
  $('.js-start-page').on('click', '#js-begin-button', function (event) {
    appendQuiz();
  });
  answerButtons();
  handleNext();
}

//Handle answer buttons.
function answerButtons() {
    $('main').on('click', '.answer-button', function (event) {
      const checked= $(this).attr('id');
      checkAnswers(checked);
  })
}

//Check answers.
function checkAnswers(checked) {
  let correct = STORE[questionNum].answerCorrect;
  if(checked === correct){
    showFeedback(true);
 } 
  else {
   showFeedback(false);
 }
}

function showFeedback(verify) {
  if(verify === true) {
  changeScore();
  appendFeedback();
  } 
  else {
  appendFeedbackWrong();
  }
}

//Handle next button.
function handleNext() {
  $('main').on('click', '.next', function (event) {
 //   event.preventDefault();
    changeQuestionNum();
    runQuizOrScore();
  });
}

//Handle "Try Again" button
function startOver() {
  $('main').on('click', '.again', function (event) {
  questionNum = 0;
  score = 0;
    return appendQuiz();
  })
}

handleBegin();
