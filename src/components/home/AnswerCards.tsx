import { AnswerCard } from "./AnswerCard";
import type { AnswerWithRelations } from "@/types";

interface AnswerCardsProps {
  answers: AnswerWithRelations[];
  heading: string;
  backgroundImage?: string;
  backgroundColor?: string;
  textColor: "white" | "black";
}

export function AnswerCards({
  answers,
  heading,
  backgroundImage,
  backgroundColor,
  textColor,
}: AnswerCardsProps) {
  const shadowClass =
    textColor === "white" ? "text-shadow-dark" : "text-shadow-light";

  return (
    <section
      className="min-h-[550px] bg-parallax py-8"
      style={{
        backgroundImage: backgroundImage
          ? `url('${backgroundImage}')`
          : undefined,
        backgroundColor: backgroundColor ?? undefined,
      }}
    >
      <h1
        className={`text-center font-josefin text-[45px] italic font-bold mb-[60px] ${shadowClass}`}
        style={{ color: textColor }}
      >
        {heading}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {answers.map((answer) => (
          <AnswerCard key={answer.id} answer={answer} />
        ))}
      </div>
    </section>
  );
}
