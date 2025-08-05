function Footer() {
  return (
    <div className="flex w-auto justify-center text-sm max-xxs:text-xs gap-2 p-2 bg-slate-950 text-slate-700">
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
