import React from "react";

import telegram from "../../assets/telegram.svg";

const ResultsPage = ({ answers }) => {
  if (!answers || answers.length === 0) {
    return (
      <p className="text-center text-gray-700">
        Nenhum resultado disponível. Por favor, complete o quiz.
      </p>
    );
  }

  const stressMapping = {
    Rarely: "Baixo",
    Sometimes: "Moderado",
    Often: "Alto",
    "Almost always": "Extremo",
  };

  const stressLevel = answers[0]?.title;
  const stressCategory = stressMapping[stressLevel] || "Desconhecido";

  return (
    <div className="bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Seu nível de estresse: <br /> {stressCategory} – Aqui está o seu plano
        personalizado!
      </h1>

      <div className="max-w-lg w-full flex flex-col gap-6">
        {/* Meditation Suggestion */}
        <div className="bg-teal-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Técnicas de grounding 🧘‍♀️</h2>
          <p>
            Faça uma pausa e se reconecte com o momento presente utilizando uma
            técnica rápida de grounding.
          </p>
        </div>

        {/* Mindfulness Tip */}
        <div className="bg-purple-400 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Dica de mindfulness 🍃</h2>
          <p>
            Tire pequenas pausas conscientes ao longo do seu dia para se
            reconectar com o momento presente.
          </p>
        </div>

        {/* Sleep Tip */}
        <div className="bg-gray-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Dica de sono 😴</h2>
          <p>
            Tente uma rotina de relaxamento noturno para melhorar o seu
            descanso.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <button className="mt-8 bg-teal-600 text-white font-bold text-lg py-4 px-4 rounded-full hover:bg-teal-700 transition active:scale-95">
        Encontre paz com o MindZen
      </button>

      {/* Telegram Info */}
      <div className="mt-6 flex flex-col items-center">
        <img src={telegram} className="w-12 h-12 mb-2" alt="Telegram Logo" />
        <p className="text-gray-700 text-center">
          Você precisa ter o Telegram instalado para aproveitar nosso app
        </p>
      </div>
    </div>
  );
};

export default ResultsPage;
