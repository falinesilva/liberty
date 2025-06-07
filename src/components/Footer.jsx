import AppConfig from "../constants/info";
console.log(AppConfig.footerText);
function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {AppConfig.footerText}</p>
    </footer>
  );
}

export default Footer;
