function App() {
  return (
    <section className="hero is-fullheight">
      <div className="container center">

        <form className="notification card">

          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Age</label>
                <div className="control">
                  <input className="input" type="number" placeholder="Your age" />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <div className="control">
                  <label className="label">Sex</label>
                  <label className="radio">
                    <input type="radio" name="question" />
                    Male
                  </label>
                  <label className="radio">
                    <input type="radio" name="question" />
                    Female
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Weight</label>
                <div className="control has-icons-left">
                  <input className="input" type="number" placeholder="Your weight in kg" />
                  <span className="icon is-small is-left">
                    <i className="fa-solid fa-weight-scale"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="field">
                <label className="label">Height</label>
                <div className="control has-icons-left">
                  <input className="input" type="number" placeholder="Your height in cm" />
                  <span className="icon is-small is-left">
                    <i className="fa-solid fa-up-down"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </form>

      </div>
    </section>
  )
}

export default App