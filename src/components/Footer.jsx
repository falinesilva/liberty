function Footer() {
  return (
    <div className="bottom-0 left-0 w-full flex justify-center items-center m-4 p-4 gap-2 text-sm text-slate-50 opacity-70">
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
      <span>MIT License</span>
      <span>|</span>
      <span>Open source</span>
    </div>
  );
}
export default Footer;
