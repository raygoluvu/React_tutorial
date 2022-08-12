function Form() {
    const [formData, setformData] = React.useState(
        {
            firstName: "",
            lastName: ""
        }
    )

    console.log(formData)
    function handleChange(event) {
        setformData(preFormData => {
            return {
                ...preFormData,
                // ES6 - "Computed Properties"
                [event.target.name]: event.target.value
            }
        })

    }

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName">
            </input>
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="LastName">
            </input>
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