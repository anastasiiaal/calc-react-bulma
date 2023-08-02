import { useState } from "react";
import calculate from "./calculate";
import { 
  checkValidAge, 
  checkValidHeight, 
  checkValidWeight, 
  checkValidSex,
  checkValidActivity,
  checkValidGoal 
} from "./valid";

import Result from "./Result"

function App() {

  // this state maintains all user data provided/selected
  const [form, setForm] = useState({
    age: "",
    sex: "",
    weight: "",
    height: "",
    activity: "",
    goal: ""
  })

  // state maintaining the fact that age, height, weight are valid
  // to show/hide help messages
  const [validity, setValidity] = useState({
    nonValidAge: false,
    nonValidHeight: false,
    nonValidWeight: false
  })

  // state of displayed/hidden result panel
  const [showResult, setShowResult] = useState(false)
  // result of calculations
  const [result, setResult] = useState({
    kcal: "",
    protein: "",
    fats: "",
    carbs: ""
  })

  // handling of input changes
  function handleChange(event) {
    const { name, value } = event.target
    
    setForm(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }
  
  function calculateMacros(event) {
    event.preventDefault()

    // checking if inputs filled in correctly
    if (
      checkValidAge(form.age) &&
      checkValidHeight(form.height) && 
      checkValidWeight(form.weight) && 
      checkValidSex(form.sex) &&
      checkValidActivity(form.activity) &&
      checkValidGoal(form.goal)
    ) {
      // if yes, set the result of macros calculations to show later
      setResult({
        kcal: calculate(form).total,
        protein: calculate(form).protein,
        fats: calculate(form).fats,
        carbs: calculate(form).carbs
      })
      // make sure all help messages are hidden
      setValidity({
        nonValidAge: false,
        nonValidHeight: false,
        nonValidWeight: false
      })
      // show the result panel
      setShowResult(true)
    } else {
      // here's what happens when inputs not validated:

      // macros results will remain/get hidden
      setShowResult(false)

      // if age is incorrect => show helping message, otherwise hide
      if (checkValidAge(form.age) === false) {
        setValidity(prevValidity => {
          return {
            ...prevValidity,
            nonValidAge: true
          }
        })
      } else {
        setValidity(prevValidity => {
          return {
            ...prevValidity,
            nonValidAge: false
          }
        })
      }

      // if weight is incorrect => show helping message, otherwise hide
      if (checkValidWeight(form.weight) === false) {
        setValidity(prevValidity => {
          return {
            ...prevValidity,
            nonValidWeight: true
          }
        })
      } else {
        setValidity(prevValidity => {
          return {
            ...prevValidity,
            nonValidWeight: false
          }
        })
      }

      // if height is incorrect => show helping message, otherwise hide
      if (checkValidHeight(form.height) === false) {
        setValidity(prevValidity => {
          return {
            ...prevValidity,
            nonValidHeight: true
          }
        })
      } else {
        setValidity(prevValidity => {
          return {
            ...prevValidity,
            nonValidHeight: false
          }
        })
      }
    }
  }


  return (
    <section className="hero is-fullheight">
      <div className="container center">

        <form className="notification card my-2">

          <h1 className="title is-4 mb-5 has-text-grey-darker">Please fill in your data:</h1>

          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label" htmlFor="age">Age</label>
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
                {validity.nonValidAge && <p className="help is-danger">Should be your real age</p>}
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
                <label className="label" htmlFor="weight">Weight</label>
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
                {validity.nonValidWeight && <p className="help is-danger">Should be your real weight</p>}
              </div>
            </div>

            <div className="column">
              <div className="field">
                <label className="label" htmlFor="height">Height</label>
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
                {validity.nonValidHeight && <p className="help is-danger">Should be your real height</p>}
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
                        id="1.2"
                        value="1.2"
                        onChange={handleChange}
                        checked={form.activity === "1.2"}
                      />
                      Sedentary: little or no excercise
                    </label>
                    <label className="radio">
                      <input
                        type="radio"
                        name="activity"
                        id="1.375"
                        value="1.375"
                        onChange={handleChange}
                        checked={form.activity === "1.375"}
                      />
                      Light: exercise 1-3 times/week
                    </label>
                    <label className="radio">
                      <input
                        type="radio"
                        name="activity"
                        id="1.55"
                        value="1.55"
                        onChange={handleChange}
                        checked={form.activity === "1.55"}
                      />
                      Moderate: exercise 3-5 times/week
                    </label>
                    <label className="radio">
                      <input
                        type="radio"
                        name="activity"
                        id="1.725"
                        value="1.725"
                        onChange={handleChange}
                        checked={form.activity === "1.725"}
                      />
                      Intense: exercise 6-7 times/week
                    </label>
                    <label className="radio">
                      <input
                        type="radio"
                        name="activity"
                        id="1.9"
                        value="1.9"
                        onChange={handleChange}
                        checked={form.activity === "1.9"}
                      />
                      Extreme: hard trainings 7+ times/week
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
              <button onClick={calculateMacros} className="button is-link mb-2">
                Calculate macros
              </button>
            </div>
          </div>

          {showResult && <Result result={result} />}

        </form>

      </div>
    </section>
  )
}

export default App