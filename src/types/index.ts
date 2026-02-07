import type { Prisma } from "@prisma/client";

// Answer with all relations needed for the homepage cards
export type AnswerWithRelations = Prisma.AnswerGetPayload<{
  include: {
    person: { include: { tribe: true } };
    answerAudios: { include: { audio: true } };
  };
}>;
