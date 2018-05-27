const database = new Database()

const questions = database.getQuestions()
const game = new Board(questions)

game.renderQuestionList()
game.renderQuestionCard()
