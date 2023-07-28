import { useState } from "react";

import Result from "./Result"

function App() {

  const [form, setForm] = useState({
    age: "",
    sex: "",
    weight: "",
    height: "",
    activity: "",
    goal: ""
  })

  const [showResult, setShowResult] = useState(false)

  function handleChange (event) {
    const {name, value} = event.target
    setForm(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })

    console.log(form);
  }

  function calculateMacros (event) {
    event.preventDefault()

    setShowResult(prevResult => !prevResult)
  }

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
                  <input 
                    id="age" 
                    className="input" 
                    type="number" 
                    placeholder="Your age" 
                    value={form.age}
                    name="age"
                    onChange={handleChange}
                  />
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
                    <input 
                      type="radio" 
                      name="sex" 
                      id="male"
                      value="male"
                      onChange={handleChange}
                      checked={form.sex === "male"}
                    />
                    Male
                  </label>
                  <label className="radio">
                    <input 
                      type="radio" 
                      name="sex" 
                      id="female"
                      value="female"
                      onChange={handleChange}
                      checked={form.sex === "female"}
                    />
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
                  <input 
                    id="weight" 
                    className="input" 
                    type="number" 
                    placeholder="Your weight in kg" 
                    value={form.weight}
                    name="weight"
                    onChange={handleChange}
                  />
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
                  <input 
                    id="height" 
                    className="input" 
                    type="number" 
                    placeholder="Your height in cm" 
                    value={form.height}
                    name="height"
                    onChange={handleChange}
                  />
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
                      <input 
                        type="radio" 
                        name="activity" 
                        id="a-1"
                        value="a-1"
                        onChange={handleChange}
                        checked={form.activity === "a-1"}
                      />
                      Sedentary: little or no excercise
                    </label>
                    <label className="radio">
                      <input 
                        type="radio" 
                        name="activity" 
                        id="a-2"
                        value="a-2"
                        onChange={handleChange}
                        checked={form.activity === "a-2"}
                      />
                      Light: exercise 1-3 times/week
                    </label>
                    <label className="radio">
                      <input 
                        type="radio" 
                        name="activity" 
                        id="a-3"
                        value="a-3"
                        onChange={handleChange}
                        checked={form.activity === "a-3"}
                      />
                      Moderate: exercise 4-6 times/week
                    </label>
                    <label className="radio">
                      <input 
                        type="radio" 
                        name="activity" 
                        id="a-4"
                        value="a-4"
                        onChange={handleChange}
                        checked={form.activity === "a-4"}
                      />
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
                      <input 
                        type="radio" 
                        name="goal" 
                        id="g-1"
                        value="g-1"
                        onChange={handleChange}
                        checked={form.goal === "g-1"}
                      />
                      Lose weight
                    </label>
                    <label className="radio">
                      <input 
                        type="radio" 
                        name="goal" 
                        id="g-2"
                        value="g-2"
                        onChange={handleChange}
                        checked={form.goal === "g-2"}
                      />
                      Maintain weight
                    </label>
                    <label className="radio">
                      <input 
                        type="radio" 
                        name="goal" 
                        id="g-3"
                        value="g-3"
                        onChange={handleChange}
                        checked={form.goal === "g-3"}
                      />
                      Gain weight
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button onClick={calculateMacros} className="button is-link mb-2">Calculate macros</button>
            </div>
          </div>

          {showResult && <Result />}

        </form>
        

      </div>
    </section>
  )
}

export default App