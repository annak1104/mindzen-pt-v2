import { AnimatePresence, motion } from "framer-motion";

import React, { useEffect, useRef, useState } from "react";

import logoDark from "../../assets/logo-dark.svg";
import logo from "../../assets/logo.svg";
import referral from "../../assets/referral.png";
import telegram from "../../assets/telegram.svg";
import FinalThankYouPage from "../../components/FinalThankYouPage/FinalThankYouPage";
import MLMEarningsSimulator from "../../components/MLMEarningsSimulator/MLMEarningsSimulator";
import ResultsPage from "../../components/ResultsPage/ResultsPage";

// Questions for the quiz
const questions = [
  {
    question:
      "Com que frequência você se sente sobrecarregado(a) com suas responsabilidades?",
    options: [
      {
        title: "Raramente",
        description:
          "Quase nunca me sinto muito estressado(a) com minhas tarefas.",
      },
      {
        title: "Às vezes",
        description: "De vez em quando, sim, acabo ficando sobrecarregado(a).",
      },
      {
        title: "Frequentemente",
        description:
          "Costumo ter dificuldade para dar conta de tudo ao mesmo tempo.",
      },
      {
        title: "Quase sempre",
        description:
          "Sinto que estou constantemente equilibrando responsabilidades demais.",
      },
    ],
  },
  {
    question: "Como você descreveria a qualidade do seu sono na última semana?",
    options: [
      {
        title: "Excelente",
        description: "Me sinto descansado(a) todos os dias.",
      },
      {
        title: "Boa",
        description: "Durmo bem na maioria das noites.",
      },
      {
        title: "Regular",
        description: "Às vezes acordo cansado(a).",
      },
      {
        title: "Ruim",
        description: "Tenho dificuldade para ter um sono de qualidade.",
      },
    ],
  },
  {
    question: "Você sentiu algum dos sintomas abaixo na última semana?",
    options: [
      {
        title: "Dores de cabeça frequentes",
        description: "Notei uma dor ou pressão constante na cabeça.",
      },
      {
        title: "Tensão ou dores musculares",
        description: "Senti meus músculos tensos ou doloridos com frequência.",
      },
      {
        title: "Fadiga ou falta de energia",
        description: "Estive lidando com cansaço ou energia baixa.",
      },
      {
        title: "Nenhuma das opções acima",
        description: "Não senti nenhum desses sintomas.",
      },
    ],
  },
  {
    question: "Quando você se sente estressado(a), o que costuma fazer?",
    options: [
      {
        title: "Me exercito ou medito",
        description:
          "Prefiro aliviar o estresse com atividade física ou práticas de mindfulness.",
      },
      {
        title: "Converso com alguém",
        description:
          "Procuro amigos, familiares ou um profissional para desabafar.",
      },
      {
        title: "Evito pensar no assunto",
        description: "Costumo me distrair ou simplesmente ignorar o estresse.",
      },
      {
        title: "Outro",
        description: "Tenho uma maneira diferente de lidar com o estresse.",
      },
    ],
  },
  {
    question:
      "Como você avaliaria seu equilíbrio entre vida pessoal e trabalho?",
    options: [
      {
        title: "Excelente",
        description: "Me sinto equilibrado(a) e no controle da situação.",
      },
      {
        title: "Bom",
        description: "Na maior parte dos dias, consigo administrar bem.",
      },
      {
        title: "Regular",
        description:
          "Às vezes sinto que estou puxando responsabilidade demais.",
      },
      {
        title: "Ruim",
        description: "É difícil encontrar equilíbrio.",
      },
    ],
  },
];

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const quizRef = useRef(null);
  const resultsRef = useRef(null);

  const startQuiz = () => {
    setQuizStarted(true);
    setTimeout(() => {
      quizRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleAnswer = (answer) => {
    // Save the answer and move to the next question
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz is completed, show results page
      setQuizCompleted(true);
    }
  };

  // Scroll to the top of the results page when the quiz is completed
  useEffect(() => {
    if (quizCompleted) {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }, [quizCompleted]);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div>
      {/* Show results, MLM earnings simulator, and thank you page after quiz completion */}
      {quizCompleted ? (
        <div ref={resultsRef}>
          {" "}
          {/* Attach ref to the results container */}
          <ResultsPage answers={answers} />
          <MLMEarningsSimulator />
          <FinalThankYouPage />
        </div>
      ) : (
        <>
          {/* Hero Section */}
          {!quizStarted && (
            <section className="relative h-screen bg-cover bg-center bg-[url('./assets/mindzen-2.png')]">
              <div className="absolute inset-0 backdrop-blur-sm"></div>
              <div className="relative flex flex-col items-center justify-center h-full text-gray-800 px-6">
                <div className="absolute top-6 left-6">
                  <img src={logo} alt="Main-logo" className="h-12" />
                </div>
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-center text-white"
                >
                  Quão estressado(a) você está? <br /> Responda este quiz de 60
                  segundos!
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="font-open-sans text-lg text-[#38f1cc] mb-8 text-center"
                >
                  Descubra seu nível de estresse e receba dicas de mindfulness
                  personalizadas para recuperar o equilíbrio na sua vida.
                </motion.p>
                <motion.button
                  onClick={startQuiz}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#3E8E7E] text-white font-open-sans text-lg font-bold py-4 px-8 rounded-full transition-all duration-300 ease-in-out"
                >
                  Começar o quiz!
                </motion.button>
              </div>
            </section>
          )}

          {/* MLM Info Section */}
          {!quizStarted && (
            <section className="bg-[#F5F5F5] p-6">
              <div className="max-w-screen-md mx-auto text-center">
                <h2 className="font-montserrat text-3xl font-bold text-[#3E8E7E] mb-6">
                  Ganhe Enquanto Treina
                </h2>
                <p className="font-roboto text-gray-700 text-lg mb-6">
                  Indique amigos e ganhe comissões enquanto eles alcançam seus
                  objetivos de fitness com você!
                </p>
                <div className="flex justify-center">
                  <img
                    src={referral}
                    alt="Rede de Indicação"
                    className="w-1/2"
                  />
                </div>
              </div>
            </section>
          )}

          {/* Telegram Info Section */}
          {!quizStarted && (
            <section className="bg-white p-6">
              <div className="max-w-screen-md mx-auto text-center">
                <img
                  src={telegram}
                  className="w-12 h-12 m-auto"
                  alt="Telegram Logo"
                />
                <h2 className="font-montserrat text-3xl font-bold text-gray-800 mb-4">
                  Você precisa ter o Telegram
                </h2>
                <p className="font-roboto text-gray-700 text-lg mb-6">
                  Receba atualizações de treino, guias de nutrição e comece a
                  ganhar recompensas por indicações!
                </p>
                <button className="bg-[#FB8C00] text-white font-montserrat font-bold text-lg py-4 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:bg-orange-600 active:scale-95">
                  Get Telegram
                </button>
              </div>
            </section>
          )}

          {/* Quiz Section */}
          {quizStarted && (
            <div ref={quizRef} className="pt-16 h-screen pb-10 bg-gray-200">
              <div className="w-[60%] m-auto mb-9">
                <img src={logoDark} alt="Main-logo" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative flex flex-col items-center justify-center bg-white px-6 rounded-lg shadow-lg"
              >
                <p className="text-lg font-semibold text-gray-700 mt-9 mb-2">
                  Etapa {currentQuestion + 1} de {questions.length}
                </p>
                <div className="w-full bg-gray-300 h-2 mb-8 mt-8">
                  <motion.div
                    initial={{
                      width: `${(currentQuestion / questions.length) * 100}%`,
                    }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                    className="bg-purple-400 h-2"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center font-montserrat">
                  {questions[currentQuestion].question}
                </h2>
                <AnimatePresence mode="sync">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="w-full flex flex-col text-left bg-teal-500 text-white font-bold p-4 rounded-lg mb-4 shadow-md transition-all hover:bg-purple-400"
                    >
                      <span className="text-lg font-bold font-lato">
                        {/* Replacing only known titles from ENG list */}
                        {{
                          Rarely: "Raramente",
                          Sometimes: "Às vezes",
                          Often: "Frequentemente",
                          "Almost always": "Quase sempre",
                        }[option.title] || option.title}
                      </span>
                      <span className="text-sm text-gray-200">
                        {/* Replacing only known descriptions from ENG list */}
                        {{
                          "I hardly ever feel too stressed out by my tasks":
                            "Quase nunca me sinto muito estressado(a) com minhas tarefas.",
                          "I do get overwhelmed now and then":
                            "De vez em quando, sim, acabo ficando sobrecarregado(a).",
                          "I frequently struggle to handle everything at once":
                            "Costumo ter dificuldade para dar conta de tudo ao mesmo tempo.",
                          "I feel like I'm constantly juggling too many responsibilities":
                            "Sinto que estou constantemente equilibrando responsabilidades demais.",
                        }[option.description] || option.description}
                      </span>
                    </motion.button>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default QuizSection;
