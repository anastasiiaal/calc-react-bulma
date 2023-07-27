import Result from "./Result"

function App() {
  return (
    <section className="hero is-fullheight">
      <div className="container center">

        <form className="notification card my-2">

          <h1 className="title is-4 mb-5 has-text-grey-darker">Please fill in your data:</h1>

          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label" for="age">Age</label>
                <div className="control has-icons-left">
                  <input id="age" className="input" type="number" placeholder="Your age" />
                  <span className="icon is-small is-left">
                    <i className="fa-solid fa-cake-candles"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <div className="control">
                  <label className="label">Biological sex</label>
                  <label className="radio">
                    <input type="radio" name="sex" />
                    Male
                  </label>
                  <label className="radio">
                    <input type="radio" name="sex" />
                    Female
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label" for="weight">Weight</label>
                <div className="control has-icons-left">
                  <input id="weight" className="input" type="number" placeholder="Your weight in kg" />
                  <span className="icon is-small is-left">
                    <i className="fa-solid fa-weight-scale"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="field">
                <label className="label" for="height">Height</label>
                <div className="control has-icons-left">
                  <input id="height" className="input" type="number" placeholder="Your height in cm" />
                  <span className="icon is-small is-left">
                    <i className="fa-solid fa-up-down"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="column">
              <div className="field">
                <div className="control">
                  <label className="label">Weekly activity</label>
                  <div className="vertical">
                    <label className="radio">
                      <input type="radio" name="activity" />
                      Sedentary: little or no excercise
                    </label>
                    <label className="radio">
                      <input type="radio" name="activity" />
                      Light: exercise 1-3 times/week
                    </label>
                    <label className="radio">
                      <input type="radio" name="activity" />
                      Moderate: exercise 4-6 times/week
                    </label>
                    <label className="radio">
                      <input type="radio" name="activity" />
                      Intense: exercise 7+ times/week
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="column">
              <div className="field">
                <div className="control">
                  <label className="label">Your goal is to..</label>
                  <div className="vertical">
                    <label className="radio">
                      <input type="radio" name="goal" />
                      Lose weight
                    </label>
                    <label className="radio">
                      <input type="radio" name="goal" />
                      Maintain weight
                    </label>
                    <label className="radio">
                      <input type="radio" name="goal" />
                      Gain weight
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button className="button is-link mb-2">Calculate macros</button>
            </div>
          </div>

          <Result />

        </form>
        

      </div>
    </section>
  )
}

export default App