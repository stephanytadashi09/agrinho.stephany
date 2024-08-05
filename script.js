const questions = [
    {
        question: "Qual dessas práticas é importante em uma horta inteligente?",
        answer: true,
        explanation: "Correto! O uso de sensores para monitorar a umidade do solo ajuda a garantir que as plantas recebam a quantidade certa de água."
    },
    {
        question: "Por que a compostagem é importante em uma horta inteligente?",
        answer: true,
        explanation: "Correto! A compostagem ajuda a enriquecer o solo com nutrientes essenciais para as plantas."
    },
    {
        question: "Qual é o benefício de utilizar pesticidas orgânicos em uma horta inteligente?",
        answer: true,
        explanation: "Correto! Pesticidas orgânicos são menos prejudiciais ao meio ambiente e à saúde humana."
    },
    {
        question: "Quantas vezes por semana normalmente se rega uma horta inteligente?",
        answer: false,
        explanation: "Não, a frequência de rega pode variar dependendo do clima e das necessidades específicas das plantas."
    }
];

let currentQuestion = 0;
const questionText = document.getElementById('question');
const resultText = document.getElementById('result');

function loadQuestion() {
    questionText.textContent = questions[currentQuestion].question;
    resultText.textContent = '';
}

function checkAnswer(answer) {
    const correctAnswer = questions[currentQuestion].answer;

    // Desabilita todos os botões para evitar cliques repetidos
    const buttons = document.querySelectorAll('#options button');
    buttons.forEach(button => {
        button.disabled = true;
    });

    if (answer === correctAnswer) {
        resultText.innerHTML = "<span class='correct'>Resposta correta!</span> " + questions[currentQuestion].explanation;
    } else {
        resultText.innerHTML = "<span class='incorrect'>Resposta incorreta. Tente novamente!</span>";
    }
    
    // Adiciona classe de brilho ao resultado
    resultText.classList.add('glow');

    // Move para a próxima pergunta após 2 segundos
    setTimeout(nextQuestion, 2000);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        // Habilita os botões para a próxima pergunta
        const buttons = document.querySelectorAll('#options button');
        buttons.forEach(button => {
            button.disabled = false;
        });
        loadQuestion();
    } else {
        // Fim do jogo
        questionText.textContent = "Parabéns! Você completou o jogo.";
        document.getElementById('options').innerHTML = '';
    }

    // Remove classe de brilho do resultado
    resultText.classList.remove('glow');
}

// Carrega a primeira pergunta ao carregar a página
loadQuestion();
