export default function Result() {
    return (
        <>
            <div className="notification">
                <h2 className="title is-5 has-text-grey-darker">Here is your result:</h2>
                <div className="content">
                    <table className="has-text-centered">
                        <thead>
                            <tr>
                                <th>Macros</th>
                                <th>Grams/day</th>
                                <th>Ratio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Carbs</td>
                                <td>150 g</td>
                                <td>50%</td>
                            </tr>
                            <tr>
                                <td>Fats</td>
                                <td>50 g</td>
                                <td>30%</td>
                            </tr>
                            <tr>
                                <td>Protein</td>
                                <td>90 g</td>
                                <td>20%</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

            <div className="notification is-warning">
                <p>
                    The results above are the <span className="has-text-weight-bold">suggested</span> amounts of macronutrients and food energy (calories) you need to consume daily to {`maintain`} your weight.
                </p>
                <br />
                <p>
                    Those are only a <span className="has-text-weight-bold">guideline for more typical situations</span>. Please <span className="has-text-weight-bold is-underlined">consult with a doctor</span> for your macronutrient needs if you are an athlete, training for a specific purpose, or on special diet due to a disease, pregnancy, or other conditions.
                </p>
            </div>
        </>
    )
}