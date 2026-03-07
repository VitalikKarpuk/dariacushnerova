export function ProjectSystem() {
  return (
    <section
      className="
        relative
        max-w-4xl
        mx-auto
        bg-surface
        rounded-md
        shadow-md
        p-8
        md:p-12
        my-10
        text-gray-800
      "
    >
      {/* Заголовок */}
      <h2
        className="
          text-3xl 
          md:text-4xl 
          font-extrabold 
          text-center 
          mb-6
          leading-tight
        "
      >
        проект{" "}
        <span 
          className="
            italic
            text-brand
          "
        >
          Я ЛИДЕР
        </span>{" "}
        — это{" "}
        <span
          className="
            uppercase
            tracking-wide
            font-semibold
            text-brand-muted
          "
        >
          СИСТЕМА
        </span>{" "}
        последовательных действий
      </h2>

      {/* Описание 1 */}
      <p
        className="
          text-lg
          md:text-xl
          font-normal
          leading-relaxed
          text-center
          mb-6
        "
      >
        которая приводит к результату в проектах, продвижении и продажах!
      </p>

      {/* Описание 2 */}
      <p
        className="
          text-lg
          md:text-xl
          font-normal
          leading-relaxed
          text-center
        "
      >
        Вы получаете инструменты и навыки для{" "}
        <span 
          className="
            font-semibold 
            italic 
            text-brand
          "
        >
          постоянного масштабирования
        </span>{" "}
        даже самостоятельно.
      </p>
    </section>
  )
}
