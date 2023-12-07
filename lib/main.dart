import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          centerTitle: true,
          title: Text('Jogo da Forca'),
        ),
        body: Center(
          child: HangmanGame(),
        ),
      ),
    );
  }
}

class HangmanGame extends StatefulWidget {
  @override
  _HangmanGameState createState() => _HangmanGameState();
}

class _HangmanGameState extends State<HangmanGame> {
  String wordToGuess = "FLUTTER"; // Palavra a ser adivinhada
  Set<String> guessedLetters = Set<String>();
  int maxAttempts = 6;
  int attemptsLeft = 6;

  bool isGameWon() {
    for (int i = 0; i < wordToGuess.length; i++) {
      if (!guessedLetters.contains(wordToGuess[i])) {
        return false;
      }
    }
    return true;
  }

  bool isGameLost() {
    return attemptsLeft == 0;
  }

  void guessLetter(String letter) {
    setState(() {
      if (!guessedLetters.contains(letter)) {
        guessedLetters.add(letter);
        if (!wordToGuess.contains(letter)) {
          attemptsLeft--;
        }
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [Text('Anna Carolina Lima de Souza',
                  style:
                      TextStyle(fontSize: 18.0, fontWeight: FontWeight.bold)),
              Text('RA: 1431432312015',
                  style:
                      TextStyle(fontSize: 18.0, fontWeight: FontWeight.bold)),

        Text(
          'Palavra: ${getMaskedWord()}',
          style: TextStyle(fontSize: 24),
        ),
        SizedBox(height: 20),
        Text(
          'Tentativas restantes: $attemptsLeft',
          style: TextStyle(fontSize: 20),
        ),
        SizedBox(height: 20),
        buildAlphabetButtons(),
        SizedBox(height: 20),
        if (isGameWon())
          Text(
            'Parabéns! Você ganhou!',
            style: TextStyle(fontSize: 24, color: Colors.green),
          ),
        if (isGameLost())
          Text(
            'Você perdeu! A palavra era $wordToGuess.',
            style: TextStyle(fontSize: 24, color: Colors.red),
          ),
      ],
    );
  }

  String getMaskedWord() {
    String maskedWord = '';
    for (int i = 0; i < wordToGuess.length; i++) {
      if (guessedLetters.contains(wordToGuess[i])) {
        maskedWord += wordToGuess[i];
      } else {
        maskedWord += '_';
      }
    }
    return maskedWord;
  }

  Widget buildAlphabetButtons() {
    return Wrap(
      spacing: 10,
      runSpacing: 10,
      children: List.generate(26, (index) {
        String letter = String.fromCharCode('A'.codeUnitAt(0) + index);
        return ElevatedButton(
          onPressed: isGameWon() || isGameLost() ? null : () => guessLetter(letter),
          child: Text(letter),
        );
      }),
    );
  }
}
