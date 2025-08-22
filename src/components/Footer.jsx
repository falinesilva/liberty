function Footer() {
  return (
    <div className="flex w-auto fixed bottom-0 left-0 right-0 justify-center text-sm max-xxs:text-xs gap-2 p-4 text-slate-400">
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
      <span>|</span>
      <span>MIT License</span>
    </div>
  );
}
export default Footer;
