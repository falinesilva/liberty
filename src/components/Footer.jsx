function Footer() {
  return (
    <div className="bottom-0 left-0 w-full flex justify-center items-center m-4 p-4 gap-2 text-sm text-white opacity-70">
      <span>Built by Faline Silva</span>
      <span>|</span>
      <a
        href="https://github.com/falinesilva"
        className="cursor-pointer hover:underline"
        onMouseEnter={(e) => (e.target.style.color = "#A3CC01")}
        onMouseLeave={(e) => (e.target.style.color = "")}
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
