export function Footer() {
  return (
    <footer className="h-[150px] bg-black text-white px-5 pt-6">
      <h3 className="font-josefin text-xl italic">
        coyote &amp; eagle dot com
      </h3>
      <a
        href="https://twitter.com/intent/tweet?button_hashtag=CoyoteAndEagle&text=My%20language%20story%20is%20about"
        className="text-link-blue hover:text-link-blue-hover underline text-sm mt-2 inline-block"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet #CoyoteAndEagle
      </a>
    </footer>
  );
}
