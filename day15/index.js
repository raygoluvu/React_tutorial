function App() {

    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */

    const [formData, setformData] = React.useState(
        {
            email: "",
            pwd: "",
            pwd_confirm: "",
            agree: true
        }
    )


    function handleChange(event) {
        // name 用來知道是哪個 state 被改變
        const { name, type, value, checked } = event.target
        setformData(
            preForm => {
                return {
                    ...preForm,
                    [name]: type === "checkbox" ? checked : value
                }
            }
        )
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(event)
        const target = event.target
        if (target.pwd.value && target.pwd.value === target.pwd_confirm.value) {
            console.log("Succesfully signed up")
            if (target.agree.checked) {
                console.log("Thanks for signing up for our newsletter!")
            }
        }
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                    value={formData.email}
                />
                <input
                    name="pwd"
                    type="password"
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                    value={formData.pwd}
                />
                <input
                    name="pwd_confirm"
                    type="password"
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                    value={formData.pwd_confirm}
                />

                <div className="form--marketing">
                    <input
                        name="agree"
                        id="okayToEmail"
                        type="checkbox"
                        checked={formData.agree}
                        onChange={handleChange}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    < App />
)