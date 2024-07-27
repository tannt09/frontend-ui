import "./App.css";

function App() {
  return (
    <>
      <div className="profile-card">
        <div className="header"></div>
        <div className="avatar"></div>
        <h2>Johnny Rogers</h2>
        <h4>@jonnyrogers</h4>
        <p>
          Crafting brand and communication strategies, creating visual designs,
          leading art direction, and capturing portraits through photography.
        </p>
        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
        <div className="buttons">
          <button className="follow">Follow</button>
          <button className="message">Message</button>
        </div>
      </div>
    </>
  );
}

export default App;
