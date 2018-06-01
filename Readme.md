# Quiz napisany za pomocą programowania obiektowego w JavaScript

## Klasa Question:
* Trzyma dane:
  * pojedyncze pytanie
  * tekst pytania
* Metody
  * `getAnswers` zwraca listę odpowiedzi łącząc tablicę `incorrect_answers` ze stringiem `correct_answer`, a następnie mixuje odpowiedzi w losowej kolejności
  * `answer` przyjmuje jako parametr odpowiedź przechowywaną w stringu i zwraca wartość `Boolean` w zależności czy parametr jest równy własności `correct_answer`

## Klasa Board:
* Trzyma dane:
  * lista pytań
  * index aktualnego pytania
  * instancję klasy `Question` z danymi aktualnego pytania
  * referencję do elementu `question-card`
  * referencję do elementu `question-list`
* Metody
  * `renderQuestionList` czyści, a następnie renderuję listę pytań w kontenerze `question-list` wraz z klasami css w zależności czy jest to kolejne, czy aktualne pytanie na podstawie własności `currentQuestionIndex`
  * `getCurrentQuestion` zwraca  instancję klasy `Question` z danymi aktualnego pytania na podstawie własności `currentQuestionIndex`
  * `renderQuestionCard` czyści, a następnie renderuje w nagłówku `h2` text aktualnego pytania oraz pobraną listę elementów z odpowiedziami za pomocą metody `getAnswerListElement`
  * `getAnswerListElement` zwraca element listy odpowiedzi. Każda odpowiedź to pojedynczy element listy w którym znajduje się przycisk z odpowiedzią pobrany za pomocą metody `getAnswerButton` na podstawie parametru
  * `getAnswerButton` zwraca element przycisku z tekstem pytania przekazanym poprzez parametr. Zwracany element nasłuchuje na zdarzenie `click`. Jako callback sprawdza czy odpowiedź jest dobra za pomocą metody `answer` klasy `Question`. Jeżeli odpowiedź jest dobra, wywołuje metody `setNextQuestion` oraz `renderQuestionCard` w celu przererenderowania karty
  * `setNextQuestion` zwiększa index własności `currentQuestionIndex`, aktualizuję wartośc własności `currentQuestion` za pomocą metody `getCurrentQuestion`, wywołuję metodę `renderQuestionList` w celu przeładowania listy pytań
