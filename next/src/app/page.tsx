export const dynamic = "force-dynamic";

import { prisma } from "@/lib/db";
import { HeroSection } from "@/components/home/HeroSection";
import { StoryIntro } from "@/components/home/StoryIntro";
import { AnswerCards } from "@/components/home/AnswerCards";
import { CoyoteTransition } from "@/components/home/CoyoteTransition";
import { EagleTransition } from "@/components/home/EagleTransition";
import { InteractionSection } from "@/components/home/InteractionSection";
import { Footer } from "@/components/home/Footer";

const answerInclude = {
  person: { include: { tribe: true } },
  answerAudios: { include: { audio: true } },
} as const;

export default async function HomePage() {
  const [beginningAnswers, intermediateAnswers, advancedAnswers] =
    await Promise.all([
      prisma.answer.findMany({
        where: { groupId: 1 },
        include: answerInclude,
      }),
      prisma.answer.findMany({
        where: { groupId: 2 },
        include: answerInclude,
      }),
      prisma.answer.findMany({
        where: { groupId: 3 },
        include: answerInclude,
      }),
    ]);

  return (
    <main>
      {/* Row 1: Hero landing */}
      <HeroSection />

      {/* Row 2: Eagle animation + story intro */}
      <StoryIntro />

      {/* Row 3: Beginning answers */}
      <AnswerCards
        answers={beginningAnswers}
        heading="Everyone has their own language path."
        backgroundImage="/images/haircut-2.png"
        textColor="white"
      />

      {/* Row 4: Coyote transition */}
      <CoyoteTransition />

      {/* Row 5: Intermediate answers */}
      <AnswerCards
        answers={intermediateAnswers}
        heading="The language path is layered with your own experiences."
        backgroundImage="/images/ras-feet.png"
        backgroundColor="#ccc"
        textColor="black"
      />

      {/* Row 6: Eagle transition */}
      <EagleTransition
        heading="Friend, we have so much to learn from each others paths."
        audioSrc="/audio/eagle call.mp3"
        videoSrc="/videos/eagleandcoyote_last_scene.mp4"
        backgroundColor="#000"
      />

      {/* Row 7: Advanced answers */}
      <AnswerCards
        answers={advancedAnswers}
        heading="Learn. Speak. Preserve."
        backgroundImage="/images/road-2.png"
        backgroundColor="#dcdcdc"
        textColor="black"
      />

      {/* Row 8: Final eagle transition */}
      <EagleTransition
        heading="Eagle continues his story-telling path by leaving this platform and returning the knowledge back to his people."
        audioSrc="/audio/eagle call.mp3"
        videoSrc="/videos/eagle.mp4"
        backgroundColor="#aedcfd"
      />

      {/* Row 9: Interaction */}
      <InteractionSection />

      {/* Row 10: Footer */}
      <Footer />
    </main>
  );
}
