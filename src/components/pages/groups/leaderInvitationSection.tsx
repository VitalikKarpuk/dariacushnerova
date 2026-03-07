import { ExternalLink } from "lucide-react";

export function LeaderInvitationSection() {
  return (
    <section
      className="
        relative 
        mx-auto 
        max-w-4xl
        my-10 
        p-6 
        bg-surface 
        rounded-lg 
        shadow-md 
        text-gray-800
      "
    >
      <p className="text-lg md:text-xl leading-relaxed font-normal mb-4">
        С нетерпение жду тебя на программе Я ЛИДЕР❤️ ‌и хочу сделать подарок 🎁,
        приоткрыв секреты обучения! Которые ты найдешь в этом видео{" "}
        <span className="inline-block animate-bounce">⬇️</span>
      </p>

      <div className="mt-6">
        <a
          href={"#"}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex 
            items-center 
            gap-2
            px-5 
            py-3 
            rounded-full 
            font-semibold
            text-white
            bg-brand
            hover:scale-105 
            hover:shadow-lg 
            transition-transform 
            duration-300
          "
        >
          <ExternalLink className="w-5 h-5" />
          Смотреть видео
        </a>
      </div>
    </section>
  );
}
