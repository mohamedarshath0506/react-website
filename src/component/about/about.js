import "./style.css";
function About() {
  return (
    <section className="about-as">
      <div className="list">
        <ol className="list-item h-center">
          <li className="word">Home</li>
          <li>About</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ol>
      </div>
      <div className="content">
        <p>THE SUCCESS COACH</p>
        <h3>Oving Willson</h3>
        <h1>A</h1>
        <p className="content-para">
          Are you ready to make the biggest change in your life?
        </p>
        <button>About me</button>
      </div>
    </section>
  );
}
export default About;
