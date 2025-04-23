import React from "react";

import telegramIcon from "../../assets/telegram.svg";

const FinalThankYouPage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-center p-6 shadow-lg">
      {/* Motivational Headline */}
      <h1 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-800 mb-6">
        Você está a um passo de viver com mais leveza e menos estresse!
      </h1>

      {/* Encouraging CTA */}
      <button className="bg-teal-600 text-white font-bold font-montserrat text-lg py-4 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:bg-teal-700 active:scale-95">
        Abra o MindZen no Telegram agora mesmo
      </button>

      {/* Telegram & Referral Reminder */}
      <div className="mt-8 flex flex-col items-center">
        <img
          src={telegramIcon}
          alt="Telegram Logo"
          className="w-12 h-12 mb-4"
        />
        <p className="font-open-sans text-lg text-gray-700 max-w-lg">
          Entre para o MindZen no Telegram e acesse seu link de convite
          exclusivo para começar a indicar amigos e ganhar recompensas!
        </p>
      </div>
    </div>
  );
};

export default FinalThankYouPage;
