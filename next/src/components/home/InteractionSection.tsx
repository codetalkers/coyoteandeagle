import Image from "next/image";

export function InteractionSection() {
  return (
    <section className="min-h-[800px] bg-black text-white relative">
      <div className="bg-gray-700/40 py-10 min-h-[800px]">
        <h1 className="text-center font-josefin text-4xl italic font-bold mb-6">
          Interaction
        </h1>

        <h3 className="text-center mb-8">
          <a
            href="https://twitter.com/intent/tweet?button_hashtag=CoyoteAndEagle&text=My%20language%20story%20is%20about"
            className="text-link-blue hover:text-link-blue-hover underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Share your experience
          </a>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
          <div className="text-center">
            <Image
              src="/images/tribeca_ndn.jpg"
              alt="Coyote and Eagle Team"
              width={500}
              height={400}
              className="mx-auto"
            />
          </div>
          <div className="text-left text-lg">
            <p className="font-bold text-xl mb-2">Coyote and Eagle</p>
            <p className="mb-4">www.coyoteandeagle.com</p>
            <p className="font-bold mb-2">Members</p>
            <p>Ras K&apos;dee</p>
            <p>Leo Vicenti</p>
            <p>Dwayne Joe</p>
            <p>Feather Metsch</p>
            <p className="mb-4">Paul Beccio</p>
            <p className="font-bold mb-2">Github</p>
            <a
              href="https://github.com/isletatech/coyoteandeagle"
              className="text-link-blue hover:text-link-blue-hover underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/isletatech/coyoteandeagle
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
