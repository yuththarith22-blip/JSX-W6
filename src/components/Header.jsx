import pnLogo from "../assets/pn-logo.png";

function Header({batchName}) {
  return (
    <header className="header" id="header">
    <img src={pnLogo} alt="PN Logo" />
    <h1>This student is in batch {batchName}</h1>
    
    </header>
  );
}
export default Header;