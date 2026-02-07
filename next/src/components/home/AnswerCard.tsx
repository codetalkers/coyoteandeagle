"use client";

import Image from "next/image";
import { AudioPlayer } from "@/components/audio/AudioPlayer";
import type { AnswerWithRelations } from "@/types";

export function AnswerCard({ answer }: { answer: AnswerWithRelations }) {
  const audioPath = answer.answerAudios[0]?.audio?.path;

  return (
    <div className="bg-gray-300/50 overflow-hidden">
      <div className="flex gap-4 p-4">
        <div className="shrink-0 text-center">
          {answer.person?.thumbnail && (
            <Image
              src={answer.person.thumbnail}
              alt={answer.person.name}
              width={150}
              height={150}
              className="rounded"
            />
          )}
          <div className="text-lg text-black mt-2">
            {answer.person?.name}
            <br />
            {answer.person?.tribe?.name}
          </div>
        </div>
        <div className="flex-1">
          <blockquote className="text-black">
            <p className="text-base leading-relaxed">{answer.answer}</p>
          </blockquote>
          {audioPath && <AudioPlayer src={audioPath} className="mt-3" />}
        </div>
      </div>
    </div>
  );
}
