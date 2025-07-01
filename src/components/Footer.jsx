function Footer() {
  return (
    <div className="text-sm max-xxs:text-xs gap-2 mb-2 fixed bottom-0 left-0 w-full flex justify-center items-center opacity-80">
      <span>Built by Faline Silva</span>
      <span>|</span>
      <a
        href="https://github.com/falinesilva"
        target="blank"
        rel="noopener noreferrer"
        className="cursor-pointer hover:underline hover:text-blue-400"
      >
        Github
      </a>
      <span>|</span>

      <span>Open source</span>
    </div>
  );
}
export default Footer;
