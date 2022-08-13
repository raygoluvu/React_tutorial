function Form() {
    const [formData, setformData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            content: "",
            employment: "",
            isFriendly: true,
            facColor: ""
        }
    )

    // console.log(formData.favColor)

    function handleChange(event) {
        const { name, value, type, checked } = event.target

        // 若非 "checkbox" 則 checked 變數視為 "undefined"
        // console.log(type, checked)

        setformData(preFormData => {
            return {
                ...preFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                value={formData.firstName}
                name="firstName" />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                value={formData.lastName}
                name="lastName" />
            <input
                type="email"
                placeholder="email"
                onChange={handleChange}
                value={formData.email}
                name="email" />
            <textarea
                value={formData.content}
                name="content"
                onChange={handleChange}
                placeholder="Type some text."
            />
            <input
                type="checkbox"
                name="isFriendly"
                onChange={handleChange}
                id="isFriendly"
                checked={formData.isFriendly}
            />
            <label htmlFor="isFriendly">Are you friendly?</label>

            <fieldset>
                <legend>Current employ status</legend>

                <input
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployment"
                    onChange={handleChange}
                    checked={formData.employment === "unemployment"}
                />
                <label htmlFor="unemployment">Unemployment</label>
                <input
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    onChange={handleChange}
                    checked={formData.employment === "part-time"}
                />
                <label htmlFor="part-time">Part-time</label>
                <input
                    type="radio"
                    id="full-time"
                    name="employment"
                    onChange={handleChange}
                    value="full-time"
                    checked={formData.employment === "full-time"}
                />
                <label htmlFor="full-time">Full-time</label>
            </fieldset>

            <select
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="">-- Select a Color --</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="violet">Violet</option>
            </select>
        </form>
    )
}


function App() {

    return (
        <div>
            < Form />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    < App />
)