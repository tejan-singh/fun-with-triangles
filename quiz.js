const quizForm = document.querySelector('#quiz-form')
const resultOutput = document.querySelector('#result')
const calculateScoreBtn = document.querySelector('.btn')

const correctAnswers = ["90°", "one right angle", "right angled"]

const calculateScore = ()=>{
    var score = 0
    var index = 0
    const data = new FormData(quizForm)

    for(let value of data.values()){
        if(value === correctAnswers[index]){
            score = score + 1
        }
        index = index + 1
    }

    return score
}

const handleClick = () => {
    const result = calculateScore()
    resultOutput.innerHTML = 'Score is ' + result
}

calculateScoreBtn.addEventListener('click', handleClick)