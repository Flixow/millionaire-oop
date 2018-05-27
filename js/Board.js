class Board {
  constructor(questions) {
    this.questions = questions
    this.currentQuestionIndex = 0
    this.currentQuestion = this.getCurrentQuestion()

    this.questionCard = document.getElementById('question-card')
    this.questionList = document.getElementById('question-list')
  }

  setNextQuestion() {
    this.currentQuestionIndex++
    this.currentQuestion = this.getCurrentQuestion()
    this.renderQuestionList()
  }

  getCurrentQuestion() {
    const question = this.questions[this.currentQuestionIndex]

    return new Question(question)
  }

  renderQuestionCard() {
    this.questionCard.innerText = ''
    const questionElement = document.createElement('h2')
    questionElement.innerText = this.currentQuestion.text

    const answersListElement = this.getAnswerListElement()

    this.questionCard.appendChild(questionElement)
    this.questionCard.appendChild(answersListElement)
  }

  getAnswerListElement() {
    const answersListElement = document.createElement('ul')
    this.currentQuestion.getAnswers().forEach(answer => {
      const answerElement =  document.createElement('li')
      const answerButton = this.getAnswerButton(answer)

      answerElement.appendChild(answerButton)
      answersListElement.appendChild(answerElement)
    })

    return answersListElement
  }

  getAnswerButton(answer) {
    const answerButton = document.createElement('button')
    answerButton.innerText = answer
    answerButton.addEventListener('click', event => {
      const isAnswerCorrect = this.currentQuestion.answer(answer)

      if (isAnswerCorrect) {
        this.setNextQuestion()
        this.renderQuestionCard()
      }
    });

    return answerButton
  }

  renderQuestionList() {
    this.questionList.innerText = ''
    const list = document.createElement('ul')
    this.questions.forEach((item, idx) => {
      const listItem = document.createElement('li')
      if (idx === this.currentQuestionIndex) {
        listItem.classList.add('current');
      }
      if (idx < this.currentQuestionIndex) {
        listItem.classList.add('past');
      }
      listItem.innerText = `Question ${idx + 1}\nQuestion worth $${100 * (idx + 1)}`
      list.appendChild(listItem)
    })

    this.questionList.appendChild(list)
  }
}
