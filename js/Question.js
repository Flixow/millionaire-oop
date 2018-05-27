class Question {
  constructor(data) {
    this.data = data
    this.text = data.question
  }

  getAnswers() {
    const answers = [...this.data.incorrect_answers, this.data.correct_answer]
    const shuffledAnswers = answers
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1])

    return shuffledAnswers
  }

  answer(answer) {
    if (this.data.correct_answer === answer) {
      console.log('Correct, go to the next question :-)')

      return true
    } else {
      console.log('Wrong, you lose :-(')

      return false
    }
  }
}
