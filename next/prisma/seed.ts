import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // -- Groups (difficulty levels) --
  const beginning = await prisma.group.create({
    data: { id: 1, name: "Beginning" },
  });
  const intermediate = await prisma.group.create({
    data: { id: 2, name: "Intermediate" },
  });
  const advanced = await prisma.group.create({
    data: { id: 3, name: "Advanced" },
  });

  // -- Tribes --
  const isleta = await prisma.tribe.create({
    data: { name: "Pueblo of Isleta" },
  });
  const navajo = await prisma.tribe.create({
    data: { name: "Navajo Nation" },
  });
  const lakota = await prisma.tribe.create({
    data: { name: "Lakota" },
  });

  // -- People (speakers from the codebase) --
  const steven = await prisma.person.create({
    data: {
      name: "Steven",
      thumbnail: "/images/stephen_pic.png",
      tribeId: isleta.id,
    },
  });
  const frank = await prisma.person.create({
    data: {
      name: "Frank",
      thumbnail: "/images/frank_pic.png",
      tribeId: navajo.id,
    },
  });
  const mike = await prisma.person.create({
    data: {
      name: "Mike",
      thumbnail: "/images/person-icon.png",
      tribeId: lakota.id,
    },
  });
  const christina = await prisma.person.create({
    data: {
      name: "Christina",
      thumbnail: "/images/christina.png",
      tribeId: isleta.id,
    },
  });
  const jeffrey = await prisma.person.create({
    data: {
      name: "Jeffrey",
      thumbnail: "/images/jeffrey.png",
      tribeId: navajo.id,
    },
  });
  const james = await prisma.person.create({
    data: {
      name: "James",
      thumbnail: "/images/james.png",
      tribeId: lakota.id,
    },
  });
  const aubrey = await prisma.person.create({
    data: {
      name: "Aubrey",
      thumbnail: "/images/abra_pic.png",
      tribeId: isleta.id,
    },
  });
  const tanya = await prisma.person.create({
    data: {
      name: "Tanya",
      thumbnail: "/images/tania_pic.png",
      tribeId: navajo.id,
    },
  });
  const samantha = await prisma.person.create({
    data: {
      name: "Samantha",
      thumbnail: "/images/samantha.png",
      tribeId: lakota.id,
    },
  });
  const tamara = await prisma.person.create({
    data: {
      name: "Tamara",
      thumbnail: "/images/tamara_pic.png",
      tribeId: isleta.id,
    },
  });

  // -- Audio files --
  const audioData = [
    { name: "bvq1_steven", personId: steven.id, path: "/audio/bvq1_steven.mp3" },
    { name: "bvq2_steven", personId: steven.id, path: "/audio/bvq2_steven.mp3" },
    { name: "bvq3_steven", personId: steven.id, path: "/audio/bvq3_steven.mp3" },
    { name: "bvq1_frank", personId: frank.id, path: "/audio/bvq1_frank.mp3" },
    { name: "bvq2_frank", personId: frank.id, path: "/audio/bvq2_frank.mp3" },
    { name: "mike bvq1", personId: mike.id, path: "/audio/mike bvq1.mp3" },
    { name: "mike bvq2", personId: mike.id, path: "/audio/mike bvq2.mp3" },
    { name: "mike bvq3", personId: mike.id, path: "/audio/mike bvq3.mp3" },
    { name: "ivq1_christina", personId: christina.id, path: "/audio/ivq2_christina.mp3" },
    { name: "ivq2_christina", personId: christina.id, path: "/audio/ivq2_christina.mp3" },
    { name: "ivq3_christina", personId: christina.id, path: "/audio/ivq3_christina.mp3" },
    { name: "ivq1_jeffrey", personId: jeffrey.id, path: "/audio/ivq1_jeffrey.mp3" },
    { name: "ivq3_jeffrey", personId: jeffrey.id, path: "/audio/ivq3_jeffrey.mp3" },
    { name: "james ivq1", personId: james.id, path: "/audio/james ivq1.mp3" },
    { name: "james ivq2", personId: james.id, path: "/audio/james ivq2.mp3" },
    { name: "james ivq3", personId: james.id, path: "/audio/james ivq3.mp3" },
    { name: "avq1_aubrey", personId: aubrey.id, path: "/audio/avq1_aubrey.mp3" },
    { name: "avq2_aubrey", personId: aubrey.id, path: "/audio/avq2_aubrey.mp3" },
    { name: "avq3_aubrey", personId: aubrey.id, path: "/audio/avq3_aubrey.mp3" },
    { name: "avq1_tanya", personId: tanya.id, path: "/audio/avq1_tanya.mp3" },
    { name: "avq2_tanya", personId: tanya.id, path: "/audio/avq2_tanya.mp3" },
    { name: "avq3_tanya", personId: tanya.id, path: "/audio/avq3_tanya.mp3" },
    { name: "samantha avq1", personId: samantha.id, path: "/audio/samantha avq1.mp3" },
    { name: "samantha avq2", personId: samantha.id, path: "/audio/samantha avq2.mp3" },
    { name: "tamara avq1", personId: tamara.id, path: "/audio/tamara avq1.mp3" },
    { name: "tamara avq2", personId: tamara.id, path: "/audio/tamara avq2.mp3" },
    { name: "tamara avq3", personId: tamara.id, path: "/audio/tamara avq3.mp3" },
  ];

  const audios: Record<string, { id: number }> = {};
  for (const a of audioData) {
    const created = await prisma.audio.create({ data: a });
    audios[a.name] = created;
  }

  // -- Interview & Questions (minimal structure) --
  const interview = await prisma.interview.create({
    data: {
      name: "Language Preservation Stories",
      personId: steven.id,
      dateOfInterview: new Date("2014-11-22"),
    },
  });

  const q1 = await prisma.question.create({
    data: {
      name: "What does your language mean to you?",
      questionOrder: 1,
      interviewId: interview.id,
    },
  });

  const q2 = await prisma.question.create({
    data: {
      name: "How has your language journey shaped your identity?",
      questionOrder: 2,
      interviewId: interview.id,
    },
  });

  const q3 = await prisma.question.create({
    data: {
      name: "What message do you have for future generations about language preservation?",
      questionOrder: 3,
      interviewId: interview.id,
    },
  });

  // -- Beginning Answers (group_id = 1) --
  const ba1 = await prisma.answer.create({
    data: {
      answer:
        "My language is the foundation of who I am. Every word carries the stories of my ancestors and connects me to my homeland.",
      questionId: q1.id,
      personId: steven.id,
      groupId: beginning.id,
    },
  });
  await prisma.answerAudio.create({
    data: { answerId: ba1.id, audioId: audios["bvq1_steven"].id },
  });

  const ba2 = await prisma.answer.create({
    data: {
      answer:
        "Growing up, I heard the elders speak and it sounded like music. Now I realize each phrase holds a teaching that cannot be translated.",
      questionId: q1.id,
      personId: frank.id,
      groupId: beginning.id,
    },
  });
  await prisma.answerAudio.create({
    data: { answerId: ba2.id, audioId: audios["bvq1_frank"].id },
  });

  const ba3 = await prisma.answer.create({
    data: {
      answer:
        "Language is our first medicine. When we speak our language, we heal connections that colonization tried to sever.",
      questionId: q1.id,
      personId: mike.id,
      groupId: beginning.id,
    },
  });
  await prisma.answerAudio.create({
    data: { answerId: ba3.id, audioId: audios["mike bvq1"].id },
  });

  // -- Intermediate Answers (group_id = 2) --
  const ia1 = await prisma.answer.create({
    data: {
      answer:
        "Learning my language as an adult was humbling. Each new word I learn opens a door to understanding my culture more deeply.",
      questionId: q2.id,
      personId: christina.id,
      groupId: intermediate.id,
    },
  });
  await prisma.answerAudio.create({
    data: { answerId: ia1.id, audioId: audios["ivq1_christina"].id },
  });

  const ia2 = await prisma.answer.create({
    data: {
      answer:
        "My journey with language has taught me patience. Some concepts only make sense when spoken in our tongue — they lose their essence in English.",
      questionId: q2.id,
      personId: jeffrey.id,
      groupId: intermediate.id,
    },
  });
  await prisma.answerAudio.create({
    data: { answerId: ia2.id, audioId: audios["ivq1_jeffrey"].id },
  });

  const ia3 = await prisma.answer.create({
    data: {
      answer:
        "When I speak my language, I feel my grandmother's presence. It is the thread that weaves through generations of our family.",
      questionId: q2.id,
      personId: james.id,
      groupId: intermediate.id,
    },
  });
  await prisma.answerAudio.create({
    data: { answerId: ia3.id, audioId: audios["james ivq1"].id },
  });

  // -- Advanced Answers (group_id = 3) --
  const aa1 = await prisma.answer.create({
    data: {
      answer:
        "To the young ones: your language is not old-fashioned. It is a gift that holds the wisdom of thousands of years. Speak it proudly.",
      questionId: q3.id,
      personId: aubrey.id,
      groupId: advanced.id,
    },
  });
  await prisma.answerAudio.create({
    data: { answerId: aa1.id, audioId: audios["avq1_aubrey"].id },
  });

  const aa2 = await prisma.answer.create({
    data: {
      answer:
        "Every language that disappears takes with it an entire way of seeing the world. We must be the bridge between our elders and our children.",
      questionId: q3.id,
      personId: tanya.id,
      groupId: advanced.id,
    },
  });
  await prisma.answerAudio.create({
    data: { answerId: aa2.id, audioId: audios["avq1_tanya"].id },
  });

  const aa3 = await prisma.answer.create({
    data: {
      answer:
        "Technology can be our ally. Platforms like this help us share our languages with the world while keeping them rooted in our communities.",
      questionId: q3.id,
      personId: samantha.id,
      groupId: advanced.id,
    },
  });
  await prisma.answerAudio.create({
    data: { answerId: aa3.id, audioId: audios["samantha avq1"].id },
  });

  // -- Admin user --
  const hashedPassword = await bcrypt.hash("admin123", 10);
  await prisma.user.create({
    data: {
      email: "admin@coyoteandeagle.com",
      hashedPassword,
      role: Role.ADMIN,
    },
  });

  console.log("Seed completed successfully!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
