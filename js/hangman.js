var programming_languages= [ 
	"python",
	"javascript",
	"ruby",
	"typescript",
	"css",
	"html",
	"c",
	"c#",
	"java",
	"sql",
	"php",
	"c++",
	"Dart",
	"kotlin",
	"swift",
	"golang"
]

let answer =''
let maxWrong = 6
let mistakes = 0
let guessed = []

function randomWord() {
	answer = programming_languages[Math.floor(Math.random() * programming_languages.length)]

	alert(answer)
}

randomWord()