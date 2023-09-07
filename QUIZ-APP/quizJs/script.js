const quizData  = [{
    question: 'What is JavaScript primarily used for?',
    a: 'Styling web pages',
    b: 'Adding interactivity to websites',
    c: 'Creating server-side applications',
    d: 'Generating PDF documents',
     correct: 'b'
},
{
       question: 'Which keyword is used to declare a variable in JavaScript?',
              a: 'variable',
              b: 'v',
              c: 'var',
              d: 'let',
              correct: 'c'
       
},{
        question: ' What is the correct way to write a comment in JavaScript?',
               a: '// This is a comment',
               b: '<!-- This is a comment -->',
               c: '/* This is a comment */',
               d: ' # This is a comment',
               correct: 'a'


},
{       question: 'Which of the following data types is not recognized by JavaScript? ',
               a: 'Number',
               b: 'String',
               c: ' Boolean',
               d: ' Float',
               correct: 'd'


},
{
         question: 'What is the purpose of the if statement in JavaScript?',
                a: 'To declare a function',
                b: 'To create a loop',
                c: 'To define an object',
                d: 'To make decisions in code',
                correct: 'd'
}



];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll('.answer');
const  questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const feedbackEl = document.getElementById('feedback');


let currentQuiz = 0;
let score =0;
loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
    

}
// To check and return true and false according to the selected option but workd only when the submit button is clicked.

function getSelected(){
       let answer = undefined;
       answerEls.forEach(answerEl=>{
      if(answerEl.checked){
       answer = answerEl.id;
      }
       });
      return answer;
}
//creating a function to deselect the answers for the next question cause it automatically selects the answer for the next question same as the previous one

function deselectAnswers(){
    answerEls.forEach((answerEl) =>{
        answerEl.checked = false;
    })

}
//add event listener on submit btn to make it functional 

submitBtn.addEventListener("click", ()=>{
    //check to see the answer
    const answer = getSelected();
    if(answer){
        if(answer===quizData[currentQuiz].correct)//checking if we have got the correct answer
        {
            score++;
        }
        currentQuiz++;
        if(currentQuiz< quizData.length){
            loadQuiz();
         }
         else {
        //     //To do show results
        quiz.innerHTML = `<h2> Quiz Finished! Your Score: ${score} out of ${quizData.length}</h2> 
        
        <button onclick="location.reload() ">Reload</button>`
       }
    
    }
});



