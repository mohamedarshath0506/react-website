import "./style.css";
function Contact() {
  return (
    <section>
      <div className="goals">
        <div className="left-content">
          <p>COACHING TECHNIQUE</p>
          <h1>
            I’ve honed my coaching technique over the decades. I aim to
            communicate openly and clearly, addressing critical points and
            providing continuous, constructive feedback.
          </h1>
        </div>
        <div>
          <div className="right-content">
            <h4>GOALS</h4>
            <p>
              The process starts with clearly defined objectives. How will you
              know how to change if you don’t know what needs changing. We’ll
              develop your goals in conversation together.
            </p>
          </div>
          <div className="right-content">
            <h4>GROWTH</h4>
            <p>
              The growth stage is the meat in the sandwich. It is here that you
              put new strategies to work, and begin addressing the issues that
              have been holding you back.
            </p>
          </div>
          <div className="right-content">
            <h4>REFLECTION</h4>
            <p>
              At this point in the process I ask you to reflect on the changes
              you’ve made, and whether you’re satisfied with there the results
              have led you. After this, we can address sustainability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
