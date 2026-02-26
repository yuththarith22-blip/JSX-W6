import pnLogo from "../assets/pn-logo.png";

function Header({batchName}) {
  return (
    <header className="header" id="header">
    <img src={pnLogo} alt="PN Logo" />
    </header>
  );
}
export default Header;