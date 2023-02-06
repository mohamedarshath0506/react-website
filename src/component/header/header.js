import "./style.css";
function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-left v-center">
          <h2>A</h2>
          <p>All template</p>
          <h2>B</h2>
          <h2>C</h2>
          <h2>D</h2>
        </div>
        <div className="header-right v-center">
          <h2>A</h2>
          <p>No credit card required</p>
          <button>START BUILDING</button>
        </div>
      </div>
    </header>
  );
}
export default Header;
